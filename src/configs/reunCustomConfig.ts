import type { Config } from "./Config.js";

export const reunCustomConfig: ReturnType<Config> = [
  {
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
];
