/**
 * @module configuration/playwright
 * @import { PlaywrightTestConfig } from "@playwright/test"
 * @see https://playwright.dev/docs/test-configuration.
 */

import { defineConfig, devices } from "@playwright/test";
import { baseURL } from "./.config/web-server.cjs";

/** @type {PlaywrightTestConfig["webServer"]} */
const webServer = {
  command: "node ./node_scripts/web-server/index.cjs",
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
  outputDir: ".temp",
  preserveOutput: "always",
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome HiDPI"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari HiDPI"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox HiDPI"] },
    },
  ],
  reporter: [["dot"], ["html", { outputFolder: ".report" }]],
  retries: 2,
  snapshotPathTemplate: "{testDir}/__screenshots__{/testName}/{arg}{ext}",
  testDir: "./__tests__",
  testMatch: /.*\.e2e\.js/,
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  webServer,
  workers: 1,
});
