import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:7777");
  await expect(page).toHaveTitle(/next/i);
});
