import type { Config } from "eslint/config";

export const reunCustomConfig: Config[] = [
  {
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      // Allow prefixing unused variables with `_` to ignore errors. This
      // matches TypeScript's behaviour.
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
];
