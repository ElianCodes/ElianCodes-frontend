import { test, expect } from '@playwright/test';

test('metadata is set correct', async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle('Elian Codes | Home');
});

test('navigation is working', async ({ page }) => {
  await page.goto("/");

  await page.getByRole('link', { name: 'Home' }).click();
  await expect(page).toHaveTitle('Elian Codes | Home');

  await page.getByRole('link', { name: 'Blog', exact: true }).click();
  await expect(page).toHaveTitle('Elian Codes | Blog');

  await page.getByRole('link', { name: 'Events' }).click();
  await expect(page).toHaveTitle('Elian Codes | Events');

  await page.getByRole('link', { name: 'ElianCodes', exact: true }).click();  
  await expect(page).toHaveTitle('Elian Codes | Home');
});

test('social links are working', async ({ page }) => {
  await page.goto("/");

  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '\'See @ElianCodes on GitHub' }).click();
  const page1 = await page1Promise;

  await expect(page1).toHaveURL('https://github.com/eliancodes');

  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '\'See @ElianCodes on Twitter' }).click();
  const page2 = await page2Promise;
  await expect(page2).toHaveURL('https://twitter.com/eliancodes');


  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '\'See @ElianCodes on RSS' }).click();
  const page3 = await page3Promise;

  await expect(page3).toHaveURL('/blog.xml');
});