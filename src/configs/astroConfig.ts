import type { Config } from "./Config.js";
import type { Asyncify } from "type-fest";

export const astroConfig: Asyncify<Config> = async () => {
  try {
    const pluginAstro = await import("eslint-plugin-astro");
    return [
      ...pluginAstro.configs.recommended,
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return [];
  }
};
