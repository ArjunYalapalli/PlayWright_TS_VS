import { test, expect, Locator } from "playwright/test";


test("Xpath locators Demo in Plywright", async({page})=>{

await page.goto("https://demowebshop.tricentis.com/login");

const login:Locator=page.getByText("Log in");
await login.first().click();






})

