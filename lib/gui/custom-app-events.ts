import * as electron from 'electron';

export type CustomAppEvents = {
	'edit-config-file': () => void;
	relaunch: () => void;
};

export function onCustomAppEvent<K extends keyof CustomAppEvents>(
	event: K,
	listener: CustomAppEvents[K],
): void {
	electron.app.on(event as any, listener);
}

export function emitCustomAppEvent<K extends keyof CustomAppEvents>(
	event: K,
	...args: Parameters<CustomAppEvents[K]>
): void {
	electron.app.emit(event as any, ...args);
}
