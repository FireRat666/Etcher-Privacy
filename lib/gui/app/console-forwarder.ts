// Forward renderer console output to the main process, which writes it to
// the terminal when the app is launched from a command line.
import * as util from 'util';
import { ipcRenderer } from 'electron';

const LEVELS = ['log', 'info', 'warn', 'error'] as const;

for (const level of LEVELS) {
	const original = console[level].bind(console);
	console[level] = (...args: unknown[]) => {
		original(...args);
		try {
			ipcRenderer.send(
				'renderer-console',
				level,
				args
					.map((arg) =>
						typeof arg === 'string'
							? arg
							: util.inspect(arg, { depth: 4, colors: false }),
					)
					.join(' '),
			);
		} catch {
			// ignore forwarding errors
		}
	};
}
