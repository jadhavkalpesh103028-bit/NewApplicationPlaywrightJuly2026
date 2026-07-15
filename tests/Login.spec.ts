import { Homepage } from "../pages/Homepage";
import { Loginpage } from "../pages/LoginPage";
import { Registration } from "../pages/Registration";
import { test, expect } from '@playwright/test';
import { TestConfig } from "../test.config";

let homepage: Homepage;
let loginpage: Loginpage;

test.beforeEach(async ({ page }) => {
    const config = new TestConfig();
    await page.goto(config.appUrl);
    homepage = new Homepage(page);
    loginpage = new Loginpage(page);
})

test.afterEach(async ({ page }) => {
    await page.close();
})
test("Login for User", async ({  }) => {



    await homepage.clickonMyAccount();
    await homepage.clickonLogin();


    await loginpage.getLEmail(TestConfig.email);
    await loginpage.getLPassword(TestConfig.password);
    await loginpage.clickLoginBttn();

    expect(await loginpage.getSucessMessage()).toContain("My Account");





})