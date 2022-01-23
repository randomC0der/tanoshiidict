# tanoshiidict

[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)
[![SUSHI-WARE LICENSE](https://img.shields.io/badge/license-SUSHI--WARE%F0%9F%8D%A3-blue.svg)](https://github.com/MakeNowJust/sushi-ware)

![GitHub release (latest by date)](https://img.shields.io/github/v/release/randomC0der/tanoshiidict)
![Chrome Web Store](https://img.shields.io/chrome-web-store/v/pdjpgohimnaehjkddldennkocakohhjn)
![Mozilla Add-on](https://img.shields.io/amo/v/tanoshii-dictionary-search)

An unofficial browser extension for [Tanoshii](https://www.tanoshiijapanese.com/home/)

## Install

[Get it for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tanoshii-dictionary-search/)

[Get it from the Chrome Webstore](https://chrome.google.com/webstore/detail//pdjpgohimnaehjkddldennkocakohhjn?hl=de)

Get it from the Edge Web Store (soon!)

Get it for Opera (soon!)

### Sideloading

The following instructions works only with Chrome and other Chromium-based browsers (Brave, new Edge, ...).

1.  Download the [latest release](https://github.com/randomC0der/tanoshiidict/releases)
2.  Unzip it
3.  Open <chrome://extensions>
4.  Enable developer mode
5.  Click Load unpacked
6.  Find and select the extension folder

## Usage

1.  Select your Kanji
2.  Right click
3.  Select the dictionary

## Building from source

You'll need the latest version of [Node.js](https://nodejs.org/en/).
Clone the repo and install all dependencies.

```sh
git clone https://github.com/randomC0der/tanoshiidict.git
cd tanoshiidict
npm install
```

For development with hot-reloading, use the following command.
Make sure that parcel builds first (if it fails, consider to increase the delay).

```sh
npm run watch
```

To compile the project for production, use:

```sh
npm run build
```

## Thanks

Loosely based on https://github.com/fregante/browser-extension-template

## License

This project is licensed under the Anti 996 License.
It's an MIT-ish license but you must comply with labour laws.
[Karoshi](https://en.wikipedia.org/wiki/Karoshi) and occupational burnout in general are not a joke.
Also, feel free to buy me sushi if you like my work.
