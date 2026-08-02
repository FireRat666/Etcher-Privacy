'use strict';

const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '..', 'node_modules', 'lzma-native', 'src', 'filter-array.cpp');

if (!fs.existsSync(targetPath)) {
	process.exit(0);
}

let content = fs.readFileSync(targetPath, 'utf8');

// Check if already patched
if (content.includes('entry[std::string(id_)]')) {
	console.log('patch-lzma-native.js: lzma-native filter-array.cpp is already patched.');
	process.exit(0);
}

const targetStr = `    String id = Value(entry[id_]).ToString();
    Value opt_v = entry[options_];`;

const patchStr = `    String id = Value(entry[std::string(id_)]).ToString();
    Value opt_v = entry[std::string(options_)];`;

if (!content.includes(targetStr)) {
	console.warn('patch-lzma-native.js: warning - expected target string not found in filter-array.cpp');
	process.exit(0);
}

content = content.replace(targetStr, patchStr);
fs.writeFileSync(targetPath, content, 'utf8');
console.log('patch-lzma-native.js: successfully patched lzma-native filter-array.cpp for Napi::Object operator[] ambiguity');
