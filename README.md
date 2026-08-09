# Etcher Privacy <img src="icon.png" width="46">

> Flash OS images to SD cards & USB drives, safely and easily.

Etcher Privacy is a privacy-focused fork of [balena Etcher](https://github.com/balena-io/etcher),
based on [Alex313031's etcher-ng](https://github.com/Alex313031/etcher-ng) UI customizations
and synced with upstream **v2.1.6**.

It is a powerful OS image flasher built with web technologies to ensure
flashing an SDCard or USB drive is a pleasant and safe experience. It protects
you from accidentally writing to your hard-drives, ensures every byte of data
was written correctly, and much more. It can also directly flash Raspberry Pi devices that support [USB device boot mode](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#usb-device-boot-mode).

## What makes it "Privacy"?

Everything that phones home has been removed:

- **No Sentry** error reporting (crash/error telemetry removed)
- **No analytics** (the `analytics-client` tracking module removed)
- **No auto-updater** (no background update checks or phone-home)
- **No EtcherPro** promotions
- All links point to this repository instead of external tracking pages

There are no analytics, no tracking, and no calls home. What you flash is your business.

[![License](https://img.shields.io/github/license/balena-io/etcher.svg?style=flat-square)](https://github.com/balena-io/etcher/blob/master/LICENSE)

---

[**Download**][releases] | [**Support**][support] | [**Contributing**][contributing] | [**Documentation**][user-documentation]

## Supported Operating Systems

- Linux; most distros; Intel 64-bit.
- Windows 10 and later; Intel 64-bit.
- macOS 10.15 (Catalina) and later; both Intel and Apple Silicon.

## Installers

Refer to the [releases page][releases] for the latest pre-made
installers for all supported operating systems.

## Building from source

Requires Node.js 24 and Python 3:

```sh
npm install
npm run package
```

## Support

If you're having any problem, please [raise an issue][newissue] on GitHub.

## License

Etcher Privacy is free software and may be redistributed under the terms
specified in the [license][license]. Copyright of the original Etcher code
belongs to Balena Ltd. and its contributors; upstream Etcher is available at
https://github.com/balena-io/etcher.

[releases]: https://github.com/FireRat666/Etcher-Privacy/releases
[electron]: https://electronjs.org/
[electron-supported-platforms]: https://electronjs.org/docs/tutorial/support#supported-platforms
[support]: https://github.com/FireRat666/Etcher-Privacy/blob/master/docs/SUPPORT.md
[contributing]: https://github.com/FireRat666/Etcher-Privacy/blob/master/docs/CONTRIBUTING.md
[user-documentation]: https://github.com/FireRat666/Etcher-Privacy/blob/master/docs/USER-DOCUMENTATION.md
[newissue]: https://github.com/FireRat666/Etcher-Privacy/issues/new
[license]: https://github.com/FireRat666/Etcher-Privacy/blob/master/LICENSE
