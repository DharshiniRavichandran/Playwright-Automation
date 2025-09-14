const {test, expect} = require('@playwright/test');
test('MouseHoverActions', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('#name').fill('Dharshini');
    //ctrl+A
    await page.keyboard.press('Control+A');
    //ctrl+C
     await page.keyboard.press('Control+C');
    //Tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    //ctrl+v
    await page.keyboard.press('Control+V');
})
