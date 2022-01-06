# tanoshiidict

[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)
[![SUSHI-WARE LICENSE](https://img.shields.io/badge/license-SUSHI--WARE%F0%9F%8D%A3-blue.svg)](https://github.com/MakeNowJust/sushi-ware)

An unofficial browser extension for [Tanoshii](https://www.tanoshiijapanese.com/home/)

## Install

As of now, I haven't published the extension yet, so you have to sideload it.
The following instructions works only with Chrome and other Chromium-based browsers (Brave, Opera, new Edge, ...).

1. Download the latest release
2. Unzip it
3. Open <chrome://extensions>
4. Enable developer mode
5. Click Load unpacked
6. Find and select the extension folder

## Usage

1. Select your Kanji
2. Right click
3. Select the dictionary

## Building from source

You'll need the latests version of [Node.js](https://nodejs.org/en/).
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

## License

This project is licensed under the Anti 996 License.
It's an MIT-ish license but you must comply with labour laws.
[Karoshi](https://en.wikipedia.org/wiki/Karoshi) and occupational burnout in general are not a joke.
Also, feel free to buy me sushi if you like my work.
