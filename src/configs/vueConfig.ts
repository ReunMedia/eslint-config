import type { Config } from "eslint/config";

export const vueConfig: Config[] = [
  {
    files: ["*.vue", "**/*.vue"],
    languageOptions: {
      parserOptions: { parser: "@typescript-eslint/parser" },
    },
  },
];

export const createVueConfig = async (): Promise<Config[]> => {
  try {
    const pluginVue = await import("eslint-plugin-vue");
    return [...pluginVue.configs["flat/recommended"], ...vueConfig];
  } catch (_e) {
    return [];
  }
};
