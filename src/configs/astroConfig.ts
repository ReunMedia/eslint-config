import type { Config } from "eslint/config";

export const astroConfig: Config[] = [
  {
    files: ["**/*.astro"],
    rules: {
      // Using `export type Props = Pick<...>;` doesn't work with Astro, so we
      // need to allow `export interface Props extends Pick<...> {}` instaed.
      "@typescript-eslint/no-empty-object-type": [
        "error",
        {
          allowInterfaces: "always",
        },
      ],
    },
  },
];

export const createAstroConfig = async (): Promise<Config[]> => {
  try {
    const pluginAstro = await import("eslint-plugin-astro");
    return [...pluginAstro.configs.recommended, ...astroConfig];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return [];
  }
};
