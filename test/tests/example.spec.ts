import { test, expect } from '@playwright/test';
import { fail } from 'assert';

test('has title', async ({ page }) => {
  const webUrl = process.env.WEB_URL;
  if (!webUrl) {
    fail();
  }
  await page.goto(webUrl);
  await expect(page).toHaveTitle(/next/i);
});
