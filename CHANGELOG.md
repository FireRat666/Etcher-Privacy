# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

# v2.1.6-1-p
## (2026-08-09)

* fix: avoid deleting the AppImage sidecar staging dir before it starts [FireRat]
* fix: prevent data loss and leaked temp dirs during privileged flashes [FireRat]
* fix(packaging): resolve unsubstituted post-install template placeholders [FireRat]
* build: update shrinkwrap for removal of Squirrel maker and auto-update deps [FireRat]
* build: drop Squirrel installer maker and Windows auto-update handling [FireRat]
* ci: harden release workflows and node-gyp setup [FireRat]
* build: update package manifest dependencies, shrinkwrap, and release version [FireRat]
* build: configure Electron Forge Squirrel maker for NuGet semver compatibility [FireRat]
* fix: update versionist configuration for prerelease semver pattern matching [FireRat]
* build: fix Debian post-install package template naming [FireRat]
* build: add MSVC VS2026 detection and node-gyp bin fix scripts for Windows [FireRat]
* refactor: add strict type safety to store, selection, and UI components [FireRat]
* refactor: update TypeScript configuration and add app region type definitions [FireRat]
* build: adopt Node 24 toolchain and update NVM version [FireRat]
* fix: stage elevated sidecar executable outside noexec filesystems [FireRat]
* test: run headless WebdriverIO tests with --no-sandbox on Linux [FireRat]
* ci: add regression test workflow for pull requests [FireRat]
* ci: add Windows ARM64 release workflow and lzma-native patch script [FireRat]
* ci: add macOS x64 release workflow [FireRat]
* build: automate sidecar native module rebuilds on macOS and Windows [FireRat]
* refactor: share custom app event contract between menu and main processes [FireRat]
* fix: bundle sidecar modules via static imports and defer module loading [FireRat]
* security: prevent Linux sidecar privilege escalation via sha256 validation [FireRat]
* fix: resolve TS2835 dynamic imports and sidecar DLL search path [FireRat]
* refactor: import etcher-sdk via subpaths for slimmer sidecar bundle [FireRat]
* fix: improve Windows drive source path matching and traversal checks [FireRat]
* fix: replace animated GIF with static icon to prevent WPF BitmapDecoder crash [FireRat]
* feat: prevent system sleep while flashing [FireRat]
* Update npm-shrinkwrap.json for @reforged/maker-appimage ^5.2.0 [FireRat]
* Update @reforged/maker-appimage to ^5.2.0 and require SM_CODE_SIGNING_CERT_SHA1_HASH for Windows signing [FireRat]
* Restore readFile import in windows-network-drives.ts [FireRat]
* Fix lint uncommitted diffs, sinon os.platform stubbing, and middleEllipsis test assertion [FireRat]
* Fix wdio-electron-service build tool conflict and use standard macos runners [FireRat]
* Release v2.1.6-P [FireRat]
* Enable Flowzone's built-in versioning [FireRat]
* Bump version to 2.1.6-P and take over versioning from Flowzone [FireRat]
* Fall back to GITHUB_TOKEN for Flowzone and normalize changelog heading [FireRat]
* Add versionist config and dependencies manifest [FireRat]
* Pass the FLOWZONE_TOKEN secret to the Flowzone workflow explicitly [FireRat]
* Trigger CI after adding FLOWZONE_TOKEN [FireRat]
* Add Flowzone CI pipeline and make unsigned builds first-class [FireRat]
* Remove success and featured project webviews, forward renderer logs, and rebuild sidecar on Node 20 [FireRat]
* Fix target selection crash, harden sidecar requests, and restore winusb driver support on Node 20 [FireRat]
* Make internal windows robust and replace electron-log with the builtin console logger [FireRat]
* Remove stale telemetry alert and rename window title [FireRat]
* Fix TypeScript module resolution for NodeNext [FireRat]
* Rebrand to Etcher Privacy and fix build on forge 7.8.1 [FireRat]
* fix [Alexander Frick]
* 1.19.22 rebase [Alexander Frick]
* v2.1.6 [flowzone-app[bot]]
* Fix MacOS x86 build by switching to the macos-14-large GH runner [Thodoris Greasidis]
* v2.1.5 [flowzone-app[bot]]
* Replace the EOL macos-13 test runners with macos-14 [Thodoris Greasidis]
* Add libgdk-pixbuf dependency alternatives to fix Ubuntu 26.04 installation [Thodoris Greasidis]
* v2.1.4 [flowzone-app[bot]]
* patch: fix ubuntu 24 build and flash issues - bump electron-forge to 7.8.1 - bump electron to 37.2.4 - stop producing broken appimage [Edwin Joassart]
* patch: fix windows build and flash issues - downgrade flasher's node to 20.11.1 on windows - bump windows GHA runner to 2022 - bump winusb-driver-generator to 2.1.9 [Edwin Joassart]
* patch: refactor permission code [Edwin Joassart]
* v2.1.3 [flowzone-app[bot]]
* v2.1.2 [flowzone-app[bot]]
* patch: remove analytics [Edwin Joassart]
* v2.1.1 [flowzone-app[bot]]
* patch: fix signin windows artifacts [Edwin Joassart]
* Remove stale secrets [Anton Belodedenko]
* v2.1.0 [flowzone-app[bot]]
* Add informational notice about how to disable analytics collection [myarmolinsky]
* v2.0.0 [flowzone-app[bot]]
* major: build on ubuntu 22 and macos 13 [Edwin Joassart]
* v1.19.25 [flowzone-app[bot]]
* patch: bump etcher-sdk to 9.1.2 [Edwin Joassart]
* v1.19.24 [flowzone-app[bot]]
* patch: etcher-util is corrupted in RPM package [Richard Glidden]
* v1.19.23 [flowzone-app[bot]]
* remove gcconf2 deps from docs [Edwin Joassart]
* patch: remove gconf2 libgconf-2-4 deps [Marc-Aurèle Brothier]
* v1.19.22 [flowzone-app[bot]]
* Replace deprecated Flowzone inputs [Kyle Harding]
* v1.19.21 [flowzone-app[bot]]
* patch: fix missing windows dependency [Edwin Joassart]
* patch: fix missing windows dependency [Edwin Joassart]
* patch: fix missing windows dependency [Edwin Joassart]
* v1.19.20 [flowzone-app[bot]]
* patch: fix missing windows dependency [Edwin Joassart]
* v1.19.19 [flowzone-app[bot]]
* patch: add sentry debug flag [Edwin Joassart]
* v1.19.18 [flowzone-app[bot]]
* patch: fix Sentry DSN for main process [Edwin Joassart]
* v1.19.17 [flowzone-app[bot]]
* patch: fix injection of analytics key at build time [JOASSART Edwin]
* v1.19.16 [flowzone-app[bot]]
* patch: hold request for metadata while waiting for flasher [Edwin Joassart]
* v1.19.15 [flowzone-app[bot]]
* patch: bump etcher-sdk to 9.0.11 to fix url loading using http/2 [Edwin Joassart]
* v1.19.14 [flowzone-app[bot]]
* patch: pretty-bytes to 6.1.1 [JOASSART Edwin]
* v1.19.13 [flowzone-app[bot]]
* patch: use etcher icon as loading for windows installer [Edwin Joassart]
* patch: fix windows squirrel install [Edwin Joassart]
* v1.19.12 [flowzone-app[bot]]
* patch: bump minors & patch [Edwin Joassart]
* patch: bump @electron-forge/* to 7.4.0 [Edwin Joassart]
* patch: bump electron to 30.0.1 & @electron/remote to 2.1.2 [Edwin Joassart]
* patch: npm upgrade [Edwin Joassart]
* patch: bump @balena/lint to 8.0.2 and fix formating [Edwin Joassart]
* patch: fix pretty-bytes imports [Edwin Joassart]
* patch: bump etcher-sdk to 9.0.9 [Edwin Joassart]
* v1.19.11 [flowzone-app[bot]]
* patch: setup wdio and port (most) tests [Edwin Joassart]
* v1.19.10 [flowzone-app[bot]]
* patch: remove node-ipc and tests [Edwin Joassart]
* patch: switch api; use ws; integrate sudo-prompt - switch api roles flow - use websocket instead of node-ipc - integrate; modernize; simplify and deprecate sudo-prompt [Edwin Joassart]
* patch: refactor api to use a single topic [Edwin Joassart]
* patch: set require node engine to 20 [Edwin Joassart]
* v1.19.9 [flowzone-app[bot]]
* patch: prevent rebuild of native deps by @electron/rebuild [Edwin Joassart]
* v1.19.8 [flowzone-app[bot]]
* patch: replace deprecated pkg with yao-pkg and bump etcher-util node v to 20.10 [Edwin Joassart]
* v1.19.7 [flowzone-app[bot]]
* patch: fix formating [Edwin Joassart]
* patch: configure prettier in the project to use balena-lint configuration [Edwin Joassart]
* v1.19.6 [flowzone-app[bot]]
* patch: fix win signature process [Edwin Joassart]
* v1.19.5 [flowzone-app[bot]]
* Replace deprecated flowzone input tests_run_on [Kyle Harding]
* v1.19.4 [flowzone-app[bot]]
* patch: remove screensaver error when not on etcher-pro [Edwin Joassart]
* patch: fix typo in IPC server id [Edwin Joassart]
* v1.19.3 [flowzone-app[bot]]
* Simplify test script [Akis Kesoglou]
* Update dependencies [Edwin Joassart]
* v1.19.2 [flowzone-app[bot]]
* fix: typos [Rotzbua]
* v1.19.1 [flowzone-app[bot]]
* patch: update winget-releaser v2 [Vedant]
* v1.19.0 [flowzone-app[bot]]
* Update docs [Akis Kesoglou]
* Use native ARM runner for Apple Silicon builds [Akis Kesoglou]
* Calculate and upload build artifact sha256 checksums [Akis Kesoglou]
* Bundle etcher-util with main app [Akis Kesoglou]
* Run on CI [Akis Kesoglou]
* Define packaging targets [Akis Kesoglou]
* Migrate build pipeline to Electron Forge [Akis Kesoglou]
* v1.18.14 [flowzone-app[bot]]
* Remove repo config from flowzone.yml [Kyle Harding]
* Update actions/upload-artifact to v4 [Kyle Harding]
* v1.18.13 [flowzone-app[bot]]
* patch: upgrade to electron 25 [Edwin Joassart]
* patch: refactor scanner, loader and flasher out of gui + upgrade to electron 25 [Edwin Joassart]
* v1.18.12 [flowzone-app[bot]]
* Update instructions for installing deb file [Jorge Capona]
* v1.18.11 [flowzone-app[bot]]
* fix: prevent stealing window focus from auth dialog [leadpogrommer]
* v1.18.10 [flowzone-app[bot]]
* spelling: validates [Josh Soref]
* spelling: undefined [Josh Soref]
* spelling: except if [Josh Soref]
* v1.18.9 [flowzone-app[bot]]
* Fix Publish action on Windows [Akis Kesoglou]
* Fix lint issues [Akis Kesoglou]
* Fix opening links from within SafeWebView [Akis Kesoglou]
* v1.18.8 [balenaCI]
* Patch: Fix Support link [Oliver Plummer]
* v1.18.7 [balenaCI]
* patch: update docs to remove cloudsmith install instructions for linux [Edwin Joassart]
* v1.18.6 [balenaCI]
* Update docs/FAQ.md [Lizzie Epton]
* add-flash-with-etcher-to-docs [Lizzie Epton]
* v1.18.5 [balenaCI]
* patch: add apt-get update in flowzone preinstall [Edwin Joassart]
* v1.18.4 [balenaCI]
* patch: bump etcher-sdk to 8.3.1 [JOASSART Edwin]
* v1.18.3 [balenaCI]
* fix-typo [Lizzie Epton]
* edits-to-info-about-efp [Lizzie Epton]
* Add reference to etcher-efp in publishing.md [Edwin Joassart]
* v1.18.2 [balenaCI]
* patch: organize docs [mcraa]
* patch: actualized develop guide [mcraa]
* patch: updated commit message guide [mcraa]
* add-item-from-FAQs [Lizzie Epton]
* patch: removed gt characters from contributing guide [mcraa]
* patch: added docosaurus site name [mcraa]
* v1.18.1 [balenaCI]
* patch: use @electron/remote for locating rpiboot files [mcraa]
* v1.18.0 [balenaCI]
* Update to Electron 19 [Akis Kesoglou]
* Remove Spectron and related (low-value) tests [Akis Kesoglou]
* v1.17.0 [balenaCI]
* Update to Electron 17 and Node 16 [Akis Kesoglou]
* v1.16.0 [balenaCI]
* this is no longer necessary, and breaks with new electron [builder555]
* Update to Electron 14 [Akis Kesoglou]
* v1.15.6 [balenaCI]
* patch: app: i18n: Translation: Update zh-TW strings * Improve translate. * Sync layout with English strings ts file. [Edward Wu]
* v1.15.5 [balenaCI]
* revert auto-update feature [JOASSART Edwin]
* v1.15.4 [balenaCI]
* Switch to `@electron/remote` [Akis Kesoglou]
* v1.15.3 [balenaCI]
* move EFP & success-banner to efp.balena.io [Edwin Joassart]
* v1.15.2 [balenaCI]
* Remove configuration remote update [Edwin Joassart]
* v1.15.1 [balenaCI]
* Remove redundant resinci-deploy build step [Akis Kesoglou]
* Lazily import Electron from child-writer process [Akis Kesoglou]
* v1.15.0 [balenaCI]
* Add support for Node 18 [Akis Kesoglou]
* v1.14.3 [balenaCI]
* patch: fixed mac sudo on other languages [Peter Makra]
* v1.14.2 [balenaCI]
* patch: revert to lockfile v1 [Peter Makra]
* patch: update etcher-sdk for cm4v5 [builder555]
* v1.14.1 [balenaCI]
* send exeption to console even when error reporting is off [Edwin Joassart]
* fix disabled-screensaver unhandled exception outside balena-electron env [Edwin Joassart]
* v1.14.0 [balenaCI]
* v1.13.4 [balenaCI]
* Cleaning-up EtcherPro specific code [Aurelien VALADE]
* Adding EtcherPro device serial number to the Settings modal [Aurelien VALADE]
* Anonymizes all paths before sending [Otávio Jacobi]
* patch: Sentry fix path [Edwin Joassart]
* Remove personal path on etcher [Otávio Jacobi]
* Unifying sentry reports in a single project [Edwin Joassart]
* Removes corvus in favor of sentry and analytics client [Otávio Jacobi]
* Removes corvus in favor of sentry and analytics client [Otávio Jacobi]
* v1.13.3 [balenaCI]
* patch: progress cm4 to second stage [Peter Makra]
* v1.13.2 [balenaCI]
* patch: fixed winget parameter name [mcraa]
* v1.13.1 [balenaCI]
* patch: updated sdk to fix bz2 issue [Peter Makra]
* patch: update copyright in electron-builder [JOASSART Edwin]
* v1.13.0 [balenaCI]
* bump electron deps [Peter Makra]
* minor: electron version bump [Peter Makra]
* sdk version bump [Peter Makra]
* fixed ext2fs regex [Peter Makra]
* patch: handle ext2fs with webpack [Peter Makra]
* prerelease etcher-compat etcher-sdk [Peter Makra]
* alignerd webpack to ext2fs [Peter Makra]
* Patch: update etcher-sdk version to fix CM4 issues [builder555]
* v1.12.7 [balenaCI]
* Update dependency i18next to 21.10.0 [Renovate Bot]
* v1.12.6 [balenaCI]
* Update dependency react-i18next to 11.18.6 [Renovate Bot]
* v1.12.5 [balenaCI]
* Patch: made trim setting more readable [builder555]
* v1.12.4 [balenaCI]
* Update winget.yml [Anton Belodedenko]
* Update winget.yml [mcraa]
* fixed version of action to v1 [mcraa]
* Update winget.yml [Vedant]
* patch: publish to winget with gh action [Begula]
* v1.12.3 [balenaCI]
* Patch: replaced plain text with i18n in settings [builder555]
* v1.12.2 [balenaCI]
* Update dependency webpack-dev-server to 4.11.1 [Renovate Bot]
* v1.12.1 [balenaCI]
* Patch: expose trim ext{2,3,4} setting [builder555]
* v1.12.0 [balenaCI]
* check if modal children is aray [Peter Makra]
* populated lockfile [Peter Makra]
* added i18next to devDependencies [mcraa]
* i18n support and Chinese translation [ab77]
* chore: bind some translations [r-q]
* fix: suit i18n with mocha and optimize translation [r-q]
* fix: optimize translations [r-q]
* minor: optimize i18n [r-q]
* refactor: split translations to files [r-q]
* feat: make i18n and add Chinese support [r-q]
* v1.11.10 [balenaCI]
* Update dependency webpack-cli to 4.10.0 [Renovate Bot]
* v1.11.9 [balenaCI]
* Update dependency webpack to 5.75.0 [Renovate Bot]
* v1.11.8 [balenaCI]
* Update dependency awscli to 1.27.28 [Renovate Bot]
* v1.11.7 [balenaCI]
* Update dependency uuid to 8.3.2 [Renovate Bot]
* v1.11.6 [balenaCI]
* Update dependency tslib to 2.4.1 [Renovate Bot]
* Patch: run linux build on ubuntu-20.04 [Edwin Joassart]
* v1.11.5 [balenaCI]
* Update dependency ts-loader to 8.4.0 [Renovate Bot]
* v1.11.4 [balenaCI]
* Update dependency styled-components to 5.3.6 [Renovate Bot]
* v1.11.3 [balenaCI]
* Update dependency terser-webpack-plugin to 5.3.6 [Renovate Bot]
* v1.11.2 [balenaCI]
* Update dependency string-replace-loader to 3.1.0 [Renovate Bot]
* v1.11.1 [balenaCI]
* Update dependency sinon to 9.2.4 [Renovate Bot]
* v1.11.0 [balenaCI]
* Update dependency shyaml to 0.6.2 [Renovate Bot]
* v1.10.29 [balenaCI]
* Update dependency awscli to 1.27.27 [Renovate Bot]
* v1.10.28 [balenaCI]
* Update dependency rendition to 19.3.2 [Renovate Bot]
* v1.10.27 [balenaCI]
* Update dependency redux to 4.2.0 [Renovate Bot]
* v1.10.26 [balenaCI]
* Update dependency pretty-bytes to 5.6.0 [Renovate Bot]
* v1.10.25 [balenaCI]
* Update dependency pnp-webpack-plugin to 1.7.0 [Renovate Bot]
* v1.10.24 [balenaCI]
* Update dependency node-ipc to 9.2.1 [Renovate Bot]
* v1.10.23 [balenaCI]
* Update dependency mocha to 8.4.0 [Renovate Bot]
* v1.10.22 [balenaCI]
* Update dependency mini-css-extract-plugin to 1.6.2 [Renovate Bot]
* v1.10.21 [balenaCI]
* Update dependency lint-staged to 10.5.4 [Renovate Bot]
* v1.10.20 [balenaCI]
* Update dependency husky to 4.3.8 [Renovate Bot]
* v1.10.19 [balenaCI]
* Update dependency esbuild-loader to 2.20.0 [Renovate Bot]
* v1.10.18 [balenaCI]
* Update dependency electron-updater to 4.6.5 [Renovate Bot]
* v1.10.17 [balenaCI]
* Update dependency electron-notarize to 1.2.2 [Renovate Bot]
* v1.10.16 [balenaCI]
* Update dependency awscli to 1.27.26 [Renovate Bot]
* v1.10.15 [balenaCI]
* Update dependency electron-builder to 22.14.13 [Renovate Bot]
* v1.10.14 [balenaCI]
* Update dependency debug to 4.3.4 [Renovate Bot]
* v1.10.13 [balenaCI]
* Update dependency awscli to 1.27.25 [Renovate Bot]
* v1.10.12 [balenaCI]
* Update dependency css-loader to 5.2.7 [Renovate Bot]
* v1.10.11 [balenaCI]
* Update dependency awscli to 1.27.24 [Renovate Bot]
* v1.10.10 [balenaCI]
* Update dependency @types/node to 14.18.34 [Renovate Bot]
* v1.10.9 [balenaCI]
* Enable repository configuration [ab77]
* v1.10.8 [balenaCI]
* Update dependency chai to 4.3.7 [Renovate Bot]
* v1.10.7 [balenaCI]
* Use core workflow for GitHub publish [ab77]
* v1.10.6 [balenaCI]
* Dummy update to fix asset version issue [Edwin Joassart]
* v1.10.5 [balenaCI]
* Patch: run linux build on ubuntu-18.04 [Edwin Joassart]
* v1.10.4 [balenaCI]
* patch: remove Homebrew instructions in README [Patrick Linnane]
* v1.10.3 [balenaCI]
* Allow external contributors [ab77]
* v1.10.2 [balenaCI]
* Fix missing analytics token [Edwin Joassart]
* v1.10.1 [balenaCI]
* Fixing call to electron block screensaver methods invocation [Aurelien VALADE]
* v1.10.0 [balenaCI]
* testing renovate [builder555]
* v1.9.0 [balenaCI]
* Update dependency awscli to 1.27.5 [Renovate Bot]
* v1.8.17 [balenaCI]
* Update dependency @types/react-dom to 16.9.17 [Renovate Bot]
* v1.8.16 [balenaCI]
* Update dependency @types/react to 16.14.34 [Renovate Bot]
* v1.8.15 [balenaCI]
* CI: generalise artefact handling [ab77]
* v1.8.14 [balenaCI]
* Update dependency @types/node to 14.18.33 [Renovate Bot]
* v1.8.13 [balenaCI]
* Update dependency @types/copy-webpack-plugin to 6.4.3 [Renovate Bot]
* v1.8.12 [balenaCI]
* Update dependency @fortawesome/fontawesome-free to 5.15.4 [Renovate Bot]
* v1.8.11 [balenaCI]
* Update dependency @balena/lint to 5.4.2 [Renovate Bot]
* v1.8.10 [balenaCI]
* Update dependency sys-class-rgb-led to 3.0.1 [Renovate Bot]
* v1.8.9 [balenaCI]
* Update dependency semver to 7.3.8 [Renovate Bot]
* v1.8.8 [balenaCI]
* Update dependency omit-deep-lodash to 1.1.7 [Renovate Bot]
* v1.8.7 [balenaCI]
* Update dependency immutable to 3.8.2 [Renovate Bot]
* v1.8.6 [balenaCI]
* Update dependency electron-rebuild to 3.2.9 [Renovate Bot]
* v1.8.5 [balenaCI]
* Update dependency electron-mocha to 9.3.3 [Renovate Bot]
* v1.8.4 [balenaCI]
* Update dependency @types/webpack-node-externals to 2.5.3 [Renovate Bot]
* v1.8.3 [balenaCI]
* Update dependency @types/tmp to 0.2.3 [Renovate Bot]
* v1.8.2 [balenaCI]
* Generate release notes with git [ab77]
* v1.8.1 [balenaCI]
* Update dependency @types/mime-types to 2.1.1 [Renovate Bot]
* v1.8.0 [balenaCI]
* Update scripts/resin digest to 652fdd4 [Renovate Bot]
* v1.7.15 [balenaCI]
* Build targets individually [ab77]
* v1.7.14 [balenaCI]
* Update dependency lodash to 4.17.21 [SECURITY] [Renovate Bot]
* v1.7.13 [balenaCI]
* Update release notes on finalize [ab77]
* v1.7.12 [balenaCI]
* Avoid duplicate releases [ab77]
* v1.7.11 [balenaCI]
* Only run finalize on Linux runners [ab77]
* v1.7.10 [balenaCI]
* Switch to Flowzone [ab77]
* v1.7.9 [Balena CI]
* patch: update allowed extensions to include deb afterinstall in build [mcraa]
* patch: add update notification [Peter Makra]
* patch: fix usb-device-boot link in README [Andrew Scheller]
* Fix application directory for Debian postinst script [Ken Bannister]
* v1.7.8 [Balena CI]
* patch: complete suse uninstall readme [Peter Makra]
* patch: completed suse instructions [Peter Makra]
* patch: order rpm instrictions [Peter Makra]
* patch: enabled update notification for version 1.7.8 [Peter Makra]
* patch: updated title to balenaEtcher [Peter Makra]
* patch: cleanup and organize readme [Peter Makra]
* patch: extend cloudsmith attribution in readme [Peter Makra]
* Update macOS Icon to Big Sur Style [Logicer]
* v1.7.7 [Balena CI]
* patch: clarified update check [Peter Makra]
* patch: autoupdate stagingPercentage check, include default [Peter Makra]
* v1.7.6 [Balena CI]
* patch: version number notification [Peter Makra]
* v1.7.5 [Balena CI]
* patch: fixed typos in template [Peter Makra]
* patch: fix flashing from URL when using basic auth [Marco Füllemann]
* v1.7.4 [Balena CI]
* patch: set version update notification 1.7.3 [Peter Makra]
* patch: updated electron to 12.2.3 [Peter Makra]
* patch: updated electron to 12.2.3 [Peter Makra]
* patch: add requirements and help to issue template [mcraa]
* patch: add requirements and help to issue template [mcraa]
* v1.7.3 [Balena CI]
* patch: fix mesage of null [Peter Makra]
* v1.7.2 [Balena CI]
* patch: fixed open from browser on windows [Peter Makra]
* v1.7.1 [Balena CI]
* patch: Revert back to electron-rebuild [Lorenzo Alberto Maria Ambrosi]
* patch: Disallow TS in JS [Lorenzo Alberto Maria Ambrosi]
* patch: Remove esInterop TS flag [Lorenzo Alberto Maria Ambrosi]
* patch: Use @balena/sudo-prompt [Lorenzo Alberto Maria Ambrosi]
* patch: Update rpiboot guide link [Lorenzo Alberto Maria Ambrosi]
* patch: Improve webpack build time [Lorenzo Alberto Maria Ambrosi]
* v1.7.0 [Balena CI]
* patch: Add missing @types/react@16.8.5 [Lorenzo Alberto Maria Ambrosi]
* patch: Use npm ci in Makefile [Lorenzo Alberto Maria Ambrosi]
* patch: Add draft info boxes for system information [Lorenzo Alberto Maria Ambrosi]
* patch: Remove electron-rebuild package [Lorenzo Alberto Maria Ambrosi]
* patch: Make electron a dev. dependency [Lorenzo Alberto Maria Ambrosi]
* patch: Remove electron-rebuild package [Lorenzo Alberto Maria Ambrosi]
* patch: Use exact modules versions [Lorenzo Alberto Maria Ambrosi]
* patch: Update etcher-sdk from v6.2.5 to v6.3.0 [Lorenzo Alberto Maria Ambrosi]
* Fix write step for Http file process [JSReds]
* patch: Fix linting errors [Lorenzo Alberto Maria Ambrosi]
* minor: Refactor dependencies installation to avoid custom scripts [Lorenzo Alberto Maria Ambrosi]
* patch: Fix LEDs init error [Lorenzo Alberto Maria Ambrosi]
* v1.6.0 [Balena CI]
* Add support for basic auth when downloading images from URL. [Marco Füllemann]
* patch: Update etcher-sdk from v6.2.1 to v6.2.5 [Lorenzo Alberto Maria Ambrosi]
* Update Makefile to Apple M1 info [David Gaspar]
* Add LED settings for potentially different hardware [Lorenzo Alberto Maria Ambrosi]
* v1.5.122 [Balena CI]
* Restore image file selection LED-drive pathing [Lorenzo Alberto Maria Ambrosi]
* Update scripts submodule [Lorenzo Alberto Maria Ambrosi]
* Change LEDs colours [Lorenzo Alberto Maria Ambrosi]
* Windows images now show the proper warning again [Lorenzo Alberto Maria Ambrosi]
* Fix Update and install with DNF instructions [Mohamed Salah]
* Add possibile authorization as a query param [JSReds]
* update the windows part [Xtraim]
* Update SUPPORT.md [thambu1710]
* replace make webpack with npm run webpack [Seth Falco]
* Add loader on image select [JSReds]
* add pnp-webpack-plugin [Zane Hitchcox]
* Remove redundant codespell dependency/tests [Lorenzo Alberto Maria Ambrosi]
* v1.5.121 [Balena CI]
* patch: Delete Codeowners [Vipul Gupta]
* Add source maps for devtools [Lorenzo Alberto Maria Ambrosi]
* Clone submodules when initializing modules [Lorenzo Alberto Maria Ambrosi]
* patch: Select drive on list interaction rather than modal closing [Lorenzo Alberto Maria Ambrosi]
* v1.5.120 [Balena CI]
* Update README to reference Cloudsmith [Lorenzo Alberto Maria Ambrosi]
* v1.5.119 [Balena CI]
* Update readme for new PPA provider [Lorenzo Alberto Maria Ambrosi]
* v1.5.118 [Balena CI]
* patch: development environment [Zane Hitchcox]
* patch: watch files for electron [Zane Hitchcox]
* v1.5.117 [Balena CI]
* Rename mac releases (keep old naming) [Alexis Svinartchouk]
* Disable spectron tests on macOS [Alexis Svinartchouk]
* Update electron to v12.0.2 [Alexis Svinartchouk]
* Update etcher-sdk from 6.1.1 to 6.2.1 [Alexis Svinartchouk]
* Fix getAppPath() returning an asar file on macOS [Alexis Svinartchouk]
* Grammar fix [Andrew Scheller]
* (docs) update README.md [vlad doster]
* Update copyright year in electron-builder.yml [Andrew Scheller]
* Update copyright year in .resinci.json [Andrew Scheller]
* Separate the Yum and DNF instructions. [Dugan Chen]
* Set msvs_version to 2019 when rebuilding [Alexis Svinartchouk]
* Use moduleIds: 'natural' in webpack config to keep js files in arm64 and x64 mac builds identical [Alexis Svinartchouk]
* Update electron-builder to 22.10.5 [Alexis Svinartchouk]
* Update spectron to v13 [Alexis Svinartchouk]
* Update dependencies, use aws4-axios@2.2.1 to avoid adding more dependiencies [Alexis Svinartchouk]
* Update scripts to build universal mac dmgs on the ci [Alexis Svinartchouk]
* Fix beforeBuild.js script to also work on mac [Alexis Svinartchouk]
* Support building universal dmgs (x64 and arm64) for mac [Alexis Svinartchouk]
* Update electron-builder to 22.10.4 [Alexis Svinartchouk]
* Fix titlebar z-index [Alexis Svinartchouk]
* Explicitly set contextIsolation to false [Alexis Svinartchouk]
* Update electron from 9.4.1 to 11.2.3 [Alexis Svinartchouk]
* Update etcher-sdk from 6.1.0 to 6.1.1 [Alexis Svinartchouk]
* v1.5.116 [Balena CI]
* Only cleanup temporary decompressed files in child-writer [Alexis Svinartchouk]
* Add .versionbot/CHANGELOG.yml [Alexis Svinartchouk]
* Stop using node-tmp, use withTmpFile from etcher-sdk instead [Alexis Svinartchouk]
* Update etcher-sdk from 5.2.2 to 6.1.0 [Alexis Svinartchouk]
* Revert "Change some border colors to have higher contrast" [Alexis Svinartchouk]
* Update electron to v9.4.1 [Alexis Svinartchouk]
* Update etcher-sdk from 5.2.1 to 5.2.2 [Alexis Svinartchouk]
* v1.5.115 [Balena CI]
* Update etcher-sdk from 5.1.12 to 5.2.1 [Alexis Svinartchouk]
* v1.5.114 [Balena CI]
* Remove libappindicator1 debian dependency [Alexis Svinartchouk]
* Update etcher-sdk from 5.1.11 to 5.1.12 [Alexis Svinartchouk]
* Update rendition from 18.8.3 to 19.2.0 [Alexis Svinartchouk]
* Update dependencies [Alexis Svinartchouk]
* Update @balena/lint to 5.3.0 [Alexis Svinartchouk]
* Update webpack to v5 [Alexis Svinartchouk]
* Fix typo in webpack.config.ts comment [Alexis Svinartchouk]
* docs: fix quote marks [Aaron Shaw]
* Disable screensaver while flashing (on balena-electron-env) [Alexis Svinartchouk]
* v1.5.113 [Balena CI]
* Show the first error for each drive (not the last) [Alexis Svinartchouk]
* Fix red leds not showing for failed devices [Alexis Svinartchouk]
* docs: add documentation links [Aaron Shaw]
* docs: update macOS version [Aaron Shaw]
* Improve hover message when the drive is too small [Alexis Svinartchouk]
* Update electron to v9.4.0 [Alexis Svinartchouk]
* Update npm to v6.14.8 [Giovanni Garufi]
* Update rgb leds colors [Alexis Svinartchouk]
* Remove unmountOnSuccess setting [Alexis Svinartchouk]
* Only show auto-updates setting on supported targets [Alexis Svinartchouk]
* Remove dead code in settings modal [Alexis Svinartchouk]
* Fix effective flashing speed calculation for compressed images [Alexis Svinartchouk]
* Change some border colors to have higher contrast [Lorenzo Alberto Maria Ambrosi]
* Update etcher-sdk from 5.1.10 to 5.1.11 [Alexis Svinartchouk]
* Update sys-class-rgb-led from 2.1.1 to 3.0.0 [Alexis Svinartchouk]
* v1.5.112 [Balena CI]
* Add rendition and sys-class-rgb-led to repo.yml [Alexis Svinartchouk]
* Update sys-class-rgb-led from 2.1.0 to 2.1.1 [Alexis Svinartchouk]
* Fix spectron test to work on Windows in all cases [Alexis Svinartchouk]
* Fix layout when the featured project is not showing [Alexis Svinartchouk]
* Improve flashing error handling [Alexis Svinartchouk]
* Update repo.yml to enable nested changelogs [Alexis Svinartchouk]
* Fix imports in child-writer.ts [Alexis Svinartchouk]
* Target commit instead of branch name for sudo-prompt [Alexis Svinartchouk]
* Fix modal content height on Windows [Alexis Svinartchouk]
* Update etcher-sdk from 5.1.5 to 5.1.10 [Alexis Svinartchouk]
* Set useContentSize to true so the size is the same on all platforms [Alexis Svinartchouk]
* v1.5.111 [Balena CI]
* Update bl [Alexis Svinartchouk]
* Warn when the source drive has no partition table [Alexis Svinartchouk]
* Update etcher-sdk to 5.1.5 [Alexis Svinartchouk]
* Update typescript to 4.1.2 [Alexis Svinartchouk]
* Use a different icon when no source drive is available [Alexis Svinartchouk]
* Update etcher-sdk to 5.1.3 [Alexis Svinartchouk]
* Prevent opening more than one file selector [Alexis Svinartchouk]
* Allow selecting a locked SD card as the source drive [Alexis Svinartchouk]
* Removed disableExplicitDriveSelection setting, use autoSelectAllDrives instead [Alexis Svinartchouk]
* Update etcher-sdk to 5.1.2 [Alexis Svinartchouk]
* Add successBannerURL setting [Alexis Svinartchouk]
* Add drivesOrder setting [Alexis Svinartchouk]
* Remove "Validate write on success" setting. Validation is always enabled, press the "skip" button to skip it. [Alexis Svinartchouk]
* Update electron to v9.3.3 [Alexis Svinartchouk]
* Update etcher-sdk to 5.1.1, use WASM ext2fs module [Alexis Svinartchouk]
* v1.5.110 [Balena CI]
* Add primary colors to default flow [Lorenzo Alberto Maria Ambrosi]
* Remove console.log in tests [Lorenzo Alberto Maria Ambrosi]
* Add more typings & refactor code accordingly [Lorenzo Alberto Maria Ambrosi]
* Fix URL not being selected with custom protocol [Lorenzo Alberto Maria Ambrosi]
* Add dash on table when selecting only some rows [Lorenzo Alberto Maria Ambrosi]
* Fix settings spacing [Lorenzo Alberto Maria Ambrosi]
* Use drive-selector's table for flash errors table [Lorenzo Alberto Maria Ambrosi]
* Update rendition to v18.8.3 [Lorenzo Alberto Maria Ambrosi]
* Fix zoomFactor in webviews [Lorenzo Alberto Maria Ambrosi]
* Add retry button to the errors modal in success screen [Lorenzo Alberto Maria Ambrosi]
* Cleanup after child-process is terminated [Lorenzo Alberto Maria Ambrosi]
* Add skip function to validation [Lorenzo Alberto Maria Ambrosi]
* Rework success screen [Lorenzo Alberto Maria Ambrosi]
* v1.5.109 [Balena CI]
* Update ext2fs to v2.0.5 [Alexis Svinartchouk]
* Workaround elevation bug on Windows when the username contains an ampersand [Alexis Svinartchouk]
* v1.5.108 [Balena CI]
* Fix content not loading when the app path contains special characters [Alexis Svinartchouk]
* v1.5.107 [Balena CI]
* Add more typings & refactor code accordingly [Lorenzo Alberto Maria Ambrosi]
* Fix tests hanging on array.flatMap [Lorenzo Alberto Maria Ambrosi]
* Re-enable ext partitions trimming on 32 bit Windows [Alexis Svinartchouk]
* Fix tests not running [Lorenzo Alberto Maria Ambrosi]
* Remove lodash from selection-state.ts [Lorenzo Alberto Maria Ambrosi]
* Use pretty-bytes instead of custom function [Lorenzo Alberto Maria Ambrosi]
* Rework system & large drives handling logic [Lorenzo Alberto Maria Ambrosi]
* Override cached window's zoomFactor [Lorenzo Alberto Maria Ambrosi]
* Ignore vscode workspace folder [Lorenzo Alberto Maria Ambrosi]
* Reword macOS Catalina askpass message [Lorenzo Alberto Maria Ambrosi]
* Add clone-drive workflow [Lorenzo Alberto Maria Ambrosi]
* Split drive selector from target selector [Lorenzo Alberto Maria Ambrosi]
* v1.5.106 [Balena CI]
* Disable ext partitions trimming on 32 bit windows until it is fixed [Alexis Svinartchouk]
* Update etcher-sdk to 4.1.28 [Alexis Svinartchouk]
* Update typescript to ^4 [Alexis Svinartchouk]
* Fix opening zip files from servers accepting Range headers [Alexis Svinartchouk]
* v1.5.105 [Balena CI]
* Simplify MainPage [Alexis Svinartchouk]
* Remove unused FlashStep.props.isWebviewShowing [Alexis Svinartchouk]
* Remove FeaturedProject class, replace with SafeWebview [Alexis Svinartchouk]
* Remove unused FeaturedProject.state.show [Alexis Svinartchouk]
* Remove unused SafeWebvuew.refreshNow property [Alexis Svinartchouk]
* Update etcher-sdk to 4.1.26 [Alexis Svinartchouk]
* URL selector cancel button cancels ongoing url selection [Alexis Svinartchouk]
* Spinner for URL selector modal [Alexis Svinartchouk]
* Update rendition to ^18.4.1 [Alexis Svinartchouk]
* Update etcher-sdk to 4.1.25 [Alexis Svinartchouk]
* Fix settings button not being clickable [Alexis Svinartchouk]
* v1.5.104 [Balena CI]
* Update etcher-sdk to v4.1.24 [Alexis Svinartchouk]
* Fix writing config file [Alexis Svinartchouk]
* Update rendition to 18.1.0 [Alexis Svinartchouk]
* Remove unused part of Makefile [Alexis Svinartchouk]
* Remove duplicated styled-system [Alexis Svinartchouk]
* Remove no longer used nan [Alexis Svinartchouk]
* Remove no longer used @types/request [Alexis Svinartchouk]
* Remove no longer used @types/bluebird [Alexis Svinartchouk]
* Update electron to v9.2.1 [Alexis Svinartchouk]
* Remove unused error message [Alexis Svinartchouk]
* v1.5.103 [Balena CI]
* Update dependencies [Alexis Svinartchouk]
* Don't use more than a 8th of the system memory as buffers [Alexis Svinartchouk]
* Update rendition  to ^17 [Alexis Svinartchouk]
* Update @balena/udif, don't bundle htmlparser2 into the writer [Alexis Svinartchouk]
* Change isFocused check to isVisible in tests [Alexis Svinartchouk]
* Fix running tests on Windows [Alexis Svinartchouk]
* Update electron to 9.2.0 [Alexis Svinartchouk]
* Update etcher-sdk to ^4.1.23 [Alexis Svinartchouk]
* Move linting and testing into package.json [Alexis Svinartchouk]
* Set module: es2015 in tsconfig.json [Alexis Svinartchouk]
* Replace native elevator with sudo-prompt on windows [Alexis Svinartchouk]
* Don't import WeakMap polyfill in deep-map-keys [Alexis Svinartchouk]
* Update etcher-sdk to ^4.1.22 [Alexis Svinartchouk]
* Don't use lodash in child-writer.js [Alexis Svinartchouk]
* Optimize svgs [Alexis Svinartchouk]
* User regular stream in lzma-native instead of readable-stream [Alexis Svinartchouk]
* Update dependencies [Alexis Svinartchouk]
* Remove Bluebird [Alexis Svinartchouk]
* Update etcher-sdk to ^4.1.20 [Alexis Svinartchouk]
* v1.5.102 [Balena CI]
* Fix flashing truncated images, fix flashing large dmgs [Alexis Svinartchouk]
* Electron 9.1.1 [Alexis Svinartchouk]
* Remove bluebird from main process, reduce lodash usage [Alexis Svinartchouk]
* Centralize imports in child-writer [Alexis Svinartchouk]
* Split main process and child-writer js files [Alexis Svinartchouk]
* Stop using request, replace it with already used axios [Alexis Svinartchouk]
* Remove font awesome unused icons from the generated bundle [Alexis Svinartchouk]
* Remove no longer used .sass-lint.yml [Alexis Svinartchouk]
* Use tslib [Alexis Svinartchouk]
* Use strict typescript compiler option [Alexis Svinartchouk]
* Update rendition to ^16.1.1 [Alexis Svinartchouk]
* v1.5.101 [Balena CI]
* Resize modal to show content appropriately [Lorenzo Alberto Maria Ambrosi]
* autoSelectAllDrives setting [Alexis Svinartchouk]
* Update etcher-sdk to 4.1.17 [Alexis Svinartchouk]
* Deselect the image if the source drive is removed [Alexis Svinartchouk]
* Mount source drive if automountOnFileSelect is set [Alexis Svinartchouk]
* Remove unused packages [Alexis Svinartchouk]
* Fix modal not showing overflowing elements [Alexis Svinartchouk]
* Update rendition to 15.2.4 [Alexis Svinartchouk]
* Update electron to 9.0.5 [Alexis Svinartchouk]
* Remove non relevant comment [Alexis Svinartchouk]
* Update etcher-sdk to v4.1.16 [Lorenzo Alberto Maria Ambrosi]
* Convert sass to plain css [Lorenzo Alberto Maria Ambrosi]
* Remove unused scss [Lorenzo Alberto Maria Ambrosi]
* Remove unused warning in settings [Lorenzo Alberto Maria Ambrosi]
* Refactor UI without bootstrap & flexboxgrid [Lorenzo Alberto Maria Ambrosi]
* Restyle modals [Lorenzo Alberto Maria Ambrosi]
* Remove bootstrap & flexboxgrid [Lorenzo Alberto Maria Ambrosi]
* Rework and move flashing view elements [Lorenzo Alberto Maria Ambrosi]
* Refactor UI grid to use rendition [Lorenzo Alberto Maria Ambrosi]
* v1.5.100 [Balena CI]
* Show system drives last [Alexis Svinartchouk]
* Update partitioninfo to 5.3.5 [Alexis Svinartchouk]
* Add icon to plug targets in targets modal [Lorenzo Alberto Maria Ambrosi]
* Add .vhd to the list of supported extensions, allow opening any file [Alexis Svinartchouk]
* Update target selector ok button label to show the number of selected devices [Alexis Svinartchouk]
* Update mocha to v8.0.1 [Alexis Svinartchouk]
* Update electron-notarize to v1.0.0 [Alexis Svinartchouk]
* Don't mutate usbboot drives when updating progress [Alexis Svinartchouk]
* Update electron to v9.0.4 [Alexis Svinartchouk]
* Update etcher-sdk to v4.1.15 [Alexis Svinartchouk]
* Sticky header in target selection table [Alexis Svinartchouk]
* Stricter types in target-selector-modal.tsx [Alexis Svinartchouk]
* Update rendition to 15.2.1 [Alexis Svinartchouk]
* Fix source-selector image height [Lorenzo Alberto Maria Ambrosi]
* Make TargetSelectorModal a React.Component [Lorenzo Alberto Maria Ambrosi]
* Refactor styles [Lorenzo Alberto Maria Ambrosi]
* Update rendition to v15.0.0 [Lorenzo Alberto Maria Ambrosi]
* Merge unsafe mode with new target selector [Lorenzo Alberto Maria Ambrosi]
* Rework target selector modal [Lorenzo Alberto Maria Ambrosi]
* Add warning color to Flash! button [Lorenzo Alberto Maria Ambrosi]
* v1.5.99 [Balena CI]
* Update node-raspberrypi-usbboot to 0.2.8 [Alexis Svinartchouk]
* Update electron to 9.0.3 [Alexis Svinartchouk]
* Inline all svgs [Alexis Svinartchouk]
* v1.5.98 [Balena CI]
* Use between 2 and 256MiB for buffering depending on the number of drives [Alexis Svinartchouk]
* Check that argument is an url or a regular file before opening [Alexis Svinartchouk]
* Update etcher-sdk to ^4.1.13 [Alexis Svinartchouk]
* v1.5.97 [Balena CI]
* Update @types/terser-webpack-plugini to ^3.0.0 [Alexis Svinartchouk]
* Use @types/copy-webpack-plugin [Alexis Svinartchouk]
* Update node-gyp to ^7.0.0 [Alexis Svinartchouk]
* Update electron to v9.0.2 [Alexis Svinartchouk]
* Don't check child-writer stderr, rely on the exit code instead [Alexis Svinartchouk]
* Fix flash from url on windows [Alexis Svinartchouk]
* Avoid random access in http sources [Alexis Svinartchouk]
* Update etcher-sdk to ^4.1.8 [Alexis Svinartchouk]
* Read image path from arguments, register `etcher://...` protocol [Alexis Svinartchouk]
* Simplify spectron tests [Alexis Svinartchouk]
* Update etcher-sdk to ^4.1.6 [Alexis Svinartchouk]
* Fix sudo-prompt promisification [Alexis Svinartchouk]
* Fix windows ia32 rebuild [Alexis Svinartchouk]
* Allow skipping notarization when building package (dev) [Lorenzo Alberto Maria Ambrosi]
* v1.5.96 [Balena CI]
* Fix ia32 builds for windows [Alexis Svinartchouk]
* Remove writing speed from finish screen [Alexis Svinartchouk]
* Remove unused styles [Alexis Svinartchouk]
* Add effective speed in flash results [Alexis Svinartchouk]
* Update progress bar style [Alexis Svinartchouk]
* Remove unused css class [Alexis Svinartchouk]
* Simplify FlashAnother button [Alexis Svinartchouk]
* Remove useless StepSelection component [Alexis Svinartchouk]
* Change font to SourceSansPro and fix hover color [Alexis Svinartchouk]
* Update rendition to ^14.13.0 [Alexis Svinartchouk]
* Make FlashStep a PureComponent [Alexis Svinartchouk]
* Remove unused styles [Alexis Svinartchouk]
* v1.5.95 [Balena CI]
* spectron: Make tests pass on Windows Docker containers [Juan Cruz Viotti]
* v1.5.94 [Balena CI]
* Show image name and path in image name modal [Alexis Svinartchouk]
* Stop checking file extensions [Alexis Svinartchouk]
* Fix flash from url (broken in 1.5.92) [Alexis Svinartchouk]
* Remove electron-builder patch now that https://github.com/electron-userland/electron-builder/pull/4993 is merged [Alexis Svinartchouk]
* Update etcher-sdk to ^4.1.4 [Alexis Svinartchouk]
* v1.5.93 [Balena CI]
* Patch electron-builder to fix signing on macos [Alexis Svinartchouk]
* Update dependencies [Alexis Svinartchouk]
* Update electron-builder to v22.6.1 [Alexis Svinartchouk]
* Strip out comments from generated code [Alexis Svinartchouk]
* Remove dead code [Alexis Svinartchouk]
* Update electron to v9.0.0 [Alexis Svinartchouk]
* v1.5.92 [Balena CI]
* Use electron.app.getAppPath() instead of reading it from argv in catalina-sudo [Alexis Svinartchouk]
* Disable asar packing on all platforms [Alexis Svinartchouk]
* Remove unneeded fortawesome from main.scss [Alexis Svinartchouk]
* Remove unneeded font formats [Alexis Svinartchouk]
* Webpack everything, reduce package size [Alexis Svinartchouk]
* v1.5.91 [Balena CI]
* Minor fix - Init isSourceDrive param in correct place [Lorenzo Alberto Maria Ambrosi]
* Fix undefined image from DriveCompatibilityWarning [Rob Evans]
* v1.5.90 [Balena CI]
* Remove useless comment [Alexis Svinartchouk]
* Remove dead code [Alexis Svinartchouk]
* Make Flash component a class & rename it FlashStep [Alexis Svinartchouk]
* ProgressButton is a PureComponent [Alexis Svinartchouk]
* Remove commented code [Alexis Svinartchouk]
* Update leds behaviour [Alexis Svinartchouk]
* v1.5.89 [Balena CI]
* Fix drive selector modal padding [Alexis Svinartchouk]
* Update all dependencies minor versions [Alexis Svinartchouk]
* Update @types/node 12.12.24 -> 12.12.39 [Alexis Svinartchouk]
* Update ts-loader 6 -> 7 [Alexis Svinartchouk]
* Update sinon 8 -> 9 [Alexis Svinartchouk]
* Update node-gyp 3 -> 6 [Alexis Svinartchouk]
* Update lint-staged 9 -> 10 [Alexis Svinartchouk]
* Update husky 3 -> 4 [Alexis Svinartchouk]
* Remove no longer used html-loader dev dependency [Alexis Svinartchouk]
* Update electron-notarize 0.1.1 -> 0.3.0 [Alexis Svinartchouk]
* Remove no longer used chalk dev dependency [Alexis Svinartchouk]
* Update @types/tmp 0.1.0 -> 0.2.0 [Alexis Svinartchouk]
* Update @types/sinon 7 -> 9 [Alexis Svinartchouk]
* Update @types/semver 6 -> 7 [Alexis Svinartchouk]
* Update @types/mocha 5 -> 7 [Alexis Svinartchouk]
* v1.5.88 [Balena CI]
* Update roboto-fontface 0.9.0 -> 0.10.0 [Alexis Svinartchouk]
* Update rendition 12 -> 14, styled-system and styled-components 4 -> 5 [Alexis Svinartchouk]
* Update electron-updater 4.0.6 -> 4.3.1 [Alexis Svinartchouk]
* Update redux 3 -> 4 [Alexis Svinartchouk]
* Update debug 3 -> 4 [Alexis Svinartchouk]
* Update semver 5 -> 7 [Alexis Svinartchouk]
* Update tmp 0.1.0 -> 0.2.1 [Alexis Svinartchouk]
* Update uuid v3 -> v8 [Alexis Svinartchouk]
* v1.5.87 [Balena CI]
* Update etcher-sdk to ^4.1.3 to fix issues with some bz2 files [Alexis Svinartchouk]
* v1.5.86 [Balena CI]
* Fix theme warnings [Alexis Svinartchouk]
* v1.5.85 [Balena CI]
* Prefer balena-etcher to etcher-bin on Arch Linux [Alexis Svinartchouk]
* v1.5.84 [Balena CI]
* Update copyright years [Alexis Svinartchouk]
* Update to README.md [TheRealTachyon]
* Including Arch / Manjaro install instructions [Tom]
* Correct two nomenclature errors [Rich Morin]
* Don't depend on lsb for the rpm package [Alexis Svinartchouk]
* Fix libpango dependency name on debian [Alexis Svinartchouk]
* Update etcher-sdk to ^4.0.1 [Alexis Svinartchouk]
* Fix notification icon path [Alexis Svinartchouk]
* v1.5.83 [Balena CI]
* Remove some `any`s [Alexis Svinartchouk]
* Factorize duplicated configUrl code [Alexis Svinartchouk]
* Simplify settings [Alexis Svinartchouk]
* remove update lock [Alexis Svinartchouk]
* Send applicationSessionUuid and flashingWorkflowUuid by default in logEvent [Alexis Svinartchouk]
* Remove no longer used settings and checks [Alexis Svinartchouk]
* Update resin-lint -> @balena/lint [Alexis Svinartchouk]
* Decompress images before flashing, remove trim setting, trim ext partitions [Alexis Svinartchouk]
* v1.5.82 [Balena CI]
* Allow http/https only for Flash from URL [Lorenzo Alberto Maria Ambrosi]
* Add generic error's message [Lorenzo Alberto Maria Ambrosi]
* Refactor buttons style [Lorenzo Alberto Maria Ambrosi]
* Add flash from url workflow [Lorenzo Alberto Maria Ambrosi]
* Add staging percentage for v1.5.81 [Lorenzo Alberto Maria Ambrosi]
* Trigger update for v1.5.81 [Lorenzo Alberto Maria Ambrosi]
* v1.5.81 [Balena CI]
* Add average speed in flash results [Lorenzo Alberto Maria Ambrosi]
* docs: Update macOS drive recovery command [Wilson de Farias]
* Remove no longer needed ts-ignore comments, fix typos [Alexis Svinartchouk]
* Update bluebird [Alexis Svinartchouk]
* Fix FlashResults component [Alexis Svinartchouk]
* Update etcher-sdk to use direct IO [Alexis Svinartchouk]
* v1.5.80 [Balena CI]
* Remove useless if [Alexis Svinartchouk]
* Use zoomFactor to scale contents in fullscreen mode [Lorenzo Alberto Maria Ambrosi]
* Update README to use port 443 to get keys from keyserver.ubuntu.com [Anthony Rouneau]
* Update electron to v7.1.14 [Alexis Svinartchouk]
* Fix sass files path for lint-sass [Alexis Svinartchouk]
* v1.5.79 [Balena CI]
* Remove "Download the React DevTools for a better development experience" message [Alexis Svinartchouk]
* Fix error when launching from terminal when installed via apt. [Alois Klink]
* v1.5.78 [Balena CI]
* Update drivelist to 8.0.10 to fix parsing lsblk --pairs [Alexis Svinartchouk]
* v1.5.77 [Balena CI]
* Specify flashImageToDrive return type [Alexis Svinartchouk]
* Fix error message not being shown on write error [Alexis Svinartchouk]
* Fix imports in lib/start.ts [Alexis Svinartchouk]
* The RGBLed module has been moved to a separate repository [Alexis Svinartchouk]
* Running `make lint` will now fix the typescript files [Alexis Svinartchouk]
* v1.5.76 [Balena CI]
* Prefix temp permissions script name [Lorenzo Alberto Maria Ambrosi]
* Fix image drop zone, remove react-dropzone dependency [Alexis Svinartchouk]
* Update etcher-sdk to ^2.0.17 [Alexis Svinartchouk]
* v1.5.75 [Balena CI]
* Initialize leds object map [Omar López]
* v1.5.74 [Balena CI]
* Keep leds sysfs files open [Alexis Svinartchouk]
* Etcher pro leds feature [Alexis Svinartchouk]
* Compress deb package with bzip instead of xz [Alexis Svinartchouk]
* A warning about the selected image does not prevent the selection [Alexis Svinartchouk]
* Update electron to 7.1.11 [Alexis Svinartchouk]
* Update scripts submodule to prevent electon-mocha crashes on CI [Alexis Svinartchouk]
* Update resin-lint to ^3.2.0 [Alexis Svinartchouk]
* Update mocha and electron-mocha [Alexis Svinartchouk]
* Fix loading driveBlacklist settings [Alexis Svinartchouk]
* Sort devices by device path on Linux [Alexis Svinartchouk]
* Load settings before rendering the app [Alexis Svinartchouk]
* Remove settings.getDefaults function [Alexis Svinartchouk]
* Remove unused settings.assign function [Alexis Svinartchouk]
* v1.5.73 [Balena CI]
* Remove unused BUILD_TEMPORARY_DIRECTORY scripts parameter [Alexis Svinartchouk]
* Target es2018 [Alexis Svinartchouk]
* Update electron to v7.1.10 [Alexis Svinartchouk]
* v1.5.72 [Balena CI]
* Replace use of lodash's assign with destructuring assignment in image-writer [Alexis Svinartchouk]
* Fix error reportning when elevating Etcher fails [Alexis Svinartchouk]
* Remove babel dependency [Alexis Svinartchouk]
* Remove eslint dependency [Alexis Svinartchouk]
* Remove mochainon dependency [Alexis Svinartchouk]
* Run ts-lint on typings [Alexis Svinartchouk]
* Convert clean-shrinkwrap.js to typescript [Alexis Svinartchouk]
* Convert runner.spec.js to typescript [Alexis Svinartchouk]
* Convert available-drives.spec.ts to typescript [Alexis Svinartchouk]
* Convert selection-state.spec.ts to typescript [Alexis Svinartchouk]
* Convert errors.spec.js to typescript [Alexis Svinartchouk]
* Convert drive-constraints.spec.ts to typescript [Alexis Svinartchouk]
* Convert supported-formats.spec.js to typescript [Alexis Svinartchouk]
* Convert utils.spec.js to typescript [Alexis Svinartchouk]
* Convert permissions.spec.js to typescript [Alexis Svinartchouk]
* Convert flash-state.spec.js to typescript [Alexis Svinartchouk]
* Convert image-writer.spc.js to typescript [Alexis Svinartchouk]
* Convert child-writer.spec.js to typescript [Alexis Svinartchouk]
* Convert progress-status.spec.js to typescript [Alexis Svinartchouk]
* Convert settings.spec.js to typescript [Alexis Svinartchouk]
* Convert windows-network-drives.spec.js to typescript [Alexis Svinartchouk]
* Convert window-progress.spec.js to typescript [Alexis Svinartchouk]
* Convert middle-ellipsis.spec.js to typescript [Alexis Svinartchouk]
* Convert file-extensions.spc.js to typescript [Alexis Svinartchouk]
* Convert messages.spec.js to typescript [Alexis Svinartchouk]
* Convert units.spc.js to typescript [Alexis Svinartchouk]
* Remove no longer used prop-types [Alexis Svinartchouk]
* Replace <React.Fragment> with <> [Alexis Svinartchouk]
* Remove useless export. [Alexis Svinartchouk]
* Remove remaining Promise.then [Alexis Svinartchouk]
* Don't run eslint on lib, run ts-lint on webpack.config.ts [Alexis Svinartchouk]
* Convert image-selector.jsx to typescript [Alexis Svinartchouk]
* Convert DriveSelectorModal.jsx to typescript [Alexis Svinartchouk]
* Convert target-selector.jsx to typescript [Alexis Svinartchouk]
* Convert progress-button.jsx to typescript [Alexis Svinartchouk]
* Convert save-webview.jsx to typescript [Alexis Svinartchouk]
* Convert reduced-flashing-infos.jsx to typescript [Alexis Svinartchouk]
* Convert svg-icon.jsx to typescript [Alexis Svinartchouk]
* Convert featured-project.jsx to typescript [Alexis Svinartchouk]
* Remove eslint comments from tsx file [Alexis Svinartchouk]
* Convert webpack.config.js to typescript [Alexis Svinartchouk]
* Convert start.js to typescript [Alexis Svinartchouk]
* Convert etcher.js to typescript [Alexis Svinartchouk]
* Use Dictionary type from lodash [Alexis Svinartchouk]
* Convert app.js to typescript [Alexis Svinartchouk]
* Convert dialog.js to typescript [Alexis Svinartchouk]
* Convert image-writer.js to typescript [Alexis Svinartchouk]
* Convert child-writer.js to typescript [Alexis Svinartchouk]
* Convert flash-state.js to typescript [Alexis Svinartchouk]
* Convert selection-state.js to typescript [Alexis Svinartchouk]
* Convert available-drives.js to typescript [Alexis Svinartchouk]
* Convert store.js to typescript [Alexis Svinartchouk]
* Convert settings.js to typescript [Alexis Svinartchouk]
* Convert drive-constraints.js to typescript [Alexis Svinartchouk]
* Convert permissions.js to typescript [Alexis Svinartchouk]
* Convert utils.js to typescript [Alexis Svinartchouk]
* Convert messages.js to typescript [Alexis Svinartchouk]
* Convert units.js to typescript [Alexis Svinartchouk]
* Convert errors.js to typescript [Alexis Svinartchouk]
* Convert supported-formats.js to typescript [Alexis Svinartchouk]
* Convert file-extensions.js to typescript [Alexis Svinartchouk]
* Convert catalina-sudo/sudo.js to typescript [Alexis Svinartchouk]
* Convert exit-codes.js to typescript [Alexis Svinartchouk]
* Remove no longer used storage.js and its tests [Alexis Svinartchouk]
* Convert local-settings.js to typescript [Alexis Svinartchouk]
* Remove no longer used lib/gui/app/models/files.js and its tests [Alexis Svinartchouk]
* Convert theme.js to typescript [Alexis Svinartchouk]
* Convert drive-scanner.js to typescript [Alexis Svinartchouk]
* Convert analytics.js to typescript [Alexis Svinartchouk]
* Convert exception-reporter.js to typescript [Alexis Svinartchouk]
* Convert update-lock.js to typescript [Alexis Svinartchouk]
* Convert notification.js to typescript [Alexis Svinartchouk]
* Convert open-external.js to typescript [Alexis Svinartchouk]
* Convert progress-status.js and window-progress.js to typescript [Alexis Svinartchouk]
* Convert window-network-drives.js to typescript [Alexis Svinartchouk]
* Convert middle-ellipsis.js to typescript [Alexis Svinartchouk]
* Remove unused styled-components.js [Alexis Svinartchouk]
* Convert menu.js to typescript [Alexis Svinartchouk]
* Don't use prop-types in drive selector [Alexis Svinartchouk]
* Remove html-angular-validate [Alexis Svinartchouk]
* Remove remaining angular [Alexis Svinartchouk]
* Convert angular SafeWebview to typescript [Alexis Svinartchouk]
* Remove unused StateController.previousName [Alexis Svinartchouk]
* Remove useless 'use strict' from a ts file [Alexis Svinartchouk]
* Remove no longer used angular flash-another component [Alexis Svinartchouk]
* Remove no longer used angular flash-results component [Alexis Svinartchouk]
* Remove no longer needed angular specific utils.memoize [Alexis Svinartchouk]
* Remove no longer used angular-ui-bootstrap [Alexis Svinartchouk]
* Remove no longer used .section-footer-main css rules [Alexis Svinartchouk]
* Remove no longer used angular svg-icon component [Alexis Svinartchouk]
* Remove no longer used angular-if-state [Alexis Svinartchouk]
* Remove no longer used ModalService [Alexis Svinartchouk]
* Remove no longer used closestUnit angular filter [Alexis Svinartchouk]
* Trigger update for 1.5.71 [Lorenzo Alberto Maria Ambrosi]
* v1.5.71 [Balena CI]
* Don't webpack package.json as analytics tokens are interted after webpacking [Alexis Svinartchouk]
* Update scripts submodule [Lorenzo Alberto Maria Ambrosi]
* Update resin-corvus to 2.0.5 [Lorenzo Alberto Maria Ambrosi]
* v1.5.70 [Balena CI]
* Remove no longer used HeaderController [Alexis Svinartchouk]
* Make header draggable again [Lorenzo Alberto Maria Ambrosi]
* Refactor drive selector and confirm modal to React [Lorenzo Alberto Maria Ambrosi]
* Remove angular os-open-external directive [Alexis Svinartchouk]
* React header [Alexis Svinartchouk]
* Remove manifest-bind [Alexis Svinartchouk]
* Rename resin -> balena [Alexis Svinartchouk]
* Only run prettier on ts and tsx files [Alexis Svinartchouk]
* Fix layout when flashing [Stevche Radevski]
* Rework lib/gui/app/styled-components to typescript [Alexis Svinartchouk]
* Convert FlashAnother & FlashResults to typescript [Lorenzo Alberto Maria Ambrosi]
* Rework finish page with React [Lorenzo Alberto Maria Ambrosi]
* Add husky and lint-staged to run linting on commit [Stevche Radevski]
* Move a couple of files to typescript and remove unnecessary $timeout [Stevche Radevski]
* Change Flash and Driveselector extension to .tsx [Stevche Radevski]
* Move the main controller to React [Stevche Radevski]
* Remove broken settings shortcut from menu [Alexis Svinartchouk]
* Remove unused imports in main.js [Alexis Svinartchouk]
* Remove experimental file picker [Alexis Svinartchouk]
* Remove tooltip-modal scss import [Alexis Svinartchouk]
* Remove unused methods from drive selector component [Lucian]
* Add sourcemap and elevate theme provider [Lucian]
* Refactor tooltip modal to use react [Lucian]
* Fix link hover color [Lucian]
* Fix bug where images can't be reselected [Lucian]
* Run make sass [Alexis Svinartchouk]
* Use rendition modal for warning and errors when flashing [Stevche Radevski]
* Refactor Warning modal in image selection [Lucian]
* Use React instead of Angular for image selection [Lucian]
* Refactor the DriveSelector to use async-await [Thodoris Greasidis]
* Convert the drive selection step to React [Thodoris Greasidis]
* chore: move flash step to React [Stevche Radevski]
* Use React instead of Angular for image selection [Lucian]
* v1.5.69 [Balena CI]
* Don't add --no-sandbox when ELECTRON_RUN_AS_NODE true [Alexis Svinartchouk]
* v1.5.68 [Balena CI]
* Add version in settings modal [Lorenzo Alberto Maria Ambrosi]
* v1.5.67 [Balena CI]
* Fix elevation on macos in development [Alexis Svinartchouk]
* v1.5.66 [Balena CI]
* Remove usage of deprecated componentWillReceiveProps [Alexis Svinartchouk]
* Fix typing in settings.tsx [Alexis Svinartchouk]
* Update dependencies after rebase [Alexis Svinartchouk]
* Fix windows elevation module import [Alexis Svinartchouk]
* Package dll files (needed for lzma_native on windows) [Alexis Svinartchouk]
* Update electron to 6.1.4 [Alexis Svinartchouk]
* Wrapper script for linux to add --no-sandbox when running as root [Alexis Svinartchouk]
* Remove unused script [Alexis Svinartchouk]
* Simplify webpack config [Alexis Svinartchouk]
* Simplify electron-builder files config [Alexis Svinartchouk]
* Update spectron to ^8 [Alexis Svinartchouk]
* Update dependencies, get node-usb from npm [Alexis Svinartchouk]
* Update nan to ^2.14 [Alexis Svinartchouk]
* Use the same entrypoint for etcher and the child writer [Alexis Svinartchouk]
* Require angular-mocks only when needed [Alexis Svinartchouk]
* Remove no longer needed pkg dev dependency [Alexis Svinartchouk]
* Update mocha, remove nock [Alexis Svinartchouk]
* Remove no longer needed xml2js [Alexis Svinartchouk]
* Remove node-pre-gyp patch that is no longer needed with electron 6 [Alexis Svinartchouk]
* Update electron-mocha to ^8.1.2, remove acorn [Alexis Svinartchouk]
* Update electron to 6.0.10 [Alexis Svinartchouk]
* v1.5.65 [Balena CI]
* Convert settings modal to typescript [Lorenzo Alberto Maria Ambrosi]
* Refactor settings page into modal [Lorenzo Alberto Maria Ambrosi]
* v1.5.64 [Balena CI]
* Use bash instead of sh for running the elevated process on Linux and Mac [Alexis Svinartchouk]
* v1.5.63 [Balena CI]
* Introduce an FAQ file [Dimitrios Lytras]
* v1.5.62 [Balena CI]
* Update drivelist to 8.0.9 [Alexis Svinartchouk]
* v1.5.61 [Balena CI]
* Don't use electron-is-running-in-asar, fix AppImage builds [Alexis Svinartchouk]
* Don't spell check scripts [Alexis Svinartchouk]
* Update scripts repo as electron-builder's build command was renamed electron-builder [Alexis Svinartchouk]
* Update electron-builder to ^22 [Alexis Svinartchouk]
* Use sudo instead of sudo-prompt on macOS >= Catalina [Alexis Svinartchouk]
* Don't pack files in an asar archive on macOS [Alexis Svinartchouk]
* Notarize app on macOS [Lorenzo Alberto Maria Ambrosi]
* v1.5.60 [Balena CI]
* Upgrade ext2fs to 1.0.30 [Matthew McGinn]
* v1.5.59 [Balena CI]
* Catch console log messages from SafeWebView [Roman Mazur]
* v1.5.58 [Balena CI]
* Remove leftover GH-pages configuration file [Dimitrios Lytras]
* v1.5.57 [Balena CI]
* Fix entrypoint when options are passed to electron [Alexis Svinartchouk]
* v1.5.56 [Resin CI]
* Fix windows portable download [Lorenzo Alberto Maria Ambrosi]
* v1.5.55 [Resin CI]
* Update etcher-sdk to ^2.0.13 [Alexis Svinartchouk]
* v1.5.54 [Resin CI]
* Fix auto-updater check for updates [Lorenzo Alberto Maria Ambrosi]
* v1.5.53 [Resin CI]
* Allow typescript files [Lorenzo Alberto Maria Ambrosi]
* Trigger update for 1.5.52 [Lorenzo Alberto Maria Ambrosi]
* v1.5.52 [Resin CI]
* Don't use wmic's ProviderName if it's empty [Alexis Svinartchouk]
* v1.5.51 [Resin CI]
* Update sudo-prompt to ^9.0.0 [Alexis Svinartchouk]
* v1.5.50 [Resin CI]
* Option for trimming ext partitions on raw images [Alexis Svinartchouk]
* Replace promise chains with async/await in child-writer [Alexis Svinartchouk]
* v1.5.49 [Resin CI]
* Make window size configurable [Alexis Svinartchouk]
* v1.5.48 [Resin CI]
* Don't use sudo-prompt when already elevated [Alexis Svinartchouk]
* v1.5.47 [Resin CI]
* Rework drive-selector with react + rendition [Lorenzo Alberto Maria Ambrosi]
* Use rendition theme property for step buttons [Lorenzo Alberto Maria Ambrosi]
* Upgrade styled-system to v4.1.0 [Lorenzo Alberto Maria Ambrosi]
* Upgrade rendition to v8.7.2 [Lorenzo Alberto Maria Ambrosi]
* v1.5.46 [Resin CI]
* Update ext2fs to 1.0.29 [Alexis Svinartchouk]
* v1.5.45 [Resin CI]
* Empty commit to trigger build [Alexis Svinartchouk]
* v1.5.44 [Resin CI]
* Fix elevation on windows when the path contains "&" or "'" [Alexis Svinartchouk]
* v1.5.43 [Resin CI]
* Revert "Include sass in webpack configs" [Lorenzo Alberto Maria Ambrosi]
* v1.5.42 [Resin CI]
* Include sass in webpack configs [Lorenzo Alberto Maria Ambrosi]
* v1.5.41 [Resin CI]
* waffle.io removal and adding a link to the license [Mateusz Hajder]
* v1.5.40 [Resin CI]
* Remove some unused files from the packages [Alexis Svinartchouk]
* windows installer and portable version support both ia32 and x64 [Alexis Svinartchouk]
* v1.5.39 [Resin CI]
* Update scripts submodule to v1.5.2 [Lorenzo Alberto Maria Ambrosi]
* Add clean-shrinkwrap script to postshrinkwrap step [Lorenzo Alberto Maria Ambrosi]
* v1.5.38 [Resin CI]
* Add mention to usbboot compatibility [Carlo Maria Curinga]
* v1.5.37 [Resin CI]
* Bump react dependency to v16.8.5 [Lorenzo Alberto Maria Ambrosi]
* v1.5.36 [Resin CI]
* Update etcher-sdk to ^2.0.9 [Alexis Svinartchouk]
* v1.5.35 [Resin CI]
* Downgrade electron 4.1.5 -> 3.1.9 [Alexis Svinartchouk]
* v1.5.34 [Resin CI]
* Use https url for fetching config, avoid redirection [Alexis Svinartchouk]
* win32: fix running diskpart when the tmp file path contains spaces [Alexis Svinartchouk]
* v1.5.33 [Resin CI]
* Fix gzipped files verification percentage and dmg verification. [Alexis Svinartchouk]
* v1.5.32 [Resin CI]
* Add CODEOWNERS file to repository [Lorenzo Alberto Maria Ambrosi]
* Export NPM_VERSION variable in Makefile [Lorenzo Alberto Maria Ambrosi]
* v1.5.31 [Resin CI]
* Update etcher-sdk to ^2.0.3 [Alexis Svinartchouk]
* Update electron to 4.1.5 [Alexis Svinartchouk]
* v1.5.30 [Resin CI]
* Don't show a dialog when the write fails. [Alexis Svinartchouk]
* Remove useless returns and unused parameter [Alexis Svinartchouk]
* v1.5.29 [Resin CI]
* Fix npm-shrinkwrap.json [Alexis Svinartchouk]
* Fix mixpanel events sampling rate [Lorenzo Alberto Maria Ambrosi]
* Add support for auto-updating feature [Giovanni Garufi]
* v1.5.28 [Resin CI]
* Update electron-builder to ^20.40.2 [Alexis Svinartchouk]
* Update etcher-sdk to ^2.0.1 [Alexis Svinartchouk]
* v1.5.27 [Resin CI]
* (Windows): Fix reading images from network drives when the tmp dir has spaces [Alexis Svinartchouk]
* v1.5.26 [Resin CI]
* (Windows): Fix reading images from network drives containing non ascii characters [Alexis Svinartchouk]
* v1.5.25 [Resin CI]
* New parameter in webview for opt-out analytics [Lorenzo Alberto Maria Ambrosi]
* v1.5.24 [Resin CI]
* Update building scripts to latest master [Lorenzo Alberto Maria Ambrosi]
* Add sample property to Mixpanel events [Lorenzo Alberto Maria Ambrosi]
* Update resin-corvus to ^2.0.3 [Alexis Svinartchouk]
* v1.5.23 [Resin CI]
* Configure versionbot to publish repo metadata to github pages [Giovanni Garufi]
* v1.5.22 [Resin CI]
* (Windows): Use full path to wmic as some systems don't have it in their PATH [Alexis Svinartchouk]
* v1.5.21 [Resin CI]
* Fix error when config.analytics was undefined [Alexis Svinartchouk]
* v1.5.20 [Resin CI]
* Fix reading images from network drives on windows [Alexis Svinartchouk]
* Don't try to flash when no device is selected [Alexis Svinartchouk]
* Reformat changelog [Giovanni Garufi]
* Avoid "Error: There is already a flash in progress" errors [Alexis Svinartchouk]
* Avoid "Invalid state percentage: null" errors [Alexis Svinartchouk]
* v1.5.19 [Resin CI]
* Update resin-corvus to ^2.0.2 [Alexis Svinartchouk]
* Better reporting of unhandled rejections to sentry [Alexis Svinartchouk]
* v1.5.18 [Resin CI]
* Update build scripts [Giovanni Garufi]
* v1.5.17 [Resin CI]
* Automatically publish github release from CI [Giovanni Garufi]
* v1.5.16 [Resin CI]
* Update scripts [Giovanni Garufi]
* Update .gitattributes to always use LF for EOL in json files [Giovanni Garufi]
* Add repo.yml for CI [Giovanni Garufi]
* v1.5.15 [Resin CI]
* Show the correct logo on usbboot devices on Ubuntu [Juan Cruz Viotti]
* v1.5.14 [Resin CI]
* Remove versionist from dev dependencies [Alexis Svinartchouk]
* Update etcher-sdk to ^1.3.10 [Alexis Svinartchouk]
* v1.5.13 [Resin CI]
* Update build scripts [Giovanni Garufi]
* v1.5.12 [Resin CI]
* Disable node gyp rebuild while running electron-builder [Alexis Svinartchouk]
* Update build scripts [Lorenzo Alberto Maria Ambrosi]
* v1.5.11 [Resin CI]
* Fixed broken Hombrew cask link for etcher [David Lozano Jarque]
* Remove no longer used travis and appveyor configs [Alexis Svinartchouk]
* v1.5.10 [Resin CI]
* Use APPDIR from env in the child writer [Alexis Svinartchouk]
* Update resin-scripts [Alexis Svinartchouk]
* Fix Makefile [Alexis Svinartchouk]
* v1.5.9 [Resin CI]
* upgrade(scripts): Use master branch of resin-scripts [Alexis Svinartchouk]
* Update etcher-sdk to 1.3.0 [Alexis Svinartchouk]
* v1.5.8 [Resin CI]
* Update ext2fs to 1.0.27 [Alexis Svinartchouk]
* v1.5.7 [Resin CI]
* Update docs [Robert Vojta]
* Add missing line for supporting flashing CM3+ [Lorenzo Alberto Maria Ambrosi]
* Fix copyright year [Robert Vojta]
* Fix electron links [Robert Vojta]
* Fix macOS version requirements [Robert Vojta]
* Fix electron links [Robert Vojta]
* Fix AppImages link [Robert Vojta]
* Fix blurred background image [Robert Vojta]
* Fix disappearing modal window [Robert Vojta]
* Remove screenshot [Lorenzo Alberto Maria Ambrosi]
* v1.5.6 [Resin CI]
* Target electron 3 runtime in babel options [Alexis Svinartchouk]
* v1.5.5 [Resin CI]
* Don't pass undefined sockets to ipc.server.emit() [Alexis Svinartchouk]
* Fix error when event.dataTransfer.files is empty [Alexis Svinartchouk]
* Fix error message not showing when an unsupported image is selected [Alexis Svinartchouk]
* Avoid `Invalid percentage` exceptions [Alexis Svinartchouk]
* Update etcher-sdk to 1.1.0 [Alexis Svinartchouk]
* v1.5.4 [Resin CI]
* Add missing step for submodule cloning in README [Lorenzo Alberto Maria Ambrosi]
* v1.5.3 [Resin CI]
* Bump version in npm-shrinkwrap.json [Lorenzo Alberto Maria Ambrosi]
* Fix changelog [Giovanni Garufi]
* Throw error if no commit is annotated with a changelog entry [Giovanni Garufi]
* v1.5.2 [Resin CI]
* Enable versionist editVersion [Lorenzo Alberto Maria Ambrosi]
* v1.5.1 [Resin CI]
* Removed lodash dependency in versionist.conf.js [Giovanni Garufi]
* Release v1.5.0 [Lorenzo Alberto Maria Ambrosi]
* Update npm-shrinkwrap.json to update drivelist [Alexis Svinartchouk]
* Wait 100ms before disconnecting if a message is being sent [Alexis Svinartchouk]
* Update etcher-sdk to ^1.0.7 [Alexis Svinartchouk]
* Don't use drivelist directly [Alexis Svinartchouk]
* Remove etcher-cli [Alexis Svinartchouk]
* Workaround a bug when 2 webviews are loaded at the same time. [Alexis Svinartchouk]
* Upgrade to Electron v3 [Lorenzo Alberto Maria Ambrosi]
* Double app:start test timeout [Alexis Svinartchouk]
* Increase svg icon test timeout [Alexis Svinartchouk]
* Rebuild node-sass before using it [Alexis Svinartchouk]
* Use npx branch of resin-scripts [Alexis Svinartchouk]
* Use npx to force npm version [Alexis Svinartchouk]
* Specify npm_version in .resinci.json [Alexis Svinartchouk]
* npm6, electron 1.8.8 [Alexis Svinartchouk]
* Move patches back to patches folder [Alexis Svinartchouk]
* Hardcode electron_version in node-pre-gyp patch [Alexis Svinartchouk]
* Update node-ext2fs to 1.0.25 [Alexis Svinartchouk]
* Remove napi-build-utils from npm-shrinkwrap [Alexis Svinartchouk]
* Fix npm-shrinkwrap.json and remove versionist [Alexis Svinartchouk]
* Update node-pre-gyp patch and move it to another folder [Alexis Svinartchouk]
* Update build scripts for electron-builder unresolved dependencies [Alexis Svinartchouk]
* Update styled-system to 3.1.11 (it was lost in a rebase) [Alexis Svinartchouk]
* Update etcher-sdk to ^1.0.2 and update npm-shrinkwrap.json [Alexis Svinartchouk]
* Update webpack to 4.27.0 and babel to 7.2.0 [Alexis Svinartchouk]
* Remove asar from devDependencies, update versionist [Alexis Svinartchouk]
* Remove etcher-sdk folder filtering from webpack config [Alexis Svinartchouk]
* update(etcher-sdk): Update etcher-sdk and shrinkwrap.json [Alexis Svinartchouk]
* update(etcher-sdk): Update etcher-sdk and shrinkwrap.json [Alexis Svinartchouk]
* fix(ci): Set node target to 6.14.4 [Alexis Svinartchouk]
* update(package): Update etcher-sdk and npm-shrinkwrap.json [Alexis Svinartchouk]
* Remove no longer used bluebird-retry [Alexis Svinartchouk]
* Remove styled-system from package.json [Alexis Svinartchouk]
* update(package): Update shrinkwrap.json [Alexis Svinartchouk]
* fix(build): Update resin scripts to build modules from source [Alexis Svinartchouk]
* fix(package): Fix shrinkwrap file [Alexis Svinartchouk]
* upgrade(package): Update to etcher-sdk@0.1.28 [Alexis Svinartchouk]
* upgrade(package): Update to etcher-sdk@0.1.27 [Alexis Svinartchouk]
* upgrade(package): Update to etcher-sdk@0.1.26 and fix npm-shrinkwrap [Alexis Svinartchouk]
* upgrade(package): Update to etcher-sdk@0.1.23 [Alexis Svinartchouk]
* fix(gui): Always show the "success" screen [Alexis Svinartchouk]
* upgrade(package): Update to etcher-sdk@0.1.16 [Alexis Svinartchouk]
* upgrade(package): Update to etcher-sdk@0.1.15 [Alexis Svinartchouk]
* fix(gui): Disable compute modules selection during preparation [Alexis Svinartchouk]
* fix(gui): Allow drives to be objects [Alexis Svinartchouk]
* fix(shared): Fix getDriveImageCompatibilityStatuses() and tests [Alexis Svinartchouk]
* fix(gui): Allow undefined eta [Alexis Svinartchouk]
* upgrade(package): Update to etcher-sdk@0.1.13 [Alexis Svinartchouk]
* upgrade(package): Update to etcher-sdk@0.1.9 [Alexis Svinartchouk]
* fix(tests): Fix gui tests [Alexis Svinartchouk]
* upgrade(package): Update to etcher-sdk@0.1.7 [Alexis Svinartchouk]
* fix(image-selection): Only trigger digest loop after setting image [Jonas Hermsmeier]
* fix(tests): Remove throw if no percentage or eta test [Alexis Svinartchouk]
* feat(driverless) show driverless devices [Alexis Svinartchouk]
* fix(package): remove diskpart helper, it is in the sdk now [Alexis Svinartchouk]
* fix(store): Lowercase extensions before comparing [Alexis Svinartchouk]
* fix(store): Restore drive object validity check [Jonas Hermsmeier]
* upgrade(package): Update etcher-sdk git ref [Jonas Hermsmeier]
* fix(test): Sort compressed extensions before comparing [Jonas Hermsmeier]
* upgrade(package): Update mime-types 2.1.15 -> 2.1.18 [Jonas Hermsmeier]
* fix(test): Sort supported extensions to fix order mismatch [Jonas Hermsmeier]
* fix(lib): Fix MIME type exclusion condition [Jonas Hermsmeier]
* fix(test): Turn SDK integration tests for the GUI back on [Jonas Hermsmeier]
* fix(lib): Fix use of non-existent dependency [Jonas Hermsmeier]
* Update etcher-sdk and load DriverlessDeviceAdapter on windows [Alexis Svinartchouk]
* lint [Alexis Svinartchouk]
* Remove lib/sdk and its tests [Alexis Svinartchouk]
* Replace imageStream with etcher-sdk in the react file selector [Alexis Svinartchouk]
* Update etcher-sdk and use it in the cli [Alexis Svinartchouk]
* Remove usage of old sdk in supported-formats [Alexis Svinartchouk]
* Handle the last fail as an error if all devices failed [Alexis Svinartchouk]
* Show raspberry pi usbboot update progress in devices list [Alexis Svinartchouk]
* Allow flashing from sources for which we don't know the compressed size [Alexis Svinartchouk]
* Integrate etcher-sdk [Alexis Svinartchouk]
* Add napi-build-utils to platformSpecificDependencies [Alexis Svinartchouk]
* Update node-gyp to 3.8.0 [Alexis Svinartchouk]
* Update winusb-driver-generator to 1.2.4 [Alexis Svinartchouk]
* Rename resin-io modules to balena-io [Lorenzo Alberto Maria Ambrosi]
* Update build scripts for electron-builder unresolved dependencies [Lorenzo Alberto Maria Ambrosi]
* Fix linting error for winusb-driver-generator [Lorenzo Alberto Maria Ambrosi]
* Fix incorrect drives list on Linux [Lorenzo Alberto Maria Ambrosi]
* Bump mountutils to v1.3.16 for XCode build fix [Lorenzo Alberto Maria Ambrosi]
* Switch to fork of xxhash with XCode build fix [Lorenzo Alberto Maria Ambrosi]
* Make winusb-driver-generator optional (win only) [Lorenzo Alberto Maria Ambrosi]
* Fix error with OSX XCode build [Lorenzo Alberto Maria Ambrosi]
* Update nodejs req to 6.11 (fixes package build) [Lorenzo Alberto Maria Ambrosi]
* docs: Add info about required npm version [Agnieszka Domanska]
* ProgressBar.disabled prop is a boolean [Alexis Svinartchouk]
* Update scripts to build on other Linux distros [Lorenzo Alberto Maria Ambrosi]
* Changed “Drive Contains Image” to “Drive Mountpoint Contains Image” [Alexis Svinartchouk]
* Restored offline success-banner style [Lorenzo Alberto Maria Ambrosi]
* Refinements to the README [Jacalz]
* Update balena-etcher .deb and .rpm install steps [Lorenzo Alberto Maria Ambrosi]
* Remove travis-ci and appveyor badges [Lorenzo Alberto Maria Ambrosi]
* New dmg package background assets [Lorenzo Alberto Maria Ambrosi]
* Invert analytics event probability [Lorenzo Alberto Maria Ambrosi]
* v1.4.9 [Lorenzo Alberto Maria Ambrosi]
* Added React component for the Flash Results button [Lorenzo Alberto Maria Ambrosi]
* Added React component for the Flash Another button [Lorenzo Alberto Maria Ambrosi]
* Remove forwarding of SafeWebview console messages [Lorenzo Alberto Maria Ambrosi]
* Customize Mixpanel configs [Lorenzo Alberto Maria Ambrosi]
* Use explicit names for safe-webview events [Lorenzo Alberto Maria Ambrosi]
* Use https for fetching sub modules [Jacob]
* Add `.wic` image extension as supported format [Otavio Salvador]
* Update URLs in GUI to balena [Chris Crocker-White]
* Update MacOS installation instructions. [Randall Wood]
* Updated Chocolatey section [Eate]
* Fix update notifier error popping up on v1.4.1->1.4.8 [Lorenzo Alberto Maria Ambrosi]
* v1.4.8 [Lorenzo Alberto Maria Ambrosi]
* Moved back the write cancel button [Lorenzo Alberto Maria Ambrosi]
* Add flashing info while showing webview [Lorenzo Alberto Maria Ambrosi]
* Added featured-project while flashing [Lorenzo Alberto Maria Ambrosi]
* Reject drives with null size (fixes pretty-bytes error) [Lorenzo Alberto Maria Ambrosi]
* fix(usbboot): Limit usbboot transfers to 1MiB [Alexis Svinartchouk]
* lint: don't run codespell on svg files [Alexis Svinartchouk]
* v1.4.7 [Lorenzo Alberto Maria Ambrosi]
* Modify versionist.conf.js to match new internal commit guidelines [Lorenzo Alberto Maria Ambrosi]
* Update application name & copyright [Lorenzo Alberto Maria Ambrosi]
* Add balena iconset & osx installer background [Lorenzo Alberto Maria Ambrosi]
* refactor(GUI): Convert Select Image button to Rendition [amdomanska]
* docs: Fix typo in contributing guidelines [Lucian Buzzo]
* v1.4.6 [Lorenzo Alberto Maria Ambrosi]
* Put flash cancel button in foreground [Lorenzo Alberto Maria Ambrosi]
* Change resin.io to balena.io [Lorenzo Alberto Maria Ambrosi]
* Add new logos [Lorenzo Alberto Maria Ambrosi]
* refactor(GUI): Convert Progress Button to Rendition [amdomanska]
* Enable React lint rules [Lorenzo Alberto Maria Ambrosi]
* Use Resin CI scripts to build Etcher [Juan Cruz Viotti]
* Change spectron port [Lorenzo Alberto Maria Ambrosi]
* Fix incorrect file constraint path [Lorenzo Alberto Maria Ambrosi]
* fix: Fix 64 bit detection on arm [Alexis Svinartchouk]
* fix: Provide a Buffer to xxhash.Stream [Alexis Svinartchouk]
* fix: Correct 1.4.5 release date & remove checklist [Lorenzo Alberto Maria Ambrosi]
* v1.4.5 [Lorenzo Alberto Maria Ambrosi]
* Use fork of node-usb to disable libudev [Lorenzo Alberto Maria Ambrosi]
* Add 'debug' in place of 'logException' [Lorenzo Alberto Maria Ambrosi]
* fix(GUI): Warn when requiring usb fails [Alexis Svinartchouk]
* Change spectron port to run tests [Lorenzo Alberto Maria Ambrosi]
* makefile: Update etcher deb/rpm publishing [Michael Angelos Simos]
* doc: Update etcher package repo installation and publishing info [Michael Angelos Simos]
* fix(GUI): Add missing 'store' require [Alexis Svinartchouk]
* update(sudo-prompt): Update sudo-prompt to 8.2.3 [Alexis Svinartchouk]
* gui: Also blacklist match against device & raw path [Jonas Hermsmeier]
* Update drivelist to v6.4.2 [Lorenzo Alberto Maria Ambrosi]
* Change port so not to overlap with other builds [Lorenzo Alberto Maria Ambrosi]
* Makefile: Don't use tilde in rpm versions [Juan Cruz Viotti]
* minifix: add "make webpack" to travis-ci build script [Salvatore Zappalà]
* fix(GUI): Remove results data from cancel event [Lorenzo Alberto Maria Ambrosi]
* fix(webpack): Add etcher.js to webpack build [Lorenzo Alberto Maria Ambrosi]
* fix(GUI): Add data on events [Lorenzo Alberto Maria Ambrosi]
* fix(cli): Don't use electron to get USER_DATA_DIR in CLI [Jonas Hermsmeier]
* fix(test): Move tests to correct scope [Alexis Svinartchouk]
* Load usbboot adapter on start on GNU/Linux if running as root. [Alexis Svinartchouk]
* upgrade(package): Bump mountutils to v1.3.15 [Jonas Hermsmeier]
* upgrade(package): Bump drivelist to v6.4.0 [Jonas Hermsmeier]
* fix(writer): Set EVALIDATION on blockmap checksum errors [Jonas Hermsmeier]
* Add instructions for installing and uninstalling on Solus. [Jacob]
* resinci: Set private: true in package.json to avoid running npm builds [John (Jack) Brown]
* chore(webpack): Set NODE_ENV to production [Jonas Hermsmeier]
* fix(gui): Fix missing promisify in file picker model [Jonas Hermsmeier]
* upgrade(package): Update winusb-driver-generator [Jonas Hermsmeier]
* feat(gui): Enable device specific constraints for file selection [Jonas Hermsmeier]
* fix(app): Fix settings being unavailable when packaged [Jonas Hermsmeier]
* refactor(gui): Add separating borders to file selector [Jonas Hermsmeier]
* feat(gui): Add full filename to file selector [Jonas Hermsmeier]
* refactor(gui): Refactor file picker fs I/O [Jonas Hermsmeier]
* fix(webpack): Exclude all node externals / node_modules [Jonas Hermsmeier]
* fix(gui): Fix an inifinite digest loop trigger [Jonas Hermsmeier]
* upgrade(package): Update lodash to 4.17.10 [Jonas Hermsmeier]
* fix(GUI): file-picker performance and design improvements [Benedict Aas]
* fix(gui): Fix error with empty drive blacklist [Jonas Hermsmeier]
* refactor(local-settings): Log JSON parse errors [Jonas Hermsmeier]
* chore(app): Use settings instead of env vars [Jonas Hermsmeier]
* feat: Use settings for feature control [Jonas Hermsmeier]
* refactor(store): Return unsubscribe directly [Jonas Hermsmeier]
* minifix(GUI): move success banner back down (#2367) [Benedict Aas]
* fix(GUI): restrict webkit drag to header [Benedict Aas]
* fix(app): Fix config path on Windows, typos [Jonas Hermsmeier]
* fix(test): Fix lint errors & tests [Jonas Hermsmeier]
* feat(app): Make store change-observable [Jonas Hermsmeier]
* refactor(gui): Move shared models to app/models [Jonas Hermsmeier]
* test(settings): Update test specs accordingly [Jonas Hermsmeier]
* refactor: Remove use of localStorage for local settings [Jonas Hermsmeier]
* refactor: Move shared/store.js -> gui/app/models/store.js [Jonas Hermsmeier]
* Center content independent to window resolution. [Benedict Aas]
* chore(package): Add npm run script for webpack [Jonas Hermsmeier]
* test(eslint): Fix JSX not being linted (#2358) [Jonas Hermsmeier]
* upgrade(package): Update React to v16 (#2355) [Jonas Hermsmeier]
* minifix(GUI): resolve react missing key field warning (#2354) [Benedict Aas]
* fix(diskpart): Fix diskpart argv when tmpdir contains spaces [Jonas Hermsmeier]
* fix: add missing files module [Benedict Aas]
* fix: ensure file-picker is slicing arrays (#2350) [Benedict Aas]
* Add electron-native file-picker component. [Benedict Aas]
* Hide unsafe mode option toggle with an env var. [Benedict Aas]
* Fix devtools key binding for Windows in SUPPORT.md [CherryDT]
* feat: blacklist devices by device path (#2345) [Benedict Aas]
* feat(gui): Add desktop notification setting [Jonas Hermsmeier]
* feat(GUI): use design background and drive size ordering (#2341) [Benedict Aas]
* Add a convenience Storage class on top of localStorage. [Benedict Aas]
* feat(GUI): use new design blue and spacing (#2327) [Benedict Aas]
* minifix(gui): Don't check for updates when in resin [Jonas Hermsmeier]
* feat(gui): Add ability to set analytics tokens via env [Jonas Hermsmeier]
* feat(GUI): env var toggle autoselecting all valid drives (#2306) [Benedict Aas]
* feat(gui): Add resin update lock based on inactivity [Jonas Hermsmeier]
* upgrade(package): Bump drivelist 6.1.7 -> 6.2.2 [Jonas Hermsmeier]
* doc(README): Use ubuntu keyserver for apt-key [Jonas Hermsmeier]
* fix(webpack): don't rewrite import paths inside node_modules (#2195) [Benedict Aas]
* minifix(gui): Only enable Kiosk Mode when FULLSCREEN is set [Jonas Hermsmeier]
* Add font-awesome. [Benedict Aas]
* Add support for configuration files [Jonas Hermsmeier]
* Use GTK-3 darkTheme mode. [Benedict Aas]
* Add environment variable to toggle fullscreen. [Benedict Aas]
* feat(GUI): blacklist drives with an env var (#2315) [Benedict Aas]
* Show selected drives below drive selection step. [Benedict Aas]
* feat(GUI): add drive quantity to flash analytics (#2298) [Benedict Aas]
* minifix: add jsx files to gitattributes and attribute jviotti (#2302) [Benedict Aas]
* minifix(GUI): negate predicate to show help icon (#2300) [Benedict Aas]
* Add a button to cancel the flash process. [Benedict Aas]
* feat(gui): Add CTA in drivelist, update drive download modal [Jonas Hermsmeier]
* feat(gui): Add simple confirmation modal [Jonas Hermsmeier]
* fix(GUI): fix multi-writes analytics (#2295) [Benedict Aas]
* Download usbboot drivers installer when clicking a driverless usbboot device on Windows. [Juan Cruz Viotti]
* Allow disabling links and hiding help link with an env var. [Benedict Aas]
* minifix(writer): Increase HWM for verification readstream [Jonas Hermsmeier]
* feat(writer): Use xxHash instead of SHA512 for verification [Jonas Hermsmeier]
* doc: Update MAINTAINERS.md with Symantec Whitelisting [Jonas Hermsmeier]
* v1.4.4 [Jonas Hermsmeier]
* fix(tests): Revert unintended change to raspberrypi-raw.dmg [Jonas Hermsmeier]
* minifix: replace succeeded with successful in messages (#2273) [Benedict Aas]
* Keep single warning-drive-image pairs selected. [Benedict Aas]
* refactor(GUI): make the finish notification message concise (#2268) [Benedict Aas]
* fix(GUI): remove success screen dots with a quantity of zero (#2227) [Benedict Aas]
* refactor: use word successful instead of succeeded [Benedict Aas]
* v1.4.3 [Jonas Hermsmeier]
* fix(gui): Fix zero-zero devices when verify is disabled [Jonas Hermsmeier]
* fix(gui): De-serialize errors from flashResults [Jonas Hermsmeier]
* fix(usbboot): Move blob handling to SDK [Jonas Hermsmeier]
* refactor(usbboot): Move lib/blobs/usbboot/ -> lib/sdk/adapters/usbboot/blobs [Jonas Hermsmeier]
* v1.4.2 [Jonas Hermsmeier]
* Revert using native binding to clean disks on Windows [Jonas Hermsmeier]
* Fix usbboot blob loading [Jonas Hermsmeier]
* fix(image-writer): Remove use of _.isError [Jonas Hermsmeier]
* fix(GUI): display untitled device when device lacks description [Benedict Aas]
* feat(GUI): display succeeded and failed devices on finish screen (#2206) [Benedict Aas]
* Exclude RAID devices from drive selection list [Jonas Hermsmeier]
* upgrade(package): Update drivelist 6.1.5 -> 6.1.7 [Jonas Hermsmeier]
* minifeat(GUI): prefix multiple devices label with quantity (#2204) [Benedict Aas]
* feat(GUI): remove unnecessary status dots (#2202) [Benedict Aas]
* Make the progress button blue on verification. [Benedict Aas]
* fix(ci): Fix pip installation [Jonas Hermsmeier]
* fix(child-writer): Fix handling of user errors over IPC [Jonas Hermsmeier]
* v1.4.1 [Jonas Hermsmeier]
* fix(webpack): Exclude package.json from UI bundle [Jonas Hermsmeier]
* Enable nodeGypRebuild for Etcher builds [John (Jack) Brown]
* v1.4.0 [Jonas Hermsmeier]
* doc(README): Remove Mac OS from Travis CI badge label [Jonas Hermsmeier]
* fix(writer): Fix erronous event handling in write pipeline [Jonas Hermsmeier]
* fix(gui): Fix "about" menu entry [Jonas Hermsmeier]
* fix(writer): Fix writer progress state values [Jonas Hermsmeier]
* upgrade(package): Bump drivelist to v6.1.5 [Jonas Hermsmeier]
* Move the drive selector warning dialog to the flash step. [Benedict Aas]
* fix(gui): Ensure image/drive size displayed on new line [Jonas Hermsmeier]
* fix(writer): Fix succeeded flash count in progress state [Jonas Hermsmeier]
* test(lint): Update codespell 1.11.0 -> 1.12.0 [Jonas Hermsmeier]
* fix(image-writer): Don't inherit environment on Windows [Jonas Hermsmeier]
* Add spacing to the drive warning icon. [Benedict Aas]
* Ensure flash quantity fields are finite. [Benedict Aas]
* Use multi-drive methods with drive-list warning button. [Benedict Aas]
* Expose all flash state fields to the store. [Benedict Aas]
* Update Electron to v1.7.13 [Jonas Hermsmeier]
* fix(lint): Fix html-lint error about "lang" attr [Jonas Hermsmeier]
* test(lint): Replace ASCII-only check with ESLint rule [Jonas Hermsmeier]
* chore(ci): Update copyright years in .resinci.json [Jonas Hermsmeier]
* upgrade(package): Bump spectron 3.7.2 -> 3.7.3 [Jonas Hermsmeier]
* test(spectron): Refactor tests, dereference app after use [Jonas Hermsmeier]
* test(image-stream): Use local dir instead of tmpdir [Jonas Hermsmeier]
* Line wrap selector size subtitles wholly [Benedict Aas]
* Hide the size label given multiple devices. [Benedict Aas]
* chore(webpack): Enable realtime progress display [Jonas Hermsmeier]
* Inline middle-ellipsis package as util. [Benedict Aas]
* chore(package): Replace custom missing require check [Jonas Hermsmeier]
* chore: don't lint frontend files (ie HTML) on the Node CLI pipeline [Juan Cruz Viotti]
* fix(webpack): Use fixed enhanced-resolve [Juan Cruz Viotti]
* fix(windows): Disable rebuilding bindings in electron-builder [Jonas Hermsmeier]
* Use correct usbboot blob path in AppImages. [Benedict Aas]
* doc(PUBLISHING): Remove link to Gitter channel [Jonas Hermsmeier]
* doc(cli): Replace Gitter with forums link in CLI help [Jonas Hermsmeier]
* chore(ci): Remove Gitter.im webhooks from CI services [Jonas Hermsmeier]
* doc(README): Replace Gitter badge with Discourse [Jonas Hermsmeier]
* upgrade(package): Bump drivelist 6.0.4 -> 6.1.3 [Jonas Hermsmeier]
* upgrade(package): Update winusb-driver-generator to v1.1.7 [Jonas Hermsmeier]
* Fix status dots to their position. [Benedict Aas]
* docs: point users to forums instead of Gitter [Juan Cruz Viotti]
* refactor: multi-writes preparatory changes (#2124) [Benedict Aas]
* fix(gui): Fix devices passed to writer [Jonas Hermsmeier]
* Display image size for comparison if drive is too small [Jonas Hermsmeier]
* fix(drive-scanner): Warn on usbboot load error on Linux [Jonas Hermsmeier]
* fix(writer): Fix state verification count [Jonas Hermsmeier]
* feat(cli): Display number of active cards [Jonas Hermsmeier]
* Implement writing to multiple destinations simultaneously [Jonas Hermsmeier]
* fix(gui): Fix usbboot blob dir path [Jonas Hermsmeier]
* fix(gui): Fix usbboot drive icon path [Jonas Hermsmeier]
* fix(scanner): Enable usbboot on Linux if run as root [Jonas Hermsmeier]
* chore: Allow namespaced requires to be sanity-checked Fixes #2120 [Andrew Scheller]
* Add colorised multi-writes progress status dots. [Benedict Aas]
* Use SVG contents list in main template. [Benedict Aas]
* Replace Helvetica as the main font with Roboto. [Benedict Aas]
* fix: stop autoselecting empty value in store [Benedict Aas]
* Remove stale JSON object plainifying in store [Benedict Aas]
* Move memoize function to shared utils. [Benedict Aas]
* fix(package): Fix extraneous dependencies [Jonas Hermsmeier]
* chore(package): Remove crc32-stream dependency [Jonas Hermsmeier]
* upgrade(package): Update asar 0.10.0 -> 0.14.2 [Jonas Hermsmeier]
* upgrade(package): Update bindings 1.2.1 -> 1.3.0 [Jonas Hermsmeier]
* upgrade(package): Update nan 2.3.5 -> 2.9.2 [Jonas Hermsmeier]
* upgrade(package): Update pkg 4.1.1 -> 4.3.0 [Jonas Hermsmeier]
* fix(perf): Remove support for CRC32 checksumming [Jonas Hermsmeier]
* Revert "upgrade(package): versionist 2.8.1 -> 2.13.0" [Jonas Hermsmeier]
* upgrade(package): Update electron-mocha 6.0.0 -> 6.0.1 [Jonas Hermsmeier]
* fix(shrinkwrap): Fix resolved URL of git repo [Jonas Hermsmeier]
* test(available-drives): Fix set expected set property [Jonas Hermsmeier]
* upgrade(package): mochainon 1.0.0 -> 2.0.0 [Jonas Hermsmeier]
* upgrade(package): eslint-plugin-import 2.8.0 -> 2.9.0 [Jonas Hermsmeier]
* upgrade(package): eslint-plugin-jsdoc 3.3.1 -> 3.5.0 [Jonas Hermsmeier]
* upgrade(package): eslint-plugin-node 6.0.0 -> 6.0.1 [Jonas Hermsmeier]
* upgrade(package): html-angular-validate 0.1.9 -> 0.2.3 [Jonas Hermsmeier]
* upgrade(package): versionist 2.8.1 -> 2.13.0 [Jonas Hermsmeier]
* upgrade(package): sass-lint 1.10.2 -> 1.12.1 [Jonas Hermsmeier]
* upgrade(package): nock 9.0.9 -> 9.2.3 [Jonas Hermsmeier]
* upgrade(package): mocha 3.2.0 -> 5.0.1 [Jonas Hermsmeier]
* upgrade(package): electron-mocha 5.0.0 -> 6.0.0 [Jonas Hermsmeier]
* fix(gui): Disable throttling timers when in background [Jonas Hermsmeier]
* upgrade(package): Update resin-cli-visuals to 1.4.1 [Jonas Hermsmeier]
* doc(CONTRIBUTING): Add webpack step to instructions [Jonas Hermsmeier]
* fix(image-writer): Fix missing error argv [Jonas Hermsmeier]
* chore(package): Update copyright years [Jonas Hermsmeier]
* fix(webpack): Fix not resolving .json [Jonas Hermsmeier]
* fix(scripts): Add missing types to architecture-convert.sh usage (#2089) [Andrew Scheller]
* Add missing name param to verifyNoNilFields JSDoc example. [Benedict Aas]
* Add drive multi-selection to the store. [Benedict Aas]
* Move CLI write preparation logic into SDK [Jonas Hermsmeier]
* chore: fixup 'distclean' rule to also delete `generated` directory (#2077) [Andrew Scheller]
* chore: only publish production packages to Bintray (#2076) [Juan Cruz Viotti]
* chore: add "make webpack" as a Concourse build step (#2070) [Juan Cruz Viotti]
* fix(package): Add fsevents to platform specific deps (#2065) [Jonas Hermsmeier]
* refactor(GUI): remove selection-state clear options to simplify (#2043) [Benedict Aas]
* Add spacing to the drive-selector warning/error labels. [Benedict Aas]
* refactor: consolidate store-state nil-checking (#2062) [Benedict Aas]
* Resolve JSX files [Benedict Aas]
* Separate SVG component's path and content attributes. [Benedict Aas]
* Warn the user on selection of large drives. [Benedict Aas]
* Make all `.label` tags' text bold and remove need for `<b>` tags. [Benedict Aas]
* Make the drive-selector button orange on warnings. [Benedict Aas]
* fix(lib): Fix debug namespaces [Jonas Hermsmeier]
* fix(app): Fix enabling debug output [Jonas Hermsmeier]
* fix(cli): Remove O_DIRECT & O_EXCL [Jonas Hermsmeier]
* Consolidate low-level components into Etcher SDK [Jonas Hermsmeier]
* Use native code to clean drives on Windows [Jonas Hermsmeier]
* Support building Etcher on armv8 [Jonas Hermsmeier]
* feat(GUI): bundle the GUI code with Webpack  (#1943) [Juan Cruz Viotti]
* Remove stale `invalidKey` check in store. [Benedict Aas]
* upgrade(package): Update node-sass 4.5.3 -> 4.7.2 [Jonas Hermsmeier]
* Log the banner load event to analytics. [Benedict Aas]
* Increase UV_THREADPOOL_SIZE to allocate 4 threads per CPU [Jonas Hermsmeier]
* test(image-stream): Fix lint error in tester [Jonas Hermsmeier]
* chore(package): Remove unused dependency `trackjs` [Jonas Hermsmeier]
* test: Remove unnecessary `file-exists` dependency [Jonas Hermsmeier]
* fix sanity-checks [Benedict Aas]
* pass linter [Benedict Aas]
* test modal [Benedict Aas]
* test other pages [Benedict Aas]
* Replace template paths with template contents. [Benedict Aas]
* Rename selection-state and store functions. [Benedict Aas]
* feat(GUI): add descriptive name to modals (#2036) [Benedict Aas]
* upgrade(package): Update eslint plugins [Jonas Hermsmeier]
* Remove unused robot protocol [Jonas Hermsmeier]
* Upgrade eslint to use object-curly-newline options. [Benedict Aas]
* refactor(test): Remove dependency on `tmp` [Jonas Hermsmeier]
* Add icon next to drive size when compatibility warnings exist. [Benedict Aas]
* Fix "Array buffer allocation failed" when flashing some .dmg images [Jonas Hermsmeier]
* feat(gui): Add ref params to homepage links in menu [Jonas Hermsmeier]
* Replace ng-show/hide with ng-if on main page. [Benedict Aas]
* fix: move tabindex attrs to button from within [Benedict Aas]
* doc(github): Update instructions in ISSUE_TEMPLATE [Jonas Hermsmeier]
* fix(gui): Fix DevTools opening in docked mode [Jonas Hermsmeier]
* Replace Lodash templates with arrow-functions. [Benedict Aas]
* Add `lib/gui/app` folder to ease into Webpack usage. [Benedict Aas]
* upgrade(package): Update yargs 4.7.1 -> 11.0.0 (#1995) [Jonas Hermsmeier]
* Specify UTF-8 encoding with meta tag. [Benedict Aas]
* fix(gui): Fix menu's application name (#1996) [Jonas Hermsmeier]
* upgrade(package): Bump debug 2.6.8 -> 3.1.0 (#1994) [Jonas Hermsmeier]
* chore: encode complete paths to patched file in patches/ (#1987) [Juan Cruz Viotti]
* chore: declare Concourse node-cli pipeline's entrypoint (#1988) [Juan Cruz Viotti]
* v1.3.1 [Jonas Hermsmeier]
* chore: revise Concourse CI related npm scripts (#1977) [Juan Cruz Viotti]
* Update Electron to v1.7.11 [Jonas Hermsmeier]
* fix(lib): Fix readonly property typo (#1986) [Jonas Hermsmeier]
* upgrade(package): Bump mountutils 1.3.8 -> 1.3.10 (#1983) [Jonas Hermsmeier]
* chore: add node-cli.node Resin CI option (#1978) [Juan Cruz Viotti]
* chore: stop testing macOS on Travis CI (#1979) [Juan Cruz Viotti]
* Fix selection of images in folders with file extension on Mac OS [Jonas Hermsmeier]
* Fix Etcher not working / crashing on older Windows systems [Jonas Hermsmeier]
* doc(MAINTAINERS): Elaborate on the process of releasing (#1876) [Jonas Hermsmeier]
* Test that IPC verbosity is off [Benedict Aas]
* fix(usb): Ignore errors if winusb doesn't load (#1970) [Jonas Hermsmeier]
* upgrade: `electron-mocha` to v5.0.0 (#1973) [Juan Cruz Viotti]
* chore: add .resinci.json builder configuration object (#1965) [Juan Cruz Viotti]
* fix(shrinkwrap): Update unbzip2-stream branch commit (#1968) [Jonas Hermsmeier]
* fix(writer): Silence IPC output on stdout (#1961) [Jonas Hermsmeier]
* v1.3.0 [Jonas Hermsmeier]
* upgrade(package): Update drivelist 5.2.12 -> 6.0.0 (#1953) [Jonas Hermsmeier]
* chore: move updates disabling logic out of the Makefile (#1939) [Juan Cruz Viotti]
* chore: re-organize files inside assets/ (second try) (#1952) [Juan Cruz Viotti]
* Ensure the writer process dies when the GUI application is killed. [Juan Cruz Viotti]
* minifix(GUI): run elevated process asynchronously on Windows (#1950) [Juan Cruz Viotti]
* fix(gui): Re-enable application menu (#1888) [Jonas Hermsmeier]
* upgrade(package): Bump mountutils 1.2.2 -> 1.3.8 (#1946) [Jonas Hermsmeier]
* upgrade(package): Bump electron 1.7.9 -> 1.7.10 (#1947) [Jonas Hermsmeier]
* upgrade(package): Bump drivelist 5.2.4 -> 5.2.12 (#1945) [Jonas Hermsmeier]
* Fix trailing space in environment variables during Windows elevation. [Juan Cruz Viotti]
* Remove Angular dependency from image-writer. [Benedict Aas]
* chore: re-organize files inside assets/ (#1941) [Juan Cruz Viotti]
* chore: declare Concourse dependencies in package.json (#1938) [Juan Cruz Viotti]
* docs: Add WoeUSB as an alternative tool to burn Windows USB images(2) [林博仁(Buo-Ren Lin)]
* docs: Add WoeUSB as an alternative tool to burn Windows USB images [林博仁]
* chore: make `test` npm script run everything we run on the CI services (#1937) [Juan Cruz Viotti]
* fix(writer): Add EBUSY to transient errors on Linux (#1918) [Jonas Hermsmeier]
* chore: add Concourse related NPM scripts (#1933) [Juan Cruz Viotti]
* chore: get rid of npx (#1929) [Juan Cruz Viotti]
* upgrade(package): Bump electron-builder 19.9.1 -> 19.40.0 (#1905) [Jonas Hermsmeier]
* fix(package): Fix noodled merge of shrinkwrap file (#1924) [Jonas Hermsmeier]
* feat(writer): Add read/write retry delays (#1919) [Jonas Hermsmeier]
* refactor(scripts): Update clean-shrinkwrap script (#1816) [Jonas Hermsmeier]
* Fix small docs typo [Andrew Scheller]
* chore: setup a Spectron integration test suite (#1884) [Juan Cruz Viotti]
* Display connected Compute Modules even if Windows doesn't have the necessary drivers to act on them. [Juan Cruz Viotti]
* Don't send analytics events when attempting to toggle a disabled drive. [Juan Cruz Viotti]
* chore(appveyor): build x86 on real x86 machines (#1912) [Juan Cruz Viotti]
* docs: add high level manual testing script (#1874) [Juan Cruz Viotti]
* v1.2.1 (#1906) [Jonas Hermsmeier]
* chore: pass a dictionary to codespell.py (#1717) [Juan Cruz Viotti]
* Fix handling of temporary read/write errors [Jonas Hermsmeier]
* Don't send initial Mixpanel events before "Anonymous Tracking" settings are loaded. [Juan Cruz Viotti]
* upgrade: `resin-corvus` to v1.0.0-beta.31 (#1902) [Juan Cruz Viotti]
* fix(versionist): Ignore case of Change-Type value (#1847) [Jonas Hermsmeier]
* minifix: hide drive selector hyphen when no size info (#1900) [Benedict Aas]
* chore(ci): Attempt to fix TravisCI OSX builds (#1897) [Andrew Scheller]
* v1.2.0 (#1846) [Jonas Hermsmeier]
* Fix verification step reading from the cache [Jonas Hermsmeier]
* Display actual write speed [Jonas Hermsmeier]
* upgrade(package): Bump sudo-prompt 6.1.0 -> 8.0.0 (#1861) [Jonas Hermsmeier]
* fix(child-writer): Reduce env vars passed during elevation (#1872) [Jonas Hermsmeier]
* Fix bzip2 streaming with the new pipelines [Jonas Hermsmeier]
* fix(writer): Fix verify size for unaligned images (#1868) [Jonas Hermsmeier]
* chore: add some more typos to the dictionary (#1864) [Andrew Scheller]
* fix(writer): Emit checksum event when verifying bmaps (#1859) [Jonas Hermsmeier]
* fix(writer): Don't calculate checksum before block-stream (#1858) [Jonas Hermsmeier]
* fix(gui): Re-enable printing progress in console (#1853) [Jonas Hermsmeier]
* fix(gui): Disable outlines (#1854) [Jonas Hermsmeier]
* fix(s3): Fix EAI_AGAIN error at startup with no internet connection (#1855) [Andrew Scheller]
* fix(drive-scanner): Dynamically get unsafe mode setting (#1852) [Jonas Hermsmeier]
* fix(child-writer): Pass parent env during elevation (#1851) [Jonas Hermsmeier]
* fix(store): Fix "Missing state eta" error on Infinity/NaN (#1850) [Jonas Hermsmeier]
* upgrade(ipc): Update node-ipc 8.9.2 -> 9.1.1 (#1836) [Jonas Hermsmeier]
* fix(child-writer): Ensure tmpdir path has trailing slash (#1849) [Jonas Hermsmeier]
* doc(MAINTAINERS): Fix changelog make target, reword screenshot (#1848) [Jonas Hermsmeier]
* fix(child-writer): Handle exits due to a signal (#1843) [Jonas Hermsmeier]
* feat(writer): Implement streaming pipelines (#1671) [Jonas Hermsmeier]
* fix(SDK): disable usbboot adapter on GNU/Linux (#1841) [Juan Cruz Viotti]
* chore: revert "chore: don't zip AppImages" (#1842) [Juan Cruz Viotti]
* docs: etcher-image-stream was moved to the main etcher repo (#1830) [Sven Dowideit]
* fix(CLI): add check for drive flag with yes flag (#1753) [Josh Leeb-du Toit]
* Add the Python version (2.7) to the CONTRIBUTING doc. [Benedict Aas]
* Add the progress and status to the window title. [Benedict Aas]
* Remove Linux elevation meant for usbboot. [Benedict Aas]
* fix(sdk): Remove event listeners on unsubscribe (#1834) [Jonas Hermsmeier]
* Remove duplicate debug enabling in usbboot module. [Benedict Aas]
* fix(sdk): Correct "subscribe" typos (#1832) [Jonas Hermsmeier]
* fix: Correct image.size usage in tests and code-comments (#1833) [Andrew Scheller]
* fix(gui): Don't check elevation on start on Windows (#1822) [Jonas Hermsmeier]
* feat(sdk): Implement continuous scanning (#1814) [Jonas Hermsmeier]
* fix(scripts): Fix pip install in docker (#1818) [Jonas Hermsmeier]
* fix(usbboot): increase device reboot delay a little bit (#1815) [Juan Cruz Viotti]
* fix: set debug env variable on remote electron process (#1789) [Benedict Aas]
* feat(GUI): use tabindex and focus to navigate (#1745) [Benedict Aas]
* test(Makefile): Update codespell excludes (#1811) [Jonas Hermsmeier]
* style(usbboot): wait before scanning drives after the file server phase (#1799) [Juan Cruz Viotti]
* feat(usbboot): add progress property to usbboot scanned drives (#1803) [Juan Cruz Viotti]
* Add a sudo-prompt upon launch on Linux-based systems. [Benedict Aas]
* refactor(SDK): make adapter scan functions event based (#1781) [Juan Cruz Viotti]
* Add optional progress bars to drive-selector drives. [Benedict Aas]
* refactor(sdk): add bus number, device address, and ids in usb devices (#1802) [Juan Cruz Viotti]
* doc(CONTRIBUTING): Add note about msvs_version on Windows (#1794) [Jonas Hermsmeier]
* upgrade(package): Bump resin-corvus to beta.30 (#1795) [Jonas Hermsmeier]
* Fix `LIBUSB_ERROR_NO_DEVICE` error at the end of usbboot. [Juan Cruz Viotti]
* Increase the flashing speed of usbboot discovered devices. [Juan Cruz Viotti]
* Gracefully handle scenarios where a USB drive is disconnected halfway through the usbboot procedure. [Juan Cruz Viotti]
* Update Electron to v1.7.9 [Jonas Hermsmeier]
* doc(CONTRIBUTING): Remove refence to "install script" (#1790) [Jonas Hermsmeier]
* doc(CONTRIBUTING): Add libudev requirement to docs (#1787) [Jonas Hermsmeier]
* fix(usbboot): opening device debug message prints undefined (#1776) [Juan Cruz Viotti]
* fix(GUI): improve usbboot USB device branding (#1780) [Juan Cruz Viotti]
* fix(GUI): don't show the "too small" badge if the size is null (#1779) [Juan Cruz Viotti]
* fix(GUI): don't display hyphen in drive selection entry if no size (#1778) [Juan Cruz Viotti]
* refactor(GUI): generalize the concept of a "pending" drive (#1777) [Juan Cruz Viotti]
* Make sure the progress button is always rounded. [Niklas Higi]
* Add eye candy to usbboot initialized devices. [Juan Cruz Viotti]
* fix(sdk): increase bulk transfer usb timeouts (#1759) [Juan Cruz Viotti]
* fix(sdk): set usbboot control transfer timeout to infinite (#1760) [Juan Cruz Viotti]
* fix(sdk): usbboot command typos (#1758) [Gergely Imreh]
* Fix permission denied issues when XDG_RUNTIME_DIR is mounted with the `noexec` option. [Juan Cruz Viotti]
* Integrate Raspberry Pi's usbboot technology. [Juan Cruz Viotti]
* feat(image-stream): Support .bin image extension (#1750) [Jonas Hermsmeier]
* Fix Etcher being unable to read certain zip files [Jonas Hermsmeier]
* fix: Support raw images without secondary file extension (#1724) [Jonas Hermsmeier]
* refactor(image-stream): Remove Promise props resolve (#1726) [Jonas Hermsmeier]
* chore: fix CLI packaging snapshot relative directory (#1713) [Juan Cruz Viotti]
* Retry ejection various times before giving up on Windows. [Juan Cruz Viotti]
* chore(package): Bump resin-corvus to 1.0.0-beta.29 (#1720) [Jonas Hermsmeier]
* Try to use `$XDG_RUNTIME_DIR` to extract temporary scripts on GNU/Linux. [Juan Cruz Viotti]
* docs(README): execution -> executable (#1715) [Juan Cruz Viotti]
* chore: don't zip AppImages (#1703) [Juan Cruz Viotti]
* chore: build armhf on GNU/Linux (#1482) [Juan Cruz Viotti]
* feat(GUI): support new "pending" drive flag (#1709) [Juan Cruz Viotti]
* test(shared): ensure drive objects can contain extra properties (#1705) [Juan Cruz Viotti]
* refactor: use an SDK orchestrator to implement drive scanning (#1707) [Juan Cruz Viotti]
* Fix "Couldn't scan the drives: An unknown error occurred" error when there is a drive locked with BitLocker. [Juan Cruz Viotti]
* Revert "chore: cache Travis CI docker builds (#1694)" [Juan Cruz Viotti]
* chore: fix build system (#1695) [Juan Cruz Viotti]
* chore: cache Travis CI docker builds (#1694) [Juan Cruz Viotti]
* docs: add chocolatey install instructions (#1685) [Juan Cruz Viotti]
* refactor: simplify release type handling within the app (#1667) [Juan Cruz Viotti]
* chore: enforce single quotes in ESLint (#1679) [Juan Cruz Viotti]
* v1.1.2 [Juan Cruz Viotti]
* Improve Windows drive detection error codes. [Juan Cruz Viotti]
* refactor(gui): Only enable full debug output on demand (#1600) [Jonas Hermsmeier]
* Avoid "broken" icon when selecting a zip image archive with invalid SVG. [Jonas Hermsmeier]
* chore: add type option to bintray publish script (#1670) [Juan Cruz Viotti]
* chore: add a publish-all make target (#1666) [Juan Cruz Viotti]
* fix(GUI): make disabled svgs work in img tags (#1661) [Benedict Aas]
* Fix `UNABLE_TO_GET_ISSUER_CERT_LOCALLY` error at startup when behind certain proxies. [Juan Cruz Viotti]
* chore: follow standardjs guidelines (#1664) [Juan Cruz Viotti]
* refactor: adhere mostly to StandardJS guidelines (#1657) [Juan Cruz Viotti]
* docs(README): Add documentation for rpm packages. (#1652) [Dhruv Paranjape]
* Fix `EHOSTDOWN` error at startup. [Juan Cruz Viotti]
* Fix various drive scanning Windows errors. [Juan Cruz Viotti]
* Display a user-friendly error message if the user is not in the sudoers file. [Juan Cruz Viotti]
* feat(GUI): make size units closest relative (#1539) [Benedict Aas]
* Make archive-embedded SVG icons work again. [Benedict Aas]
* Fix "imageBasename is not defined" error on the CLI. [Juan Cruz Viotti]
* Add support for `.rpi-sdcard` images. [moragues]
* chore: publish development Bintray packages (#1611) [Juan Cruz Viotti]
* refactor: address review comments from #1625 (#1647) [Juan Cruz Viotti]
* refactor(GUI): make settings model setter asynchronous (#1597) [Juan Cruz Viotti]
* refactor(image-stream): parse xz and gzip metadata using a custom read function (#1590) [Juan Cruz Viotti]
* docs(README): add debian repository in one line (#1649) [Lucas Rangit MAGASWERAN]
* chore: use electron-builder default package names (#1609) [Juan Cruz Viotti]
* doc: Merge running locally into contributing guide (#1640) [Jonas Hermsmeier]
* doc: Add link to commit guidelines to contributing guide (#1641) [Jonas Hermsmeier]
* v1.1.1 [Juan Cruz Viotti]
* chore: use old custom build system to create AppImages (#1625) [Juan Cruz Viotti]
* Prevent "percentage above 100%" errors on DMG images. [Jonas Hermsmeier]
* docs(PUBLISHING): fix Etcher forum link (#1626) [Andrew Scheller]
* chore: `make distclean` now deletes `build` directory too (#1624) [Andrew Scheller]
* Fix most "Unmount failed" errors on macOS. [Juan Cruz Viotti]
* chore: remove the concept of target and host platforms (#1610) [Juan Cruz Viotti]
* fix(GUI): properly pass error object to "Flash error" event (#1619) [Juan Cruz Viotti]
* fix(windows): include local native modules in final asar (#1616) [Juan Cruz Viotti]
* v1.1.0 [Juan Cruz Viotti]
* Retry various times on EAGAIN when spawning drive scanning scripts. [Juan Cruz Viotti]
* chore: fix typos in target-convert.sh (#1608) [Andrew Scheller]
* upgrade(package): update resin-corvus to 1.0.0-beta.28 (#1604) [Benedict Aas]
* refactor: move most models to lib/shared/ (#1596) [Juan Cruz Viotti]
* fix(GUI): incorrect function call in FlashController (#1606) [Juan Cruz Viotti]
* refactor(image-stream): extract part of utils.js into mime.js (#1594) [Juan Cruz Viotti]
* test(image-stream): move extraction timeout to a shared constant (#1599) [Juan Cruz Viotti]
* chore: cache ~/.pkg-cache in Travis CI and Appveyor CI (#1598) [Juan Cruz Viotti]
* test(image-stream): increase DMG tests timeouts (#1595) [Juan Cruz Viotti]
* chore: pass --quiet to pip install (#1592) [Juan Cruz Viotti]
* chore: cache electron-builder temporary files in macOS (#1591) [Juan Cruz Viotti]
* chore: only ignore top level directories in gitignore for some cases (#1588) [Juan Cruz Viotti]
* Send anonymous analytics about package types. [Juan Cruz Viotti]
* refactor(image-stream): rename file variable to imagePath (#1589) [Juan Cruz Viotti]
* Cleanup drive detection temporary scripts created for other operating systems [Juan Cruz Viotti]
* chore: add eslint-jsdoc-plugin to eslint (#1585) [Juan Cruz Viotti]
* upgrade(package): Update udif 0.9.0 -> 0.10.0 (#1586) [Jonas Hermsmeier]
* Deangular the os-dialog and error modules [Benedict Aas]
* chore: avoid brew taking a long time on macOS Travis builds (#1583) [Juan Cruz Viotti]
* chore: make use of pkg to package the Etcher CLI (#1547) [Juan Cruz Viotti]
* chore: don't install NSIS in Appveyor CI (#1584) [Juan Cruz Viotti]
* refactor(GUI): remove flash of white electron webContents workaround (#1575) [Juan Cruz Viotti]
* chore: cache as most as possible from electron-builder (#1582) [Juan Cruz Viotti]
* chore(appveyor): make node_modules cache depend on npm-shrinkwrap.json (#1580) [Juan Cruz Viotti]
* refactor(GUI): move redux store to lib/shared (#1576) [Juan Cruz Viotti]
* refactor(GUI): decouple localStorage from the redux store (#1569) [Juan Cruz Viotti]
* fix(gui): Fix image checks in image selections (#1573) [Jonas Hermsmeier]
* upgrade: `electron-builder` to v19.9.1 (#1548) [Juan Cruz Viotti]
* Fix "file is not accessible" error when flashing an image that lives inside a directory whose name is UTF-16 encoded on Windows. [Juan Cruz Viotti]
* feat(image-stream): Read MBR & GPT in .getImageMetadata() (#1248) [Jonas Hermsmeier]
* feat(GUI): add webview api version parameter (#1558) [Benedict Aas]
* test(image-stream): Test more compression methods (#1565) [Jonas Hermsmeier]
* chore(scripts): Silence stdout for npm install (#1567) [Jonas Hermsmeier]
* chore: fix typo in Makefile (#1562) [Andrew Scheller]
* chore:(windows): make use of NSIS one-click installers (#1560) [Juan Cruz Viotti]
* chore: pipe stdout from npm ls to /dev/null (#1566) [Juan Cruz Viotti]
* chore(npm): move retry options to INSTALL_OPTS (#1564) [Juan Cruz Viotti]
* chore: don't remove optional dependencies in clean-shrinkwrap.js (#1551) [Juan Cruz Viotti]
* chore(package): Disable node_modules caching on Travis CI (#1561) [Jonas Hermsmeier]
* feat(gui): Show friendlier error dialog when opening images (#1557) [Jonas Hermsmeier]
* chore(ci): Enable node_modules & ccache caching (#1553) [Jonas Hermsmeier]
* chore(scripts): Make npm output less verbose (#1554) [Jonas Hermsmeier]
* chore: increase npm retries and max timeout (#1550) [Juan Cruz Viotti]
* chore: move all electron-builder configuration to electron-builder.yml (#1544) [Juan Cruz Viotti]
* chore: remove npm ranges from package.json (#1549) [Juan Cruz Viotti]
* chore: use various electron-builder defaults (#1543) [Juan Cruz Viotti]
* chore: make use of electron-builder to build GNU/Linux packages (#1520) [Juan Cruz Viotti]
* chore: make use of electron-builder for the package-electron target (#1540) [Juan Cruz Viotti]
* chore: don't extract native dependencies out of the asar (#1542) [Juan Cruz Viotti]
* Swap speed and time below the flashing progress bar. [Benedict Aas]
* test(image-stream): Fix test image data (#1535) [Jonas Hermsmeier]
* chore(travis): remove unused afsctool macOS dependency (#1521) [Juan Cruz Viotti]
* refactor(GUI): replace SET_SETTING with an atomic SET_SETTINGS action (#1515) [Juan Cruz Viotti]
* Generate single-binary portable installers on Windows. [Juan Cruz Viotti]
* refactor(GUI): remove angular dependency from drive scanner (#1512) [Benedict Aas]
* chore: fix version/platform order inconsistencies in package names (#1517) [Juan Cruz Viotti]
* chore: use `electron-builder` to generate macOS builds (#1511) [Juan Cruz Viotti]
* chore: use the new `electron-builder` version to create NSIS installer (#1510) [Juan Cruz Viotti]
* Remove support for the `ETCHER_DISABLE_UPDATES` environment variable. [Juan Cruz Viotti]
* chore: move `mkdir` call from node-package-cli.sh to Makefile (#1516) [Andrew Scheller]
* chore: don't use ./ when generating sass files (#1513) [Juan Cruz Viotti]
* chore: Add support for rpm packages (#1425) [Dhruv Paranjape]
* feat(GUI): rewrite svg-icon directive in react (#1464) [Benedict Aas]
* refactor(GUI): remove angular dependency from selection-state (#1509) [Benedict Aas]
* chore: move npm targets to Makefile (#1505) [Juan Cruz Viotti]
* chore: re-organize package.json in a way similar to electron-builder (#1504) [Juan Cruz Viotti]
* chore: output build artifacts to dist/ (#1506) [Juan Cruz Viotti]
* chore: remove ampersand from package description (#1503) [Juan Cruz Viotti]
* chore: remove unused `electron-packager` dependency (#1502) [Juan Cruz Viotti]
* Fix occasional increased CPU usage because of perl regular expression in macOS. [Juan Cruz Viotti]
* Reset webview after navigating away from the success screen. [Benedict Aas]
* Add support for `.sdcard` images. [Romain Bazile]
* doc(README): Update & normalize badges (#1491) [Jonas Hermsmeier]
* upgrade(package): Update node-sass to 4.5.3 (#1489) [Jonas Hermsmeier]
* refactor(GUI): remove angular from DrivesModel (#1265) [Benedict Aas]
* Fix `UNABLE_TO_VERIFY_LEAF_SIGNATURE` error at startup. [Juan Cruz Viotti]
* chore(package): Update mountutils to 1.2.0 (#1488) [Jonas Hermsmeier]
* fix(GUI): correct relative notification icon path (#1470) [Benedict Aas]
* Revert "chore: make use of resin.io's Docker base images" [Juan Cruz Viotti]
* Minor style improvements to the fallback success page banner. [Benedict Aas]
* Remove "Advanced" settings subtitle. [Benedict Aas]
* chore: make use of resin.io's Docker base images (#1481) [Juan Cruz Viotti]
* Don't break up size numbers in the drive selector. [Benedict Aas]
* chore(docker): Change APT mirror used by the Ubuntu12.04 32bit docker image (#1471) [Andrew Scheller]
* Turn the update notifier modal into a native dialog. [Juan Cruz Viotti]
* Add image name, drive name, and icon to notifications. [Benedict Aas]
* fix(CLI): get rid of Browserify absolute path workaround (#1449) [Juan Cruz Viotti]
* chore: unify CI scripts (#1434) [Juan Cruz Viotti]
* Fix "You don't have access to this resource" error at startup when behind a firewall. [Juan Cruz Viotti]
* chore: track python dependencies with pip (#1447) [Juan Cruz Viotti]
* chore: create installers (but don't publish) on every pull request (#1365) [Juan Cruz Viotti]
* chore: fix lzma-native not building for the x86 Linux CLI (#1448) [Juan Cruz Viotti]
* chore: Check for the commands used by electron-installer-debian (#1446) [Andrew Scheller]
* refactor: address review comments from #1401 (#1433) [Juan Cruz Viotti]
* chore: check that there are no unstaged shrinkwrap changes (#1379) [Juan Cruz Viotti]
* feat(GUI): add success page resin referrer (#1430) [Benedict Aas]
* doc(CLI-INSTALLATION): Make headings h3 (#1419) [Jonas Hermsmeier]
* docs(CLI): move the CLI installation instructions to a separate page (#1418) [Andrew Scheller]
* docs(CLI): add installation instructions (#1417) [Juan Cruz Viotti]
* v1.0.0 [Juan Cruz Viotti]
* Implement a dynamic finish page. [Benedict Aas]
* Prevent drive from getting re-mounted in macOS even when the unmount on success setting is enabled. [Juan Cruz Viotti]
* Fix `ECONNRESET` and `ECONNREFUSED` errors when checking for updates on unstable connections. [Juan Cruz Viotti]
* Fix application stuck at "Starting..." on Windows. [Juan Cruz Viotti]
* doc(github): Add question about flashed image to issue template (#1413) [Jonas Hermsmeier]
* fix(CLI): workaround absolute paths in Browserify bundles (#1409) [Juan Cruz Viotti]
* chore(CLI): fix `cli-develop` Make target headers version (#1407) [Juan Cruz Viotti]
* refactor(GUI): remove analytics angular dependency (#1387) [Benedict Aas]
* chore: replace `wget` with `curl` on `node-static-entry-point-download.sh` (#1406) [Juan Cruz Viotti]
* upgrade: `resin-cli-visuals` to v1.3.1 (#1404) [Juan Cruz Viotti]
* chore: upgrade `npm-shrinkwrap.json` file (#1405) [Juan Cruz Viotti]
* Fix error on startup when Windows username contained an ampersand. [Juan Cruz Viotti]
* chore(CLI): minify Etcher CLI code (#1401) [Juan Cruz Viotti]
* refactor(GUI): central error/warning messages function (#1193) [Benedict Aas]
* doc(GUI): suggest BootCamp as an alternative when flashing Windows images (#1393) [Daniel Aleksandersen]
* upgrade: `etcher-image-write` to v9.1.3 (#1400) [Juan Cruz Viotti]
* style(settings): Clarify meaning of the "Report Errors" button (#1392) [Andrew Scheller]
* refactor: address code review comments from #1366 (#1390) [Juan Cruz Viotti]
* fix(GUI): bound flash progress percentage within 0-100 (#1258) [Benedict Aas]
* Display nicer error dialog when reading an invalid image [Jonas Hermsmeier]
* chore: add ensure-npm-valid-dependencies.sh to sanity-checks make target (#1378) [Juan Cruz Viotti]
* doc(contributing): Add section about binary diffs (#1380) [Jonas Hermsmeier]
* chore(codespell): add rpi-sdcard to the list of ignored extensions (#1377) [Juan Cruz Viotti]
* v1.0.0-rc.5 [Juan Cruz Viotti]
* Fix uncaught errors when cancelling elevation requests on Windows when the system's language is not English. [Juan Cruz Viotti]
* chore: make `isstream` a top level production development (#1373) [Juan Cruz Viotti]
* chore: ensure there are no extraneous or invalid npm dependencies (#1371) [Juan Cruz Viotti]
* chore: remove `etcher-latest-version` from package.json (#1372) [Juan Cruz Viotti]
* chore: build on Ubuntu 12.04 Docker base images (#1364) [Juan Cruz Viotti]
* chore(gitattributes): Add "hex" diff tag to binary files (#1367) [Jonas Hermsmeier]
* Fix not treating unknown images as octet-stream [Jonas Hermsmeier]
* refactor(errors): add isUserError utility function (#1320) [Juan Cruz Viotti]
* refactor: address file-extensions review comments (#1347) [Juan Cruz Viotti]
* refactor: move OSNotificationService out of the angular world (#1352) [Juan Cruz Viotti]
* refactor(GUI): integrate `etcher-latest-version` into the main repo (#1183) [Juan Cruz Viotti]
* chore: make use of browserify as a development dependency (#1354) [Juan Cruz Viotti]
* refactor: address review comments from #1351 (#1355) [Juan Cruz Viotti]
* refactor(utils): make PERCENTAGE_ constants public, and re-use them in flash.js (#1353) [Andrew Scheller]
* Upgrade Electron to v1.6.6. [Juan Cruz Viotti]
* refactor: extract elevation routines to lib/shared/permissions.js (#1351) [Juan Cruz Viotti]
* docs: clarify how to deal with problematic releases (#1297) [Juan Cruz Viotti]
* v1.0.0-rc.4 [Juan Cruz Viotti]
* feat(GUI): collect archive and image extension in analytics (#1343) [Ștefan Daniel Mihăilă]
* feat(GUI): add uuid to flash events (#1344) [Ștefan Daniel Mihăilă]
* Fix "Unmount failed" on Windows where the PC is connected to network drives. [Juan Cruz Viotti]
* chore(package): Update udif to 0.9.0 (#1346) [Jonas Hermsmeier]
* refactor(child-writer): add robot commands constant (#1332) [Juan Cruz Viotti]
* Show user friendly messages for `EBUSY, read` and `EBUSY, write` errors on macOS. [Juan Cruz Viotti]
* chore(scripts): Remove prune from shrinkwrap cleanup (#1338) [Jonas Hermsmeier]
* chore(CLI): create basic CLI package installers (#1240) [Juan Cruz Viotti]
* chore: lock optional dependencies versions (#1337) [Juan Cruz Viotti]
* chore: add another typo to codespell dictionary (#1335) [Andrew Scheller]
* feat(GUI): add a validateWriteOnSuccess property to the flash event (#1333) [Juan Cruz Viotti]
* chore: make `asar` a development dependency (#1330) [Juan Cruz Viotti]
* upgrade: `elevator` to v2.2.3 (#1331) [Juan Cruz Viotti]
* refactor(errors): createError and createUserError accept an object (#1322) [Juan Cruz Viotti]
* chore: perform GNU/Linux builds on Debian Jessie docker containers (#1319) [Juan Cruz Viotti]
* chore: make electron-installer-debian an optional dependency (#1326) [Juan Cruz Viotti]
* Show a friendly user message on EIO after many retries. [Juan Cruz Viotti]
* chore: pass bintray environment variables to Docker containers (#1307) [Juan Cruz Viotti]
* fix(GUI): send an "elevation cancelled" analytics event (#1310) [Juan Cruz Viotti]
* Various fixes for when drive descriptions contain special characters. [Juan Cruz Viotti]
* Upgrade `resin-corvus` to 1.0.0-beta.26. [Ștefan Daniel Mihăilă]
* v1.0.0-rc.3 [Juan Cruz Viotti]
* Fix Apple disk image detection & streaming [Jonas Hermsmeier]
* Fix "UNKNOWN: unknown error" error when unplugging an SD Card from an internal reader on Windows. [Juan Cruz Viotti]
* upgrade: `elevator` to v2.2.2 (#1304) [Juan Cruz Viotti]
* fix(GUI): correctly log debugging messages on Windows (#1303) [Juan Cruz Viotti]
* upgrade: `mountutils` to v1.0.5 (#1302) [Juan Cruz Viotti]
* Show a user friendly message when the drive is unplugged half-way through. [Juan Cruz Viotti]
* feat(child-writer): log non-robot messages for debugging purposes (#1295) [Juan Cruz Viotti]
* upgrade: `elevator` to v2.2.1 (#1300) [Juan Cruz Viotti]
* Improve error reporting accuracy. [Ștefan Daniel Mihăilă]
* upgrade: `elevator` to v2.2.0 (#1298) [Juan Cruz Viotti]
* refactor(GUI): move SupportedFormatsModel to lib/shared (#1251) [Juan Cruz Viotti]
* refactor(GUI): make OSWindowProgress a simple CommonJS module (#1253) [Juan Cruz Viotti]
* tests(image-stream): ensure imageStream.getFromFilePath() returns a path (#1280) [Juan Cruz Viotti]
* tests(image-stream): remove unnecessary big timeout (#1285) [Juan Cruz Viotti]
* Fix "function createError(opts) {}" error on validation failure. [Juan Cruz Viotti]
* Fix "Unmount failed, invalid drive" error on Windows. [Juan Cruz Viotti]
* upgrade: resin-corvus to 1.0.0.beta-24 (#1296) [Ștefan Daniel Mihăilă]
* chore: fix debian package run script (#1290) [David Lechner]
* chore(package): fix codespell binary file warnings (#1289) [Jonas Hermsmeier]
* chore: small tweak to the jq-insert.sh syntax (#1287) [Andrew Scheller]
* v1.0.0-rc.2 [Juan Cruz Viotti]
* Display a user error if the image is no longer accessible when the writer starts. [Juan Cruz Viotti]
* Revert "chore(ci): limit git clone depth (#1269)" [Juan Cruz Viotti]
* Prevent uncaught `EISDIR` when dropping a directory to the application. [Juan Cruz Viotti]
* chore: add analytics token environment variables to Docker container (#1274) [Juan Cruz Viotti]
* chore: fix jq crashing on Windows when using relative paths (#1276) [Juan Cruz Viotti]
* chore: remove duplicated curl dependency in Dockerfiles (#1275) [Juan Cruz Viotti]
* Fix "Path must be a string. Received undefined" when selecting Apple images. [Juan Cruz Viotti]
* Don't interpret certain ISO images as unsupported. [Juan Cruz Viotti]
* v1.0.0-rc.1 [Juan Cruz Viotti]
* fix(GUI): correctly reference the `eta` property in `lib/gui/app.js` (#1273) [Juan Cruz Viotti]
* Start reporting errors to Sentry instead of to TrackJS. [Ștefan Daniel Mihăilă]
* docs(README): fix waffle.io badge (#1271) [Mico Piira]
* style(shared): fix `given that is` -> `given that it` typo (#1272) [Juan Cruz Viotti]
* refactor(GUI): remove Angular from FlashStateModel and rename (#1264) [Benedict Aas]
* chore: fix a CI script to 'properly fail' on Windows (#1270) [Andrew Scheller]
* fix(GUI): replace Math object usage in progressButton directive (#1263) [Benedict Aas]
* test: Use mocha with promises instead of callbacks (#1268) [Jonas Hermsmeier]
* refactor: get rid of `is-elevated` (#1262) [Juan Cruz Viotti]
* chore(ci): limit git clone depth (#1269) [Jonas Hermsmeier]
* chore: fix CI script to work when 'require'ing nested modules (#1267) [Andrew Scheller]
* feat(image-stream): Support Apple Disk Images (#1257) [Jonas Hermsmeier]
* upgrade: `mountutils` to v1.0.3 (#1266) [Juan Cruz Viotti]
* refactor(GUI): remove angular from SettingsModel and rename (#1261) [Benedict Aas]
* feat(robot): Support logging arbitrary data to the console (#1212) [Jonas Hermsmeier]
* chore: make the CI servers fail-fast if one of their builds fails (#1241) [Juan Cruz Viotti]
* feat(GUI): add analytics image / drive info on flash done / error events (#1255) [Ștefan Daniel Mihăilă]
* chore: Stop OSX builds on Travis frequently timing out (#1260) [Andrew Scheller]
* refactor: unify image objects across GUI and image-stream (#1229) [Juan Cruz Viotti]
* Prevent progress button percentage to exceed 100%. [Benedict Aas]
* refactor(GUI): get rid of drive-constraints Angular factory wrapper (#1250) [Juan Cruz Viotti]
* refactor(image-stream): get rid of rindle (#1246) [Juan Cruz Viotti]
* Fix several unmount related issues in all platforms. [Juan Cruz Viotti]
* refactor(GUI): get rid of `basename` Angular filter (#1252) [Juan Cruz Viotti]
* refactor(image-stream): get rid of read-chunk (#1243) [Juan Cruz Viotti]
* chore(package): Make clean-shrinkwrap remove optional dependencies (#1236) [Jonas Hermsmeier]
* refactor(image-stream): get rid of `gzip-uncompressed-size` (#1247) [Juan Cruz Viotti]
* chore: add a require() checking script (#1237) [Andrew Scheller]
* chore: remove unused tail related modules (#1242) [Juan Cruz Viotti]
* refactor(image-stream): get rid of `isstream` (#1244) [Juan Cruz Viotti]
* refactor(GUI): get rid of the `username` module (#1245) [Juan Cruz Viotti]
* style(CLI): improve drive not large enough message wording (#1239) [Juan Cruz Viotti]
* style: fix require() typo in lib/cli/writer.js [Andrew Scheller]
* Revert "chore(package.json): add dynamic dependencies as optional dependencies (#1228)" [Juan Cruz Viotti]
* Revert "chore: make `thread-sleep` and `spawn-sync` production dependencies (#1235)" [Juan Cruz Viotti]
* chore: make `thread-sleep` and `spawn-sync` production dependencies (#1235) [Juan Cruz Viotti]
* docs(README): uninstall instructions for debian/brew (#1231) [Juan Cruz Viotti]
* chore(package): remove extraneous dependencies from shrinkwrap (#1234) [Jonas Hermsmeier]
* Provide a user friendly error message when no polkit authentication agent is available on the system. [Juan Cruz Viotti]
* Add the un-truncated drive description to the selected drive step tooltip. [Benedict Aas]
* chore(travis): move deploy command to a separate script (#1224) [Juan Cruz Viotti]
* Prevent flashing an image that is larger than the drive with the CLI. [Juan Cruz Viotti]
* Don't print stack traces by default in the CLI. [Juan Cruz Viotti]
* chore(package.json): add dynamic dependencies as optional dependencies (#1228) [Juan Cruz Viotti]
* style(CLI): improve error message when drive doesn't exist anymore (#1222) [Juan Cruz Viotti]
* Prevent blank application when sending SIGINT on GNU/Linux and macOS. [Juan Cruz Viotti]
* doc(image-stream): document that .getFromFilePath also resolves metadata (#1217) [Juan Cruz Viotti]
* fix(GUI): disallow reloading the app in macOS using Cmd+R (#1219) [Juan Cruz Viotti]
* chore: don't bother sending any build context to Docker (#1226) [Andrew Scheller]
* chore(scripts): rebuild instead of removing `node_modules` (#1215) [Jonas Hermsmeier]
* doc: add option to install win build tools via npm (#1218) [Jonas Hermsmeier]
* Fix unmounting freezing in macOS. [Jonas Hermsmeier]
* chore(travis): Use `node` base, instead of `cpp` (#1216) [Jonas Hermsmeier]
* chore: speed up nvm installation on Travis CI [Peter Dave Hello]
* style: fix typo in code-comment (#1213) [Andrew Scheller]
* chore: add `libyaml-dev` to GNU/Linux Docker dependencies (#1204) [Juan Cruz Viotti]
* docs: revise PUBLISHING.md S3 section (#1197) [Juan Cruz Viotti]
* chore: check that all text files only contain expected ASCII chars (#1205) [Andrew Scheller]
* chore: make use of 'uname -m' to detect host on GNU/Linux [Pierre-Yves]
* chore: automatic CLI packaging (#1132) [Juan Cruz Viotti]
* chore: fix small dependency-checking typo (#1201) [Andrew Scheller]
* chore: fix copying of variables into Docker (#1203) [Andrew Scheller]
* chore: fix errors during snapshot deployments (#1196) [Juan Cruz Viotti]
* chore: publish snapshot builds to S3 (#1078) [Juan Cruz Viotti]
* chore: setup .gitattributes to perform correct line-ending conversions (#1192) [Andrew Scheller]
* Fix "rawr i'm a dinosaur" bzip2 error. [Juan Cruz Viotti]
* upgrade: `is-elevated` to v2.0.1 (#1184) [Juan Cruz Viotti]
* chore: don't compress binaries/libraries with upx (#1188) [Juan Cruz Viotti]
* Show friendly drive name instead of device name in the main screen. [Benedict Aas]
* doc: Add MSVC Build Tools option to Windows requisites (#1186) [Jonas Hermsmeier]
* chore: fix `lzma-native` build issues on Windows (#1191) [Juan Cruz Viotti]
* chore: get the CI tests working again (#1182) [Andrew Scheller]
* chore: automatically enforce compatible angular core module versions (#1175) [Juan Cruz Viotti]
* Don't include user paths in Mixpanel analytics events. [Ștefan Daniel Mihăilă]
* fix(GUI): avoid duplicated TrackJS errors (#1176) [Juan Cruz Viotti]
* chore: codespell improvements (#1174) [Andrew Scheller]
* feat(GUI): improve analytics events (#1111) [Ștefan Daniel Mihăilă]
* chore: support generating armv7l .deb packages (#1038) [Juan Cruz Viotti]
* style(GUI): reduce `eslint-disable no-var` scope (#1163) [Ștefan Daniel Mihăilă]
* Make errors more user friendly throughout the application. [Juan Cruz Viotti]
* chore: migrate from scss-lint to sass-lint (#1172) [Andrew Scheller]
* chore: create a temporary .dockerignore during the docker build step (#1173) [Andrew Scheller]
* Stop drive scanning loop if an error occurs. [Juan Cruz Viotti]
* upgrade: `angular` and `angular-mocks` to v1.6.3 (#1168) [Juan Cruz Viotti]
* chore: add ESLint Lodash plugin (#1148) [Juan Cruz Viotti]
* chore: revise ESLint built-in configuration (#1149) [Juan Cruz Viotti]
* Fix GNU/Linux udev error when `net.ifnames` is set. [Juan Cruz Viotti]
* Fix `ENOSPC` image alignment errors. [Juan Cruz Viotti]
* Fix errors when unplugging drives exactly when the drive scanning scripts are running. [Juan Cruz Viotti]
* Don't report "invalid archive" errors to TrackJS. [Juan Cruz Viotti]
* chore: fix JSDoc warnings (#1151) [Juan Cruz Viotti]
* style(GUI): fix small chain indentation issue (#1150) [Juan Cruz Viotti]
* chore: improve JSDoc ESLint rules (#1147) [Juan Cruz Viotti]
* feat(GUI): allow opening drive selector modal when no drives (#1146) [Benedict Aas]
* chore: add aknowledge->acknowledge to codespell dictionary [Ștefan Daniel Mihăilă]
* chore: add missing `:` after options in publish scripts (#1134) [Juan Cruz Viotti]
* chore: define `S3_BUCKET` in Makefile (#1141) [Juan Cruz Viotti]
* chore: don't use symbolic links on Windows builds (#1133) [Juan Cruz Viotti]
* chore: fix various code-signing Windows issues (#1135) [Juan Cruz Viotti]
* v1.0.0-beta.19 [Juan Cruz Viotti]
* Show warning when user tries to flash a Windows image [Ștefan Daniel Mihăilă]
* Don't ignore errors coming from the Windows drive detection script. [Juan Cruz Viotti]
* chore: add execution permissions to Windows bash scripts (#1131) [Juan Cruz Viotti]
* chore: start codespell dictionary file in the root of the project (#1087) [Juan Cruz Viotti]
* chore: ensure `npm run sass` was ran and the results committed (#1121) [Juan Cruz Viotti]
* Fix `transformRequest` error at startup when not connected to the internet, or when on an unstable connection. [Juan Cruz Viotti]
* chore: don't install `electron-installer-debian` in OS X builds (#1129) [Juan Cruz Viotti]
* upgrade: `drivelist` to v5.0.13 (#1123) [Juan Cruz Viotti]
* docs: group CLI developer oriented documentation at lib/cli/README.md (#1105) [Juan Cruz Viotti]
* docs: add developer documentation to the lib/image-stream module (#1107) [Juan Cruz Viotti]
* docs: C++ are not auto-selected by Visual Studio anymore (#1112) [Juan Cruz Viotti]
* docs: document supported operating systems and versions (#1114) [Juan Cruz Viotti]
* feat(gui): new flashing step icon (#1119) [Benedict Aas]
* minifix: re-build css (#1120) [Benedict Aas]
* Omit empty SD Card readers in the drive selector on Windows. [Juan Cruz Viotti]
* Update the image step icon with an hexagonal "plus" icon. [Benedict Aas]
* chore: update `angular-ui-router` in `npm-shrinkwrap.json` (#1102) [Juan Cruz Viotti]
* Fix "Error: Command Failed" error when unmounting on Windows. [Juan Cruz Viotti]
* refactor(GUI): remove component-drive-selector-body outdated class (#1072) [Juan Cruz Viotti]
* chore: add an HTML linter and fix its warnings (#1077) [Juan Cruz Viotti]
* docs: explain the "robot" module in a high level way (#1081) [Juan Cruz Viotti]
* refactor(gui): revert drive/image selection step order swap (#1086) [Benedict Aas]
* docs: add msys-zip as a required Windows dependency (#1080) [Juan Cruz Viotti]
* chore: add support for Windows builds in Makefile (#1079) [Juan Cruz Viotti]
* docs: clarify that a "style" commit type applies to code annotations (#1085) [Juan Cruz Viotti]
* style(GUI): move update notifier checkbox inside modal body (#1071) [Juan Cruz Viotti]
* minifix: re-build css (#1088) [Benedict Aas]
* Use a OS dialog to show the "exit while flashing" warning. [Juan Cruz Viotti]
* Fix duplicate error messages [Ștefan Daniel Mihăilă]
* style(GUI): minor fixes in comments (#1084) [Ștefan Daniel Mihăilă]
* refactor(GUI): unify modal body styles (#1073) [Juan Cruz Viotti]
* Don't auto select system drives in unsafe mode. [Juan Cruz Viotti]
* chore: get rid of commitizen [Juan Cruz Viotti]
* Update main page design to its new style. [Shou]
* Ignore `stderr` output from drive detection scripts if they exit with code zero. [Juan Cruz Viotti]
* chore: integrate codespell and fix existing spelling issues [Juan Cruz Viotti]
* Prevent flashing the drive where the source image is located. [Juan Cruz Viotti]
* doc: workaround to npm shrinkwrap development dependencies bug [Juan Cruz Viotti]
* test(GUI): fix non-running test in DrivesModel test suite (#1061) [Juan Cruz Viotti]
* Fix 'MySQL' is not recognised as an internal or external command error on Windows. [Juan Cruz Viotti]
* chore: fix undefined TEMPORARY_DIRECTORY variable (#1059) [Juan Cruz Viotti]
* chore: add a `package` Makefile target (#1058) [Juan Cruz Viotti]
* Capitalize every text throughout the application. [Juan Cruz Viotti]
* Revert "refactor: remove extended archives extra functionality (#1055)" [Juan Cruz Viotti]
* Remove extended archives metadata extraction logic. [Juan Cruz Viotti]
* refactor(image-stream): stream original/final sizes (#1050) [Juan Cruz Viotti]
* Swap the order of the drive and image selection steps. [Benedict Aas]
* refactor(GUI): reuse WarningModalService in FlashErrorModal (#1051) [Juan Cruz Viotti]
* style(GUI): change WarningModal title to "Attention" (#1052) [Juan Cruz Viotti]
* Normalize button text casing. [Juan Cruz Viotti]
* refactor: integrate `etcher-image-stream` into the `etcher` repository (#1040) [Juan Cruz Viotti]
* Emit an analytics event on `ENOSPC`. [Juan Cruz Viotti]
* refactor(CLI): rename lib/cli/cli.js to lib/cli/options.js (#1045) [Juan Cruz Viotti]
* Improve validation error message. [Juan Cruz Viotti]
* refactor: move lib/shared/child-writer to lib/child-writer (#1041) [Juan Cruz Viotti]
* chore: don't print Makefile comments (#1039) [Juan Cruz Viotti]
* Fix text overflowing on tooltips. [Benedict Aas]
* docs: minor edits to ARCHITECTURE.md and CLI.md (#1029) [Juan Cruz Viotti]
* v1.0.0-beta.18 [Juan Cruz Viotti]
* fix(GUI): don't ignore any `robot` message from the CLI (#1026) [Juan Cruz Viotti]
* fix: allow undefined drives and images in DriveConstraintsModel (#1016) [Benedict Aas]
* chore: run Travis CI GNU/Linux tests in Docker containers (#1018) [Juan Cruz Viotti]
* Fix alignment of single call to action buttons inside modals. [Juan Cruz Viotti]
* refactor: move all byte-size conversion logic to lib/shared/units.js (#1021) [Juan Cruz Viotti]
* refactor: extract application messages to `lib/shared/messages.js` (#1022) [Juan Cruz Viotti]
* Fix "This key is already associated with an element of this collection" error when multiple partitions point to the same drive letter on Windows. [Juan Cruz Viotti]
* Improve Etcher CLI error messages. [Juan Cruz Viotti]
* chore: remove unnecessary modules from `npm-shrinkwrap.json` (#1017) [Juan Cruz Viotti]
* fix(GUI): open DevTools in `detach` mode (#1014) [Juan Cruz Viotti]
* chore: add support for snapshot builds (#968) [Juan Cruz Viotti]
* refactor(GUI): extract and test child writer CLI argument utilities (#1012) [Juan Cruz Viotti]
* chore: make use of the "spec" mocha reporter (#1013) [Juan Cruz Viotti]
* Replace the `--robot` CLI option with an `ETCHER_CLI_ROBOT` environment variable. [Juan Cruz Viotti]
* Make the image file picker attach to the main window. [Alexis Svinartchouk]
* fix(GUI): fix path to Glyphicons Bootstrap font (#1011) [Juan Cruz Viotti]
* fix(GUI): don't split robot input by new lines inside properties (#1008) [Juan Cruz Viotti]
* chore: compile CSS into lib/gui/css (#1002) [Juan Cruz Viotti]
* refactor: extract SelectionStateModel stateless functions (#982) [Ștefan Daniel Mihăilă]
* Fix system drives detected as removable drives on Mac Mini. [Juan Cruz Viotti]
* chore: build x64 and x86 jobs for GNU/Linux (#964) [Juan Cruz Viotti]
* Fix sporadic "EIO: i/o error, read" errors during validation. [Juan Cruz Viotti]
* Fix "Invalid message" error caused by the IPC client emitting multiple JSON objects as a single message. [Juan Cruz Viotti]
* chore: don't upgrade npm to latest on Appveyor (#999) [Juan Cruz Viotti]
* Fix "EIO: i/o error, write" error. [Juan Cruz Viotti]
* Sort supported extensions alphabetically in the image file-picker. [Benedict Aas]
* feat(gui): add referers to etcher.io links (#990) [Benedict Aas]
* Set theme jekyll-theme-minimal [Juan Cruz Viotti]
* Label system drives in the drive-list widget [Benedict Aas]
* doc: Move the asar requirement from "Windows" to "Common" (#977) [Andrew Scheller]
* doc: recommend `make electron-develop` to clean dependency tree (#974) [Juan Cruz Viotti]
* chore: implement `electron-configure-package-win32.sh` (#962) [Juan Cruz Viotti]
* chore: persist temporary artifacts during AppImage builds (#936) [Juan Cruz Viotti]
* chore: download files to a temporary filename first, then rename (#973) [Andrew Scheller]
* chore: remove backslash-escaping in Makefile errors & warnings (#972) [Andrew Scheller]
* chore: add `distclean` target to Makefile (#971) [Andrew Scheller]
* chore: run tests in x64 and x86 in Appveyor (#963) [Juan Cruz Viotti]
* chore: fix `check-dependency.sh` to work with arguments containing spaces (#969) [Andrew Scheller]
* chore: fix error functions in Makefile (#970) [Andrew Scheller]
* chore: use $(BUILD_OUTPUT_DIRECTORY) in PUBLISH_* accumulators (#965) [Juan Cruz Viotti]
* chore: fix `electron-sign-app-darwin.sh` reference (#967) [Juan Cruz Viotti]
* chore: create re-usable check-dependency.sh script (#959) [Juan Cruz Viotti]
* chore: move directory creation responsibility to Makefile (#946) [Juan Cruz Viotti]
* chore: fix small spacing issue in Makefile (#960) [Juan Cruz Viotti]
* chore: update npm configuration in `dependencies-npm.sh` (#961) [Juan Cruz Viotti]
* chore: add publishing Makefile targets (#955) [Andrew Scheller]
* chore: implement `download-tool.sh` script (#957) [Juan Cruz Viotti]
* docs: remind to add S3 links to GitHub Releases entries (#956) [Juan Cruz Viotti]
* chore: speed up `make` startup time by using `jq` (#958) [Andrew Scheller]
* chore: group build scripts inside `scripts/build` (#940) [Juan Cruz Viotti]
* chore: add `help` Makefile target to show available targets (#954) [Andrew Scheller]
* chore: upgrade Etcher build system to use Visual Studio 2015 (#947) [Juan Cruz Viotti]
* chore: require MinGW to build Etcher on Windows (#948) [Juan Cruz Viotti]
* Show available Etcher version in the update notifier. [Benedict Aas]
* chore: set msvs version on `dependencies-npm.sh` when running on Windows (#943) [Juan Cruz Viotti]
* chore: don't include *.dll files inside the asar archive (#944) [Juan Cruz Viotti]
* chore: make code-signing optional in OS X (#939) [Juan Cruz Viotti]
* chore: use `pushd`/`popd` instead of `--prefix` on `dependencies-npm.sh` (#941) [Juan Cruz Viotti]
* chore: fix certificate verification error with wget on MinGW (#942) [Juan Cruz Viotti]
* chore: simplify .travis.yml dependencies installation across OSes (#938) [Juan Cruz Viotti]
* chore: symlink manifests in dependencies scripts (#935) [Juan Cruz Viotti]
* chore: move electron package caching responsibility to GNU Make (#926) [Juan Cruz Viotti]
* chore: move `bower.json` removal after popd in `dependencies-bower.sh` (#934) [Juan Cruz Viotti]
* Confirm before user quits while writing. [Benedict Aas]
* Add a changelog link to the update notifier modal. [Benedict Aas]
* chore: use `rmdir` to delete empty npm `etc/` directory (#933) [Juan Cruz Viotti]
* chore: fix the bintray-debian publishing script (#930) [Andrew Scheller]
* chore: attempt to fix Travis builds (#931) [Andrew Scheller]
* style: use GNU Make `foreach` instead of a shell for loop (#927) [Juan Cruz Viotti]
* chore: exit with error code 1 on build script usage section (#925) [Andrew Scheller]
* chore: attempt to re-use $TMPDIR in `installer-appimage.sh` (#917) [Juan Cruz Viotti]
* chore: reuse npm/bower dependencies across builds (#923) [Juan Cruz Viotti]
* style: convert spaces to tabs in Makefile (#924) [Juan Cruz Viotti]
* chore: add Makefile to build OS X and GNU/Linux (#922) [Juan Cruz Viotti]
* chore: move GNU/Linux zip generation to `installer-appimage` (#913) [Juan Cruz Viotti]
* chore: improve naming of build scripts (#918) [Juan Cruz Viotti]
* chore: exit with error code 1 on build script usage section (#916) [Juan Cruz Viotti]
* docs: Update 'announcing' section of Publishing instructions (#921) [Andrew Scheller]
* chore: extract code-signing logic from `windows.bat` to `sign.bat` (#911) [Juan Cruz Viotti]
* chore: split `dependencies.sh` into bower and npm scripts (#914) [Juan Cruz Viotti]
* chore: cache chocolatey installs as recommended by Appveyor (#915) [Juan Cruz Viotti]
* chore: install dependencies directly in package (#909) [Juan Cruz Viotti]
* chore: extract dependencies.bat from windows.bat (#910) [Juan Cruz Viotti]
* feat(GUI): allow double-click to quick-select drives (#889) [Benedict Aas]
* fix(GUI): show not-allowed cursor over unselectable drives (#886) [Benedict Aas]
* chore: refactor and enhance dependency checking in build scripts (#908) [Andrew Scheller]
* chore: don't include `LICENSE` and `version` in OS X package (#907) [Juan Cruz Viotti]
* fix: don't lock `installer-cli` architecture to x64 in build scripts (#904) [Juan Cruz Viotti]
* v1.0.0-beta.17 [Juan Cruz Viotti]
* chore: adopt new build command convention for OS X (#903) [Juan Cruz Viotti]
* refactor: extract electron downloading logic to its own script (#902) [Juan Cruz Viotti]
* refactor: ditch `electron-osx-sign` for OS X signing (#901) [Juan Cruz Viotti]
* chore: adopt new build script command convention in GNU/Linux (#899) [Juan Cruz Viotti]
* refactor: get rid of `electron-packager` in GNU/Linux (#897) [Juan Cruz Viotti]
* chore: add "cli" command to GNU/Linux and OS X build script (#896) [Juan Cruz Viotti]
* refactor: improve and unify dependencies.sh script across UNIX targets (#894) [Juan Cruz Viotti]
* Fix command line arguments not interpreted correctly when running the CLI with a custom named NodeJS binary. [Juan Cruz Viotti]
* Fix drive scanning exceptions on GNU/Linux systems with `net.ifnames` enabled. [Juan Cruz Viotti]
* chore: add `appdmg` and `ds-store` to `shrinkwrapIgnore` (#895) [Juan Cruz Viotti]
* refactor: extract GNU/Linux build scripts into many files (#890) [Juan Cruz Viotti]
* chore: add x86 architecture support for darwin/dependencies.sh (#883) [Juan Cruz Viotti]
* Wrap drive names and descriptions in the drive selector widget. [Benedict Aas]
* refactor: extract OS X build script into many files (#875) [Juan Cruz Viotti]
* refactor(GUI): resolve undefined on modal keyboard bindings (#879) [Juan Cruz Viotti]
* Allow the user to press ESC to cancel a modal dialog. [Benedict Aas]
* Fix "Can't set the flashing state when not flashing" error. [Juan Cruz Viotti]
* chore: update "join us" email to join+etcher@resin.io (#873) [Juan Cruz Viotti]
* Fix `0x80131700` error when scanning drives on Windows. [Juan Cruz Viotti]
* Fix internal SDCard drive descriptions. [Juan Cruz Viotti]
* Fix writing process remaining alive after the GUI is closed. [Juan Cruz Viotti]
* Check available permissions in the CLI early on. [Juan Cruz Viotti]
* refactor(CLI): move UNIX umount functionality to repository (#866) [Juan Cruz Viotti]
* docs: more explicit key server (#861) [David Lechner]
* style(GUI): clarify wording at finished flash prompt (new → different) (#867) [Benedict Aas]
* upgrade: `electron-mocha` to v3.1.1 (#854) [Juan Cruz Viotti]
* test: fix failing ImageSelectionController tests (#856) [Juan Cruz Viotti]
* docs(GUI): publishing a new version to homebrew cask (#837) [Juan Cruz Viotti]
* chore: add `productDescription` to `package.json` (#842) [Juan Cruz Viotti]
* Fix unmount issues in GNU/Linux and OS Xwhen paths contain spaces. [Juan Cruz Viotti]
* style(GUI): unify "close" top right corner X in all modals (#841) [Juan Cruz Viotti]
* minifix(GUI): improve unsafe mode setting dialog (#840) [Juan Cruz Viotti]
* Fix "Not Enough Space" error when flashing unaligned images. [Juan Cruz Viotti]
* docs: add instructions on how to install from Cask and Bintray (#832) [Juan Cruz Viotti]
* minifix(GUI): warning modal size class (#838) [Juan Cruz Viotti]
* docs: list of major technologies used by Etcher (#826) [Juan Cruz Viotti]
* style: refer to Resin.io as resin.io, according to the style manual (#823) [Juan Cruz Viotti]
* chore: update package.json and README.md to match repo description (#824) [Juan Cruz Viotti]
* chore: remove `removedrive` from `dependencies` (#825) [Juan Cruz Viotti]
* minifix(GUI): keep settings checkboxes unchecked until user confirms (#821) [Juan Cruz Viotti]
* chore: add bintray debian publishing script (#819) [Juan Cruz Viotti]
* style(GUI): improve wording of supported extensions label (#807) [Juan Cruz Viotti]
* style(GUI): improve ordering of supported extensions (#806) [Juan Cruz Viotti]
* Fix `at least one volume could not be unmounted` error in OS X. [Juan Cruz Viotti]
* Fix `this.log is not a function` error when clicking "flash again". [Juan Cruz Viotti]
* docs: add an 'Announcing' section to PUBLISHING.md (#814) [Andrew Scheller]
* style(CLI): add `[options]` to usage string [Andrew Scheller]
* docs: add Win 10 IoT to the list of images requiring special treatment (#804) [Juan Cruz Viotti]
* minifix(CLI): fix GitHub issues URL in CLI help [Andrew Scheller]
* style(CLI): don't wrap CLI help outputdrives (#813) [Juan Cruz Viotti]
* docs(CLI): describe proper way to install dependencies (#802) [Juan Cruz Viotti]
* chore: persist a chocolatey cache Appveyor CI builds (#809) [Juan Cruz Viotti]
* chore: remove www from etcher homepage URL (#808) [Juan Cruz Viotti]
* docs: suggest UNetbootin if user requires setting persistence storage (#805) [Juan Cruz Viotti]
* docs(GUI): remove `<version>` from AppImage name (#803) [Juan Cruz Viotti]
* style: fix typos and URLs in CLI.md (#800) [Andrew Scheller]
* style: fix typo in SUPPORT.md [Andrew Scheller]
* chore: update homepage URL to https://www.etcher.io (#795) [Juan Cruz Viotti]
* chore: remove `.hound.yml` (#796) [Juan Cruz Viotti]
* style: fix typo in README.md [Andrew Scheller]
* docs(GUI): explain why some drives are not bootable out of the box (#783) [Juan Cruz Viotti]
* Fix duplicate drives in Windows. [Juan Cruz Viotti]
* docs(GUI): generic appimage name in desktopintegration SKIP instructions (#786) [Juan Cruz Viotti]
* refactor(GUI): log elevation command in Windows (#784) [Juan Cruz Viotti]
* docs(GUI): skip AppImage desktop integration prompt with SKIP (#782) [Juan Cruz Viotti]
* v1.0.0-beta.16 [Juan Cruz Viotti]
* chore: fix linux x86 build script (#780) [Andrew Scheller]
* Prevent escaping issues during elevation by surrounding paths in double quotes. [Juan Cruz Viotti]
* chore: include Etcher version in installer/archive names [Wasabi Fan]
* chore: fix minor install script problems (#777) [Andrew Scheller]
* Fix Etcher leaving zombie processes behind in GNU/Linux. [Juan Cruz Viotti]
* docs: revise PUBLISHING.md [Andrew Scheller]
* Fix "Unexpected end of JSON" error in Windows. [Juan Cruz Viotti]
* Publish standalone Windows builds. [Juan Cruz Viotti]
* chore: distribute AppImage inside a zip (#772) [Juan Cruz Viotti]
* refactor: use local variables in shell functions in build scripts (#771) [Juan Cruz Viotti]
* Use info icon instead of "SHOW FULL FILE NAME" in first step. [Juan Cruz Viotti]
* chore: fix output_package unbound variable in GNU/Linux (#767) [Juan Cruz Viotti]
* Fix drag and drop not working anymore. [Juan Cruz Viotti]
* docs(GUI): minimim macOS supported platform (#765) [Juan Cruz Viotti]
* docs(GUI): no polkit authentication agent found Linux error (#757) [Juan Cruz Viotti]
* chore(debian): add dependency on polkit package (#758) [David Lechner]
* Add support for `etch` images. [Juan Cruz Viotti]
* Don't clear selection state when re-selecting an image. [Juan Cruz Viotti]
* style(GUI): say "eject" instead of "unmount" in Windows (#754) [Juan Cruz Viotti]
* chore: only alias CXX to specific gcc versions on Linux (#755) [Juan Cruz Viotti]
* chore: add debian packaging (#747) [David Lechner]
* docs: clarify that the install script doesn't install pre-requisites (#746) [Juan Cruz Viotti]
* Display image path base name as a tooltip on truncated image name. [Andrew Scheller]
* chore: only apply upx compression when packaging as appimage [David Lechner]
* chore: add appimage command to GNU/Linux build script [David Lechner]
* docs: fix small typo in ARCHITECTURE.md [Andrew Scheller]
* docs: require at least NodeJS v6 to build Etcher (#727) [Juan Cruz Viotti]
* v1.0.0-beta.15 [Juan Cruz Viotti]
* Fix flashing never starting after elevation in GNU/Linux. [Juan Cruz Viotti]
* Fix sporadic EPERM write errors on Windows. [Juan Cruz Viotti]
* chore: apply HFS+ compression to *.app in OS X (#715) [Juan Cruz Viotti]
* Fix incorrect validation errors when flashing bzip2 images. [Juan Cruz Viotti]
* Fix "cscript is not recognised as an internal or external command" Windows error. [Juan Cruz Viotti]
* doc: recovering broken drives (#705) [Juan Cruz Viotti]
* Allow the user to disable auto-update notifications with an environment variable. [Juan Cruz Viotti]
* Allow images to declare a recommended minimum drive size. [Juan Cruz Viotti]
* v1.0.0-beta.14 [Juan Cruz Viotti]
* Upgrade `etcher-image-stream` to v4.3.0. [Juan Cruz Viotti]
* refactor(GUI): remove `ErrorService.reportException()` ENOSPC workaround (#695) [Juan Cruz Viotti]
* Don't clear the drive selection if clicking the "Retry" button. [Juan Cruz Viotti]
* minifix(CLI): only show final checksum if one exists (#692) [Juan Cruz Viotti]
* Allow archive images to configure a certain amount of bytes to be zeroed out from the beginning of the drive when using bmaps. [Juan Cruz Viotti]
* refactor(GUI): replace the orange alert ribbon with a modal (#689) [Juan Cruz Viotti]
* upgrade: `etcher-image-write` to v8.0.0 (#688) [Juan Cruz Viotti]
* style(GUI): fix `state` -> `step` typo in main controller (#687) [Juan Cruz Viotti]
* style(GUI): make "Connect a drive" button blue (#686) [Juan Cruz Viotti]
* Make the "Need help?" link dynamically open the image support url. [Juan Cruz Viotti]
* upgrade: `etcher-image-stream` to v4.0.0 (#682) [Juan Cruz Viotti]
* Show device id if device doesn't have an assigned drive letter in Windows. [Juan Cruz Viotti]
* refactor(GUI): move `alert-ribbon` to the top of the page (#679) [Juan Cruz Viotti]
* refactor(GUI): unify modal styles (#678) [Juan Cruz Viotti]
* refactor(GUI): move button min-width rules to page styles (#677) [Juan Cruz Viotti]
* refactor(GUI): move `_bootstrap.scss` alert rules to `.alert-ribbon` (#680) [Juan Cruz Viotti]
* refactor(GUI): badge coloring (#675) [Juan Cruz Viotti]
* refactor(GUI): explicitly declare `.label-danger` coloring (#676) [Juan Cruz Viotti]
* refactor(GUI): CSS color-scheme (#674) [Juan Cruz Viotti]
* chore: upgrade ruby version in CI services (#670) [Juan Cruz Viotti]
* docs: nsis required version (#669) [Juan Cruz Viotti]
* doc: extract development setup docs into `RUNNING-LOCALLY.md` (#667) [Juan Cruz Viotti]
* chore(GUI): integrate scss-lint (#666) [Juan Cruz Viotti]
* refactor(GUI): move main page specific styles to pages/main/styles (#660) [Juan Cruz Viotti]
* Fix `blkid: command not found` error in certain GNU/Linux distributions. [Juan Cruz Viotti]
* Fix incorrect estimated entry sizes in certain ZIP archives. [Juan Cruz Viotti]
* Prevent `ENOSPC` if the drive capacity is equal to the image size. [Juan Cruz Viotti]
* docs(GUI): runtime linux libraries (#655) [Juan Cruz Viotti]
* refactor: rely on `etcher-image-stream` to fetch bmap contents (#654) [Juan Cruz Viotti]
* Prevent failed validation due to drive getting auto-mounted in GNU/Linux. [Juan Cruz Viotti]
* Upgrade `drivelist` to v3.3.0. [Juan Cruz Viotti]
* Improve speed when retrieving archive image metadata. [Juan Cruz Viotti]
* Fix "`modal.dismiss` is not a function" exception. [Juan Cruz Viotti]
* Improve image full file name modal tooltip. [Juan Cruz Viotti]
* Add `.bmap` support. [Juan Cruz Viotti]
* Upgrade `etcher-image-stream` to v3.1.0. [Juan Cruz Viotti]
* v1.0.0-beta.13 [Juan Cruz Viotti]
* refactor(GUI): main controller (#623) [Juan Cruz Viotti]
* docs(GUI): running Etcher on Wayland (#624) [Juan Cruz Viotti]
* docs: fix non-sense USER-DOCUMENTATION description (#625) [Juan Cruz Viotti]
* minifix(GUI): don't call shell.openExternal if resource is undefined (#622) [Juan Cruz Viotti]
* refactor(GUI): move drive scanner logic to application entry point (#621) [Juan Cruz Viotti]
* refactor(GUI): unify error handling (#620) [Juan Cruz Viotti]
* Prevent selected drive from getting auto-removed when navigating back to the main screen from another screen. [Juan Cruz Viotti]
* Show "Unmounting..." while unmounting a drive. [Juan Cruz Viotti]
* Fix new available drives not being recognised automatically in Windows. [Juan Cruz Viotti]
* Fix application stuck at "Finishing". [Juan Cruz Viotti]
* Display an error if no graphical polkit authentication agent was found. [Juan Cruz Viotti]
* Fix internal removable drives considered system drives in macOS Sierra. [Juan Cruz Viotti]
* Upgrade `etcher-image-write` to v6.0.1. [Juan Cruz Viotti]
* Upgrade `removedrive` to v1.0.0. [Juan Cruz Viotti]
* minifix(GUI): permit a number error code in flash results (#610) [Juan Cruz Viotti]
* refactor(GUI): increase encapsulation of flash results structure (#608) [Juan Cruz Viotti]
* refactor(GUI): extract MainPage from `lib/gui/app.js` (#607) [Juan Cruz Viotti]
* refactor(GUI): extract FlashStateModel from ImageWriterService (#606) [Juan Cruz Viotti]
* minifix(GUI): deselect auto-selected drive if image is too large (#605) [Juan Cruz Viotti]
* refactor(GUI): stop storing flash state in a `.state` object variable (#604) [Juan Cruz Viotti]
* Only enable error reporting if running inside an `asar`. [Juan Cruz Viotti]
* Perform drive auto-selection even when there is no selected image. [Juan Cruz Viotti]
* Fix "backdrop click" uncaught errors on modals. [Juan Cruz Viotti]
* v1.0.0-beta.12 [Juan Cruz Viotti]
* Upgrade `drivelist` to v3.2.4. [Juan Cruz Viotti]
* refactor(GUI): store drive as a reference to available drives (#599) [Juan Cruz Viotti]
* Escape quotes from image paths to prevent Bash errors on GNU/Linux and OS X. [Juan Cruz Viotti]
* Support rich image extensions. [Juan Cruz Viotti]
* upgrade: `etcher-image-stream` to v2.6.1 (#596) [Juan Cruz Viotti]
* minifix(GUI): improve validation error message (#595) [Juan Cruz Viotti]
* chore: integrate versionist (#594) [Juan Cruz Viotti]
* chore: get rid of gulp (#593) [Juan Cruz Viotti]
* Add support for `raw` images. [Juan Cruz Viotti]
* docs: fix error on the upgrading a dependency guide at CONTRIBUTING.md (#592) [Juan Cruz Viotti]
* docs: revise the SUPPORT.md guide (#590) [Juan Cruz Viotti]
* Display a nice alert ribbon if drive runs out of space. [Juan Cruz Viotti]
* Validate the existence of the passed drive. [Juan Cruz Viotti]
* docs: upgrade an npm dependency and handling shrinkwrap correctly (#586) [Juan Cruz Viotti]
* docs: ubuntu iso's hybrid format and parted warnings (#585) [Juan Cruz Viotti]
* Check if drive is large enough using the final uncompressed size of the image. [Juan Cruz Viotti]
* chore: stop requiring a specific nodejs version to build Etcher (#584) [Juan Cruz Viotti]
* docs: explicitly list all dependencies in CONTRIBUTING.md (#583) [Juan Cruz Viotti]
* chore: update shrinkwrap file (#581) [Juan Cruz Viotti]
* chore: change CHANGELOG layout to features/fixes/misc (#580) [Juan Cruz Viotti]
* Add an "unsafe" option to bypass drive protection. [Juan Cruz Viotti]
* Upgrade `drivelist` to v3.2.2. [Juan Cruz Viotti]
* refactor(GUI): increase writer proxy logging (#576) [Juan Cruz Viotti]
* v1.0.0-beta.11 [Juan Cruz Viotti]
* Upgrade `etcher-image-write` to v5.0.2 [Juan Cruz Viotti]
* chore: use comments in issue template (#572) [Wasabi Fan]
* chore: don't force a linebreak style in ESLint (#570) [Juan Cruz Viotti]
* chore: add commands to build scripts (#566) [Juan Cruz Viotti]
* Don't throw an "Invalid image" error if the extension is not in lowercase. [Juan Cruz Viotti]
* chore: simplify GitHub issue template (#569) [Juan Cruz Viotti]
* Set dialog default directory to the place where the AppImage was run from in GNU/Linux. [Juan Cruz Viotti]
* docs(GUI): deactivate desktop shortcut Linux prompt (#563) [Juan Cruz Viotti]
* chore: normalize documentation (#562) [Juan Cruz Viotti]
* Fix `ENOENT` error when selecting certain images with multiple extensions on GNU/Linux. [Juan Cruz Viotti]
* Fix flashing not starting when an image name contains a space. [Juan Cruz Viotti]
* Fix error when writing images containing parenthesis in GNU/Linux and OS X. [Juan Cruz Viotti]
* Fix error when cancelling an elevation request. [Juan Cruz Viotti]
* docs: commit guidelines (#542) [Juan Cruz Viotti]
* chore: point to the new Gitter channel (#555) [Juan Cruz Viotti]
* upgrade: etcher-image-stream to v2.3.0 (#551) [Juan Cruz Viotti]
* minifix(GUI): use close() to dismiss drive selector modal (#550) [Juan Cruz Viotti]
* chore: update shrinkwrap version (#543) [Juan Cruz Viotti]
* upgrade: `sudo-prompt` to v5.1.0 (#547) [Juan Cruz Viotti]
* minifix(GUI): handle image dialog and drive selector errors (#548) [Juan Cruz Viotti]
* refactor(GUI): make use of `etcher-latest-version` (#544) [Juan Cruz Viotti]
* Fix incorrect ETA numbers in certain timezones. [Juan Cruz Viotti]
* Fix state validation error when speed equals zero. [Juan Cruz Viotti]
* Display `*.zip` in the supported images tooltip. [Juan Cruz Viotti]
* chore: make use of ESLint (#540) [Juan Cruz Viotti]
* Fix uncaught exception when showing the update notifier modal. [Juan Cruz Viotti]
* v1.0.0-beta.10 [Juan Cruz Viotti]
* chore: update shrinkwrap file (#538) [Juan Cruz Viotti]
* fix(Windows): upgrade etcher-image-stream to v5.0.2 (#537) [Juan Cruz Viotti]
* fix: don't throw if state percentage is zero (#536) [Juan Cruz Viotti]
* chore: add a GitHub issue template (#535) [Juan Cruz Viotti]
* fix: prevent user from zooming in the whole application (#534) [Juan Cruz Viotti]
* fix(progressButton): spiky diagonal lines (#533) [Juan Cruz Viotti]
* refactor: store settings in redux store (#530) [Juan Cruz Viotti]
* refactor: move flash results state to Redux store (#529) [Juan Cruz Viotti]
* fix: don't throw missing eta if eta is zero (#528) [Juan Cruz Viotti]
* refactor: rename progress property to percentage (#527) [Juan Cruz Viotti]
* test: validate contents of flash state object (#526) [Juan Cruz Viotti]
* fix: broken tests due to orphaned notifier tests (#525) [Juan Cruz Viotti]
* refactor: improve analytics and image-writer module names (#524) [Juan Cruz Viotti]
* fix: emit progress even when not in the main screen (#523) [Juan Cruz Viotti]
* refactor: use ES6 fat arrows in application code (#522) [Juan Cruz Viotti]
* refactor: flatten "flash" data structure property (#521) [Juan Cruz Viotti]
* refactor: expose an object of available actions (#520) [Juan Cruz Viotti]
* fix: don't allow to set the flashing state if not flashing (#519) [Juan Cruz Viotti]
* refactor: reset state when the flashing flag is set to false (#518) [Juan Cruz Viotti]
* fix: check for updates only once at startup (#517) [Juan Cruz Viotti]
* refactor: move auto-select logic to redux store (#516) [Juan Cruz Viotti]
* fix: infinite digest loop with ngRepeat + ImmutableJS (#514) [Juan Cruz Viotti]
* refactor: apply REMOVE_DRIVE recursively in SET_AVAILABLE_DRIVES (#515) [Juan Cruz Viotti]
* fix: deselect drive if its not available anymore (#513) [Juan Cruz Viotti]
* fix: throw if attempting to select a locked drive (#512) [Juan Cruz Viotti]
* docs(CLI.md): write the CLI.md document (#511) [Juan Cruz Viotti]
* chore(gulp): make linter exit with a non-zero code (#510) [Juan Cruz Viotti]
* refactor: manage application state with redux (#508) [Juan Cruz Viotti]
* refactor(DriveScannerService): use RxJS (#505) [Juan Cruz Viotti]
* refactor: make use of `angular-if-state` (#506) [Juan Cruz Viotti]
* fix: ensure dialog.showErrorBox() arguments are strings (#497) [Juan Cruz Viotti]
* docs(MAINTAINERS.md): steps to upgrade electron (#501) [Juan Cruz Viotti]
* feat: add support for dsk images (#504) [Juan Cruz Viotti]
* refactor(cli): make --robot option output JSON (#500) [Juan Cruz Viotti]
* style: fix lint warning in exit-codes.js (#499) [Juan Cruz Viotti]
* refactor: group AppImage related stuff (#498) [Juan Cruz Viotti]
* chore(shrinkwrap): omit platform-specific deps (#503) [Juan Cruz Viotti]
* Get rid of application-wide elevation (#423) [Juan Cruz Viotti]
* v1.0.0-beta.9 [Juan Cruz Viotti]
* docs: document how to update the shrinkwrap file (#495) [Juan Cruz Viotti]
* chore: configure commitizen (#494) [Juan Cruz Viotti]
* Don't check extensions before the first non compressed extension (#493) [Juan Cruz Viotti]
* Open DevTools in "undocked" mode by default (#489) [Juan Cruz Viotti]
* Resolve AppImage binary path correctly when running it as root (#490) [Juan Cruz Viotti]
* Make sure elevated mount-point evaluates to a single line in GNU/Linux (#488) [Juan Cruz Viotti]
* Fix application wide vertical scroll bar (#487) [Juan Cruz Viotti]
* v1.0.0-beta.8 [Juan Cruz Viotti]
* Move update notifier modal style to the component (#486) [Juan Cruz Viotti]
* Check for python in build scripts (#485) [Juan Cruz Viotti]
* Prevent an invalid drive from being auto-selected (#484) [Juan Cruz Viotti]
* Move drive selector warning labels below the drive (#483) [Juan Cruz Viotti]
* Prevent a very long image name from breaking the UI (#479) [Juan Cruz Viotti]
* Remove body display hidden white flash workaround (#478) [Juan Cruz Viotti]
* Upgrade etcher-image-write to v5.0.1 (#469) [Juan Cruz Viotti]
* Fix sporadic race condition in update notifier test suite (#476) [Juan Cruz Viotti]
* Show a "Locked" label if the drive is write-protected (#475) [Juan Cruz Viotti]
* Show an informative label if a drive is not large enough (#474) [Juan Cruz Viotti]
* Apply checksum label padding as a custom modifier (#473) [Juan Cruz Viotti]
* Cleanup CSS (#471) [Juan Cruz Viotti]
* Fix image containing dots in the filename considered unsupported (#468) [Juan Cruz Viotti]
* Refactor supported image logic to SupportedFormatsModel (#467) [Juan Cruz Viotti]
* Extract DrivesModel from DriveScannerService (#466) [Juan Cruz Viotti]
* Prevent selection of invalid images (#462) [Juan Cruz Viotti]
* Link README to the roadmap (#463) [Juan Cruz Viotti]
* Try to get more information about error messages (#464) [Juan Cruz Viotti]
* Fix package.json key/property spacing (#461) [Juan Cruz Viotti]
* Display ETA during flash and check (#460) [Juan Cruz Viotti]
* Update Appveyor badge (#457) [Juan Cruz Viotti]
* Prevent exernal resources from being loaded by the WebView (#456) [Juan Cruz Viotti]
* Document `can-ignore` module.require annotation (#455) [Juan Cruz Viotti]
* Annotation for EncloseJS to ignore missing dependency (#454) [Igor Klopov]
* Upgrade drivelist to v3.1.2 (#450) [Juan Cruz Viotti]
* Fix CI tests (#452) [Juan Cruz Viotti]
* Write a document explaining Etcher's architecture (#447) [Juan Cruz Viotti]
* Don't show a progress bar in update notifier modal (#445) [Juan Cruz Viotti]
* Fix GNU/Linux not opening an external resource when elevated (#446) [Juan Cruz Viotti]
* Create docs/MAINTAINERS.md (#441) [Juan Cruz Viotti]
* v1.0.0-beta.7 [Juan Cruz Viotti]
* Upgrade drivelist to v3.1.1 (#438) [Juan Cruz Viotti]
* Provide a GUI elevation dialog for GNU/Linux (#440) [Juan Cruz Viotti]
* Install NPM dev dependencies during the build (#437) [Juan Cruz Viotti]
* Run linter as part of `npm test` (#436) [Juan Cruz Viotti]
* Prevent pressing "space" to re-click the "Flash" button (#435) [Juan Cruz Viotti]
* Upgrade CI servers NodeJS version (#434) [Juan Cruz Viotti]
* Prevent global shorcuts from interferring with other applications (#433) [Juan Cruz Viotti]
* Fix image drag and drop not working anymore (#432) [Juan Cruz Viotti]
* Add support for .gz and .bz2 (#419) [Juan Cruz Viotti]
* Upgrade electron to v1.1.1 (#427) [Juan Cruz Viotti]
* Add instructions to configure NPM for installation (#429) [Juan Cruz Viotti]
* Fix indentation in build scripts (#428) [Juan Cruz Viotti]
* Install dev dependencies before calling electron-builder on Windows (#426) [Juan Cruz Viotti]
* Override files if needed in the build scripts (#425) [Juan Cruz Viotti]
* Only install production dependencies from build scripts (#424) [Juan Cruz Viotti]
* Enforce expected NodeJS version in build scripts (#422) [Juan Cruz Viotti]
* Display image checksum on success in the CLI (#417) [Juan Cruz Viotti]
* make inbound links from the etcher app traceable in resin's analytics (#411) [Alexandros Marinos]
* Call packageignore.js after depencies have been installed in Windows (#409) [Juan Cruz Viotti]
* v1.0.0-beta.6 [Juan Cruz Viotti]
* Prevent selection of drives that are not large enough (#408) [Juan Cruz Viotti]
* Move the code that performs the writing to lib/cli (#407) [Juan Cruz Viotti]
* Implement update notifier modal (#406) [Juan Cruz Viotti]
* Implement writing by spawning the CLI as a child process (#400) [Juan Cruz Viotti]
* Group documentation in a docs/ directory (#405) [Juan Cruz Viotti]
* Remove implicit "Enable" from settings items (#404) [Juan Cruz Viotti]
* Set mocha reporter to `min` (#403) [Juan Cruz Viotti]
* Implement cross-platform build scripts (#395) [Juan Cruz Viotti]
* Make sure bower dependencies are installed in CI servers (#399) [Juan Cruz Viotti]
* Consider carriage returns when asserting SVG contents equality (#398) [Juan Cruz Viotti]
* Refactor how application selection is accessed from DriveSelectorModal (#397) [Juan Cruz Viotti]
* Point NPM to electron in Appveyor to avoid compilation issues (#402) [Juan Cruz Viotti]
* Show electron output in Appveyor (#401) [Juan Cruz Viotti]
* v1.0.0-beta.5 [Juan Cruz Viotti]
* Add support for XZ compressed images (#376) [Juan Cruz Viotti]
* Revert "Implement writing by spawning the CLI as a child process (#385)" (#394) [Juan Cruz Viotti]
* Fix application not being elevated in Windows (#393) [Juan Cruz Viotti]
* Improve "Select Image" supported file types label with a tooltip (#392) [Juan Cruz Viotti]
* Add Python as a PUBLISHING pre-requisite (#391) [Juan Cruz Viotti]
* Show the forked command as a debug analytics message (#388) [Juan Cruz Viotti]
* Implement writing by spawning the CLI as a child process (#385) [Juan Cruz Viotti]
* Use correct exit codes when running Etcher CLI with --robot (#384) [Juan Cruz Viotti]
* Make sure CLI args are parsed correctly when spawning in OS X (#383) [Juan Cruz Viotti]
* Make use of etcher-image-write (#382) [Juan Cruz Viotti]
* Implement Etcher.OS.Dialog module (#381) [Juan Cruz Viotti]
* Move README "Developing" section to CONTRIBUTING.md (#380) [Juan Cruz Viotti]
* Document exit codes in Etcher CLI help (#379) [Juan Cruz Viotti]
* Upgrade resin-image-write to v4.0.1 (#377) [Juan Cruz Viotti]
* Include lib/cli in final package (#372) [Juan Cruz Viotti]
* Escape leading periods on packageignore list (#373) [Juan Cruz Viotti]
* Make sure the CLI handles arguments correctly when being packaged (#374) [Juan Cruz Viotti]
* Document that ELECTRON_RUN_AS_NODE doesn't load app.asar by default (#375) [Juan Cruz Viotti]
* Lock electron development version, and re-use it in Makefile (#371) [Juan Cruz Viotti]
* Update top-level screenshot (#370) [Juan Cruz Viotti]
* Move Etcher CLI exit code definitions to lib/src (#369) [Juan Cruz Viotti]
* Upgrade resin-image-write to v4.0.0 (#368) [Juan Cruz Viotti]
* Prefix robot progress state output with "progress" (#367) [Juan Cruz Viotti]
* Upgrade node-umount to v1.1.3 (#366) [Juan Cruz Viotti]
* Add entry point file to decide between GUI/CLI (#365) [Juan Cruz Viotti]
* Add an option to control unmounting on success in Etcher CLI (#362) [Juan Cruz Viotti]
* Upgrade sudo-prompt to v3.1.0 (#364) [Juan Cruz Viotti]
* Upgrade outdated dependencies (#363) [Juan Cruz Viotti]
* Implement validation support in Etcher CLI (#361) [Juan Cruz Viotti]
* Implement Etcher CLI "robot" option (#360) [Juan Cruz Viotti]
* Fix lint warnings (#359) [Juan Cruz Viotti]
* Upgrade drivelist to v3.0.0 (#354) [Juan Cruz Viotti]
* Move GUI code into lib/gui (#358) [Juan Cruz Viotti]
* Deprecate tar.gz GNU/Linux "installers" (#356) [Juan Cruz Viotti]
* v1.0.0-beta.4 [Juan Cruz Viotti]
* Fix Error: Cannot find module `../global-shortcut` in Windows (#353) [Juan Cruz Viotti]
* Highlight features in README file (#301) [Juan Cruz Viotti]
* Upgrade Electron to v0.37.6 (#350) [Juan Cruz Viotti]
* Integrate Etcher CLI in the main repository (#352) [Juan Cruz Viotti]
* Add Makefile rule to generate an x86 AppImage for GNU/Linux (#349) [Juan Cruz Viotti]
* Distinguish between flash and validation events in Mixpanel (#347) [Juan Cruz Viotti]
* Make use of AppImage desktop integration script (#346) [Juan Cruz Viotti]
* Generate AppImage package for GNU/Linux x86_64 (#345) [Juan Cruz Viotti]
* Allow to bypass elevation with an environment variable (#343) [Juan Cruz Viotti]
* Remove unnecessary fields from `bower.json`. (#342) [Juan Cruz Viotti]
* Refactor initial elevation routine (#341) [Juan Cruz Viotti]
* Add dashed underline to footer links (#340) [Juan Cruz Viotti]
* Improve UX when closing the drive selector modal (#339) [Juan Cruz Viotti]
* Link the version string in the footer to the CHANGELOG (#337) [Juan Cruz Viotti]
* Add application version to footer (#335) [Juan Cruz Viotti]
* Add missing CHANGELOG diff link [Juan Cruz Viotti]
* v1.0.0-beta.3 [Juan Cruz Viotti]
* Upgrade resin-image-write to v3.0.3 (#331) [Juan Cruz Viotti]
* Fix double-quote lint warnings (#329) [Juan Cruz Viotti]
* Reset writer state on flash error (#330) [Juan Cruz Viotti]
* Implement SVGIcon Angular directive (#324) [Juan Cruz Viotti]
* Misc changes (#322) [Juan Cruz Viotti]
* Require ui.router and ui.bootstrap using NPM style (#321) [Juan Cruz Viotti]
* Document directives with JSDoc (#320) [Juan Cruz Viotti]
* Make all angular modules export the name of the module (#318) [Juan Cruz Viotti]
* Don't require angular-ui-bootstrap in main module (#319) [Juan Cruz Viotti]
* Promisify `drivelist.list()` with `angular-q-promisify` (#317) [Juan Cruz Viotti]
* Reorganize utilities and desktop integration modules (#316) [Juan Cruz Viotti]
* Publish ZIP versions of Etcher.app (#315) [Juan Cruz Viotti]
* Improve UX when re-selecting a single available drive (#313) [Juan Cruz Viotti]
* Add a Mixpanel event when the application starts (#311) [Juan Cruz Viotti]
* Add "Change" button links below each step (#306) [Juan Cruz Viotti]
* Connect DriveSelector with SelectionStateModel (#305) [Juan Cruz Viotti]
* Hide drive selector modal if no available drives (#303) [Juan Cruz Viotti]
* Add Etcher logo to application footer (#302) [Juan Cruz Viotti]
* Replace all occurrences of "burn" with "flash" (#300) [Juan Cruz Viotti]
* Allow to drag and drop an image to the first step (#288) [Juan Cruz Viotti]
* Compress Linux executables and Windows DLLs with UPX (#286) [Juan Cruz Viotti]
* Move package ignore list computation to a separate script (#285) [Juan Cruz Viotti]
* Implement OS notifications on burn completion (#283) [Juan Cruz Viotti]
* Rename Linux binary to "etcher" (#282) [Juan Cruz Viotti]
* Upgrade Electron to v0.36.11 (#275) [Juan Cruz Viotti]
* Prevent dialog.showErrorBox() throwing if wrong parameters (#274) [Juan Cruz Viotti]
* Upgrade drivelist to v2.0.13 (#270) [Juan Cruz Viotti]
* Remove OS X minimum version notice from README [Juan Cruz Viotti]
* Make clear that Etcher supports OS X >= 10.9 (#269) [Juan Cruz Viotti]
* Add subtle hover styling to footer links (#268) [Juan Cruz Viotti]
* Detect removal of selected drive (#264) [Juan Cruz Viotti]
* Fix window contents pushed below when a modal is open (#263) [Juan Cruz Viotti]
* Watch sass files in modules/ (#262) [Juan Cruz Viotti]
* Rebuild pending SASS changes (#261) [Juan Cruz Viotti]
* Invert progress bar stripes (#260) [Juan Cruz Viotti]
* Show drive name in drive selector modal (#259) [Juan Cruz Viotti]
* Fix v1.0.0-beta.2 release date in CHANGELOG [Juan Cruz Viotti]
* v1.0.0-beta.2 [Juan Cruz Viotti]
* Codesign OS X app inside the DMG package [Juan Cruz Viotti]
* Implement write validation support [Juan Cruz Viotti]
* Fix shell.openExternal() freezing GNU/Linux [Juan Cruz Viotti]
* Log Etcher version in Mixpanel and TrackJS [Juan Cruz Viotti]
* Fix uncaught exception if no file was selected from a dialog [Juan Cruz Viotti]
* Enable useContentSize BrowserWindow option [Juan Cruz Viotti]
* Undo `:focus` styles from Bootstrap. [Juan Cruz Viotti]
* Move application images to assets/ [Juan Cruz Viotti]
* Split DriveSelector components into separate files [Juan Cruz Viotti]
* Mark DriveScannerService.setDrives() as private [Juan Cruz Viotti]
* Implement `showIfState` and `hideIfState` directives [Juan Cruz Viotti]
* Implement an `openExternal` attribute directive. [Juan Cruz Viotti]
* Decouple DriveScannerService from Dialog [Juan Cruz Viotti]
* Convert SelectionStateService into a model [Juan Cruz Viotti]
* Extract browser window progress into WindowProgressService [Juan Cruz Viotti]
* Transform SettingsService into the SettingsModel module [Juan Cruz Viotti]
* Add vertical spacing to unmount on success message on finish screen [Juan Cruz Viotti]
* Use SettingsService in FinishController [Juan Cruz Viotti]
* Move all settings related components to a settings page subdirectory [Juan Cruz Viotti]
* Group finish page components in a common directory [Juan Cruz Viotti]
* Group all parts of the progress-button component in a single directory [Juan Cruz Viotti]
* Implement a drive selector modal [Juan Cruz Viotti]
* Style btn-sm [Juan Cruz Viotti]
* Make a CSS class for fixed-width step buttons [Juan Cruz Viotti]
* Fix step vertical bars slight misalignment [Juan Cruz Viotti]
* Merge src/drives.js with DriveScannerService [Juan Cruz Viotti]
* Fix "Use same image" not preserving the image selection [Juan Cruz Viotti]
* Remove unnecessary empty line in success partial [Juan Cruz Viotti]
* Move Boostrap style customisations to a boostrap.scss file [Juan Cruz Viotti]
* Normalise step footers captions [Juan Cruz Viotti]
* Make caption's uppercase by default [Juan Cruz Viotti]
* Convert hero-progress-button into an Angular directive [Juan Cruz Viotti]
* Move title normalisation to desktop.css [Juan Cruz Viotti]
* Refactor tick as a scss component [Juan Cruz Viotti]
* Refactor hero-button as a scss component [Juan Cruz Viotti]
* Refactor caption as a scss component [Juan Cruz Viotti]
* Refactor badge as a scss component [Juan Cruz Viotti]
* v1.0.0-beta.1 [Juan Cruz Viotti]
* Setup code-signing in Windows [Juan Cruz Viotti]
* Add missing package metadata [Juan Cruz Viotti]
* Remove .travis.yml deploy section [Juan Cruz Viotti]
* Return to avoid any further code execution after an elevation error [Juan Cruz Viotti]
* Upgrade drivelist to v2.0.9 [Juan Cruz Viotti]
* Throw error after displaying it with dialog [Juan Cruz Viotti]
* Configure TrackJS with userId [Juan Cruz Viotti]
* Fix Cannot read property 'length' of undefined [Juan Cruz Viotti]
* Enable OS X in Travis CI [Juan Cruz Viotti]
* Allow window to be dragged from anywhere [Juan Cruz Viotti]
* Wipe-out node_modules/ and force-install npm dependencies [Juan Cruz Viotti]
* Change README headline to match landing page [Juan Cruz Viotti]
* Fix broken state when going to settings in the success screen [Juan Cruz Viotti]
* Move NavigationController to a separate file [Juan Cruz Viotti]
* Move SettingsController to settings module [Juan Cruz Viotti]
* Reuse SettingsController in success screen [Juan Cruz Viotti]
* Move FinishController to a separate file [Juan Cruz Viotti]
* Add "Getting Help" guide [Juan Cruz Viotti]
* Add upload-all rule [Juan Cruz Viotti]
* Adhere to a more formal package naming convention [Juan Cruz Viotti]
* Move "Restart" event log to FinishController [Juan Cruz Viotti]
* Update README [Juan Cruz Viotti]
* Bump version to v1.0.0-beta.0 [Juan Cruz Viotti]
* Reset burn state in FinishController [Juan Cruz Viotti]
* Move burn state to ImageWriterService [Juan Cruz Viotti]
* Implement NotifierService [Juan Cruz Viotti]
* Upgrade drivelist to v2.0.8 [Juan Cruz Viotti]
* Show size when there is a selected drive [Juan Cruz Viotti]
* Revisit and improve the PUBLISHING guide [Juan Cruz Viotti]
* Add Makefile rules to publish to S3 [Juan Cruz Viotti]
* Make use of package.json display name to reference the app [Juan Cruz Viotti]
* Move package.ignore contents to package.json [Juan Cruz Viotti]
* Stop scanner interval before starting a new one [Juan Cruz Viotti]
* Upgrade resin-image-zip to v1.1.2 [Juan Cruz Viotti]
* Don't test twice in Appveyor [Juan Cruz Viotti]
* Ignore new dev dependencies [Juan Cruz Viotti]
* Add support for zip images in select image dialog [Juan Cruz Viotti]
* Avoid analytics and logging if dialog resolves no file [Juan Cruz Viotti]
* Make writer.getImageStream() extract images from zip archives [Juan Cruz Viotti]
* Add *.zip to supported files label [Juan Cruz Viotti]
* Implement "Need Help?" button [Juan Cruz Viotti]
* Expose shell.openExternal in NavigationController [Juan Cruz Viotti]
* Add a setting to disable auto-unmount on success [Juan Cruz Viotti]
* Sign application in OS X using Resin's developer ID [Juan Cruz Viotti]
* Update screenshot [Juan Cruz Viotti]
* Make use of UI Router [Juan Cruz Viotti]
* Make use of settings to prevent tracking in analytics module [Juan Cruz Viotti]
* Implement settings screen [Juan Cruz Viotti]
* Fix slighly checkbox vertical alignment issue [Juan Cruz Viotti]
* Only apply necessary margins in spacing module [Juan Cruz Viotti]
* Reformat package.json [Juan Cruz Viotti]
* Upgrade angular-ui-bootstrap to v1.2.1 [Juan Cruz Viotti]
* Upgrade Lodash to v4.5.1 [Juan Cruz Viotti]
* Upgrade gulp-jshint to v2.0.0 [Juan Cruz Viotti]
* Implement AnalyticsService.logEvent() [Juan Cruz Viotti]
* Include TrackJS Angular module in Analytics module [Juan Cruz Viotti]
* Integrate Mixpanel [Juan Cruz Viotti]
* Move display name setting from Makefile to package.json [Juan Cruz Viotti]
* Show progress bar in dock/taskbar [Juan Cruz Viotti]
* Extend package metadata information, mainly in OS X [Juan Cruz Viotti]
* Remove early state notice [Juan Cruz Viotti]
* Upgrade Electron to v0.36.8 [Juan Cruz Viotti]
* Rename release/ to etcher-release/ [Juan Cruz Viotti]
* Configure TrackJS application property [Juan Cruz Viotti]
* Implement release make rule [Juan Cruz Viotti]
* Remove Makefile redundancy with functions [Juan Cruz Viotti]
* Package Etcher for Linux for release [Juan Cruz Viotti]
* Remove unused installers.json from package.ignore [Juan Cruz Viotti]
* Ignore release directory while packaging [Juan Cruz Viotti]
* Implement Windows installers [Juan Cruz Viotti]
* Upgrade sudo-prompt to v2.2.0 [Juan Cruz Viotti]
* Unify handling of elevation errors in etcher.js [Juan Cruz Viotti]
* Downgrade sudo-prompt to v1.1.8 [Juan Cruz Viotti]
* Refer to Etcher instead of Resin Etcher [Juan Cruz Viotti]
* Implement OS X installer [Juan Cruz Viotti]
* Rename output package to "Etcher" instead of "Resin Etcher" [Juan Cruz Viotti]
* Show error dialogs on elevation errors [Juan Cruz Viotti]
* Add new application icons [Juan Cruz Viotti]
* Don't ignore lib/browser in the final package [Juan Cruz Viotti]
* Improve "Burn another" screen design [Juan Cruz Viotti]
* Set content spacing to 40px [Juan Cruz Viotti]
* Fix flash of white at startup [Juan Cruz Viotti]
* Set titleBarStyle to 'hidden-inset' [Juan Cruz Viotti]
* Integrate JSCS with Hound CI [Juan Cruz Viotti]
* Add missin param annotation caught by JSCS [Juan Cruz Viotti]
* Lint JSDoc annotations with JSCS [Juan Cruz Viotti]
* Explain GNU/Linux workaround in it's own section [Juan Cruz Viotti]
* Notice security concerns of adding execution permissions to home directory [Juan Cruz Viotti]
* Document the need of execution permissions in home directory in Linux [Juan Cruz Viotti]
* Inline DriveScannerRefreshService in DriveScannerService [Juan Cruz Viotti]
* Move TrackJS integration to a separate Angular module [Juan Cruz Viotti]
* Prevent click events on disable buttons [Juan Cruz Viotti]
* Remove double notification declaration in .travis.yml [Juan Cruz Viotti]
* Explain that Etcher is currently broken on GNU/Linux [Juan Cruz Viotti]
* Remove unused variables caught by jshint [Juan Cruz Viotti]
* Throw warnings for unused and undefined variables [Juan Cruz Viotti]
* Rename project to Etcher [Juan Cruz Viotti]
* Prevent pointer events in hero-progress-button if active is true [Juan Cruz Viotti]
* Fix sporadic Cannot read property 'then' of undefined [Juan Cruz Viotti]
* Move burn state log to app controller [Juan Cruz Viotti]
* Use Bluebird's filter to simplify listRemovable() [Juan Cruz Viotti]
* Refactor Etcher using ES6 features [Juan Cruz Viotti]
* Enable ES6 in JSHint [Juan Cruz Viotti]
* Install TrackJS from NPM [Juan Cruz Viotti]
* Convert angular.scss and desktop.scss to plain CSS files [Juan Cruz Viotti]
* Show master branch status in Travis CI badge [Juan Cruz Viotti]
* Run jscs as part of gulp lint [Juan Cruz Viotti]
* Adapt JSCS for tests [Juan Cruz Viotti]
* Fix style issues detected by JSCS [Juan Cruz Viotti]
* Add .jscsrc configuration file [Juan Cruz Viotti]
* Make use of "progress" mocha reporter [Juan Cruz Viotti]
* Move LoggerService timestamp to $log decorator [Juan Cruz Viotti]
* Upgrade Electron to v0.36.4 [Juan Cruz Viotti]
* Get rid of Browserify [Juan Cruz Viotti]
* Improve README header style [Juan Cruz Viotti]
* Make use of SVG badges [Juan Cruz Viotti]
* Add button to burn the same image again. Fixes #74 [Federico Martín Alconada Verzini]
* Integrate Etcher with TrackJS [Juan Cruz Viotti]
* Make LoggerService use Angular's $log [Juan Cruz Viotti]
* Make use of LoggerService in reselection routines [Juan Cruz Viotti]
* Explain why we toggle body's display manually instead of using ngCloak [Juan Cruz Viotti]
* Implement a decent debug logger service [Juan Cruz Viotti]
* Only show supported files label when there is no selected image [Juan Cruz Viotti]
* Allow to re-select the first two step selections [Juan Cruz Viotti]
* Implement removeDrive and removeImage in selection service [Juan Cruz Viotti]
* Add image format footer explanation [Juan Cruz Viotti]
* Show burn speed information during write [Juan Cruz Viotti]
* Save burn progress speed in image writer state [Juan Cruz Viotti]
* Rename setProgress to setProgressState [Juan Cruz Viotti]
* Make setProgress accept an options object [Juan Cruz Viotti]
* Implement ImageWriterService.reset() [Juan Cruz Viotti]
* Namespace ImageWriter progress in state object [Juan Cruz Viotti]
* Require electron-window as ElectronWindow [Juan Cruz Viotti]
* Rebuild browserify browser code [Juan Cruz Viotti]
* Only target v4 in CI servers [Juan Cruz Viotti]
* Set an explicit maxlen [Juan Cruz Viotti]
* Autoselect a single drive by using DriveScanner `scan` event [Juan Cruz Viotti]
* Make DriveScanner.start() return an EventEmitter instance [Juan Cruz Viotti]
* Trigger drive scans after slight delays [Juan Cruz Viotti]
* Autoselect the drive if only one drive is present [Juan Cruz Viotti]
* Implement new footer with the Resin.io logo [Juan Cruz Viotti]
* Only append label if this exists in hero-icon [Juan Cruz Viotti]
* Allow customising hero-icon size using HTML attributes [Juan Cruz Viotti]
* Reference the experimental Etcher CLI [Juan Cruz Viotti]
* Improve Travis CI and Appveyor notifications [Juan Cruz Viotti]
* Improve pull request contributing guidelines [Juan Cruz Viotti]
* Add Waffle badge [Juan Cruz Viotti]
* Add Gitter badge [Juan Cruz Viotti]
* Simplify drive letter / device conditional [Juan Cruz Viotti]
* Update Appveyor badge [Juan Cruz Viotti]
* Do not append a backslash after drive letter in Windows [Juan Cruz Viotti]
* Change license to Apache 2.0 [Juan Cruz Viotti]
* Rename Herostratus to Resin Etcher [Juan Cruz Viotti]
* Split footer caption anchor [Juan Cruz Viotti]
* Show drive letter on selection on Windows [Juan Cruz Viotti]
* Replace windosu with elevator [Juan Cruz Viotti]
* Prevent white flash when running application [Juan Cruz Viotti]
* Implement poor man's ngCloak based on app controller [Juan Cruz Viotti]
* Use ngBind instead of curly braces interpolation [Juan Cruz Viotti]
* Package application with electron v0.36.0 [Juan Cruz Viotti]
* Fix drivelist spawn issues inside asar package [Juan Cruz Viotti]
* Fix Windows not asking for elevation when packaged [Juan Cruz Viotti]
* Clarify that the drive was safely ejected [Juan Cruz Viotti]
* Do not lint scss in Hound [Juan Cruz Viotti]
* Implement burn complete screen [Juan Cruz Viotti]
* Show error dialogs on JavaScript exceptions [Juan Cruz Viotti]
* Disable Travis CI emails [Juan Cruz Viotti]
* Upgrade windosu to v0.2.0 [Juan Cruz Viotti]
* Add a global shortcut to open DevTools [Juan Cruz Viotti]
* Add finished state before done [Juan Cruz Viotti]
* Eject Windows drives after successful burning [Juan Cruz Viotti]
* Pass the whole drive object to the writer [Juan Cruz Viotti]
* Add table of contents to README.md [Juan Cruz Viotti]
* Add CONTRIBUTING guide [Juan Cruz Viotti]
* win32: Show drive letter instead of device in dropdown [Juan Cruz Viotti]
* all: Fix button outline on focus [Juan Cruz Viotti]
* osx: Fix first time elevation failure [Juan Cruz Viotti]
* Change footer text [Juan Cruz Viotti]
* Document the need of npm install --force [Juan Cruz Viotti]
* osx(package) Build without --asar [Juan Cruz Viotti]
* Increase OS X parent kill time to 500ms [Juan Cruz Viotti]
* Use Bluebird instead of native promises [Juan Cruz Viotti]
* Fire and forget OS X sudo prompt [Juan Cruz Viotti]
* Add application icon [Juan Cruz Viotti]
* Package Electron with 0.31.2 [Juan Cruz Viotti]
* Remove window.mocha stub [Juan Cruz Viotti]
* Downgrade to Electron v0.31.2 [Juan Cruz Viotti]
* Disable icons when step is disabled [Juan Cruz Viotti]
* Load svgs inline to be able to style their colours [Juan Cruz Viotti]
* Ignore unnecessary files when packaging app [Juan Cruz Viotti]
* Package application for all supported oses [Juan Cruz Viotti]
* Upgrade sudo-prompt to v1.1.8 [Juan Cruz Viotti]
* Fix step border alignment when on third step [Juan Cruz Viotti]
* Add Hound CI config [Juan Cruz Viotti]
* Fix EPERM issue when burning in Windows [Juan Cruz Viotti]
* Initial commit [Juan Cruz Viotti]

# v2.1.6-p
## (2026-07-31)

* Update npm-shrinkwrap.json for @reforged/maker-appimage ^5.2.0 [FireRat]
* Update @reforged/maker-appimage to ^5.2.0 and require SM_CODE_SIGNING_CERT_SHA1_HASH for Windows signing [FireRat]
* Restore readFile import in windows-network-drives.ts [FireRat]
* Fix lint uncommitted diffs, sinon os.platform stubbing, and middleEllipsis test assertion [FireRat]
* Fix wdio-electron-service build tool conflict and use standard macos runners [FireRat]
* Release v2.1.6-P [FireRat]
* Enable Flowzone's built-in versioning [FireRat]
* Bump version to 2.1.6-P and take over versioning from Flowzone [FireRat]
* Fall back to GITHUB_TOKEN for Flowzone and normalize changelog heading [FireRat]
* Add versionist config and dependencies manifest [FireRat]
* Pass the FLOWZONE_TOKEN secret to the Flowzone workflow explicitly [FireRat]
* Trigger CI after adding FLOWZONE_TOKEN [FireRat]
* Add Flowzone CI pipeline and make unsigned builds first-class [FireRat]
* Remove success and featured project webviews, forward renderer logs, and rebuild sidecar on Node 20 [FireRat]
* Fix target selection crash, harden sidecar requests, and restore winusb driver support on Node 20 [FireRat]
* Make internal windows robust and replace electron-log with the builtin console logger [FireRat]
* Remove stale telemetry alert and rename window title [FireRat]
* Fix TypeScript module resolution for NodeNext [FireRat]
* Rebrand to Etcher Privacy and fix build on forge 7.8.1 [FireRat]
* fix [Alexander Frick]
* 1.19.22 rebase [Alexander Frick]
* Rebase onto balena Etcher v2.1.6 (Electron 37) [FireRat666]
* Remove Sentry error reporting and the analytics-client tracking module [FireRat666]
* Remove the auto-updater and EtcherPro promotions [FireRat666]
* Rebrand to Etcher Privacy (product, executables, artifacts, app IDs, links) [FireRat666]
* Keep the etcher-ng UI customizations (resizable window, dark theme, context menus) [FireRat666]

# v2.1.6
## (2026-05-13)

* Fix MacOS x86 build by switching to the macos-14-large GH runner [Thodoris Greasidis]

# v2.1.5
## (2026-05-07)

* Replace the EOL macos-13 test runners with macos-14 [Thodoris Greasidis]
* Add libgdk-pixbuf dependency alternatives to fix Ubuntu 26.04 installation [Thodoris Greasidis]

# v2.1.4
## (2025-07-29)

* patch: fix ubuntu 24 build and flash issues - bump electron-forge to 7.8.1 - bump electron to 37.2.4 - stop producing broken appimage [Edwin Joassart]
* patch: fix windows build and flash issues - downgrade flasher's node to 20.11.1 on windows - bump windows GHA runner to 2022 - bump winusb-driver-generator to 2.1.9 [Edwin Joassart]
* patch: refactor permission code [Edwin Joassart]

# v2.1.3
## (2025-05-15)

* Remove stale secrets [Anton Belodedenko]

# v2.1.2
## (2025-05-08)

* patch: remove analytics [Edwin Joassart]

# v2.1.1
## (2025-05-05)

* patch: fix signin windows artifacts [Edwin Joassart]

# v2.1.0
## (2025-02-27)

* Add informational notice about how to disable analytics collection [myarmolinsky]

# v2.0.0
## (2025-02-20)

* major: build on ubuntu 22 and macos 13 [Edwin Joassart]

# v1.19.25
## (2024-10-10)

* patch: bump etcher-sdk to 9.1.2 [Edwin Joassart]

# v1.19.24
## (2024-10-09)

* patch: etcher-util is corrupted in RPM package [Richard Glidden]

# v1.19.23
## (2024-10-09)

* patch: remove gconf2 libgconf-2-4 deps [Marc-Aurèle Brothier]

# v1.19.22
## (2024-07-18)

* Update some npm packages [Alex313031]
* Replace deprecated Flowzone inputs [Kyle Harding]

# v1.19.21
## (2024-06-02)

* patch: Update Electron to 28.3.3 [Alex313031]
* Update some npm packages [Alex313031]

# v1.19.20
## (2024-05-30)

* patch: fix missing windows dependency [Edwin Joassart]

# v1.19.19
## (2024-05-28)

* patch: add sentry debug flag [Edwin Joassart]
* patch: fix Sentry DSN for main process [Edwin Joassart]

# v1.19.18
## (2024-05-09)

* patch: fix injection of analytics key at build time [Edwin Joassart]

# v1.19.17
## (2024-04-26)

* Rebase: Rebase and downgrade to Node 18/Electron 28 [Alex313031]
* Update some npm packages [Alex313031]
* Added Electron version to Javascript Console [Alex313031]
* Added "Decompress First" option to Settings [Alex313031]
* Tweaked Settings page, and restored the "Settings" title [Alex313031]
* Made most links open in new Electron window rather than external browser [Alex313031]
* Stopped inlining notification icon png [Alex313031]
* Completely disabled auto-updates and telemetry [Alex313031]
* Fixed dark mode sometimes not working on some OSes [Alex313031]
* Added "Edit Config File" to the Developer menu [Alex313031]
* Added keyboard shortcut for chrome://process-internals [Alex313031]
* Changed Restart App shortcut to Ctrl + Alt + R instead of Ctrl + Shift + R, which would just reload the page [Alex313031]
* Linting and spelling fixes [Alex313031]

# v1.19.16
## (2024-04-26)

* patch: hold request for metadata while waiting for flasher [Edwin Joassart]

# v1.19.15
## (2024-04-26)

* patch: bump etcher-sdk to 9.0.11 to fix url loading using http/2 [Edwin Joassart]

# v1.19.14
## (2024-04-25)

* patch: pretty-bytes to 6.1.1 [Edwin Joassart]

# v1.19.13
## (2024-04-25)

* patch: use etcher icon as loading for windows installer [Edwin Joassart]
* patch: fix windows squirrel install [Edwin Joassart]

# v1.19.12
## (2024-04-25)

* patch: bump minors & patch [Edwin Joassart]
* patch: bump @electron-forge/* to 7.4.0 [Edwin Joassart]
* patch: bump electron to 30.0.1 & @electron/remote to 2.1.2 [Edwin Joassart]
* patch: npm upgrade [Edwin Joassart]
* patch: bump @balena/lint to 8.0.2 and fix formating [Edwin Joassart]
* patch: fix pretty-bytes imports [Edwin Joassart]
* patch: bump etcher-sdk to 9.0.9 [Edwin Joassart]

# v1.19.11
## (2024-04-25)

* patch: setup wdio and port (most) tests [Edwin Joassart]

# v1.19.10
## (2024-04-23)

* patch: remove node-ipc and tests [Edwin Joassart]
* patch: switch api; use ws; integrate sudo-prompt - switch api roles flow - use websocket instead of node-ipc - integrate; modernize; simplify and deprecate sudo-prompt [Edwin Joassart]
* patch: refactor api to use a single topic [Edwin Joassart]
* patch: set require node engine to 20 [Edwin Joassart]

# v1.19.9
## (2024-04-22)

* patch: prevent rebuild of native deps by @electron/rebuild [Edwin Joassart]

# v1.19.8
## (2024-04-22)

* patch: replace deprecated pkg with yao-pkg and bump etcher-util node v to 20.10 [Edwin Joassart]

# v1.19.7
## (2024-04-15)

* Update and fix etcher-sdk on Windows [Alex313031]
* patch: fix formating [Edwin Joassart]
* patch: configure prettier in the project to use balena-lint configuration [Edwin Joassart]

# v1.19.6
## (2024-02-20)

* Update notification icon [Alex313031]
* Replace deprecated flowzone input tests_run_on [Kyle Harding]
* patch: fix win signature process [Edwin Joassart]

# v1.19.5
## (2024-02-08)

* patch: remove screensaver error when not on etcher-pro [Alex313031]
* patch: fix typo in IPC server id [Alex313031]

# v1.19.4
## (2024-01-26)

* patch: remove screensaver error when not on etcher-pro [Edwin Joassart]
* patch: fix typo in IPC server id [Edwin Joassart]

# v1.19.3
## (2023-12-22)

* Update dependencies [Edwin Joassart]

# v1.19.2
## (2023-12-22)

* fix: typos [Rotzbua]

# v1.19.1
## (2023-12-22)

* patch: update winget-releaser v2 [Vedant]

# v1.19.0
## (2023-12-21)

* Use native ARM runner for Apple Silicon builds [Akis Kesoglou]
* Calculate and upload build artifact sha256 checksums [Akis Kesoglou]
* Migrate build pipeline to Electron Forge [Akis Kesoglou]

# v1.18.14
## (2023-12-20)

* Remove repo config from flowzone.yml [Kyle Harding]
* Update actions/upload-artifact to v4 [Kyle Harding]

# v1.18.13
## (2023-10-16)

* patch: upgrade to electron 25 [Edwin Joassart]
* patch: refactor scanner, loader and flasher out of gui + upgrade to electron 25 [Edwin Joassart]

# v1.18.12
## (2023-07-19)

* Update instructions for installing deb file [Jorge Capona]

# v1.18.11
## (2023-07-13)

* fix: prevent stealing window focus from auth dialog [leadpogrommer]

# v1.18.10
## (2023-07-12)

* spelling: validates [Josh Soref]
* spelling: undefined [Josh Soref]
* spelling: except if [Josh Soref]

# v1.18.9
## (2023-07-12)

* Fix opening links from within SafeWebView [Akis Kesoglou]

# v1.18.8
## (2023-04-26)

* Patch: Fix Support link [Oliver Plummer]

# v1.18.7
## (2023-04-25)

* patch: update docs to remove cloudsmith install instructions for linux [Edwin Joassart]

# v1.18.6
## (2023-03-21)

* add-flash-with-etcher-to-docs [Lizzie Epton]

# v1.18.5
## (2023-03-09)

* patch: add apt-get update in flowzone preinstall [Edwin Joassart]

# v1.18.4
## (2023-03-02)

* patch: bump etcher-sdk to 8.3.1 [JOASSART Edwin]

# v1.18.3
## (2023-02-22)

* fix-typo [Lizzie Epton]
* edits-to-info-about-efp [Lizzie Epton]
* Add reference to etcher-efp in publishing.md [Edwin Joassart]

# v1.18.2
## (2023-02-21)

* patch: organize docs [mcraa]
* patch: actualized develop guide [mcraa]
* patch: updated commit message guide [mcraa]
* add-item-from-FAQs [Lizzie Epton]
* patch: removed gt characters from contributing guide [mcraa]
* patch: added docosaurus site name [mcraa]

# v1.18.1
## (2023-02-15)

* patch: use @electron/remote for locating rpiboot files [mcraa]

# v1.18.0
## (2023-02-14)

* Update to Electron 19 [Akis Kesoglou]
* Remove Spectron and related (low-value) tests [Akis Kesoglou]

# v1.17.0
## (2023-02-14)

* Update to Electron 17 and Node 16 [Akis Kesoglou]

# v1.16.0
## (2023-02-14)

* Update to Electron 14 [Akis Kesoglou]

# v1.15.6
## (2023-02-13)

* patch: app: i18n: Translation: Update zh-TW strings * Improve translate. * Sync layout with English strings ts file. [Edward Wu]

# v1.15.5
## (2023-02-03)

* revert auto-update feature [JOASSART Edwin]

# v1.15.4
## (2023-02-02)

* Switch to `@electron/remote` [Akis Kesoglou]

# v1.15.3
## (2023-02-02)

* move EFP & success-banner to efp.balena.io [Edwin Joassart]

# v1.15.2
## (2023-02-02)

* Remove configuration remote update [Edwin Joassart]

# v1.15.1
## (2023-02-01)

* Remove redundant resinci-deploy build step [Akis Kesoglou]
* Lazily import Electron from child-writer process [Akis Kesoglou]

# v1.15.0
## (2023-01-27)

* Add support for Node 18 [Akis Kesoglou]

# v1.14.3
## (2023-01-19)

* patch: fixed mac sudo on other languages [Peter Makra]

# v1.14.2
## (2023-01-17)

* patch: revert to lockfile v1 [Peter Makra]
* patch: update etcher-sdk for cm4v5 [builder555]

# v1.14.1
## (2023-01-16)

* fix disabled-screensaver unhandled exception outside balena-electron env [Edwin Joassart]

# v1.14.0
## (2023-01-16)

* Anonymizes all paths before sending [Otávio Jacobi]
* patch: Sentry fix path [Edwin Joassart]
* Remove personal path on etcher [Otávio Jacobi]
* Unifying sentry reports in a single project [Edwin Joassart]
* Removes corvus in favor of sentry and analytics client [Otávio Jacobi]
* Removes corvus in favor of sentry and analytics client [Otávio Jacobi]

# v1.13.4
## (2023-01-12)

* Adding EtcherPro device serial number to the Settings modal [Aurelien VALADE]

# v1.13.3
## (2023-01-11)

* patch: progress cm4 to second stage [Peter Makra]

# v1.13.2
## (2023-01-02)

* patch: fixed winget parameter name [mcraa]

# v1.13.1
## (2023-01-02)

* patch: updated sdk to fix bz2 issue [Peter Makra]
* patch: update copyright in electron-builder [JOASSART Edwin]

# v1.13.0
## (2022-12-28)

* minor: electron version bump [Peter Makra]
* patch: handle ext2fs with webpack [Peter Makra]
* Patch: update etcher-sdk version to fix CM4 issues [builder555]

# v1.12.7
## (2022-12-20)

* Update dependency i18next to 21.10.0 [Renovate Bot]

# v1.12.6
## (2022-12-20)

* Update dependency react-i18next to 11.18.6 [Renovate Bot]

# v1.12.5
## (2022-12-20)

* Patch: made trim setting more readable [builder555]

# v1.12.4
## (2022-12-19)

* patch: publish to winget with gh action [Begula]

# v1.12.3
## (2022-12-19)

* Patch: replaced plain text with i18n in settings [builder555]

# v1.12.2
## (2022-12-16)

* Update dependency webpack-dev-server to 4.11.1 [Renovate Bot]

# v1.12.1
## (2022-12-16)

* Patch: expose trim ext{2,3,4} setting [builder555]

# v1.12.0
## (2022-12-14)

* i18n support and Chinese translation [ab77]
* minor: optimize i18n [r-q]

# v1.11.10
## (2022-12-13)

* Update dependency webpack-cli to 4.10.0 [Renovate Bot]

# v1.11.9
## (2022-12-12)

* Update dependency webpack to 5.75.0 [Renovate Bot]

# v1.11.8
## (2022-12-12)

* Update dependency awscli to 1.27.28 [Renovate Bot]

# v1.11.7
## (2022-12-12)

* Update dependency uuid to 8.3.2 [Renovate Bot]

# v1.11.6
## (2022-12-12)

* Update dependency tslib to 2.4.1 [Renovate Bot]
* Patch: run linux build on ubuntu-20.04 [Edwin Joassart]

# v1.11.5
## (2022-12-10)

* Update dependency ts-loader to 8.4.0 [Renovate Bot]

# v1.11.4
## (2022-12-10)

* Update dependency styled-components to 5.3.6 [Renovate Bot]

# v1.11.3
## (2022-12-10)

* Update dependency terser-webpack-plugin to 5.3.6 [Renovate Bot]

# v1.11.2
## (2022-12-10)

* Update dependency string-replace-loader to 3.1.0 [Renovate Bot]

# v1.11.1
## (2022-12-10)

* Update dependency sinon to 9.2.4 [Renovate Bot]

# v1.11.0
## (2022-12-10)

* Update dependency shyaml to 0.6.2 [Renovate Bot]

# v1.10.29
## (2022-12-10)

* Update dependency awscli to 1.27.27 [Renovate Bot]

# v1.10.28
## (2022-12-10)


<details>
<summary> Update dependency rendition to 19.3.2 [Renovate Bot] </summary>

> ## rendition-19.3.2
> ### (2020-12-29)
> 
> * Add Breadcrumbs component export [JSReds]
> 
> ## rendition-19.3.1
> ### (2020-12-29)
> 
> * Fix max-width on breadcrumbs container [JSReds]
> 
> ## rendition-19.3.0
> ### (2020-12-29)
> 
> * Add Breadcrumbs component [JSReds]
> 

</details>

# v1.10.27
## (2022-12-09)

* Update dependency redux to 4.2.0 [Renovate Bot]

# v1.10.26
## (2022-12-09)

* Update dependency pretty-bytes to 5.6.0 [Renovate Bot]

# v1.10.25
## (2022-12-09)

* Update dependency pnp-webpack-plugin to 1.7.0 [Renovate Bot]

# v1.10.24
## (2022-12-09)

* Update dependency node-ipc to 9.2.1 [Renovate Bot]

# v1.10.23
## (2022-12-09)

* Update dependency mocha to 8.4.0 [Renovate Bot]

# v1.10.22
## (2022-12-09)

* Update dependency mini-css-extract-plugin to 1.6.2 [Renovate Bot]

# v1.10.21
## (2022-12-09)

* Update dependency lint-staged to 10.5.4 [Renovate Bot]

# v1.10.20
## (2022-12-09)

* Update dependency husky to 4.3.8 [Renovate Bot]

# v1.10.19
## (2022-12-09)

* Update dependency esbuild-loader to 2.20.0 [Renovate Bot]

# v1.10.18
## (2022-12-09)

* Update dependency electron-updater to 4.6.5 [Renovate Bot]

# v1.10.17
## (2022-12-09)

* Update dependency electron-notarize to 1.2.2 [Renovate Bot]

# v1.10.16
## (2022-12-08)

* Update dependency awscli to 1.27.26 [Renovate Bot]

# v1.10.15
## (2022-12-08)

* Update dependency electron-builder to 22.14.13 [Renovate Bot]

# v1.10.14
## (2022-12-08)

* Update dependency debug to 4.3.4 [Renovate Bot]

# v1.10.13
## (2022-12-08)

* Update dependency awscli to 1.27.25 [Renovate Bot]

# v1.10.12
## (2022-12-08)

* Update dependency css-loader to 5.2.7 [Renovate Bot]

# v1.10.11
## (2022-12-07)

* Update dependency awscli to 1.27.24 [Renovate Bot]

# v1.10.10
## (2022-12-07)

* Update dependency @types/node to 14.18.34 [Renovate Bot]

# v1.10.9
## (2022-12-06)

* Enable repository configuration [ab77]

# v1.10.8
## (2022-12-05)

* Update dependency chai to 4.3.7 [Renovate Bot]

# v1.10.7
## (2022-12-05)

* Use core workflow for GitHub publish [ab77]

# v1.10.6
## (2022-12-02)

* Dummy update to fix asset version issue [Edwin Joassart]

# v1.10.5
## (2022-12-02)

* Patch: run linux build on ubuntu-18.04 [Edwin Joassart]

# v1.10.4
## (2022-12-01)

* patch: remove Homebrew instructions in README [Patrick Linnane]

# v1.10.3
## (2022-12-01)

* Allow external contributors [ab77]

# v1.10.2
## (2022-11-25)

* Fix missing analytics token [Edwin Joassart]

# v1.10.1
## (2022-11-21)

* Fixing call to electron block screensaver methods invocation [Aurelien VALADE]

# v1.10.0
## (2022-11-10)

* testing renovate [builder555]

# v1.9.0
## (2022-11-08)

* Update dependency awscli to 1.27.5 [Renovate Bot]

# v1.8.17
## (2022-11-08)

* Update dependency @types/react-dom to 16.9.17 [Renovate Bot]

# v1.8.16
## (2022-11-08)

* Update dependency @types/react to 16.14.34 [Renovate Bot]

# v1.8.15
## (2022-11-08)

* CI: generalise artefact handling [ab77]

# v1.8.14
## (2022-11-08)

* Update dependency @types/node to 14.18.33 [Renovate Bot]

# v1.8.13
## (2022-11-08)

* Update dependency @types/copy-webpack-plugin to 6.4.3 [Renovate Bot]

# v1.8.12
## (2022-11-08)

* Update dependency @fortawesome/fontawesome-free to 5.15.4 [Renovate Bot]

# v1.8.11
## (2022-11-08)

* Update dependency @balena/lint to 5.4.2 [Renovate Bot]

# v1.8.10
## (2022-11-08)


<details>
<summary> Update dependency sys-class-rgb-led to 3.0.1 [Renovate Bot] </summary>

> ## sys-class-rgb-led-3.0.1
> ### (2021-07-01)
> 
> * patch: Delete Codeowners [Vipul Gupta]
> 
</details>

# v1.8.9
## (2022-11-08)

* Update dependency semver to 7.3.8 [Renovate Bot]

# v1.8.8
## (2022-11-08)

* Update dependency omit-deep-lodash to 1.1.7 [Renovate Bot]

# v1.8.7
## (2022-11-08)

* Update dependency immutable to 3.8.2 [Renovate Bot]

# v1.8.6
## (2022-11-08)

* Update dependency electron-rebuild to 3.2.9 [Renovate Bot]

# v1.8.5
## (2022-11-08)

* Update dependency electron-mocha to 9.3.3 [Renovate Bot]

# v1.8.4
## (2022-11-08)

* Update dependency @types/webpack-node-externals to 2.5.3 [Renovate Bot]

# v1.8.3
## (2022-11-08)

* Update dependency @types/tmp to 0.2.3 [Renovate Bot]

# v1.8.2
## (2022-11-08)

* Generate release notes with git [ab77]

# v1.8.1
## (2022-11-07)

* Update dependency @types/mime-types to 2.1.1 [Renovate Bot]

# v1.8.0
## (2022-11-07)

* Update scripts/resin digest to 652fdd4 [Renovate Bot]

# v1.7.15
## (2022-11-07)

* Build targets individually [ab77]

# v1.7.14
## (2022-11-07)

* Update dependency lodash to 4.17.21 [SECURITY] [Renovate Bot]

# v1.7.13
## (2022-11-07)

* Update release notes on finalize [ab77]

# v1.7.12
## (2022-11-07)

* Avoid duplicate releases [ab77]

# v1.7.11
## (2022-11-07)

* Only run finalize on Linux runners [ab77]

# v1.7.10
## (2022-11-07)

* Switch to Flowzone [ab77]

# v1.7.9
## (2022-04-22)

* patch: update allowed extensions to include deb afterinstall in build [mcraa]
* patch: add update notification [Peter Makra]
* patch: fix usb-device-boot link in README [Andrew Scheller]
* Fix application directory for Debian postinst script [Ken Bannister]

# v1.7.8
## (2022-03-18)

* patch: complete suse uninstall readme [Peter Makra]
* patch: completed suse instructions [Peter Makra]
* patch: order rpm instrictions [Peter Makra]
* patch: enabled update notification for version 1.7.8 [Peter Makra]
* patch: updated title to balenaEtcher [Peter Makra]
* patch: cleanup and organize readme [Peter Makra]
* patch: extend cloudsmith attribution in readme [Peter Makra]
* Update macOS Icon to Big Sur Style [Logicer]

# v1.7.7
## (2022-02-22)

* patch: clarified update check [Peter Makra]
* patch: autoupdate stagingPercentage check, include default [Peter Makra]

# v1.7.6
## (2022-02-21)

* patch: version number notification [Peter Makra]
* patch: fixed typos in template [Peter Makra]
* patch: add requirements and help to issue template [mcraa]
* patch: add requirements and help to issue template [mcraa]

# v1.7.5
## (2022-02-21)

* patch: fix flashing from URL when using basic auth [Marco Füllemann]

# v1.7.4
## (2022-02-21)

* patch: set version update notification 1.7.3 [Peter Makra]
* patch: updated electron to 12.2.3 [Peter Makra]
* patch: updated electron to 12.2.3 [Peter Makra]

# v1.7.3
## (2021-12-29)

* patch: fix mesage of null [Peter Makra]

# v1.7.2
## (2021-12-21)

* patch: fixed open from browser on windows [Peter Makra]

# v1.7.1
## (2021-11-22)

* patch: Revert back to electron-rebuild [Lorenzo Alberto Maria Ambrosi]
* patch: Disallow TS in JS [Lorenzo Alberto Maria Ambrosi]
* patch: Remove esInterop TS flag [Lorenzo Alberto Maria Ambrosi]
* patch: Use @balena/sudo-prompt [Lorenzo Alberto Maria Ambrosi]
* patch: Update rpiboot guide link [Lorenzo Alberto Maria Ambrosi]
* patch: Improve webpack build time [Lorenzo Alberto Maria Ambrosi]

# v1.7.0
## (2021-11-09)

* patch: Add missing @types/react@16.8.5 [Lorenzo Alberto Maria Ambrosi]
* patch: Use npm ci in Makefile [Lorenzo Alberto Maria Ambrosi]
* patch: Add draft info boxes for system information [Lorenzo Alberto Maria Ambrosi]
* patch: Remove electron-rebuild package [Lorenzo Alberto Maria Ambrosi]
* patch: Make electron a dev. dependency [Lorenzo Alberto Maria Ambrosi]
* patch: Remove electron-rebuild package [Lorenzo Alberto Maria Ambrosi]
* patch: Use exact modules versions [Lorenzo Alberto Maria Ambrosi]
* patch: Update etcher-sdk from v6.2.5 to v6.3.0 [Lorenzo Alberto Maria Ambrosi]
* Fix write step for Http file process [JSReds]
* patch: Fix linting errors [Lorenzo Alberto Maria Ambrosi]
* minor: Refactor dependencies installation to avoid custom scripts [Lorenzo Alberto Maria Ambrosi]
* patch: Fix LEDs init error [Lorenzo Alberto Maria Ambrosi]

# v1.6.0
## (2021-09-20)

* Add support for basic auth when downloading images from URL. [Marco Füllemann]
* patch: Update etcher-sdk from v6.2.1 to v6.2.5 [Lorenzo Alberto Maria Ambrosi]
* Update Makefile to Apple M1 info [David Gaspar]
* Add LED settings for potentially different hardware [Lorenzo Alberto Maria Ambrosi]

# v1.5.122
## (2021-09-02)

* Restore image file selection LED-drive pathing [Lorenzo Alberto Maria Ambrosi]
* Update scripts submodule [Lorenzo Alberto Maria Ambrosi]
* Change LEDs colours [Lorenzo Alberto Maria Ambrosi]
* Windows images now show the proper warning again [Lorenzo Alberto Maria Ambrosi]
* Fix Update and install with DNF instructions [Mohamed Salah]
* Add possibile authorization as a query param [JSReds]
* update the windows part [Xtraim]
* Update SUPPORT.md [thambu1710]
* replace make webpack with npm run webpack [Seth Falco]
* Add loader on image select [JSReds]
* add pnp-webpack-plugin [Zane Hitchcox]
* Remove redundant codespell dependency/tests [Lorenzo Alberto Maria Ambrosi]

# v1.5.121
## (2021-07-05)

* patch: Delete Codeowners [Vipul Gupta]
* Add source maps for devtools [Lorenzo Alberto Maria Ambrosi]
* Clone submodules when initializing modules [Lorenzo Alberto Maria Ambrosi]
* patch: Select drive on list interaction rather than modal closing [Lorenzo Alberto Maria Ambrosi]

# v1.5.120
## (2021-05-11)

* Update README to reference Cloudsmith [Lorenzo Alberto Maria Ambrosi]

# v1.5.119
## (2021-04-30)

* Update readme for new PPA provider [Lorenzo Alberto Maria Ambrosi]

# v1.5.118
## (2021-04-27)

* patch: development environment [Zane Hitchcox]
* patch: watch files for electron [Zane Hitchcox]

# v1.5.117
## (2021-04-02)

* Rename mac releases (keep old naming) [Alexis Svinartchouk]
* Disable spectron tests on macOS [Alexis Svinartchouk]
* Update electron to v12.0.2 [Alexis Svinartchouk]

<details>
<summary> Update etcher-sdk from 6.1.1 to 6.2.1 [Alexis Svinartchouk] </summary>

> ## etcher-sdk-6.2.1
> ### (2021-03-26)
> 
> 
> <details>
> <summary> Update node-raspberrypi-usbboot from 0.2.11 to 0.3.0 [Alexis Svinartchouk] </summary>
> 
>> ### node-raspberrypi-usbboot-0.3.0
>> #### (2021-03-26)
>> 
>> * Add support for compute module 4 [Alexis Svinartchouk]
>> * Fix size endianness of boot_message_t message [Alexis Svinartchouk]
>> 
> </details>
> 
> 
> ## etcher-sdk-6.2.0
> ### (2021-02-18)
> 
> * Added BeagleBone USB Boot example [Parthiban Gandhi]
> * Added BeagleBone USB Boot support [Parthiban Gandhi]
> 
</details>

* Fix getAppPath() returning an asar file on macOS [Alexis Svinartchouk]
* Grammar fix [Andrew Scheller]
* (docs) update README.md [vlad doster]
* Update copyright year in electron-builder.yml [Andrew Scheller]
* Update copyright year in .resinci.json [Andrew Scheller]
* Separate the Yum and DNF instructions. [Dugan Chen]
* Set msvs_version to 2019 when rebuilding [Alexis Svinartchouk]
* Use moduleIds: 'natural' in webpack config to keep js files in arm64 and x64 mac builds identical [Alexis Svinartchouk]
* Update electron-builder to 22.10.5 [Alexis Svinartchouk]
* Update spectron to v13 [Alexis Svinartchouk]
* Update dependencies, use aws4-axios@2.2.1 to avoid adding more dependiencies [Alexis Svinartchouk]
* Update scripts to build universal mac dmgs on the ci [Alexis Svinartchouk]
* Fix beforeBuild.js script to also work on mac [Alexis Svinartchouk]
* Support building universal dmgs (x64 and arm64) for mac [Alexis Svinartchouk]
* Update electron-builder to 22.10.4 [Alexis Svinartchouk]
* Fix titlebar z-index [Alexis Svinartchouk]
* Explicitly set contextIsolation to false [Alexis Svinartchouk]
* Update electron from 9.4.1 to 11.2.3 [Alexis Svinartchouk]

<details>
<summary> Update etcher-sdk from 6.1.0 to 6.1.1 [Alexis Svinartchouk] </summary>

> ## etcher-sdk-6.1.1
> ### (2021-02-10)
> 
> 
> <details>
> <summary> Update node-raspberrypi-usbboot from 0.2.10 to 0.2.11 [Alexis Svinartchouk] </summary>
> 
>> ### node-raspberrypi-usbboot-0.2.11
>> #### (2021-02-10)
>> 
>> * Update @balena.io/usb from 1.3.12 to 1.3.14 [Alexis Svinartchouk]
>> 
> </details>
> 
> 
</details>

# v1.5.116
## (2021-02-03)

* Only cleanup temporary decompressed files in child-writer [Alexis Svinartchouk]
* Add .versionbot/CHANGELOG.yml [Alexis Svinartchouk]
* Stop using node-tmp, use withTmpFile from etcher-sdk instead [Alexis Svinartchouk]

<details>
<summary> Update etcher-sdk from 5.2.2 to 6.1.0 [Alexis Svinartchouk] </summary>

> ## etcher-sdk-6.1.0
> ### (2021-02-03)
> 
> * Prefix temporary decompressed images filenames [Alexis Svinartchouk]
> 
> ## etcher-sdk-6.0.1
> ### (2021-02-02)
> 
> * Ignore ENOENT errors on unlink in withTmpFile [Alexis Svinartchouk]
> 
> ## etcher-sdk-6.0.0
> ### (2021-02-01)
> 
> * Export tmp and add prefix and postfix options [Alexis Svinartchouk]
> 
> ## etcher-sdk-5.2.3
> ### (2021-01-26)
> 
> * upgrade lint [Zane Hitchcox]
> 
</details>

* Revert "Change some border colors to have higher contrast" [Alexis Svinartchouk]
* Update electron to v9.4.1 [Alexis Svinartchouk]

<details>
<summary> Update etcher-sdk from 5.2.1 to 5.2.2 [Alexis Svinartchouk] </summary>

> ## etcher-sdk-5.2.2
> ### (2021-01-19)
> 
> 
> <details>
> <summary> Update drivelist from 9.2.2 to 9.2.4 [Alexis Svinartchouk] </summary>
> 
>> ### drivelist-9.2.4
>> #### (2021-01-19)
>> 
>> * Pass strings between methods as std::string instead of char * [Floris Bos]
>> 
>> ### drivelist-9.2.3
>> #### (2021-01-19)
>> 
>> * Support lsblk versions that do no support the pttype column [Alexis Svinartchouk]
>> 
> </details>
> 
> 
</details>

# v1.5.115
## (2021-01-18)


<details>
<summary> Update etcher-sdk from 5.1.12 to 5.2.1 [Alexis Svinartchouk] </summary>

> ## etcher-sdk-5.2.1
> ### (2021-01-15)
> 
> * Only run one diskpart at a time [Alexis Svinartchouk]
> * Ignore diskpart VDS_E_DISK_IS_OFFLINE errors [Alexis Svinartchouk]
> 
> ## etcher-sdk-5.2.0
> ### (2021-01-06)
> 
> * Store progress on usbboot devices [Alexis Svinartchouk]
> 
</details>

# v1.5.114
## (2021-01-12)

* Remove libappindicator1 debian dependency [Alexis Svinartchouk]

<details>
<summary> Update etcher-sdk from 5.1.11 to 5.1.12 [Alexis Svinartchouk] </summary>

> ## etcher-sdk-5.1.12
> ### (2021-01-06)
> 
> * Remove BlockDevice.mountpoints incorrect typing [Alexis Svinartchouk]
> * Update axios to 0.21.1 and aws4-axios to 2.0.1 [Alexis Svinartchouk]
> 
</details>


<details>
<summary> Update rendition from 18.8.3 to 19.2.0 [Alexis Svinartchouk] </summary>

> ## rendition-19.2.0
> ### (2020-12-29)
> 
> * Add truncate property to Txt component [JSReds]
> 
> ## rendition-19.1.0
> ### (2020-12-29)
> 
> * Add fallback image source to Img component [Stevche Radevski]
> 
> ## rendition-19.0.0
> ### (2020-12-21)
> 
> * Remove Arcslider component [Stevche Radevski]
> 
> ## rendition-18.20.4
> ### (2020-12-17)
> 
> * Upgrade rehype-raw to latest version [Kakhaber]
> 
> ## rendition-18.20.3
> ### (2020-12-17)
> 
> * Fix disabled button tooltip [JSReds]
> 
> ## rendition-18.20.2
> ### (2020-12-16)
> 
> * Turn keydown handler into an arrow function [Stevche Radevski]
> 
> ## rendition-18.20.1
> ### (2020-12-14)
> 
> * Fix form not getting the Enter key event when nested in a modal [Stevche Radevski]
> 
> ## rendition-18.20.0
> ### (2020-12-14)
> 
> * feat: Add new StatsBar component [Graham McCulloch]
> 
> ## rendition-18.19.2
> ### (2020-12-14)
> 
> * Update snapshots [Graham McCulloch]
> * Removed out-of-date documentation and template text [Graham McCulloch]
> 
> ## rendition-18.19.1
> ### (2020-12-04)
> 
> * Markdown: Fix line breaks [Kakhaber]
> 
> ## rendition-18.19.0
> ### (2020-12-02)
> 
> * Make card size responsive [Stevche Radevski]
> 
> ## rendition-18.18.0
> ### (2020-12-02)
> 
> * Allow passing responsive values to datagrid width props [Stevche Radevski]
> 
> ## rendition-18.17.2
> ### (2020-12-01)
> 
> * Update snapshots due to a Card change [JSReds]
> 
> ## rendition-18.17.1
> ### (2020-12-01)
> 
> * Card: make body to be full height [JSReds]
> 
> ## rendition-18.17.0
> ### (2020-12-01)
> 
> * Add star rating component [Kakhaber]
> 
> ## rendition-18.16.0
> ### (2020-11-23)
> 
> * Completely revamp the development setup for rendition [Stevche Radevski]
> 
> ## rendition-18.15.1
> ### (2020-11-16)
> 
> * Modal: Change the button margins to use the predefined spacing palette [Thodoris Greasidis]
> 
> ## rendition-18.15.0
> ### (2020-11-16)
> 
> * Modal: Move the cancel button first for dangerous & warning actions [Thodoris Greasidis]
> 
> ## rendition-18.14.0
> ### (2020-11-16)
> 
> * Allow passing checked items as a prop to Table [Stevche Radevski]
> 
> ## rendition-18.13.4
> ### (2020-11-16)
> 
> * Fix accidental complete lodash import [Thodoris Greasidis]
> 
> ## rendition-18.13.3
> ### (2020-11-16)
> 
> * Form: Remove the flaky Captcha sceenshot test [Thodoris Greasidis]
> * Update react-simplemde-editor & snapshots for upstream versions [Thodoris Greasidis]
> 
> ## rendition-18.13.2
> ### (2020-10-29)
> 
> * Updated snapshots [Graham McCulloch]
> * Fix: Confirm only depends on the files it needs [Graham McCulloch]
> 
> ## rendition-18.13.1
> ### (2020-10-23)
> 
> * Button: Preserve event during confirmation [Kakhaber]
> 
> ## rendition-18.13.0
> ### (2020-10-22)
> 
> * Button: Add confirmation property [Kakhaber]
> 
> ## rendition-18.12.2
> ### (2020-10-21)
> 
> * Tabs: changed interfaces and props [JSReds]
> 
> ## rendition-18.12.1
> ### (2020-10-20)
> 
> * Fix Tabs typings [Stevche Radevski]
> 
> ## rendition-18.12.0
> ### (2020-10-19)
> 
> * Add a Grid component [Stevche Radevski]
> 
> ## rendition-18.11.3
> ### (2020-10-14)
> 
> * Added more documentation for JsonSchemaRenderer [Graham McCulloch]
> 
> ## rendition-18.11.2
> ### (2020-10-14)
> 
> * fix: UI schema for JsonSchemaRenderer DropDownButton and ButtonGroup widgets [Graham McCulloch]
> 
> ## rendition-18.11.1
> ### (2020-10-13)
> 
> * Add dark mode to storybook [Stevche Radevski]
> 
> ## rendition-18.11.0
> ### (2020-10-08)
> 
> * Allow passing widget to extraFormats field [Stevche Radevski]
> 
> ## rendition-18.10.2
> ### (2020-09-30)
> 
> * Resolve module path not relying on node_moules dir [Kakhaber]
> 
> ## rendition-18.10.1
> ### (2020-09-29)
> 
> * Set tabpanel height so it stretches to full height [StefKors]
> * Specify tabs width to fix layout problems [StefKors]
> 
> ## rendition-18.10.0
> ### (2020-09-24)
> 
> * feat: Add ColorWidget for JsonSchemaRenderer [Graham McCulloch]
> 
> ## rendition-18.9.2
> ### (2020-09-22)
> 
> * Markdown: Ignore decorators inside a code block [Kakhaber]
> 
> ## rendition-18.9.1
> ### (2020-09-21)
> 
> * Add compact variation to tabs [StefKors]
> 
> ## rendition-18.9.0
> ### (2020-09-18)
> 
> * Improve spacing for Modal and Select components [Stevche Radevski]
> 
> ## rendition-18.8.4
> ### (2020-09-17)
> 
> * fix: Use widget's display name to reference the widget [Graham McCulloch]
> 
</details>

* Update dependencies [Alexis Svinartchouk]
* Update @balena/lint to 5.3.0 [Alexis Svinartchouk]
* Update webpack to v5 [Alexis Svinartchouk]
* Fix typo in webpack.config.ts comment [Alexis Svinartchouk]
* docs: fix quote marks [Aaron Shaw]
* Disable screensaver while flashing (on balena-electron-env) [Alexis Svinartchouk]

# v1.5.113
## (2020-12-16)

* Show the first error for each drive (not the last) [Alexis Svinartchouk]
* Fix red leds not showing for failed devices [Alexis Svinartchouk]
* docs: add documentation links [Aaron Shaw]
* docs: update macOS version [Aaron Shaw]
* Improve hover message when the drive is too small [Alexis Svinartchouk]
* Update electron to v9.4.0 [Alexis Svinartchouk]
* Update npm to v6.14.8 [Giovanni Garufi]
* Update rgb leds colors [Alexis Svinartchouk]
* Remove unmountOnSuccess setting [Alexis Svinartchouk]
* Only show auto-updates setting on supported targets [Alexis Svinartchouk]
* Remove dead code in settings modal [Alexis Svinartchouk]
* Fix effective flashing speed calculation for compressed images [Alexis Svinartchouk]
* Change some border colors to have higher contrast [Lorenzo Alberto Maria Ambrosi]

<details>
<summary> Update etcher-sdk from 5.1.10 to 5.1.11 [Alexis Svinartchouk] </summary>

> ## etcher-sdk-5.1.11
> ### (2020-12-07)
> 
> * Don't use the O_SYNC flag for block devices, only O_DIRECT [Alexis Svinartchouk]
> 
</details>


<details>
<summary> Update sys-class-rgb-led from 2.1.1 to 3.0.0 [Alexis Svinartchouk] </summary>

> ## sys-class-rgb-led-3.0.0
> ### (2020-12-03)
> 
> * Add example etcher-pro rainbow animation [Alexis Svinartchouk]
> * Use one setInterval instead of a loop for each led, t in seconds [Alexis Svinartchouk]
> 
</details>

# v1.5.112
## (2020-12-02)

* Add rendition and sys-class-rgb-led to repo.yml [Alexis Svinartchouk]

<details>
<summary> Update sys-class-rgb-led from 2.1.0 to 2.1.1 [Alexis Svinartchouk] </summary>

> ## sys-class-rgb-led-2.1.1
> ### (2020-12-01)
> 
> * Replace resin-lint with @balena/lint [Alexis Svinartchouk]
> * Update typescript to v4.1.2 [Alexis Svinartchouk]
> * Add versionbot changelog [Alexis Svinartchouk]
> 
</details>

* Fix layout when the featured project is not showing [Alexis Svinartchouk]
* Improve flashing error handling [Alexis Svinartchouk]
* Fix modal content height on Windows [Alexis Svinartchouk]

<details>
<summary> Update etcher-sdk from 5.1.5 to 5.1.10 [Alexis Svinartchouk] </summary>

> ## etcher-sdk-5.1.10
> ### (2020-12-02)
> 
> 
> <details>
> <summary> Update balena-image-fs from 7.0.5 to 7.0.6 [Alexis Svinartchouk] </summary>
> 
>> ### balena-image-fs-7.0.6
>> #### (2020-12-02)
>> 
>> 
>> <details>
>> <summary> Update ext2fs from 3.0.4 to 3.0.5 [Alexis Svinartchouk] </summary>
>> 
>>> #### node-ext2fs-3.0.5
>>> ##### (2020-12-02)
>>> 
>>> * Fix reading and discarding with offsets > 32 bits [Alexis Svinartchouk]
>>> 
>> </details>
>> 
>> 
> </details>
> 
> 
> ## etcher-sdk-5.1.9
> ### (2020-12-01)
> 
> * Add repo.yml file [Alexis Svinartchouk]
> * Update @balena/udif from 1.1.0 to 1.1.1 [Alexis Svinartchouk]
> 
> <details>
> <summary> Update zip-part-stream from 1.0.2 to 1.0.3 [Alexis Svinartchouk] </summary>
> 
>> ### zip-part-stream-1.0.3
>> #### (2020-11-30)
>> 
>> * Add versionbot changelog [Alexis Svinartchouk]
>> 
> </details>
> 
> 
> <details>
> <summary> Update node-raspberrypi-usbboot from 0.2.9 to 0.2.10 [Alexis Svinartchouk] </summary>
> 
>> ### node-raspberrypi-usbboot-0.2.10
>> #### (2020-11-30)
>> 
>> * Update typescript to v4.1.2 [Alexis Svinartchouk]
>> * Add versionbot changelog [Alexis Svinartchouk]
>> 
> </details>
> 
> 
> <details>
> <summary> Update mountutils from 1.3.19 to 1.3.20 [Alexis Svinartchouk] </summary>
> 
>> ### mountutils-1.3.20
>> #### (2020-11-30)
>> 
>> * Add versionbot changelog [Alexis Svinartchouk]
>> 
> </details>
> 
> 
> <details>
> <summary> Update gzip-stream from 1.1.1 to 1.1.2 [Alexis Svinartchouk] </summary>
> 
>> ### gzip-stream-1.1.2
>> #### (2020-11-30)
>> 
>> * Add versionbot changelog [Alexis Svinartchouk]
>> 
> </details>
> 
> 
> <details>
> <summary> Update drivelist from 9.2.1 to 9.2.2 [Alexis Svinartchouk] </summary>
> 
>> ### drivelist-9.2.2
>> #### (2020-11-30)
>> 
>> * Update typescript to v4.1.2 [Alexis Svinartchouk]
>> * Add versionbot changelog [Alexis Svinartchouk]
>> 
> </details>
> 
> 
> <details>
> <summary> Update blockmap from 4.0.2 to 4.0.3 [Alexis Svinartchouk] </summary>
> 
>> ### blockmap-4.0.3
>> #### (2020-11-30)
>> 
>> * Update typescript to v4.1.2 [Alexis Svinartchouk]
>> * Add versionbot changelog [Alexis Svinartchouk]
>> 
> </details>
> 
> 
> <details>
> <summary> Update partitioninfo from 6.0.1 to 6.0.2 [Alexis Svinartchouk] </summary>
> 
>> ### partitioninfo-6.0.2
>> #### (2020-11-27)
>> 
>> 
>> <details>
>> <summary> Update file-disk from 8.0.0 to 8.0.1 [Alexis Svinartchouk] </summary>
>> 
>>> #### file-disk-8.0.1
>>> ##### (2020-11-26)
>>> 
>>> * Add versionbot changelog [Alexis Svinartchouk]
>>> 
>> </details>
>> 
>> * Add versionbot changelog [Alexis Svinartchouk]
>> 
> </details>
> 
> 
> <details>
> <summary> Update file-disk from 8.0.0 to 8.0.1 [Alexis Svinartchouk] </summary>
> 
>> ### file-disk-8.0.1
>> #### (2020-11-26)
>> 
>> * Add versionbot changelog [Alexis Svinartchouk]
>> 
>> ### file-disk-8.0.1
>> #### (2020-11-26)
>> 
>> * Add versionbot changelog [Alexis Svinartchouk]
>> 
> </details>
> 
> 
> <details>
> <summary> Update balena-image-fs from 7.0.4 to 7.0.5 [Alexis Svinartchouk] </summary>
> 
>> ### balena-image-fs-7.0.5
>> #### (2020-11-27)
>> 
>> 
>> <details>
>> <summary> Update file-disk from 8.0.0 to 8.0.1 [Alexis Svinartchouk] </summary>
>> 
>>> #### file-disk-8.0.1
>>> ##### (2020-11-26)
>>> 
>>> * Add versionbot changelog [Alexis Svinartchouk]
>>> 
>> </details>
>> 
>> 
>> <details>
>> <summary> Update ext2fs from 3.0.3 to 3.0.4 [Alexis Svinartchouk] </summary>
>> 
>>> #### node-ext2fs-3.0.4
>>> ##### (2020-11-26)
>>> 
>>> * Add versionbot changelog [Alexis Svinartchouk]
>>> 
>> </details>
>> 
>> 
>> <details>
>> <summary> Update partitioninfo from 6.0.1 to 6.0.2 [Alexis Svinartchouk] </summary>
>> 
>>> #### partitioninfo-6.0.2
>>> ##### (2020-11-27)
>>> 
>>> 
>>> <details>
>>> <summary> Update file-disk from 8.0.0 to 8.0.1 [Alexis Svinartchouk] </summary>
>>> 
>>>> ##### file-disk-8.0.1
>>>> ###### (2020-11-26)
>>>> 
>>>> * Add versionbot changelog [Alexis Svinartchouk]
>>>> 
>>> </details>
>>> 
>>> * Add versionbot changelog [Alexis Svinartchouk]
>>> 
>> </details>
>> 
>> * Add versionbot changelog [Alexis Svinartchouk]
>> 
> </details>
> 
> 
> ## etcher-sdk-5.1.8
> ### (2020-11-26)
> 
> * Add versionbot changelog [Alexis Svinartchouk]
> 
> ## etcher-sdk-5.1.7
> ### (2020-11-25)
> 
> * Don't start opening drives in advance to avoid unhandled rejections [Alexis Svinartchouk]
> * Update generated docs [Alexis Svinartchouk]
> 
> ## etcher-sdk-5.1.6
> ### (2020-11-24)
> 
> * Do not unmount source drives [Alexis Svinartchouk]
> * Factorize retrying transient errors [Alexis Svinartchouk]
> * Retry opening files & block devices on transient errors [Alexis Svinartchouk]
> * Update generated docs [Alexis Svinartchouk]
> 
</details>

* Set useContentSize to true so the size is the same on all platforms [Alexis Svinartchouk]

# v1.5.111
## (2020-11-23)

* Warn when the source drive has no partition table [Alexis Svinartchouk]
* Use a different icon when no source drive is available [Alexis Svinartchouk]
* Allow selecting a locked SD card as the source drive [Alexis Svinartchouk]
* Remove "Validate write on success" setting. Validation is always enabled, press the "skip" button to skip it. [Alexis Svinartchouk]
* Update electron to v9.3.3 [Alexis Svinartchouk]
* Update etcher-sdk to 5.1.1, use WASM ext2fs module [Alexis Svinartchouk]

# v1.5.110
## (2020-11-04)

* Remove console.log in tests [Lorenzo Alberto Maria Ambrosi]
* Fix URL not being selected with custom protocol [Lorenzo Alberto Maria Ambrosi]
* Add skip function to validation [Lorenzo Alberto Maria Ambrosi]
* Rework success screen [Lorenzo Alberto Maria Ambrosi]

# v1.5.109
## (2020-09-14)

* Workaround elevation bug on Windows when the username contains an ampersand [Alexis Svinartchouk]

# v1.5.108
## (2020-09-10)

* Fix content not loading when the app path contains special characters [Alexis Svinartchouk]

# v1.5.107
## (2020-09-04)

* Re-enable ext partitions trimming on 32 bit Windows [Alexis Svinartchouk]
* Rework system & large drives handling logic [Lorenzo Alberto Maria Ambrosi]
* Reword macOS Catalina askpass message [Lorenzo Alberto Maria Ambrosi]
* Add clone-drive workflow [Lorenzo Alberto Maria Ambrosi]

# v1.5.106
## (2020-08-27)

* Disable ext partitions trimming on 32 bit windows until it is fixed [Alexis Svinartchouk]
* Fix opening zip files from servers accepting Range headers [Alexis Svinartchouk]

# v1.5.105
## (2020-08-25)

* Update etcher-sdk to 4.1.26 [Alexis Svinartchouk]
* URL selector cancel button cancels ongoing url selection [Alexis Svinartchouk]
* Spinner for URL selector modal [Alexis Svinartchouk]

# v1.5.104
## (2020-08-20)

* Fix writing config file [Alexis Svinartchouk]
* Update electron to v9.2.1 [Alexis Svinartchouk]

# v1.5.103
## (2020-08-18)

* Update rendition  to ^17 [Alexis Svinartchouk]
* Update electron to 9.2.0 [Alexis Svinartchouk]
* Update etcher-sdk to ^4.1.23 [Alexis Svinartchouk]
* Move linting and testing into package.json [Alexis Svinartchouk]
* Set module: es2015 in tsconfig.json [Alexis Svinartchouk]
* Replace native elevator with sudo-prompt on windows [Alexis Svinartchouk]
* Don't import WeakMap polyfill in deep-map-keys [Alexis Svinartchouk]
* Don't use lodash in child-writer.js [Alexis Svinartchouk]
* Optimize svgs [Alexis Svinartchouk]
* User regular stream in lzma-native instead of readable-stream [Alexis Svinartchouk]
* Remove Bluebird [Alexis Svinartchouk]

# v1.5.102
## (2020-07-27)

* Fix flashing truncated images, fix flashing large dmgs [Alexis Svinartchouk]
* Electron 9.1.1 [Alexis Svinartchouk]
* Remove bluebird from main process, reduce lodash usage [Alexis Svinartchouk]
* Centralize imports in child-writer [Alexis Svinartchouk]
* Split main process and child-writer js files [Alexis Svinartchouk]
* Stop using request, replace it with already used axios [Alexis Svinartchouk]
* Remove font awesome unused icons from the generated bundle [Alexis Svinartchouk]
* Remove no longer used .sass-lint.yml [Alexis Svinartchouk]
* Use tslib [Alexis Svinartchouk]
* Use strict typescript compiler option [Alexis Svinartchouk]
* Update rendition to ^16.1.1 [Alexis Svinartchouk]

# v1.5.101
## (2020-07-09)

* Resize modal to show content appropriately [Lorenzo Alberto Maria Ambrosi]
* Update etcher-sdk to v4.1.16 [Lorenzo Alberto Maria Ambrosi]
* Convert sass to plain css [Lorenzo Alberto Maria Ambrosi]
* Remove unused scss [Lorenzo Alberto Maria Ambrosi]
* Remove unused warning in settings [Lorenzo Alberto Maria Ambrosi]
* Refactor UI without bootstrap & flexboxgrid [Lorenzo Alberto Maria Ambrosi]
* Restyle modals [Lorenzo Alberto Maria Ambrosi]
* Remove bootstrap & flexboxgrid [Lorenzo Alberto Maria Ambrosi]
* Rework and move flashing view elements [Lorenzo Alberto Maria Ambrosi]
* Refactor UI grid to use rendition [Lorenzo Alberto Maria Ambrosi]

# v1.5.100
## (2020-06-22)

* Update partitioninfo to 5.3.5 [Alexis Svinartchouk]
* Add .vhd to the list of supported extensions, allow opening any file [Alexis Svinartchouk]
* Update mocha to v8.0.1 [Alexis Svinartchouk]
* Update electron-notarize to v1.0.0 [Alexis Svinartchouk]
* Update electron to v9.0.4 [Alexis Svinartchouk]
* Update etcher-sdk to v4.1.15 [Alexis Svinartchouk]
* Sticky header in target selection table [Alexis Svinartchouk]
* Update rendition to 15.2.1 [Alexis Svinartchouk]
* Fix source-selector image height [Lorenzo Alberto Maria Ambrosi]
* Update rendition to v15.0.0 [Lorenzo Alberto Maria Ambrosi]
* Merge unsafe mode with new target selector [Lorenzo Alberto Maria Ambrosi]
* Rework target selector modal [Lorenzo Alberto Maria Ambrosi]

# v1.5.99
## (2020-06-12)

* Update node-raspberrypi-usbboot to 0.2.8 [Alexis Svinartchouk]
* Update electron to 9.0.3 [Alexis Svinartchouk]
* Inline all svgs [Alexis Svinartchouk]

# v1.5.98
## (2020-06-10)

* Use between 2 and 256MiB for buffering depending on the number of drives [Alexis Svinartchouk]
* Check that argument is an url or a regular file before opening [Alexis Svinartchouk]
* Update etcher-sdk to ^4.1.13 [Alexis Svinartchouk]

# v1.5.97
## (2020-06-08)

* Update electron to v9.0.2 [Alexis Svinartchouk]
* Fix flash from url on windows [Alexis Svinartchouk]
* Avoid random access in http sources [Alexis Svinartchouk]
* Update etcher-sdk to ^4.1.8 [Alexis Svinartchouk]
* Read image path from arguments, register `etcher://...` protocol [Alexis Svinartchouk]
* Update etcher-sdk to ^4.1.6 [Alexis Svinartchouk]
* Fix sudo-prompt promisification [Alexis Svinartchouk]
* Allow skipping notarization when building package (dev) [Lorenzo Alberto Maria Ambrosi]

# v1.5.96
## (2020-06-03)

* Fix ia32 builds for windows [Alexis Svinartchouk]
* Remove writing speed from finish screen [Alexis Svinartchouk]
* Add effective speed in flash results [Alexis Svinartchouk]
* Update progress bar style [Alexis Svinartchouk]
* Change font to SourceSansPro and fix hover color [Alexis Svinartchouk]
* Update rendition to ^14.13.0 [Alexis Svinartchouk]
* Remove unused styles [Alexis Svinartchouk]

# v1.5.95
## (2020-06-01)

* spectron: Make tests pass on Windows Docker containers [Juan Cruz Viotti]

# v1.5.94
## (2020-05-27)

* Stop checking file extensions [Alexis Svinartchouk]
* Fix flash from url (broken in 1.5.92) [Alexis Svinartchouk]
* Update etcher-sdk to ^4.1.4 [Alexis Svinartchouk]

# v1.5.93
## (2020-05-25)

* Update electron-builder to v22.6.1 [Alexis Svinartchouk]
* Strip out comments from generated code [Alexis Svinartchouk]
* Update electron to v9.0.0 [Alexis Svinartchouk]

# v1.5.92
## (2020-05-22)

* Use electron.app.getAppPath() instead of reading it from argv in catalina-sudo [Alexis Svinartchouk]
* Disable asar packing on all platforms [Alexis Svinartchouk]
* Remove unneeded fortawesome from main.scss [Alexis Svinartchouk]
* Remove unneeded font formats [Alexis Svinartchouk]
* Webpack everything, reduce package size [Alexis Svinartchouk]

# v1.5.91
## (2020-05-21)

* Minor fix - Init isSourceDrive param in correct place [Lorenzo Alberto Maria Ambrosi]
* Fix undefined image from DriveCompatibilityWarning [Rob Evans]

# v1.5.90
## (2020-05-20)

* Update leds behaviour [Alexis Svinartchouk]

# v1.5.89
## (2020-05-13)

* Fix drive selector modal padding [Alexis Svinartchouk]
* Update all dependencies minor versions [Alexis Svinartchouk]
* Update @types/node 12.12.24 -> 12.12.39 [Alexis Svinartchouk]
* Update ts-loader 6 -> 7 [Alexis Svinartchouk]
* Update sinon 8 -> 9 [Alexis Svinartchouk]
* Update node-gyp 3 -> 6 [Alexis Svinartchouk]
* Update lint-staged 9 -> 10 [Alexis Svinartchouk]
* Update husky 3 -> 4 [Alexis Svinartchouk]
* Remove no longer used html-loader dev dependency [Alexis Svinartchouk]
* Update electron-notarize 0.1.1 -> 0.3.0 [Alexis Svinartchouk]
* Remove no longer used chalk dev dependency [Alexis Svinartchouk]
* Update @types/tmp 0.1.0 -> 0.2.0 [Alexis Svinartchouk]
* Update @types/sinon 7 -> 9 [Alexis Svinartchouk]
* Update @types/semver 6 -> 7 [Alexis Svinartchouk]
* Update @types/mocha 5 -> 7 [Alexis Svinartchouk]

# v1.5.88
## (2020-05-12)

* Update roboto-fontface 0.9.0 -> 0.10.0 [Alexis Svinartchouk]
* Update rendition 12 -> 14, styled-system and styled-components 4 -> 5 [Alexis Svinartchouk]
* Update electron-updater 4.0.6 -> 4.3.1 [Alexis Svinartchouk]
* Update redux 3 -> 4 [Alexis Svinartchouk]
* Update debug 3 -> 4 [Alexis Svinartchouk]
* Update semver 5 -> 7 [Alexis Svinartchouk]
* Update tmp 0.1.0 -> 0.2.1 [Alexis Svinartchouk]
* Update uuid v3 -> v8 [Alexis Svinartchouk]

# v1.5.87
## (2020-05-12)

* Update etcher-sdk to ^4.1.3 to fix issues with some bz2 files [Alexis Svinartchouk]

# v1.5.86
## (2020-05-06)

* Fix theme warnings [Alexis Svinartchouk]

# v1.5.85
## (2020-05-05)

* Prefer balena-etcher to etcher-bin on Arch Linux [Alexis Svinartchouk]

# v1.5.84
## (2020-05-04)

* Including Arch / Manjaro install instructions [Tom]
* Fix notification icon path [Alexis Svinartchouk]

# v1.5.83
## (2020-04-30)

* Decompress images before flashing, remove trim setting, trim ext partitions [Alexis Svinartchouk]

# v1.5.82
## (2020-04-24)

* Allow http/https only for Flash from URL [Lorenzo Alberto Maria Ambrosi]
* Add generic error's message [Lorenzo Alberto Maria Ambrosi]
* Refactor buttons style [Lorenzo Alberto Maria Ambrosi]
* Add flash from url workflow [Lorenzo Alberto Maria Ambrosi]
* Add staging percentage for v1.5.81 [Lorenzo Alberto Maria Ambrosi]
* Trigger update for v1.5.81 [Lorenzo Alberto Maria Ambrosi]

# v1.5.81
## (2020-04-14)

* Add average speed in flash results [Lorenzo Alberto Maria Ambrosi]
* docs: Update macOS drive recovery command [Wilson de Farias]
* Update etcher-sdk to use direct IO [Alexis Svinartchouk]

# v1.5.80
## (2020-03-24)

* Use zoomFactor to scale contents in fullscreen mode [Lorenzo Alberto Maria Ambrosi]
* Update electron to v7.1.14 [Alexis Svinartchouk]
* Fix sass files path for lint-sass [Alexis Svinartchouk]

# v1.5.79
## (2020-02-20)

* Remove "Download the React DevTools for a better development experience" message [Alexis Svinartchouk]
* Fix error when launching from terminal when installed via apt. [Alois Klink]

# v1.5.78
## (2020-02-19)

* Update drivelist to 8.0.10 to fix parsing lsblk --pairs [Alexis Svinartchouk]

# v1.5.77
## (2020-02-17)

* Fix error message not being shown on write error [Alexis Svinartchouk]
* The RGBLed module has been moved to a separate repository [Alexis Svinartchouk]

# v1.5.76
## (2020-02-05)

* Prefix temp permissions script name [Lorenzo Alberto Maria Ambrosi]
* Fix image drop zone, remove react-dropzone dependency [Alexis Svinartchouk]
* Update etcher-sdk to ^2.0.17 [Alexis Svinartchouk]

# v1.5.75
## (2020-02-05)

* Initialize leds object map [Omar López]

# v1.5.74
## (2020-02-04)

* Etcher pro leds feature [Alexis Svinartchouk]
* Compress deb package with bzip instead of xz [Alexis Svinartchouk]
* Update electron to 7.1.11 [Alexis Svinartchouk]
* Sort devices by device path on Linux [Alexis Svinartchouk]

# v1.5.73
## (2020-01-28)

* Update electron to v7.1.10 [Alexis Svinartchouk]

# v1.5.72
## (2020-01-27)

* Remove no longer used angular svg-icon component [Alexis Svinartchouk]
* Remove no longer used closestUnit angular filter [Alexis Svinartchouk]

# v1.5.71
## (2020-01-14)

* Update resin-corvus to 2.0.5 [Lorenzo Alberto Maria Ambrosi]

# v1.5.70
## (2019-12-13)

* Make header draggable again [Lorenzo Alberto Maria Ambrosi]
* Refactor drive selector and confirm modal to React [Lorenzo Alberto Maria Ambrosi]
* Rework lib/gui/app/styled-components to typescript [Alexis Svinartchouk]
* Convert FlashAnother & FlashResults to typescript [Lorenzo Alberto Maria Ambrosi]
* Use React instead of Angular for image selection [Lucian]
* Convert the drive selection step to React [Thodoris Greasidis]
* chore: move flash step to React [Stevche Radevski]
* Use React instead of Angular for image selection [Lucian]

# v1.5.69
## (2019-12-10)

* Don't add --no-sandbox when ELECTRON_RUN_AS_NODE true [Alexis Svinartchouk]

# v1.5.68
## (2019-12-08)

* Add version in settings modal [Lorenzo Alberto Maria Ambrosi]

# v1.5.67
## (2019-12-06)

* Fix elevation on macos in development [Alexis Svinartchouk]

# v1.5.66
## (2019-12-03)

* Update spectron to ^8 [Alexis Svinartchouk]
* Update dependencies, get node-usb from npm [Alexis Svinartchouk]
* Update nan to ^2.14 [Alexis Svinartchouk]
* Use the same entrypoint for etcher and the child writer [Alexis Svinartchouk]
* Require angular-mocks only when needed [Alexis Svinartchouk]
* Remove no longer needed pkg dev dependency [Alexis Svinartchouk]
* Update mocha, remove nock [Alexis Svinartchouk]
* Remove no longer needed xml2js [Alexis Svinartchouk]
* Remove node-pre-gyp patch that is no longer needed with electron 6 [Alexis Svinartchouk]
* Update electron-mocha to ^8.1.2, remove acorn [Alexis Svinartchouk]
* Update electron to 6.0.10 [Alexis Svinartchouk]

# v1.5.65
## (2019-12-02)

* Convert settings modal to typescript [Lorenzo Alberto Maria Ambrosi]
* Refactor settings page into modal [Lorenzo Alberto Maria Ambrosi]

# v1.5.64
## (2019-11-22)

* Use bash instead of sh for running the elevated process on Linux and Mac [Alexis Svinartchouk]

# v1.5.63
## (2019-11-08)

* Introduce an FAQ file [Dimitrios Lytras]

# v1.5.62
## (2019-11-06)

* Update drivelist to 8.0.9 [Alexis Svinartchouk]

# v1.5.61
## (2019-11-05)

* Notarize app on macOS [Lorenzo Alberto Maria Ambrosi]

# v1.5.60
## (2019-10-18)

* Upgrade ext2fs to 1.0.30 [Matthew McGinn]

# v1.5.59
## (2019-10-14)

* Catch console log messages from SafeWebView [Roman Mazur]

# v1.5.58
## (2019-10-10)

* Remove leftover GH-pages configuration file [Dimitrios Lytras]

# v1.5.57
## (2019-09-16)

* Fix entrypoint when options are passed to electron [Alexis Svinartchouk]

# v1.5.56
## (2019-08-20)

* Fix windows portable download [Lorenzo Alberto Maria Ambrosi]

# v1.5.55
## (2019-08-19)

* Update etcher-sdk to ^2.0.13 [Alexis Svinartchouk]

# v1.5.54
## (2019-08-07)

* Fix auto-updater check for updates [Lorenzo Alberto Maria Ambrosi]

# v1.5.53
## (2019-08-06)

* Allow typescript files [Lorenzo Alberto Maria Ambrosi]

# v1.5.52
## (2019-07-22)

* Don't use wmic's ProviderName if it's empty [Alexis Svinartchouk]

# v1.5.51
## (2019-06-28)

* Update sudo-prompt to ^9.0.0 [Alexis Svinartchouk]

# v1.5.50
## (2019-06-13)

* Option for trimming ext partitions on raw images [Alexis Svinartchouk]

# v1.5.49
## (2019-06-13)

* Make window size configurable [Alexis Svinartchouk]

# v1.5.48
## (2019-06-13)

* Don't use sudo-prompt when already elevated [Alexis Svinartchouk]

# v1.5.47
## (2019-06-10)

* Rework drive-selector with react + rendition [Lorenzo Alberto Maria Ambrosi]
* Use rendition theme property for step buttons [Lorenzo Alberto Maria Ambrosi]
* Upgrade styled-system to v4.1.0 [Lorenzo Alberto Maria Ambrosi]
* Upgrade rendition to v8.7.2 [Lorenzo Alberto Maria Ambrosi]

# v1.5.46
## (2019-06-09)

* Update ext2fs to 1.0.29 [Alexis Svinartchouk]

# v1.5.45
## (2019-06-04)

* Empty commit to trigger build [Alexis Svinartchouk]

# v1.5.44
## (2019-06-03)

* Fix elevation on windows when the path contains "&" or "'" [Alexis Svinartchouk]

# v1.5.43
## (2019-05-28)

* Revert "Include sass in webpack configs" [Lorenzo Alberto Maria Ambrosi]

# v1.5.42
## (2019-05-28)

* Include sass in webpack configs [Lorenzo Alberto Maria Ambrosi]

# v1.5.41
## (2019-05-27)

* waffle.io removal and adding a link to the license [Mateusz Hajder]

# v1.5.40
## (2019-05-24)

* windows installer and portable version support both ia32 and x64 [Alexis Svinartchouk]

# v1.5.39
## (2019-05-14)

* Add clean-shrinkwrap script to postshrinkwrap step [Lorenzo Alberto Maria Ambrosi]

# v1.5.38
## (2019-05-13)

* Add mention to usbboot compatibility [Carlo Maria Curinga]

# v1.5.37
## (2019-05-13)

* Bump react dependency to v16.8.5 [Lorenzo Alberto Maria Ambrosi]

# v1.5.36
## (2019-05-13)

* Update etcher-sdk to ^2.0.9 [Alexis Svinartchouk]

# v1.5.35
## (2019-05-10)

* Downgrade electron 4.1.5 -> 3.1.9 [Alexis Svinartchouk]

# v1.5.34
## (2019-05-09)

* Use https url for fetching config, avoid redirection [Alexis Svinartchouk]
* win32: fix running diskpart when the tmp file path contains spaces [Alexis Svinartchouk]

# v1.5.33
## (2019-04-30)

* Fix gzipped files verification percentage and dmg verification. [Alexis Svinartchouk]

# v1.5.32
## (2019-04-30)

* Export NPM_VERSION variable in Makefile [Lorenzo Alberto Maria Ambrosi]

# v1.5.31
## (2019-04-29)

* Update etcher-sdk to ^2.0.3 [Alexis Svinartchouk]
* Update electron to 4.1.5 [Alexis Svinartchouk]

# v1.5.30
## (2019-04-24)

* Don't show a dialog when the write fails. [Alexis Svinartchouk]

# v1.5.29
## (2019-04-19)

* Add support for auto-updating feature [Giovanni Garufi]

# v1.5.28
## (2019-04-18)

* Update electron-builder to ^20.40.2 [Alexis Svinartchouk]
* Update etcher-sdk to ^2.0.1 [Alexis Svinartchouk]

# v1.5.27
## (2019-04-16)

* (Windows): Fix reading images from network drives when the tmp dir has spaces [Alexis Svinartchouk]

# v1.5.26
## (2019-04-12)

* (Windows): Fix reading images from network drives containing non ascii characters [Alexis Svinartchouk]

# v1.5.25
## (2019-04-09)

* New parameter in webview for opt-out analytics [Lorenzo Alberto Maria Ambrosi]

# v1.5.24
## (2019-04-05)

* Update resin-corvus to ^2.0.3 [Alexis Svinartchouk]

# v1.5.23
## (2019-04-03)

* Configure versionbot to publish repo metadata to github pages [Giovanni Garufi]

# v1.5.22
## (2019-04-02)

* (Windows): Use full path to wmic as some systems don't have it in their PATH [Alexis Svinartchouk]

# v1.5.21
## (2019-04-02)

* Fix error when config.analytics was undefined [Alexis Svinartchouk]

# v1.5.20
## (2019-04-01)

* Don't try to flash when no device is selected [Alexis Svinartchouk]
* Reformat changelog [Giovanni Garufi]
* Avoid "Error: There is already a flash in progress" errors [Alexis Svinartchouk]

# v1.5.19
## (2019-03-28)

* Update resin-corvus to ^2.0.2 [Alexis Svinartchouk]
* Better reporting of unhandled rejections to sentry [Alexis Svinartchouk]

# v1.5.18
## (2019-03-26)

* Update build scripts [Giovanni Garufi]

## v1.5.17 - 2019-03-25

### Misc

- Automatically publish github release from CI

## v1.5.16 - 2019-03-25

### Misc

- Add repo.yml

## v1.5.15 - 2019-03-20

### Misc

- Show the correct logo on usbboot devices on Ubuntu

## v1.5.14 - 2019-03-20

### Misc

- Update etcher-sdk to ^1.3.10

## v1.5.13 - 2019-03-18

### Misc

- Update build scripts

## v1.5.12 - 2019-03-15

### Misc

- Update build scripts

## v1.5.11 - 2019-03-12

### Misc

- Fixed broken Hombrew cask link for etcher
- Remove no longer used travis and appveyor configs

## v1.5.10 - 2019-03-12

### Misc

- Update resin-scripts

## v1.5.9 - 2019-03-05

### Misc

- Update etcher-sdk to 1.3.0

## v1.5.8 - 2019-03-01

### Misc

- Update ext2fs to 1.0.27

## v1.5.7 - 2019-03-01

### Fixes

- Update docs
- Fix disappearing modal window

### Misc

- Fix blurred background image

## v1.5.6 - 2019-02-28

### Misc

- Target electron 3 runtime in babel options

## v1.5.5 - 2019-02-28

### Misc

- Don't pass undefined sockets to ipc.server.emit()
- Fix error when event.dataTransfer.files is empty
- Fix error message not showing when an unsupported image is selected
- Avoid `Invalid percentage` exceptions
- Update etcher-sdk to 1.1.0

## v1.5.4 - 2019-02-27

### Misc

- Add missing step for submodule cloning in README

## v1.5.3 - 2019-02-27

### Misc

- Throw error if no commit is annotated with a changelog entry

## v1.5.2 - 2019-02-26

- Enable versionist editVersion

## v1.5.1 - 2019-02-22

### Misc

- Removed lodash dependency in versionist.conf.js

## v1.5.0 - 2019-02-16

### Misc

- Reworked flashing logic with etcher-sdk
- Add support for flashing Raspberry Pi CM3+
- Upgrade to Electron v3.
- Upgrade to NPM 6.7.0
- Fix incorrect drives list on Linux
- Changed “Drive Contains Image” to “Drive Mountpoint Contains Image”
- Removed etcher-cli

## v1.4.9 - 2018-12-19

### Fixes

- Fix update notifier error popping up on v1.4.1->1.4.8

### Misc

- Added React component for the Flash Results button
- Added React component for the Flash Another button
- Restyle success screen and enlarge UI elements
- Use https for fetching sub modules
- Add `.wic` image extension as supported format

## v1.4.8 - 2018-11-23

### Features

- Added featured-project while flashing

### Fixes

- Moved back the write cancel button
- Reject drives with null size (fixes pretty-bytes error)

## v1.4.7 - 2018-11-12

### Fixes

- Fix typo in contributing guidelines
- Modify versionist.conf.js to match new internal commit guidelines

### Misc

- Rename etcher to balena-etcher
- Convert Select Image button to Rendition

## v1.4.6 - 2018-10-28

### Fixes

- Provide a Buffer to xxhash.Stream
- Fix 64 bit detection on arm
- Fix incorrect file constraint path
- Fix flash cancel button interaction

### Misc

- Add new balena.io logos
- Use Resin CI scripts to build Etcher
- Enable React lint rules
- Convert Progress Button to Rendition

## v1.4.5 - 2018-10-11

### Features

- Center content independent to window resolution.
- Add electron-native file-picker component.
- Hide unsafe mode option toggle with an env var.
- Use new design background color and drive step size ordering.
- Add a convenience Storage class on top of localStorage.
- Introduce env var to toggle autoselection of all drives.
- Add font-awesome.
- Add support for configuration files
- Use GTK-3 darkTheme mode.
- Add environment variable to toggle fullscreen.
- Allow blacklisting of drives through and environment variable ETCHER_BLACKLISTED_DRIVES.
- Show selected drives below drive selection step.
- Add a button to cancel the flash process.
- Download usbboot drivers installer when clicking a driverless usbboot device on Windows.
- Allow disabling links and hiding help link with an env var.

### Fixes

- Add "make webpack" to travis-ci build script
- Makefile: Don't use tilde in rpm versions
- Change Spectron port so not to overlap with other builds
- Fix multi-writes analytics by reusing existing logic in multi-write events.
- Load usbboot adapter on start on GNU/Linux if running as root.

### Misc

- Update drivelist to v6.4.2
- Add instructions for installing and uninstalling on Solus.

## v1.4.4 - 2018-04-24

### Fixes

- Don't display status dots with a quantity of zero on success screen
- Correct wording of flash status to use "successful" instead of "succeeded"
- Keep single drive-image pairs with warnings selected

### Misc

- Improve notification messages

## v1.4.3 - 2018-04-19

### Fixes

- Fix blob handling for usbboot

## v1.4.2 - 2018-04-18

### Features

- Make the progress button blue on verification
- Display succeeded and failed devices on finish screen

### Fixes

- Exclude RAID devices from drive selection list
- Display untitled device when device lacks description
- Prefix multiple devices label with quantity
- Fix handling of errors over IPC
- Fix usbboot blob loading
- Revert using native binding to clean disks on Windows

## v1.4.1 - 2018-04-10

### Fixes

- Exclude package.json from UI bundle

## v1.4.0 - 2018-04-05

### Features

- Move the drive selector warning dialog to the flash step
- Display image size for comparison if drive is too small
- Implement writing to multiple destinations simultaneously
- Add colorised multi-writes progress status dots
- Move CLI write preparation logic into SDK
- Make the drive-selector button orange on warnings
- Warn the user on selection of large drives
- Consolidate low-level components into Etcher SDK
- Use native code to clean drives on Windows
- Increase UV_THREADPOOL_SIZE to allocate 4 threads per CPU
- Add icon next to drive size when compatibility warnings exist
- Display number of active devices while flashing in CLI
- Replace CRC32 checksums with SHA512
- Enable usbboot on Linux if run as root

### Fixes

- Improve spacing to the drive-selector warning/error labels
- Line wrap selector size subtitles wholly
- Hide the size label given multiple devices
- Use correct usbboot blob path in AppImages
- Fix EINVAL error on Linux
- Fix enabling debug output
- Fix DevTools opening in docked mode
- Fix menu's application name
- Fix "Array buffer allocation failed" when flashing some .dmg images
- Log the banner load event to analytics
- Warn on usbboot load error in the console on Linux
- Ensure image/drive size is displayed on new line
- Don't force-inherit process environment on Windows

### Misc

- Replace Helvetica as the main font with Roboto
- Update Electron to v1.7.13
- Add spacing to the drive warning icon
- Use multi-drive methods with drive-list warning button
- Remove unused & deprecated robot protocol
- Update copyright years
- Update instructions in ISSUE_TEMPLATE
- Use Concourse CI for automated release builds
- Only publish production packages to Bintray (remove devel)
- Replace Gitter with Resin.io Forums for support
- Add support for arm64 / armv8 / aarch64 in build scripts
- Add descriptive name to modal popup windows

## v1.3.1 - 2018-01-23

### Fixes

- Fix "stdout maxBuffer" error on Linux
- Fix Etcher not working / crashing on older Windows systems
- Fix not all partitions being unmounted after flashing on Linux
- Fix selection of images in folders with file extension on Mac OS

### Misc

- Update Electron to v1.7.11

## v1.3.0 - 2018-01-04

### Features

- Display connected Compute Modules even if Windows doesn't have the necessary drivers to act on them
- Add read/write retry delays with backoff to ...
- Add native application menu (which fixes OS native window management shortcuts not working)

### Fixes

- Fix "Couldn't scan drives" error
- Ensure the writer process dies when the GUI application is killed
- Run elevated writing process asynchronously on Windows
- Fix trailing space in environment variables during Windows elevation
- Don't send analytics events when attempting to toggle a disabled drive
- Fix handling of transient write errors on Linux (EBUSY)
- Fix runaway perl process in drivelist on Mac OS

### Misc

- Update Electron from v1.7.9 to v1.7.10
- Remove Angular dependency from image-writer

## v1.2.1 - 2017-12-06

### Fixes

- Fix handling of temporary read/write errors
- Don't send initial Mixpanel events before "Anonymous Tracking" settings are loaded
- Fix verification step reading from the cache

## v1.2.0 - 2017-11-22

### Features

- Display actual write speed
- Add the progress and status to the window title.
- Add a sudo-prompt upon launch on Linux-based systems.
- Add optional progress bars to drive-selector drives.
- Increase the flashing speed of usbboot discovered devices.
- Add eye candy to usbboot initialized devices.
- Integrate Raspberry Pi's usbboot technology.

### Fixes

- Fix bzip2 streaming with the new pipelines
- Remove Linux elevation meant for usbboot.
- Fix `LIBUSB_ERROR_NO_DEVICE` error at the end of usbboot.
- Gracefully handle scenarios where a USB drive is disconnected halfway through the usbboot procedure.
- Make sure the progress button is always rounded.
- Fix permission denied issues when XDG_RUNTIME_DIR is mounted with the `noexec` option.
- Fix Etcher being unable to read certain zip files
- Fix "Couldn't scan the drives: An unknown error occurred" error when there is a drive locked with BitLocker.
- Fix "Missing state eta" error when speed is zero
- Fix "Stuck on Starting..." error
- Fix situations where the process would get stuck while flashing

### Misc

- Add the Python version (2.7) to the CONTRIBUTING doc.
- Remove duplicate debug enabling in usbboot module.
- Update Electron to v1.7.9
- Retry ejection various times before giving up on Windows.
- Try to use `$XDG_RUNTIME_DIR` to extract temporary scripts on GNU/Linux.

## v1.1.2 - 2017-08-07

### Features

- Add support for `.rpi-sdcard` images

### Fixes

- Avoid "broken" icon when selecting a zip image archive with invalid SVG
- Fix `UNABLE_TO_GET_ISSUER_CERT_LOCALLY` error at startup when behind certain proxies
- Fix `EHOSTDOWN` error at startup
- Display a user-friendly error message if the user is not in the sudoers file
- Make archive-embedded SVG icons work again
- Fix "imageBasename is not defined" error on the CLI
- Fix various drive scanning Windows errors

### Misc

- Improve Windows drive detection error codes.

## v1.1.1 - 2017-07-25

### Fixes

- Prevent "percentage above 100%" errors on DMG images
- Fix Etcher not starting flashes in AppImages
- Fix most "Unmount failed" errors on macOS

## v1.1.0 - 2017-07-20

### Features

- Add image name, drive name, and icon to OS notifications
- Add support for `.sdcard` images
- Start publishing RPM packages
- Generate single-binary portable installers on Windows
- Show friendlier error dialogs when opening an image results in an error
- Generate one-click Windows NSIS installers
- Show the application version in the WebView banners
- Show a warning message if the selected image has no partition table
- Make use of `pkg` to package the Etcher CLI
- Send anonymous analytics about package types
- Minor style improvements to the fallback success page banner
- Turn the update notifier modal into a native dialog

### Fixes

- Fix "You don't have access to this resource" error at startup when behind a firewall
- Fix `UNABLE_TO_VERIFY_LEAF_SIGNATURE` error at startup when behind a proxy
- Reset webview after navigating away from the success screen
- Fix occasional increased CPU usage because of perl regular expression in macOS
- Don't install to `C:\Program Files (x86)` on 64-bit Windows systems
- Fix "file is not accessible" error when flashing an image that lives inside a directory whose name is UTF-16 encoded on Windows.
- Fix various interrelated Windows `.bat` spawning issues
- Fix 0.0 GB Windows drive detection issues
- Cleanup drive detection temporary scripts in GNU/Linux and macOS
- Ensure no analytics events are sent if error reporting is disabled
- Retry various times on `EAGAIN` when spawning drive scanning scripts
- Don't break up size numbers in the drive selector

### Misc

- Remove "Advanced" settings subtitle
- Remove support for the `ETCHER_DISABLE_UPDATES` environment variable
- Swap speed and time below the flashing progress bar

## v1.0.0 - 2017-05-12

### Features

- Implement a dynamic finish page.
- Display nicer error dialog when reading an invalid image.

### Fixes

- Prevent drive from getting re-mounted in macOS even when the unmount on success setting is enabled.
- Fix `ECONNRESET` and `ECONNREFUSED` errors when checking for updates on unstable connections.
- Fix application stuck at "Starting..." on Windows.
- Fix error on startup when Windows username contained an ampersand.

## v1.0.0-rc.5 - 2017-05-02

### Fixes

- Fix various elevation issues on Windows
- Treat unknown images as octet stream
- Fix uncaught errors when cancelling elevation requests on Windows when the system's language is not English.

## v1.0.0-rc.4 - 2017-04-22

### Fixes

- Fix "Unmount failed" on Windows where the PC is connected to network drives.
- Various fixes for when drive descriptions contain special characters.

### Misc

- Show a friendly user message on EIO after many retries.
- Show user friendly messages for `EBUSY, read` and `EBUSY, write` errors on macOS.

## v1.0.0-rc.3 - 2017-04-14

### Fixes

- Show a user friendly message when the drive is unplugged half-way through.
- Fix "UNKNOWN: unknown error" error when unplugging an SD Card from an internal reader on Windows.
- Fix "function createError(opts) {}" error on validation failure.
- Fix "Unmount failed, invalid drive" error on Windows.
- Fix Apple disk image detection & streaming.

### Misc

- Improve error reporting accuracy.

## v1.0.0-rc.2 - 2017-04-11

### Fixes

- Display a user error if the image is no longer accessible when the writer starts.
- Prevent uncaught `EISDIR` when dropping a directory to the application.
- Fix "Path must be a string. Received undefined" when selecting Apple images.
- Don't interpret certain ISO images as unsupported.

## v1.0.0-rc.1 - 2017-04-10

### Features

- Add support for Apple Disk images.
- Add the un-truncated drive description to the selected drive step tooltip.
- Prevent flashing an image that is larger than the drive with the CLI.

### Fixes

- Prevent progress button percentage to exceed 100%.
- Don't print stack traces by default in the CLI.
- Prevent blank application when sending SIGINT on GNU/Linux and macOS.
- Fix unmounting freezing in macOS.
- Fix GNU/Linux udev error when `net.ifnames` is set.
- Fix `ENOSPC` image alignment errors.
- Fix errors when unplugging drives exactly when the drive scanning scripts are running.
- Fix several unmount related issues in all platforms.
- Fix "rawr i'm a dinosaur" bzip2 error.

### Misc

- Make errors more user friendly throughout the application.
- Don't report "invalid archive" errors to TrackJS.
- Stop drive scanning loop if an error occurs.
- Don't include user paths in Mixpanel analytics events.
- Provide a user friendly error message when no polkit authentication agent is available on the system.
- Show friendly drive name instead of device name in the main screen.
- Start reporting errors to Sentry instead of to TrackJS.

## v1.0.0-beta.19 - 2017-02-24

### Features

- Show warning when user tries to flash a Windows image
- Update the image step icon with an hexagonal "plus" icon.
- Update main page design to its new style.
- Swap the order of the drive and image selection steps.

### Fixes

- Fix `transformRequest` error at startup when not connected to the internet, or when on an unstable connection.
- Prevent flashing the drive where the source image is located.
- Fix text overflowing on tooltips.
- Don't ignore errors coming from the Windows drive detection script.
- Omit empty SD Card readers in the drive selector on Windows.
- Fix "Error: Command Failed" error when unmounting on Windows.
- Fix duplicate error messages on some errors.
- Fix 'MySQL' is not recognised as an internal or external command error on Windows.
- Ignore `stderr` output from drive detection scripts if they exit with code zero.

### Misc

- Improve validation error message.
- Emit an analytics event on `ENOSPC`.
- Normalize button text casing.
- Don't auto select system drives in unsafe mode.
- Use a OS dialog to show the "exit while flashing" warning.
- Capitalize every text throughout the application.

## v1.0.0-beta.18 - 2017-01-16

### Features

- Improve Etcher CLI error messages.
- Replace the `--robot` CLI option with an `ETCHER_CLI_ROBOT` environment variable.
- Sort supported extensions alphabetically in the image file-picker.
- Label system drives in the drive-list widget.
- Show available Etcher version in the update notifier.
- Confirm before user quits while writing.
- Add a changelog link to the update notifier modal.
- Make the image file picker attach to the main window (as a real modal).

### Fixes

- Fix alignment of single call to action buttons inside modals.
- Fix "Invalid message" error caused by the IPC client emitting multiple JSON objects as a single message.
- Fix "This key is already associated with an element of this collection" error when multiple partitions point to the same drive letter on Windows.
- Fix system drives detected as removable drives on Mac Mini.
- Fix sporadic "EIO: i/o error, read" errors during validation.
- Fix "EIO: i/o error, write" error.

## v1.0.0-beta.17 - 2016-11-28

### Fixes

- Fix command line arguments not interpreted correctly when running the CLI with a custom named NodeJS binary.
- Wrap drive names and descriptions in the drive selector widget.
- Allow the user to press ESC to cancel a modal dialog.
- Fix "Can't set the flashing state when not flashing" error.
- Fix writing process remaining alive after the GUI is closed.
- Check available permissions in the CLI early on.
- Fix `this.log is not a function` error when clicking "flash again".
- Fix duplicate drives in Windows.
- Fix drive scanning exceptions on GNU/Linux systems with `net.ifnames` enabled.
- Fix `0x80131700` error when scanning drives on Windows.
- Fix internal SDCard drive descriptions.
- Fix unmount issues in GNU/Linux and OS X when paths contain spaces.
- Fix "Not Enough Space" error when flashing unaligned images.
- Fix `at least one volume could not be unmounted` error in OS X.

## v1.0.0-beta.16 - 2016-10-28

### Features

- Use info icon instead of "SHOW FULL FILE NAME" in first step.
- Display image path base name as a tooltip on truncated image name.
- Add support for `etch` images.

### Fixes

- Fix Etcher leaving zombie processes behind in GNU/Linux.
- Prevent escaping issues during elevation by surrounding paths in double quotes.
- Fix "Unexpected end of JSON" error in Windows.
- Fix drag and drop not working anymore.
- Don't clear selection state when re-selecting an image.

### Misc

- Publish standalone Windows builds.

## v1.0.0-beta.15 - 2016-09-26

### Features

- Allow the user to disable auto-update notifications with an environment variable.
- Allow images to declare a recommended minimum drive size.

### Fixes

- Fix flashing never starting after elevation in GNU/Linux.
- Fix sporadic EPERM write errors on Windows.
- Fix incorrect validation errors when flashing bzip2 images.
- Fix `cscript is not recognised as an internal or external command` Windows error.

## v1.0.0-beta.14 - 2016-09-12

### Features

- Allow archive images to configure a certain amount of bytes to be zeroed out from the beginning of the drive when using bmaps.
- Make the "Need help?" link dynamically open the image support url.
- Add `.bmap` support.

### Fixes

- Don't clear the drive selection if clicking the "Retry" button.
- Fix "`modal.dismiss` is not a function" exception.
- Prevent `ENOSPC` if the drive capacity is equal to the image size.
- Prevent failed validation due to drive getting auto-mounted in GNU/Linux.
- Fix incorrect estimated entry sizes in certain ZIP archives.
- Show device id if device doesn't have an assigned drive letter in Windows.
- Fix `blkid: command not found` error in certain GNU/Linux distributions.

### Misc

- Upgrade `etcher-image-stream` to v4.3.0.
- Upgrade `drivelist` to v3.3.0.
- Improve speed when retrieving archive image metadata.
- Improve image full file name modal tooltip.

## v1.0.0-beta.13 - 2016-08-05

### Features

- Show "Unmounting..." while unmounting a drive.
- Perform drive auto-selection even when there is no selected image.

### Fixes

- Prevent selected drive from getting auto-removed when navigating back to the main screen from another screen.
- Fix new available drives not being recognised automatically in Windows.
- Fix application stuck at "Finishing".
- Display an error if no graphical polkit authentication agent was found.
- Only enable error reporting if running inside an `asar`.
- Fix "backdrop click" uncaught errors on modals.

### Misc

- Fix internal removable drives considered system drives in macOS Sierra.
- Upgrade `etcher-image-write` to v6.0.1.
- Upgrade `removedrive` to v1.0.0.

## v1.0.0-beta.12 - 2016-07-26

### Features

- Support rich image extensions.
- Add support for `raw` images.
- Display a nice alert ribbon if drive runs out of space.
- Validate the existence of the passed drive.
- Add an "unsafe" option to bypass drive protection.

### Fixes

- Escape quotes from image paths to prevent Bash errors on GNU/Linux and OS X.
- Check if drive is large enough using the final uncompressed size of the image.

### Misc

- Upgrade `drivelist` to v3.2.4.

## v1.0.0-beta.11 - 2016-07-17

### Features

- Set dialog default directory to the place where the AppImage was run from in GNU/Linux.

### Fixes

- Don't throw an "Invalid image" error if the extension is not in lowercase.
- Fix `ENOENT` error when selecting certain images with multiple extensions on GNU/Linux.
- Fix flashing not starting when an image name contains a space.
- Fix error when writing images containing parenthesis in GNU/Linux and OS X.
- Fix error when cancelling an elevation request.
- Fix incorrect ETA numbers in certain timezones.
- Fix state validation error when speed equals zero.
- Display `*.zip` in the supported images tooltip.
- Fix uncaught exception when showing the update notifier modal.

### Misc

- Upgrade `etcher-image-write` to v5.0.2.

## v1.0.0-beta.10 - 2016-06-27

### Features

- Add support for `dsk` images.
- Only elevate the writer process instead of the whole application.
- Make sure a drive is instantly deselected if its not available anymore.
- Make Etcher CLI `--robot` option output parseable JSON strings.

### Fixes

- Fix an error that prevented an AppImage from being directly ran as `root`.
- Ensure we pass the correct argument types to `electron.dialog.showErrorBox()`.
- Don't re-check for updates when navigating back to the main screen.
- Emit window progress even when not on the main screen.
- Improve aliasing of the striped progress button.
- Fix `EPERM` errors on Windows.

### Misc

- Add documentation for the Etcher CLI.
- Add a GitHub issue template.
- Open DevTools in "undocked" mode by default.

## v1.0.0-beta.9 - 2016-06-20

### Fixes

- Don't interpret image file name information between dots as image extensions.

## v1.0.0-beta.8 - 2016-06-15

### Features

- Display ETA during flash and check.
- Show an informative label if the drive is not large enough for the selected image.
- Show an informative label if the drive is locked (write protected).

### Fixes

- Prevent certain system drives to be detected as removable in GNU/Linux.
- Fix external resources not opening on GNU/Linux when the application is elevated.
- Don't show an unnecessary scroll bar in the update notifier modal.
- Prevent selection of invalid images by drag and drop.
- Fix `EPERM` errors on Windows on drives formatted with a GUID Partition Table.
- Prevent a very long image name from breaking the UI.

### Misc

- Write a document explaining Etcher's architecture.

## v1.0.0-beta.7 - 2016-05-26

### Features

- Add `gzip` compression support.
- Add `bzip2` compression support.
- Provide a GUI elevation dialog for GNU/Linux.

### Fixes

- Fix broken image drag and drop functionality.
- Prevent global shortcuts from interfering with another applications.
- Prevent re-activating the "Flash" button with the keyboard shortcuts when a flash is already in process.
- Fix certain non-removable Windows devices not being filtered out.
- Display non-mountable Windows drives in the drive selector.

### Misc

- Upgrade Electron to v1.1.1.
- Various improvements to the build system.

## v1.0.0-beta.6 - 2016-05-12

### Features

- Implement update notifier modal.
- Implement writing by forking the Etcher CLI as a child process.

### Fixes

- Prevent selection of drives that are not large enough for the selected image.

### Misc

- Remove implicit "Enable" from settings screen items.

## v1.0.0-beta.5 - 2016-05-04

### Features

- Add `xz` compression support.

### Fixes

- Improve "Select Image" supported file types label.
- Fix error that prevented the application to be elevated correctly on Windows.

### Misc

- Deprecate GNU/Linux `.tar.gz` installers in favor of AppImages.

## v1.0.0-beta.4 - 2016-04-22

### Features

- Generate [AppImage](http://appimage.org) packages for GNU/Linux.
- Add application version to footer, which links to the `CHANGELOG`.
- Allow to bypass elevation with an environment variable (`ETCHER_BYPASS_ELEVATION`).

### Fixes

- Improve drive selector modal.
- Add dashed underline stlying to footer links.

### Misc

- Upgrade Electron to v0.37.6.
- Integrate Etcher CLI in this git repository.

## v1.0.0-beta.3 - 2016-04-17

### Features

- Show drive name in drive selector modal.
- Add subtle hover styling to footer links.
- Implement OS notifications on completion.
- Allow to drag and drop an image to the first step.
- Add Etcher logo to application footer.
- Add "Change" button links below each step.
- Invert progress bar stripes during validation.

### Fixes

- Fix window contents being pushed below when opening the drive selector modal.
- Detect removal of selected drive.
- Detect MacBook SDCard readers in OS X.
- Improve removable drive detection on Windows.
- Keep one decimal in Windows drive sizes.
- Prevent error dialog not showing on malformed `Error` objects.
- Fix window being resizable on GNU/Linux.
- Hide drive selector modal if no available drives.
- Make drive selector modal react to drive auto-selection.
- Improve UX when attempting to re-selecta single available drive.
- Reset writer state on flash error.
- Fix `stream.push() after EOF` error when flashing unaligned images.

### Misc

- Compress Linux executables and libraries.
- Compress Windows DLLs.
- Make GNU/Linux binary lowercase.
- Replace all occurrences of "burn" with "flash".

## v1.0.0-beta.2 - 2016-04-07

### Features

- Implement a new drive selector modal widget.
- Log Etcher version in Mixpanel and TrackJS events to aid debugging.
- Implement write validation support.
- Add a setting to enable/disable write validation.

### Fixes

- Make sure window size is uniform between platforms.
- Fix "Use same image" button not preserving the image selection.
- Fix step vertical bars slight mis-alignment.
- Fix vertical spacing between success message and disk unmount notice label.
- Fix focus CSS style being persisted in the buttons after a click in some cases.
- Fix uncaught exception if no file was selected from a dialog.
- Fix external URL opening freezing applications in GNU/Linux.
- Fix code-signing issues in OS X in some systems.

### Misc

- Heavy general refactoring.

## v1.0.0-beta.1 - 2016-03-28

### Features

- Allow window to be dragged from anywhere.
- Add more application metadata to installation package.
- Setup code-signing for Windows.

### Fixes

- Fix uncaught error after rejecting elevation in OS X.
- Upgrade `drivelist` to v2.0.9, which includes various drive scanning improvements.
- Make sure error is logged if its trapped with an error dialog.
- Fix broken state when going to settings from the success screen.
- Fix `Cannot read property 'length' of undefined` frequent issue.
