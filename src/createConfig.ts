import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "node:url";
import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { vueConfig } from "./configs/vueConfig.ts";
import { reunCustomConfig } from "./configs/reunCustomConfig.ts";

/**
 * Create Reun Media ESLint configuration object
 *
 * @param rootImportMetaUrl Pass `import.meta.url` here. Used to determine
 *                          `.gitignore` location.
 */
export default async function createConfig(rootImportMetaUrl: string) {
  // Base configs
  let configs: Parameters<typeof tseslint.config>[0] = [
    // ESLint
    eslint.configs.recommended,
    // typescript-eslint
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
  ];

  // Vue if installed
  configs = [...configs, await vueConfig()];

  // Prettier
  configs = [...configs, eslintConfigPrettier];

  // Custom rules
  configs = [...configs, ...reunCustomConfig];

  // .gitignore
  const __filename = fileURLToPath(rootImportMetaUrl);
  const __dirname = path.dirname(__filename);
  const gitignorePath = path.resolve(__dirname, ".gitignore");
  configs = [...configs, includeIgnoreFile(path.resolve(gitignorePath))];

  return configs;
}
