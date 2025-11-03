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

> [!NOTE]
>
> Automatic configuration may not always work with transitive dependencies. In
> this case, you may [import individual configurations
> manually](#importing-individual-configurations).

## Usage

```mjs
// eslint.config.mjs
// @ts-check
import tseslint from "typescript-eslint";
import createReunMediaConfig from "@reunmedia/eslint-config";

export default tseslint.config(await createReunMediaConfig(import.meta.url));
```

### Importing individual configurations

For cases where you don't want or cannot use automatic configuration, you may
import individual configurations manually.

```mjs
// eslint.config.mjs
// @ts-check
import tseslint from "typescript-eslint";
import { reunCustomConfig, vueConfig } from "@reunmedia/eslint-config";

export default tseslint.config(vueConfig, reunCustomConfig);
```

Manual import may be needed when working with transitive dependencies. E.g. if
you're using Nuxt, Vue is installed as a peer dependency and might not get
detected by automatic configuration.

## Additional configuration

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

## Troubleshooting

### ESLint works in terminal but not in VS Code

If you're using `pnpm` and [VS Code ESLint
extension](https://github.com/microsoft/vscode-eslint), you might need add
following configuration to `pnpm-workspace.yaml`:

```yaml
# pnpm-workspace.yaml
publicHoistPattern:
  - "*eslint*"
```

Then apply changes with `pnpm install` and reload VS Code. See [this
issue](https://github.com/microsoft/vscode-eslint/issues/1986) for more
information.

## Development

See [docs/development.md](./docs/development.md).
