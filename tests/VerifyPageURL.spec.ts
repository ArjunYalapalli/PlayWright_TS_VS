import { test, expect } from '@playwright/test';

test("Verify page URL", async ({ page }) => {
    // Navigate to the desired web page
    await page.goto('https://www.saucedemo.com/');
    // Get the current page URL
    const url: string = page.url();
    // Assert that the URL is as expected
    //expect(url).toBe('https://www.saucedemo.com/');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
});