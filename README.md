# Sleepy Birb Redirect

> The browser extension companion for [Sleepy Birb](https://github.com/JackCuthbert/sleepy-birb).

## Install

**Firefox**

1. Navigate to [releases](https://github.com/JackCuthbert/sleepy-birb-redirect/releases)
and download the latest `.xpi`
2. Navigate to `about:addons`
3. Click the cog
4. Click "Install Add-on From File..."
5. Select the downloaded `.xpi` file

**Chrome**

This extension is not distributed in the Chrome store

1. Navigate to [releases](https://github.com/JackCuthbert/sleepy-birb-redirect/releases)
and download the latest `.crx`
1. Navigate to `chrome://extensions`
1. Enable the "Developer mode" toggle in the top right
1. Using some kind of unarchiving tool to extract the downloaded `.crx` file
1. Drag-and-drop the folder containing the extracted `.crx` files onto the page

**Chromium**

1. Navigate to [releases](https://github.com/JackCuthbert/sleepy-birb-redirect/releases)
and download the latest `.crx`
1. Navigate to `chrome://extensions`
1. Enable the "Developer mode" toggle in the top right
1. Drag-and-drop the `.crx` file onto the page

## Development

Install `web-ext`:

```
npm install -g web-ext
```

Make changes, bump versions, and lint code:

```
npm run lint -- --fix
```

### Build Firefox extension

Build and sign `.xpi` with (requires `AMO_JWT_ISSUER` and `AMO_JWT_SECRET`
environment variable set)

```
npm run sign
```
Create release on GitHub manually and attach signed `.xpi`.

### Build Chrome extension

1. Go to the repo root directory: `cd /path/to/sleepy-birb-redirect`
1. Run `./bin/pack-crx`
1. Navigate to `chrome://extensions`
1. Click "Pack extension"
1. Select the _new_ `sleepy-birb-redirect` directory **inside** the root directory
1. Click "Pack extension" in the modal
1. The `.crx` file will appear in the root directory
1. Create release on GitHub manually and attach `.crx` file
1. Run `./bin/clean-crx` to remove extra files
