import { test, expect } from '@playwright/test';

test("Verify page URL", async ({ page }) => {
  // 1️⃣ Navigate to the web page
  await page.goto('https://www.saucedemo.com/');

  // 2️⃣ Get the current URL (if you want to store or log it)
  const url: string = page.url();
  console.log("Current URL:", url);

  // 3️⃣ Assertion method 1 - manual comparison
  // expect(url).toBe('https://www.saucedemo.com/');

  // 4️⃣ Assertion method 2 - preferred way   

  // [1] Navigate to page
  // [2] Get current URL
  // [3] Verify expected URL

  await expect(page).toHaveURL('https://www.saucedemo.com/');
});
