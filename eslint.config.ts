import createConfig from "./src/index.ts";
import { defineConfig } from "eslint/config";

export default defineConfig(await createConfig(import.meta.url));
