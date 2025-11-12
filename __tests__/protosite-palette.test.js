import { expect, test } from "@playwright/test";

test.describe("protosite palette chart", () => {
  test("visual comparisons", async ({ page }) => {
    await page.setViewportSize({
      width: 1546,
      height: 808,
    });
    await page.goto(
      "http://palette.protosite.xyz/assets/chart.protosite-palette.svg"
    );
    await expect(page).toHaveScreenshot();
  });
});
