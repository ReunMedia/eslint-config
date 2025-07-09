import tseslint from "typescript-eslint";
import createConfig from "./src";

export default tseslint.config(await createConfig(import.meta.url));
