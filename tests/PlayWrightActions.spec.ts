import { test, expect, Locator } from "@playwright/test";


// Input box/ Text box
test("Text input Box Action", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");



    const textBox: Locator = page.locator('#name');
    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();

    const lengthofatt: string | null = await textBox.getAttribute("maxlength");
    console.log(lengthofatt);
    expect(lengthofatt).toBe("15");

    await textBox.fill('ting ting');
    //await textBox.textContent() // return empty
    const enteredvalue: String = await textBox.inputValue() // return the input value of text box
    console.log("entered value of input box is: " + enteredvalue);
    expect(enteredvalue).toBe('ting ting');

    await page.waitForTimeout(5000);
})

// Radio Buttons
test("Radio Button Acitons", async ({ page }) => {

    page.goto("https://testautomationpractice.blogspot.com/");
    const gender: Locator = page.locator("#male");

    await expect(gender).toBeVisible();
    await expect(gender).toBeEnabled();
    expect(await gender.isChecked()).toBe(false);

    await gender.check();    // select the radio button
    expect(await gender.isChecked()).toBe(true);
    await expect(gender).toBeChecked();

    await page.waitForTimeout(3000);

})

// Check Boxes
test.only("Check Box Acitons", async ({ page }) => {

    page.goto("https://testautomationpractice.blogspot.com/");

    // Select scpecific check box using getByLabel and assert
    const gender: Locator = page.getByLabel("Sunday");
    await gender.check();
    await expect(gender).toBeChecked();

    await page.waitForTimeout(3000);

    // Select all check boxes and assert each one is selected
    const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const checkboxes: Locator[] = days.map(index => page.getByLabel(index));
    expect(checkboxes.length).toBe(7);

    // Select All check boxes
    for (const checkBox of checkboxes) {
       await checkBox.check();
       await expect(checkBox).toBeChecked();
    }

    // Select last three check boxes and assert
    await page.waitForTimeout(3000);
})
