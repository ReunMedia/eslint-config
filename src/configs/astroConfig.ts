import type { Config, CreateConfig } from "./Config.js";
import type { Asyncify } from "type-fest";

export const astroConfig: Config = [
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

export const createAstroConfig: Asyncify<CreateConfig> = async () => {
  try {
    const pluginAstro = await import("eslint-plugin-astro");
    return [...pluginAstro.configs.recommended, ...astroConfig];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return [];
  }
};
