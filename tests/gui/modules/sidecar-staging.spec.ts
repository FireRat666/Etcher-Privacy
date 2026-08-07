import { expect } from 'chai';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

import {
	findExecutableStagingDir,
	isExecutableDirectory,
} from '../../../lib/gui/app/modules/sidecar-staging';

const linuxIt = process.platform === 'linux' ? it : it.skip;

describe('Browser: sidecar staging', function () {
	describe('.isExecutableDirectory()', function () {
		linuxIt(
			'should report a real temporary directory as executable',
			function () {
				const staging = findExecutableStagingDir();
				const dir = fs.mkdtempSync(path.join(staging, 'etcher-test-'));
				try {
					expect(isExecutableDirectory(dir)).to.be.true;
				} finally {
					fs.rmSync(dir, { recursive: true, force: true });
				}
			},
		);

		it('should report a non-existent directory as not executable', function () {
			const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'etcher-no-such-dir-'));
			fs.rmSync(dir, { recursive: true, force: true });
			expect(isExecutableDirectory(dir)).to.be.false;
		});
	});

	describe('.findExecutableStagingDir()', function () {
		let originalXdgRuntimeDir: string | undefined;

		before(function () {
			originalXdgRuntimeDir = process.env.XDG_RUNTIME_DIR;
		});

		beforeEach(function () {
			delete process.env.XDG_RUNTIME_DIR;
		});

		after(function () {
			if (originalXdgRuntimeDir === undefined) {
				delete process.env.XDG_RUNTIME_DIR;
			} else {
				process.env.XDG_RUNTIME_DIR = originalXdgRuntimeDir;
			}
		});

		it('should use the temporary directory when it is executable', function () {
			expect(findExecutableStagingDir(() => true, '/tmp/executable')).to.equal(
				'/tmp/executable',
			);
		});

		it('should fall back to /dev/shm when the temporary filesystem is mounted noexec', function () {
			expect(
				findExecutableStagingDir(
					(candidate) => candidate === '/dev/shm',
					'/var/noexec-tmp',
				),
			).to.equal('/dev/shm');
		});

		it('should refuse to stage when no executable location is available', function () {
			expect(() =>
				findExecutableStagingDir(() => false, '/var/noexec-tmp'),
			).to.throw(/executable staging directory/);
		});

		linuxIt(
			'should pick a real executable location when the temporary filesystem is not executable',
			function () {
				const staging = findExecutableStagingDir(undefined, '/var/noexec-tmp');
				expect(staging).to.not.equal('/var/noexec-tmp');
				expect(isExecutableDirectory(staging)).to.be.true;
			},
		);
	});
});
