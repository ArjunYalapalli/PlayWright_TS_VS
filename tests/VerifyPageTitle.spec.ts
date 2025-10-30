import {test, expect} from '@playwright/test';

test("Verify page Title", async ({page}) => {
  // Navigate to the desired web page
  await page.goto('https://www.saucedemo.com/');
    // Get the page title
    const title:string = await page.title();
    // Assert that the title is as expected
    // expect(title).toBe('Swag Labs');
    await expect(page).toHaveTitle('Swag Labs');
});