// Versionist configuration for the 2.1.6-N-p prerelease scheme.
// Every release keeps the 2.1.6 base and increments the counter, so a merged
// PR bumps 2.1.6-2-p -> 2.1.6-3-p instead of rolling to 2.1.7 / 2.1.8.
//
// Only versions matching the X.Y.Z-N-p pattern are ever considered.

const PRE_VERSION = /^#\s+v?(\d+\.\d+\.\d+)-(\d+)-p\s*$/;
const VERSION = /^(\d+\.\d+\.\d+)-(\d+)-p$/;

const greater = (a, b) => {
	const pa = a.match(VERSION);
	const pb = b.match(VERSION);
	for (let i = 1; i <= 4; i++) {
		const diff = parseInt(pa[i], 10) - parseInt(pb[i], 10);
		if (diff !== 0) {
			return diff > 0;
		}
	}
	return false;
};

module.exports = {
	getGitReferenceFromVersion: 'v-prefix',

	addEntryToChangelog: {
		preset: 'prepend',
		fromLine: 5,
	},

	template: 'default',

	includeCommitWhen: () => true,
	getIncrementLevelFromCommit: () => 'patch',

	getChangelogDocumentedVersions: (file, callback) => {
		const fs = require('fs');
		return fs.readFile(file, { encoding: 'utf8' }, (error, changelog) => {
			if (error) {
				if (error.code === 'ENOENT') {
					return callback(null, []);
				}
				return callback(error);
			}

			const versions = [];
			for (const line of changelog.split('\n')) {
				const match = line.match(PRE_VERSION);
				if (match) {
					versions.push(`${match[1]}-${match[2]}-p`);
				}
			}
			return callback(null, versions);
		});
	},

	getCurrentBaseVersion: (documentedVersions, history, callback) => {
		let base = '2.1.6-0-p';
		for (const version of documentedVersions) {
			if (VERSION.test(version) && greater(version, base)) {
				base = version;
			}
		}
		return callback(null, base);
	},

	incrementVersion: (baseVersion) => {
		const match = baseVersion.match(VERSION);
		if (!match) {
			throw new Error(`Unexpected base version: ${baseVersion}`);
		}
		return `${match[1]}-${parseInt(match[2], 10) + 1}-p`;
	},
};
