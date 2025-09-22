const{test, expect} = require('@playwright/test');
test('Inbuild locators', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //Checking whether the logo is visible by using alt attribute
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //Filling up the input text boxes by using placeholder attribute
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    //Clicking on the login button using button element and type attribute
    await page.getByRole('button', {type: 'submit'}).click();

    //Getting the text value by using locator()and textContent() methods
    const username = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();

    //Checking whether the text is visible by text value
    await expect(await page.getByText(username)).toBeVisible

})