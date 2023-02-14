import { test, expect } from '@playwright/test';

test('sitemap is reachable', async ({ page }) => {
  // test index
  await page.goto("/sitemap-index.xml");
  //await expect(page).not.toThrowError();

  // test given page in google SEO
  await page.goto("/sitemap-0.xml");
  //await expect(page).not.toThrowError();
});