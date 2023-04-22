import { test, expect } from "@playwright/test";

test("metadata is set correct", async ({ page }) => {
	await page.goto("/blog");

	await expect(page).toHaveTitle("Elian Codes | Blog");
});
