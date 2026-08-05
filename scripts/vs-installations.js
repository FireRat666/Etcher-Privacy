'use strict';
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

// Hard-coded fallbacks used when vswhere.exe is unavailable.
const VS_INSTALLATIONS_FALLBACK = [
	{ path: 'C:\\Program Files\\Microsoft Visual Studio\\18\\Enterprise\\VC', year: '2026' },
	{ path: 'C:\\Program Files\\Microsoft Visual Studio\\2026\\Enterprise\\VC', year: '2026' },
	{ path: 'C:\\Program Files\\Microsoft Visual Studio\\2026\\Community\\VC', year: '2026' },
	{ path: 'C:\\Program Files\\Microsoft Visual Studio\\2026\\BuildTools\\VC', year: '2026' },
	{ path: 'C:\\Program Files\\Microsoft Visual Studio\\2022\\Enterprise\\VC', year: '2022' },
	{ path: 'C:\\Program Files\\Microsoft Visual Studio\\2022\\Community\\VC', year: '2022' },
	{ path: 'C:\\Program Files\\Microsoft Visual Studio\\2022\\BuildTools\\VC', year: '2022' },
];

function exists(p) {
	try {
		return fs.existsSync(p);
	} catch (_) {
		return false;
	}
}

function versionToYear(version) {
	const major = parseInt(String(version).split('.')[0], 10) || 0;
	if (major === 16) return '2019';
	if (major === 17) return '2022';
	if (major >= 18) return '2026';
	return null;
}

function vswhereExecutable() {
	const programFilesX86 =
		process.env['ProgramFiles(x86)'] || 'C:\\Program Files (x86)';
	return path.join(
		programFilesX86,
		'Microsoft Visual Studio',
		'Installer',
		'vswhere.exe',
	);
}

function detectViaVswhere() {
	const vswhere = vswhereExecutable();
	if (!exists(vswhere)) {
		return null;
	}

	let stdout;
	try {
		stdout = execFileSync(
			vswhere,
			[
				'-products',
				'*',
				'-requires',
				'Microsoft.VisualStudio.Component.VC.Tools.x86.x64',
				'-format',
				'json',
			],
			{ encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
		);
	} catch (_) {
		return null;
	}

	let installs;
	try {
		installs = JSON.parse(stdout.trim());
	} catch (_) {
		return null;
	}

	if (!Array.isArray(installs)) {
		return null;
	}

	for (const install of installs) {
		if (!install || typeof install.installationPath !== 'string') {
			continue;
		}
		const vcDir = path.join(install.installationPath, 'VC');
		if (!exists(vcDir)) {
			continue;
		}
		const yearMatch = install.installationPath.match(/\\(20\d{2})\\?/);
		const year =
			(yearMatch && yearMatch[1]) ||
			versionToYear(install.installationVersion);
		if (year) {
			return { path: vcDir, year: String(year) };
		}
	}
	return null;
}

/**
 * @summary Find an installed Visual Studio VC tools directory.
 *
 * @returns {null | { path: string, year: string }} the VC directory path and
 * the VS year (e.g. "2022", "2026"), or null when none is found.
 */
function findVisualStudio() {
	return (
		detectViaVswhere() ||
		VS_INSTALLATIONS_FALLBACK.find((item) => exists(item.path)) ||
		null
	);
}

module.exports = { findVisualStudio, VS_INSTALLATIONS_FALLBACK };
