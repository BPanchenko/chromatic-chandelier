import { expect, test } from '@playwright/test';

import type { Page } from '@playwright/test';

test.describe('PaletteVIs...', () => {
	test('Light Diffuser Functionality', async ({ page }: { page: Page }) => {
		await page.setViewportSize({
			width: 540,
			height: 720,
		});
		await page.goto('palette-visualization.html')
		await expect(page).toHaveScreenshot()
	});
})