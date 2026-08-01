'use strict';
const fs = require('fs');
const path = require('path');

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

function createShims(targetBinPath) {
	if (!exists(binDir)) return;

	const relTarget = makeRelative(binDir, targetBinPath);
	const unixWrapper = '#!/usr/bin/env node\nrequire("' + relTarget + '");\n';
	const cmdWrapper =
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

function main() {
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
	createShims(found);
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
