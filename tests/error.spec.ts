import { test, expect } from '@playwright/test';

test('page not found works', async ({ page }) => {
  await page.goto("/not-found");

  await expect(page).toHaveTitle('Elian Codes | Page Not Found');
});