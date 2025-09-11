const{test, expect} = require('@playwright/test');
test('Inbuild locators', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');


    //DROPDOWN

    //Select multiple options from the multi select dropdown
    await page.selectOption('#colors', ['Red','Blue','Green']);

    //Finding total no of options that are available in the multiselect dropdown
    const options = await page.locator('#colors option');
    await expect(options).toHaveCount(7);

    //Finding total no of options that are available in the multiselect dropdown using array
    const options1 = await page.$$('#colors option');
    await expect(options1.length).toBe(7);
    
    //includes() checks the presence of value in the dropdown
    const content=await page.locator('#colors').textContent();
    await expect(content.includes('Blue')).toBeTruthy();

    
    //ALERTS

    //Handling simple alert
    page.on('Alerts',async ({dialog})=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })
    await page.click("//button[normalize-space()='Simple Alert']");

    //Handling confirm alert
    page.on('Alerts',async ({dialog})=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.dismiss();
    })

    //Handling prompt alert
    page.on('Alerts',async ({dialog})=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Hello Harry');
    })

    await page.click("//button[normalize-space()='Simple Alert']");
    await page.click("//button[normalize-space()='Confirmation Alert']");
    await page.click("//button[normalize-space()='Prompt Alert']");

    await page.waitForTimeout(5000);
})