import type { ForgeConfig } from '@electron-forge/shared-types';
import { MakerSquirrel } from '@electron-forge/maker-squirrel';
import { MakerZIP } from '@electron-forge/maker-zip';
import { MakerDeb } from '@electron-forge/maker-deb';
import { MakerRpm } from '@electron-forge/maker-rpm';
import { MakerDMG } from '@electron-forge/maker-dmg';
import { MakerAppImage } from '@reforged/maker-appimage';
import { AutoUnpackNativesPlugin } from '@electron-forge/plugin-auto-unpack-natives';
import { WebpackPlugin } from '@electron-forge/plugin-webpack';
import { exec } from 'child_process';

import { mainConfig, rendererConfig } from './webpack.config.ts';
import * as sidecar from './forge.sidecar.ts';

import { hostDependencies, productDescription, version } from './package.json';

if (process.platform === 'win32' && !process.env.GYP_MSVS_VERSION) {
	process.env.GYP_MSVS_VERSION = '2026';
}

const osxSigningEnabled =
	process.env.NODE_ENV === 'production' && !!process.env.XCODE_APP_LOADER_EMAIL;
const winSigningEnabled =
	process.env.NODE_ENV === 'production' &&
	!!process.env.SM_CLIENT_CERT_FILE &&
	!!process.env.SM_CODE_SIGNING_CERT_SHA1_HASH;

const osxSigningConfig: any = {};
let winSigningConfig: any = {};

if (osxSigningEnabled) {
	osxSigningConfig.osxNotarize = {
		tool: 'notarytool',
		appleId: process.env.XCODE_APP_LOADER_EMAIL,
		appleIdPassword: process.env.XCODE_APP_LOADER_PASSWORD,
		teamId: process.env.XCODE_APP_LOADER_TEAM_ID,
	};
}

if (winSigningEnabled) {
	winSigningConfig = {
		signWithParams: `-sha1 ${process.env.SM_CODE_SIGNING_CERT_SHA1_HASH} -tr ${process.env.TIMESTAMP_SERVER} -td sha256 -fd sha256 -d etcher-privacy`,
	};
}

// Squirrel.Windows (Setup.exe) uses .NET's System.Version, which only accepts
// numeric segments, so a SemVer prerelease like 2.1.6-3-p is rejected.
// Map X.Y.Z-N-p -> X.Y.Z.N for the Windows installer, keeping the real
// version everywhere else (app metadata, zip, tags).
function squirrelVersion(v: string): string {
	const m = v.match(/^(\d+\.\d+\.\d+)-(\d+)-[A-Za-z0-9][A-Za-z0-9.-]*$/);
	return m ? `${m[1]}.${m[2]}` : v;
}

class SafeMakerSquirrel extends MakerSquirrel {
	async make(opts: any) {
		if (opts.targetArch === 'arm64') {
			return [];
		}
		return super.make(opts);
	}
}

const config: ForgeConfig = {
	packagerConfig: {
		asar: true,
		arch: process.platform === 'darwin' ? ['x64', 'arm64'] : undefined,
		icon: './assets/icon',
		executableName:
			process.platform === 'linux' ? 'etcher-privacy' : 'Etcher Privacy',
		appBundleId: 'io.firerat666.etcher-privacy',
		appCategoryType: 'public.app-category.developer-tools',
		appCopyright: 'Copyright 2016-2026 Balena Ltd. and FireRat666',
		darwinDarkModeSupport: true,
		protocols: [{ name: 'etcher', schemes: ['etcher'] }],
		extraResource: [
			'lib/shared/sudo/sudo-askpass.osascript-zh.js',
			'lib/shared/sudo/sudo-askpass.osascript-en.js',
			'lib/gui/assets',
		],
		osxSign: osxSigningEnabled
			? {
					optionsForFile: () => ({
						entitlements: './assets/entitlements.mac.plist',
						hardenedRuntime: true,
					}),
				}
			: false,
		...osxSigningConfig,
	},
	rebuildConfig: {
		onlyModules: [], // prevent rebuilding *any* native modules as they won't be used by electron but by the sidecar
	},
	makers: [
		new MakerZIP(),
		new SafeMakerSquirrel({
			setupIcon: 'assets/icon.ico',
			version: squirrelVersion(version),
			...winSigningConfig,
		}),
		new MakerDMG({
			background: './assets/dmg/background.tiff',
			icon: './assets/icon.icns',
			iconSize: 110,
			contents: ((opts: { appPath: string }) => {
				return [
					{ x: 140, y: 250, type: 'file', path: opts.appPath },
					{ x: 415, y: 250, type: 'link', path: '/Applications' },
				];
			}) as any, // type of MakerDMGConfig omits `appPath`
			additionalDMGOptions: {
				window: {
					size: {
						width: 540,
						height: 425,
					},
					position: {
						x: 400,
						y: 500,
					},
				},
			},
		}),
		new MakerAppImage({
			options: {
				icon: './icon.png',
				categories: ['Utility'],
			},
		}),
		new MakerRpm({
			options: {
				icon: './icon.png',
				categories: ['Utility'],
				productDescription,
				requires: ['util-linux'],
			},
		}),
		new MakerDeb({
			options: {
				icon: './icon.png',
				categories: ['Utility'],
				section: 'utils',
				priority: 'optional',
				depends: hostDependencies['debian'],
			},
		}),
	],
	plugins: [
		new AutoUnpackNativesPlugin({}),
		new WebpackPlugin({
			mainConfig,
			renderer: {
				config: rendererConfig,
				nodeIntegration: true,
				entryPoints: [
					{
						html: './lib/gui/app/index.html',
						js: './lib/gui/app/renderer.ts',
						name: 'main_window',
						preload: {
							js: './lib/gui/app/preload.ts',
						},
					},
				],
			},
		}),
		new sidecar.SidecarPlugin(),
	],
	hooks: {
		postPackage: async (_forgeConfig, options) => {
			if (options.platform === 'linux') {
				// symlink the etcher binary from balena-etcher to balenaEtcher to ensure compatibility with the wdio suite and the old name
				await new Promise<void>((resolve, reject) => {
					exec(
						`ln -s "${options.outputPaths}/etcher-privacy" "${options.outputPaths}/balenaEtcher"`,
						(err) => {
							if (err) {
								reject(err);
							} else {
								resolve();
							}
						},
					);
				});
			}
		},
	},
};

export default config;
