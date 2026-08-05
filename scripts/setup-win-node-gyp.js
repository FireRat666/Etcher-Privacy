'use strict';
const fs = require('fs');
const path = require('path');

const { execFileSync, execSync } = require('child_process');

const { findVisualStudio } = require('./vs-installations');

if (process.platform !== 'win32') {
	process.exit(0);
}

function exists(p) {
	try {
		return fs.existsSync(p);
	} catch (_) {
		return false;
	}
}

function semverLt(v1, v2) {
	const p1 = v1.split('.').map((n) => parseInt(n, 10) || 0);
	const p2 = v2.split('.').map((n) => parseInt(n, 10) || 0);
	for (let i = 0; i < 3; i++) {
		if (p1[i] < p2[i]) return true;
		if (p1[i] > p2[i]) return false;
	}
	return false;
}

const foundVs = findVisualStudio();

const rootPackageJson = JSON.parse(
	fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'),
);
const nodeGypVersionSpec =
	(rootPackageJson.overrides && rootPackageJson.overrides['@electron/node-gyp']) || '';
const nodeGypVersion = nodeGypVersionSpec.replace(/^npm:node-gyp@/, '') || '12.1.0';

// 1. Export GYP_MSVS_VERSION and VCINSTALLDIR to GITHUB_ENV if running in GitHub Actions
if (foundVs && process.env.GITHUB_ENV && exists(process.env.GITHUB_ENV)) {
	try {
		fs.appendFileSync(
			process.env.GITHUB_ENV,
			`GYP_MSVS_VERSION=${foundVs.year}\nVCINSTALLDIR=${foundVs.path}\n`,
			'utf8'
		);
	} catch (_) {}
}

// 1b. Expose the global node-gyp path so downstream steps (e.g. publish) can
// reuse it without re-deriving the installation logic.
let globalGypBin = null;
try {
	const gypBin = path.join(
		execSync('npm prefix -g', { encoding: 'utf8' }).trim(),
		'node_modules',
		'node-gyp',
		'bin',
		'node-gyp.js'
	);
	if (exists(gypBin)) {
		globalGypBin = gypBin;
	}
} catch (_) {}

if (
	globalGypBin &&
	process.env.GITHUB_ENV &&
	exists(process.env.GITHUB_ENV)
) {
	try {
		fs.appendFileSync(
			process.env.GITHUB_ENV,
			`npm_config_node_gyp=${globalGypBin}\n`,
			'utf8'
		);
	} catch (_) {}
}

// 2. Guard against stale cached node-gyp (< 12.1.0) on npm bundled node-gyp
try {
	const nodeDir = path.dirname(process.execPath);
	const npmNodeGypDir = path.join(
		nodeDir,
		'node_modules',
		'npm',
		'node_modules',
		'node-gyp'
	);
	const pkgPath = path.join(npmNodeGypDir, 'package.json');
	if (exists(pkgPath)) {
		const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
		if (semverLt(pkg.version, '12.1.0')) {
			console.log(`Upgrading stale bundled node-gyp (${pkg.version}) to >= ${nodeGypVersion}...`);
			execSync(`npm install -g node-gyp@${nodeGypVersion} --force`, { stdio: 'inherit' });
			const gypBin = path.join(
				execSync('npm prefix -g', { encoding: 'utf8' }).trim(),
				'node_modules',
				'node-gyp',
				'bin',
				'node-gyp.js'
			);
			if (exists(gypBin)) {
				console.log(`Directing npm to global node-gyp at ${gypBin}...`);
				execFileSync('npm.cmd', ['config', 'set', 'node-gyp', gypBin], {
					shell: true,
					stdio: 'inherit',
				});
			}
		}
	}

	const npmNodeGypUtil = path.join(npmNodeGypDir, 'lib', 'util.js');
	if (exists(npmNodeGypUtil)) {
		let content = fs.readFileSync(npmNodeGypUtil, 'utf8');
		if (!content.includes('options.maxBuffer = 1024 * 1024 * 50')) {
			content = content.replace(
				'const child = cp.execFile(...args, (...a) => resolve(a))',
				'const options = (typeof args[args.length - 1] === "object" && args[args.length - 1] !== null && !Array.isArray(args[args.length - 1])) ? args.pop() : {};\n  options.maxBuffer = 1024 * 1024 * 50;\n  const child = cp.execFile(...args, options, (...a) => resolve(a))'
			);
			fs.writeFileSync(npmNodeGypUtil, content, 'utf8');
		}
	}
} catch (err) {
	console.error('setup-win-node-gyp.js warning:', err && err.message);
}
