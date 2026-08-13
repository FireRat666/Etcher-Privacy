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
import { join } from 'path';

import { supportedLocales } from '../../gui/app/i18n';

const SUCCESSFUL_AUTH_MARKER = 'AUTHENTICATION SUCCEEDED';

function getAskPassScriptPath(lang: string): string {
	if (process.env.NODE_ENV === 'development') {
		// Force webpack's hand to bundle the script.
		return require.resolve(`./sudo-askpass.osascript-${lang}.js`);
	}
	// Otherwise resolve the script relative to resources path.
	return join(process.resourcesPath, `sudo-askpass.osascript-${lang}.js`);
}

export async function sudo(
	command: string[],
	env: any,
): Promise<{ cancelled: boolean; stdout?: string; stderr?: string }> {
	let lang = Intl.DateTimeFormat().resolvedOptions().locale;
	lang = lang.substr(0, 2);
	if (supportedLocales.indexOf(lang) === -1) {
		lang = 'en';
	}

	// Build the shell command string
	const shellCmd = `echo ${SUCCESSFUL_AUTH_MARKER} && ${command[0]} ${command
		.slice(1)
		.map((a) => a.replace(/\\/g, '\\\\').replace(/"/g, '\\"'))
		.join(' ')}`;

	const elevateProcess = spawn(
		'sudo',
		['-E', '--askpass', 'sh', '-c', shellCmd],
		{
			env: {
				...env,
				PATH: env.PATH,
				SUDO_ASKPASS: getAskPassScriptPath(lang),
			},
		},
	);

	return new Promise((resolve, reject) => {
		let isSettled = false;

		const timeoutId = setTimeout(() => {
			if (!isSettled) {
				isSettled = true;
				reject(new Error('Elevation timeout'));
			}
		}, 30000);

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
	});
}
