const {test, expect} = require('@playwright/test');
test('MouseHoverActions', async ({page})=>{

    //Mouse hover
    await page.goto('https://letcode.in/droppable');
    const products = await page.locator("//a[text() ='Products']");
    const letXpath = await page.locator("//a[normalize-space() ='LetXPath']");
    await products.hover();
    await letXpath.hover();

    //Right click
    await page.goto("https://vinothqaacademy.com/mouse-event/");
    const button = await page.locator('#rightclick');
    await button.click({button:'right'});

    //Double click
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dbutton = await page.locator("//button[normalize-space()='Copy Text']");
    await dbutton.dblclick();
    const field2 = await page.locator("#field2");
    await expect(field2).toHaveValue("Hello World!");

    //Drag and drop
    //Approach-1
    await page.goto('https://testautomationpractice.blogspot.com/');
    const source = await page.locator("//p[normalize-space()='Drag me to my target']");
    const target = await page.locator("//p[normalize-space()='Drop here']");
    // await source.hover();
    // await page.mouse.down();
    // await target.hover();
    // await page.mouse.up();
    //Approach-2
    await source.dragTo(source);



    await page.waitForTimeout(5000);
})