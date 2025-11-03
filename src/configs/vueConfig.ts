import type { Config, CreateConfig } from "./Config.js";
import type { Asyncify } from "type-fest";

export const vueConfig: Config = [
  {
    files: ["*.vue", "**/*.vue"],
    languageOptions: {
      parserOptions: { parser: "@typescript-eslint/parser" },
    },
  },
];

export const createVueConfig: Asyncify<CreateConfig> = async () => {
  try {
    const pluginVue = await import("eslint-plugin-vue");
    return [...pluginVue.configs["flat/recommended"], ...vueConfig];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return [];
  }
};
