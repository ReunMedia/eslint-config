import { describe, expect, it } from "bun:test";
import configJson from "./fixtures/config.json";
import { ESLint } from "eslint";

describe("createConfig", () => {
  it("should match the config JSON fixture", async () => {
    const eslint = new ESLint();
    const config = await eslint.calculateConfigForFile(import.meta.file);

    expect(config.rules).toEqual(configJson.rules);
  });
});
