/**
 * @module configuration/playwright
 * @see https://playwright.dev/docs/test-configuration.
 */

import { defineConfig, devices, type PlaywrightTestConfig } from '@playwright/test';

const webServer: PlaywrightTestConfig['webServer'] = {
	command: 'node dev-server',
	url: 'http://localhost:8552',
	reuseExistingServer: true,
	stdout: 'pipe',
	stderr: 'pipe',
}

export default defineConfig({
	expect: {
		timeout: 5000,
		toMatchSnapshot: {
			maxDiffPixelRatio: 0.3,
		},
	},
	forbidOnly: true,
	fullyParallel: true,
	outputDir: '.temp',
	preserveOutput: 'always',
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] },
		},
		{
			name: 'Mobile Chrome',
			use: { ...devices['Pixel 5'] },
		},
		{
			name: 'Mobile Safari',
			use: { ...devices['iPhone 12'] },
		},
	],
	reporter: [
		['dot'],
		['html', { outputFolder: '.playwright-report' }],
	],
	retries: 2,
	snapshotPathTemplate: '{testDir}/__screenshots__{/testName}/{arg}{ext}',
	testDir: '__tests__',
	testMatch: '*visualization.test.ts',
	use: {
		baseURL: webServer.url,
		trace: 'on-first-retry',
	},
	webServer,
	workers: 1,
});
