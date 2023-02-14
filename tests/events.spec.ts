import { test, expect } from '@playwright/test';

test('metadata is set correct', async ({ page }) => {
  await page.goto("/events");

  await expect(page).toHaveTitle('Elian Codes | Events');
});