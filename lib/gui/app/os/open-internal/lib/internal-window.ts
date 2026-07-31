/*
 * Copyright 2024 balena.io and FireRat666
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

import * as electron from 'electron';

const ERR_ABORTED = -3;

function errorPage(url: string, errorDescription: string, errorCode: number): string {
	const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Unable to open link</title>
<style>
	body {
		background: #1a1a1a;
		color: #eee;
		font-family: system-ui, sans-serif;
		margin: 0;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.box {
		max-width: 600px;
		text-align: center;
		padding: 32px;
	}
	h1 {
		font-size: 22px;
		font-weight: 600;
	}
	p {
		font-size: 14px;
		word-break: break-all;
		line-height: 1.5;
	}
	.error {
		color: #ff8b8b;
	}
</style>
</head>
<body>
	<div class="box">
		<h1>Unable to open link</h1>
		<p>${url}</p>
		<p class="error">${errorDescription} (${errorCode})</p>
		<p>Close this window to continue.</p>
	</div>
</body>
</html>`;
	return `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
}

/**
 * @summary Open a URL in a new BrowserWindow using the given
 * BrowserWindow constructor, so that it works from both the
 * main process and the renderer process.
 */
export function createInternalWindow(
	WindowCtor: typeof electron.BrowserWindow,
	url: string,
) {
	if (!url) {
		return;
	}

	console.info(`Opening internal window to ` + `'` + url + `'`);

	const newWin = new WindowCtor({
		width: 1024,
		height: 768,
		useContentSize: true,
		darkTheme: true,
		webPreferences: {
			nodeIntegration: false,
			nodeIntegrationInWorker: false,
			contextIsolation: true,
			sandbox: true,
			experimentalFeatures: true,
			devTools: true,
		},
	});

	let errorPageShown = false;
	const showErrorPage = (
		errorDescription: string,
		errorCode: number,
		validatedURL: string,
	) => {
		if (errorPageShown || newWin.isDestroyed()) {
			return;
		}
		errorPageShown = true;
		console.error(
			`Failed to load ` +
				`'` +
				validatedURL +
				`'` +
				` in internal window: ` +
				errorDescription +
				` (` +
				errorCode +
				`)`,
		);
		newWin.loadURL(errorPage(validatedURL, errorDescription, errorCode));
	};

	// Re-open popups (`target=_blank` / `window.open`) as new internal windows
	newWin.webContents.setWindowOpenHandler(({ url: popupURL }) => {
		if (popupURL) {
			createInternalWindow(WindowCtor, popupURL);
		}
		return { action: 'deny' };
	});

	newWin.webContents.on(
		'did-fail-load',
		(
			_event: electron.Event,
			errorCode: number,
			errorDescription: string,
			validatedURL: string,
			isMainFrame: boolean,
		) => {
			if (isMainFrame && errorCode !== ERR_ABORTED) {
				showErrorPage(errorDescription, errorCode, validatedURL);
			}
		},
	);

	newWin.on('close', () => {
		console.info('Closed an internal window');
	});

	newWin.loadURL(url).catch((error: Error) => {
		// The `did-fail-load` event takes care of rendering the error page
		console.error(`Failed to load internal window: ` + error.message);
	});
}
