'use strict';
const fs = require('fs');
const path = require('path');

const { findVisualStudio } = require('./vs-installations');

const repoRoot = path.resolve(__dirname, '..');
const binDir = path.join(repoRoot, 'node_modules', '.bin');

function exists(p) {
	try {
		return fs.existsSync(p);
	} catch (e) {
		return false;
	}
}

function writeFile(filePath, content, mode) {
	try {
		fs.rmSync(filePath, { force: true });
	} catch (_) {}
	fs.writeFileSync(filePath, content, { encoding: 'utf8' });
	if (mode) {
		try {
			fs.chmodSync(filePath, mode);
		} catch (_) {}
	}
}

function makeRelative(from, to) {
	return path.relative(from, to).replace(/\\/g, '/');
}

function createShims(targetBinPath, foundVc, foundYear) {
	if (!exists(binDir)) return;

	const relTarget = makeRelative(binDir, targetBinPath);
	const unixWrapper = '#!/usr/bin/env node\nrequire("' + relTarget + '");\n';
	const vcEnvCmd = foundVc ? '@IF NOT DEFINED VCINSTALLDIR SET "VCINSTALLDIR=' + foundVc + '"\n' : '';
	const vcEnvPs1 = foundVc ? "if (-not $env:VCINSTALLDIR) { $env:VCINSTALLDIR = '" + foundVc.replace(/'/g, "''") + "' }\n" : '';
	const gypMsvsCmd = foundYear ? '@IF NOT DEFINED GYP_MSVS_VERSION SET "GYP_MSVS_VERSION=' + foundYear + '"\n' : '';
	const gypMsvsPs1 = foundYear ? "if (-not $env:GYP_MSVS_VERSION) { $env:GYP_MSVS_VERSION = '" + foundYear.replace(/'/g, "''") + "' }\n" : '';

	const cmdWrapper =
		vcEnvCmd +
		gypMsvsCmd +
		'@IF EXIST "%~dp0\\node.exe" (\n' +
		'  "%~dp0\\node.exe" "%~dp0\\' +
		relTarget +
		'" %*\n' +
		') ELSE (\n' +
		'  node "%~dp0\\' +
		relTarget +
		'" %*\n' +
		')\n';
	const ps1Wrapper =
		vcEnvPs1 +
		gypMsvsPs1 +
		'$node = Join-Path $PSScriptRoot "node.exe"\n' +
		'if (-not (Test-Path $node)) { $node = "node" }\n' +
		'& $node (Join-Path $PSScriptRoot "' +
		relTarget +
		'") $args\n' +
		'exit $LASTEXITCODE\n';

	// Write unix shim (no extension)
	writeFile(path.join(binDir, 'node-gyp'), unixWrapper, 0o755);

	// Write Windows cmd shim
	writeFile(path.join(binDir, 'node-gyp.cmd'), cmdWrapper);

	// Write PowerShell shim
	writeFile(path.join(binDir, 'node-gyp.ps1'), ps1Wrapper);
}

function patchNodeGypUtil() {
	const utilPaths = [
		path.join(repoRoot, 'node_modules', 'node-gyp', 'lib', 'util.js'),
		path.join(repoRoot, 'node_modules', '@electron', 'node-gyp', 'lib', 'util.js'),
	];
	for (const uPath of utilPaths) {
		if (!exists(uPath)) continue;
		try {
			let content = fs.readFileSync(uPath, 'utf8');
			if (!content.includes('options.maxBuffer = 1024 * 1024 * 50')) {
				const patched = content.replace(
					'const child = cp.execFile(...args, (...a) => resolve(a))',
					'const options = (typeof args[args.length - 1] === "object" && args[args.length - 1] !== null && !Array.isArray(args[args.length - 1])) ? args.pop() : {};\n  options.maxBuffer = 1024 * 1024 * 50;\n  const child = cp.execFile(...args, options, (...a) => resolve(a))'
				);
				if (patched === content) {
					console.warn(
						'fix-node-gyp-bin.js: expected cp.execFile pattern not found in',
						uPath,
					);
					continue;
				}
				fs.writeFileSync(uPath, patched, 'utf8');
			}
		} catch (err) {
			console.warn('fix-node-gyp-bin.js: failed to patch', uPath, err && err.message);
		}
	}
}

function main() {
	let foundVc = process.env.VCINSTALLDIR || null;
	let foundYear = process.env.GYP_MSVS_VERSION || null;

	if (process.platform === 'win32') {
		const foundVs = findVisualStudio();
		if (foundVs) {
			if (!foundVc) foundVc = foundVs.path;
			if (!foundYear) foundYear = foundVs.year;
		}
		if (foundVc && !foundYear) {
			foundYear = (foundVc.includes('\\18\\') || foundVc.includes('\\2026\\')) ? '2026' : '2022';
		}
		if (foundVc && !process.env.VCINSTALLDIR) {
			process.env.VCINSTALLDIR = foundVc;
		}
		if (foundYear && !process.env.GYP_MSVS_VERSION) {
			process.env.GYP_MSVS_VERSION = foundYear;
		}
	}

	patchNodeGypUtil();

	// Prefer the top-level node-gyp package if present
	const candidates = [
		path.join(repoRoot, 'node_modules', 'node-gyp', 'bin', 'node-gyp.js'),
		path.join(
			repoRoot,
			'node_modules',
			'@electron',
			'node-gyp',
			'bin',
			'node-gyp.js',
		),
	];
	const found = candidates.find(exists);
	if (!found) {
		// Nothing to fix
		return;
	}
	createShims(found, foundVc, foundYear);
}

try {
	main();
} catch (err) {
	// Don't fail install; only try to fix.
	// Log to stdout so CI shows it.
	console.warn(
		'fix-node-gyp-bin.js: failed to create shims:',
		err && err.message,
	);
}
