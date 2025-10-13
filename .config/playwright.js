/**
 * @module configuration/playwright
 * @import { PlaywrightTestConfig } from "@playwright/test"
 * @see https://playwright.dev/docs/test-configuration.
 */

import { defineConfig, devices } from "@playwright/test";
import { baseURL } from "./web-server.cjs";

/** @type {PlaywrightTestConfig["webServer"]} */
const webServer = {
  command: "node ../node_scripts/web-server/index.cjs",
  url: baseURL,
  reuseExistingServer: true,
  stdout: "pipe",
  stderr: "pipe",
};

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  expect: {
    timeout: 5000,
    toMatchSnapshot: {
      maxDiffPixelRatio: 0.3,
    },
  },
  forbidOnly: true,
  fullyParallel: true,
  outputDir: "../.test-temp",
  preserveOutput: "always",
  projects: [
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox HiDPI"] },
    },
  ],
  reporter: [
    ["dot"],
    ["junit", { outputFile: "../.test-report/results.e2e-testing.xml" }],
  ],
  retries: 2,
  snapshotPathTemplate: "{testDir}/__screenshots__{/testName}/{arg}{ext}",
  testDir: "../__tests__",
  testMatch: /.*\.e2e\.js/,
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  webServer,
  workers: 1,
});
