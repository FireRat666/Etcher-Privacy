/** This function will :
 * 	- start the ipc server (api)
 *  - spawn the child process (privileged or not)
 *  - wait for the child process to connect to the api
 *  - return a promise that will resolve with the emit function for the api
 *
 * //TODO:
 *  - this should be refactored to reverse the control flow:
 *    - the child process should be the server
 *    - this should be the client
 *  - replace the current node-ipc api with a websocket api
 *  - centralise the api for both the writer and the scanner instead of having two instances running
 */

import _debug from 'debug';
import WebSocket from 'ws'; // (no types for wrapper, this is expected)
import { spawn, exec, type ChildProcess } from 'child_process';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import * as packageJSON from '../../../../package.json';
import * as permissions from '../../../shared/permissions';
import * as errors from '../../../shared/errors';
import { findExecutableStagingDir } from './sidecar-staging';

const THREADS_PER_CPU = 16;
const connectionRetryDelay = 1000;
const connectionRetryAttempts = 10;
const sidecarDebug = _debug('etcher:sidecar');

async function writerArgv(): Promise<string[]> {
	const entryPoint = await window.etcher.getEtcherUtilPath();
	return [entryPoint];
}

async function spawnChild(
	withPrivileges: boolean,
	etcherServerId: string,
	etcherServerAddress: string,
	etcherServerPort: string,
): Promise<{ cancelled: boolean; spawned?: ChildProcess; tmpDir?: string }> {
	let argv = await writerArgv();
	const env: any = {
		ETCHER_SERVER_ADDRESS: etcherServerAddress,
		ETCHER_SERVER_ID: etcherServerId,
		ETCHER_SERVER_PORT: etcherServerPort,
		UV_THREADPOOL_SIZE: (os.cpus().length * THREADS_PER_CPU).toString(),
		// This environment variable prevents the AppImages
		// desktop integration script from presenting the
		// "installation" dialog
		SKIP: '1',
		...(process.platform === 'win32' ? {} : process.env),
	};

	if (withPrivileges) {
		console.log('...with privileges...');
		// AppImages run over FUSE, so the files inside the mount point
		// can only be accessed by the user that mounted the AppImage.
		// Root can't read the FUSE mount, so we copy the sidecar binary
		// to a temp location that root can access.
		let tmpDir: string | undefined;
		try {
			if (
				os.platform() === 'linux' &&
				process.env.APPIMAGE &&
				process.env.APPDIR
			) {
				tmpDir = fs.mkdtempSync(
					path.join(findExecutableStagingDir(), 'etcher-'),
				);
				const tmpBin = path.join(tmpDir, path.basename(argv[0]));
				const binBuffer = fs.readFileSync(argv[0]);
				fs.writeFileSync(tmpBin, binBuffer, { mode: 0o555 });
				const stat = fs.statSync(tmpBin);
				if (stat.size !== binBuffer.length) {
					throw new Error('Staged sidecar binary integrity check failed');
				}
				// Make staging directory non-writable to prevent TOCTOU tampering before elevation
				fs.chmodSync(tmpDir, 0o555);
				argv = [tmpBin];
			}
			const result = await permissions.elevateCommand(argv, {
				applicationName: packageJSON.displayName,
				env,
			});
			// Defer removing the staging directory to the caller, which cleans it
			// up once the sidecar connection attempt has settled. Deleting it here
			// would race the elevated shell opening the binary on fd 3.
			return { ...result, tmpDir };
		} catch (error) {
			// elevateCommand threw before the sidecar could take ownership of the
			// staged binary; clean up now since the caller won't see tmpDir.
			if (tmpDir) {
				try {
					fs.chmodSync(tmpDir, 0o700);
				} catch {
					// ignore
				}
				fs.rmSync(tmpDir, { recursive: true, force: true });
			}
			throw error;
		}
	} else {
		if (process.platform === 'win32') {
			// we need to ensure we reset the env as a previous elevation process might have kept them in a wrong state
			const envCommand = [];
			for (const key in env) {
				if (Object.prototype.hasOwnProperty.call(env, key)) {
					envCommand.push(`set ${key}=${env[key]}`);
				}
			}
			await exec(envCommand.join(' && '));
		}
		const spawned = await spawn(argv[0], argv.slice(1), {
			env,
		});
		spawned.stdout?.on('data', (data) => {
			sidecarDebug(`[sidecar stdout] ${data.toString().trim()}`);
		});
		spawned.stderr?.on('data', (data) => {
			sidecarDebug(`[sidecar stderr] ${data.toString().trim()}`);
		});
		return { cancelled: false, spawned };
	}
}

type ChildApi = {
	emit: (type: string, payload: any) => void;
	registerHandler: (event: string, handler: any) => void;
	failed: false;
};

