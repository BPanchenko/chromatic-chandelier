import { expect, test } from "@playwright/test";

test.describe("PaletteVIs...", () => {
  test("Light Diffuser Functionality", async ({ page }) => {
    await page.setViewportSize({
      width: 540,
      height: 720,
    });
    await page.goto("/__tests__/palette-visualization.svg");
    await expect(page).toHaveScreenshot();
  });
});
