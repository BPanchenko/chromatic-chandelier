import { expect, test } from "@playwright/test";

test.describe("protosite palette chart", () => {
  test("visual comparisons", async ({ page }) => {
    await page.setViewportSize({
      width: 1768,
      height: 1024,
    });
    await page.goto(
      "http://palette.protosite.xyz/assets/chart.protosite-palette.svg"
    );
    await expect(page).toHaveScreenshot();
  });
});
