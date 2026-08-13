/*
 * Copyright 2025 balena.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { spawn } from 'child_process';
import { access, constants } from 'fs/promises';

const SUCCESSFUL_AUTH_MARKER = 'AUTHENTICATION SUCCEEDED';

/** Check for kdesudo or pkexec */
function checkLinuxBinary() {
	// eslint-disable-next-line no-async-promise-executor
	return new Promise(async (resolve, reject) => {
		// We used to prefer gksudo over pkexec since it enabled a better prompt.
		// However, gksudo cannot run multiple commands concurrently.

		const paths = ['/usr/bin/kdesudo', '/usr/bin/pkexec'];
		for (const path of paths) {
			try {
				// check if the file exist and is executable
				await access(path, constants.X_OK);
				resolve(path);
			} catch (error: any) {
				continue;
			}
		}
		reject('Unable to find pkexec or kdesudo.');
	});
}

function shellQuote(arg: string) {
	return `'${arg.replace(/'/g, `'\\''`)}'`;
}

export async function sudo(
	command: string[],
): Promise<{ cancelled: boolean; stdout?: string; stderr?: string }> {
	const linuxBinary: string = (await checkLinuxBinary()) as string;
	if (!linuxBinary) {
		throw new Error('Unable to find pkexec.');
	}

	const parameters = [];

	// Add pkexec specific parameters
	if (/pkexec/i.test(linuxBinary)) {
		parameters.push('--disable-internal-agent');
	}

	// Build the shell command string
	const shellCmd = `echo ${SUCCESSFUL_AUTH_MARKER} && ${command
		.map((a) => shellQuote(a))
		.join(' ')}`;

	parameters.push('/bin/bash');
	parameters.push('-c');
	parameters.push(shellCmd);

	const elevateProcess = spawn(linuxBinary, parameters);

	return new Promise((resolve, reject) => {
		let isSettled = false;
		let timeoutId: NodeJS.Timeout;

		const settle = (result: { cancelled: boolean }) => {
			if (!isSettled) {
				isSettled = true;
				clearTimeout(timeoutId);
				resolve(result);
			}
		};

		elevateProcess.stdout.on('data', (data) => {
			if (data.toString().includes(SUCCESSFUL_AUTH_MARKER)) {
				settle({ cancelled: false });
			}
		});

		elevateProcess.on('close', () => {
			if (!isSettled) {
				settle({ cancelled: true });
			}
		});

		elevateProcess.on('error', (err) => {
			if (!isSettled) {
				isSettled = true;
				clearTimeout(timeoutId);
				reject(err);
			}
		});

		// if the elevation didn't occur in 30 seconds we reject the promise
		timeoutId = setTimeout(() => {
			if (!isSettled) {
				isSettled = true;
				reject(new Error('Elevation timeout'));
			}
		}, 30000);
	});
}
