import type { Config } from "./Config.js";
import type { Asyncify } from "type-fest";

export const vueConfig: Asyncify<Config> = async () => {
  try {
    const pluginVue = await import("eslint-plugin-vue");
    return [
      ...pluginVue.configs["flat/recommended"],
      {
        files: ["*.vue", "**/*.vue"],
        languageOptions: {
          parserOptions: { parser: "@typescript-eslint/parser" },
        },
      },
    ];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return [];
  }
};
