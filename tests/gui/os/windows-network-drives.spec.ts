/*
 * Copyright 2016 balena.io
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

import { expect } from 'chai';
import { promises as fs } from 'fs';

import * as wnd from '../../../lib/gui/app/os/windows-network-drives';

function mockGetWmicOutput() {
	return fs.readFile('tests/data/wmic-output.txt', {
		encoding: 'ucs2',
	});
}

describe('Network drives on Windows', () => {
	let originalPlatform: PropertyDescriptor | undefined;

	before(async () => {
		originalPlatform = Object.getOwnPropertyDescriptor(process, 'platform');
		Object.defineProperty(process, 'platform', {
			value: 'win32',
			configurable: true,
			writable: true,
		});
	});

	it('should parse network drive mapping on Windows', async () => {
		expect(
			await wnd.replaceWindowsNetworkDriveLetter(
				'Z:\\some-folder\\some-file',
				mockGetWmicOutput,
			),
		).to.equal('\\\\192.168.1.1\\Publicé\\some-folder\\some-file');
	});

	after(() => {
		if (originalPlatform) {
			Object.defineProperty(process, 'platform', originalPlatform);
		}
	});
});
