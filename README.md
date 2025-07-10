# Reun Media ESLint Configuration

[![NPM Version](https://img.shields.io/npm/v/%40reunmedia%2Feslint-config)](https://www.npmjs.com/package/@reunmedia/eslint-config)

Reun Media [typescript-eslint](https://typescript-eslint.io/) configuration with optional support for [Vue and Astro](#vue-and-astro).

> [!NOTE]
>
> This config assumes that [Prettier](https://prettier.io/) is used for
> formatting.

## Installation

```sh
pnpm add -D eslint typescript-eslint @reunmedia/eslint-config
```

## Usage

```mjs
// eslint.config.mjs
// @ts-check
import tseslint from "typescript-eslint";
import createReunMediaConfig from "@reunmedia/eslint-config";

export default tseslint.config(await createReunMediaConfig(import.meta.url));
```

## Additional configuration

### Vue and Astro

Vue and Astro are automatically configured when either
[`eslint-plugin-vue`](https://eslint.vuejs.org/) or
[`eslint-plugin-astro`](https://ota-meshi.github.io/eslint-plugin-astro/) is
installed. Just add them individually or together to enable rules and
configuration.

```sh
# Enables Vue configuration
pnpm add -D eslint-plugin-vue

# Enables Astro configuration
pnpm add -D eslint-plugin-astro
```

### Browser globals

If you're using browser globals, you can install and use the
[globals](https://github.com/sindresorhus/globals) package.

```sh
pnpm add -D globals
```

```ts
export default tseslint.config(await createConfig(import.meta.url), {
  languageOptions: {
    globals: {
      ...globals.browser, // Use when targeting browser
      // ...globals['shared-node-browser'] // Use for both Node and browser
    },
  },
});
```

## Development

See [docs/development.md](./docs/development.md).
