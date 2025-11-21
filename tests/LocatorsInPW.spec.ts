import {test, expect, Locator} from '@playwright/test';

/* locator- identifies elements using various strategies
DOM- Document Object Model-- the structure of a web page
DOM - is an API interface provided by the browser to interact with the HTML elements on a web page

1) page.getByAltText() - locates elements by ite text alternative
2) page.getByTitle() - locates elements by their title attribute
3) page.getByRole() - locates elements by their ARIA role
4) page.getByLabel() - locates form elements by their associated label text
5) page.getByPlaceholder() - locates input elements by their placeholder text
6) page.getByText() - locates elements by their visible text content
7) page.getByTestId() - locates elements by a custom data-testid attribute

*/

test("verify locators in Playwright", async ({page})=>{
await page.goto('https://demo.nopcommerce.com/');
//1) page.getByAltText() - identifies images by their alt text. use this locator when you elements have descriptive alt attributes. such as images, area elements, logos and icons.
<<<<<<< HEAD
const gender:Locator = page.getByAltText('Male');
await gender.click();
await expect(gender).toBeVisible();
=======
const logo:Locator = page.getByAltText('nopCommerce demo store');
await logo.click();
await expect(logo).toBeVisible();
>>>>>>> 64a67df0490b74c6a2e6bceefc536df99a7e88a2

//2) page.getByTitle() - locates elements by their title attribute. use this locator when elements have meaningful title attributes that provide additional context or information.
const searchBox:Locator = page.getByTitle('Search store')
await searchBox.fill('Apple MacBook Pro 13-inch');
await expect(searchBox).toHaveValue('Apple MacBook Pro 13-inch');

//3) page.getByRole() - locates elements by their ARIA role. use this locator to find elements based on their semantic roles, such as buttons, links, headings, and form controls.
<<<<<<< HEAD
const loginLink:Locator = page.getByRole('button', {name: 'Electronics'});
await loginLink.click();
await expect(page).toHaveURL(/.*login/);

//4) page.getByLabel() - locates form elements by their associated label text. use this locator to find input fields, checkboxes, radio buttons, and other form controls based on their visible labels.
page.getByLabel('Last name:').fill('Yalapalli');
const lastname: Locator = await page.getByLabel('Last name:');
const lastNameentered = await lastname.textContent();
console.log('Last name entered is: ' + lastNameentered);
expect.soft(lastNameentered).toBe('Yalapalli');
await expect(lastname).toHaveValue('Yalapalli');

//5) page.getByPlaceholder() - locates input elements by their placeholder text. use this locator to find input fields that provide hints or examples of the expected input.
const searchBoxInput:Locator = page.getByPlaceholder('Search store');
await searchBoxInput.fill('Apple MacBook Pro 13-inch');
await expect(searchBoxInput).toHaveValue('Apple MacBook Pro 13-inch');

//6) page.getByText() - locates elements by their visible text content. use this locator to find elements based on the exact or partial text they display.
const newsletterText:Locator = page.getByText('Newsletter');
await expect(newsletterText).toBeVisible();     

//7) page.getByTestId() - locates elements by a custom data-testid attribute. use this locator to find elements that have been specifically marked for testing purposes.
const newsletterBox:Locator = page.getByTestId('newsletter-email');
await newsletterBox.fill('gangavva');

=======
const loginLink:Locator = page.getByRole('link', {name: 'Log in'});
await loginLink.click();
await expect(page).toHaveURL(/.*login/);

>>>>>>> 64a67df0490b74c6a2e6bceefc536df99a7e88a2
})