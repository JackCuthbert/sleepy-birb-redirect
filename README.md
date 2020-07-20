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

## Development

Install `web-ext`:

```
npm install -g web-ext
```

Make changes, bump versions, and lint code:

```
npm run lint -- --fix
```

Build and sign `.xpi` with (requires `AMO_JWT_ISSUER` and `AMO_JWT_SECRET`
environment variable set)

```
npm run sign
```
Create release on GitHub manually and attach signed `.xpi`.
