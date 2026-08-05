import { spawnSync } from 'child_process';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

/**
 * Verify that `dir` can host an executable file, i.e. it is not mounted
 * with the `noexec` flag, by exec'ing a probe script from inside it.
 */
export function isExecutableDirectory(dir: string): boolean {
	const probe = path.join(dir, `.etcher-exec-probe-${process.pid}`);
	try {
		fs.writeFileSync(probe, '#!/bin/sh\nexit 0\n', { mode: 0o755 });
		const result = spawnSync(probe, [], { timeout: 5000 });
		return result.error == null && result.status === 0;
	} catch {
		return false;
	} finally {
		try {
			fs.rmSync(probe, { force: true });
		} catch {
			// ignore
		}
	}
}

/**
 * Pick a staging directory for the privileged sidecar copy. The elevated
 * shell execs the copied binary, so the staging filesystem must not be
 * mounted `noexec`; fall back to trusted executable locations such as
 * /dev/shm when the primary temporary directory is not executable.
 */
export function findExecutableStagingDir(
	probe: (dir: string) => boolean = isExecutableDirectory,
	tmpDir: string = os.tmpdir(),
): string {
	const candidates = [
		tmpDir,
		'/dev/shm',
		...(process.env.XDG_RUNTIME_DIR ? [process.env.XDG_RUNTIME_DIR] : []),
	];
	const executable = candidates.find((candidate) => probe(candidate));
	if (!executable) {
		throw new Error(
			`Cannot find an executable staging directory for the sidecar binary (tried: ${candidates.join(', ')}). The temporary filesystem may be mounted noexec.`,
		);
	}
	return executable;
}