async function connectToChildProcess(
	etcherServerAddress: string,
	etcherServerPort: string,
	etcherServerId: string,
): Promise<ChildApi | { failed: true }> {
	return new Promise((resolve, reject) => {
		// TODO: default to IPC connections https://github.com/websockets/ws/blob/master/doc/ws.md#ipc-connections
		// TODO: use the path as cheap authentication

		console.log(etcherServerId);

		const url = `ws://${etcherServerAddress}:${etcherServerPort}`;

		const ws = new WebSocket(url);

		let heartbeat: any;

		const startHeartbeat = (emit: any) => {
			console.log('Starting heartbeat...');
			heartbeat = setInterval(() => {
				emit('heartbeat', {});
			}, 1000);
		};

		const stopHeartbeat = () => {
			console.log('Stopping heartbeat...');
			clearInterval(heartbeat);
		};

		ws.on('error', (error: any) => {
			if (error.code === 'ECONNREFUSED') {
				resolve({
					failed: true,
				});
			} else {
				stopHeartbeat();
				reject({
					failed: true,
				});
			}
		});

		ws.on('open', () => {
			const emit = (type: string, payload: any) => {
				ws.send(JSON.stringify({ type, payload }));
			};

			emit('ready', {});

			// parse and route messages
			const messagesHandler: any = {
				log: (message: any) => {
					console.log(`Child Process Log: ${message}`);
				},

				error: (error: any) => {
					const errorObject = errors.fromJSON(error);
					console.error('Child Process Error:', errorObject);
					stopHeartbeat();
				},

				// once api is ready (means child process is connected) we pass the emit function to the caller
				ready: () => {
					console.log('Child Process Ready!');

					startHeartbeat(emit);

					resolve({
						failed: false,
						emit,
						registerHandler,
					});
				},
			};

			ws.on('message', (jsonData: any) => {
				const data = JSON.parse(jsonData);
				const message = messagesHandler[data.type];
				if (message) {
					message(data.payload);
				} else {
					throw new Error(`Unknown message type: ${data.type}`);
				}
			});

			// api to register more handlers with callbacks
			const registerHandler = (event: string, handler: any) => {
				messagesHandler[event] = handler;
			};
		});
	});
}

async function spawnChildAndConnect({
	withPrivileges,
}: {
	withPrivileges: boolean;
}): Promise<ChildApi> {
	const etcherServerAddress = process.env.ETCHER_SERVER_ADDRESS ?? '127.0.0.1'; // localhost
	const etcherServerPort =
		(process.env.ETCHER_SERVER_PORT ?? withPrivileges) ? '3435' : '3434';
	const etcherServerId =
		process.env.ETCHER_SERVER_ID ??
		`etcher-privacy-${Math.random().toString(36).substring(7)}`;

	console.log(
		`Spawning ${
			withPrivileges ? 'privileged' : 'unprivileged'
		} etcher-util sidecar on port ${etcherServerPort}`,
	);

	// The privileged sidecar binary is staged in tmpDir until the elevated shell
	// has exec'd it (the shell removes the staging files itself right after
	// opening the binary on fd 3). Deleting tmpDir before then would make the
	// privileged sidecar fail to start, so clean it up only once the connection
	// attempt has settled, either when the sidecar is running (files already
	// gone) or when the attempt failed and leftovers need removing.
	let tmpDir: string | undefined;
	try {
		// spawn the child process, which will act as the ws server
		// ETCHER_NO_SPAWN_UTIL can be set to launch a GUI only version of etcher, in that case you'll probably want to set other ENV to match your setup
		if (!process.env.ETCHER_NO_SPAWN_UTIL) {
			try {
				const result = await spawnChild(
					withPrivileges,
					etcherServerId,
					etcherServerAddress,
					etcherServerPort,
				);
				tmpDir = result.tmpDir;
				if (result.cancelled) {
					throw new Error('Spawning the child process was cancelled');
				}
			} catch (error) {
				console.error('Error starting flasher sidecar process', error);
				throw new Error('Error starting flasher sidecar process');
			}
		}

		// try to connect to the ws server, retrying if necessary, until the connection is established
		try {
			let retry = 0;
			while (retry < connectionRetryAttempts) {
				const result = await connectToChildProcess(
					etcherServerAddress,
					etcherServerPort,
					etcherServerId,
				);
				if (result.failed) {
					retry++;
					console.log(
						`Connection to sidecar flasher process attempt ${retry} / ${connectionRetryAttempts} failed; retrying in ${connectionRetryDelay}ms...`,
					);
					await new Promise((resolve) =>
						setTimeout(resolve, connectionRetryDelay),
					);
					continue;
				}
				return result;
			}
			// TODO: raised an error to the user if we reach this point
			throw new Error('Connection to sidecar flasher process timed out');
		} catch (error) {
			console.error(
				'Error connecting to sidecar flasher process process',
				error,
			);
			throw new Error('Connection to sidecar flasher process failed');
		}
	} finally {
		if (tmpDir) {
			try {
				fs.chmodSync(tmpDir, 0o700);
			} catch {
				// ignore
			}
			fs.rmSync(tmpDir, { recursive: true, force: true });
		}
	}
}

export { spawnChildAndConnect };
