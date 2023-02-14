import { test, expect } from '@playwright/test';

test('RSS is reachable', async ({ page }) => {
  await page.goto("/blog.xml");
  //await expect(page).not.toThrowError();
});

// Test if RSS feed object has changed?
// check title, blablabla