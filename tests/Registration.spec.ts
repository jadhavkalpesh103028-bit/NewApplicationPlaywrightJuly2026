import { Homepage } from "../pages/Homepage";
import { Registration } from "../pages/Registration";
import { test, expect, Page } from '@playwright/test';
import { TestConfig } from "../test.config";
import { RandomDataUtil } from "../utils/randomDataGenerator";

let homepage: Homepage;
let registr: Registration;

test.beforeEach(async ({ page }) => {

    const config = new TestConfig();
    await page.goto(config.appUrl)
     homepage = new Homepage(page);
     registr = new Registration(page);

})

test.afterEach(async ({ page }) => {
await page.close();

})
test("User Registration test", async ({ page }) => {

     // Navigate to URL


    await homepage.clickonMyAccount();
    await homepage.clickonRegister();

    await registr.selectfname(RandomDataUtil.getfirstname());
    await registr.selectlname(RandomDataUtil.getlastname());
    await registr.selectEmail(RandomDataUtil.getEmail());
    await registr.selectPhone(RandomDataUtil.getTelephone());
    await registr.selectPassword(RandomDataUtil.getPassword());

    await registr.selectCPassword(RandomDataUtil.getlastname());
    const confirmp = await RandomDataUtil.getPassword();
    await registr.selectPassword(confirmp);
    await registr.selectCPassword(confirmp);
    await registr.selectCheckbttn();
    await registr.selectContinuebttn();
    const message = await registr.getConfirmMessage();
    console.log("the catured text is", message);
    await expect(message).toContain('Your Account Has Been Created!');
})

