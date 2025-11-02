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
const logo:Locator = page.getByAltText('nopCommerce demo store');
await logo.click();
await expect(logo).toBeVisible();

//2) page.getByTitle() - locates elements by their title attribute. use this locator when elements have meaningful title attributes that provide additional context or information.
const searchBox:Locator = page.getByTitle('Search store')
await searchBox.fill('Apple MacBook Pro 13-inch');
await expect(searchBox).toHaveValue('Apple MacBook Pro 13-inch');

})