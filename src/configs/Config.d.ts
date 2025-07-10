import type tseslint from "typescript-eslint";

export type Config = () => Parameters<typeof tseslint.config>[0][];
