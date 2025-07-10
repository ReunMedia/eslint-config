/**
 * This script updates the test config fixture in `test/fixtures.config.json`
 */

import { write } from "bun";
import { ESLint } from "eslint";
import { resolve } from "node:path";

const eslint = new ESLint();
const config = await eslint.calculateConfigForFile(import.meta.file);

write(
  resolve(import.meta.dir, "../tests/fixtures/config.json"),
  JSON.stringify(config),
);
