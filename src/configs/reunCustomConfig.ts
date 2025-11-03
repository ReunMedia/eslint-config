import type { Config } from "eslint/config";

export const reunCustomConfig: Config[] = [
  {
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
];
