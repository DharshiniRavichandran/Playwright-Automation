//const{test, expect} = require('@playwright/test');
import {test, expect} from '@playwright/test'
test('Recording', async ({page})=>{
await page.goto('https://demoblaze.com/');

//click on the login button-Property
//await page.locator('id=login2').click();
await page.click('id=login2');

//Providing username and password
await page.fill('#loginusername', 'pavanol');
await page.fill("input[id='loginpassword']", 'test@123');

//Clicking on the login button
await page.click("//button[normalize-space()='Log in']");

//logout button presence
const logoutlink = await page.locator("//a[normalize-space()='Log out']"); //In this line, We'll get failure.. So In recording, I'll be shown
await expect(logoutlink).toBeVisible();

//Closing the browser
await page.close();
})