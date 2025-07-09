# Reun Media ESLint Configuration

[![NPM Version](https://img.shields.io/npm/v/%40reunmedia%2Feslint-config)](https://www.npmjs.com/package/@reunmedia/eslint-config)

TODO - Add description

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

### Vue

Vue is automatically configured if
[`eslint-plugin-vue`](https://eslint.vuejs.org/) is installed. Just add it to
enable Vue rules and configuration.

```sh
pnpm add -D eslint-plugin-vue
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

## FAQ

### Why is the first version 1.5.0?

This package is based on the last version of [ESLint config in Reun Media
Project
Templates](https://github.com/ReunMedia/project-templates/blob/main/base/webdev/frontend/eslint.config.mjs).
