import tseslint from "typescript-eslint";
import createConfig from "./src/index.ts";

export default tseslint.config(await createConfig(import.meta.url));
