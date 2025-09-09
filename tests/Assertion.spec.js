const{test, expect} = require('@playwright/test');
test('Inbuild locators', async ({page})=>{
    await page.goto('https://letcode.in/radio');

    //toHaveURL()-It checks whether the given url is present in the webpage
    await expect(page).toHaveURL('https://letcode.in/radio');

    //toHaveTitle()-It checks whether the given title is present in the webpage
    await expect(page).toHaveTitle('Radio Buttons | LetCode with Koushik');

    //toBeVisible()-It checks whether the given element is visible in the page
    const logo = await page.locator("//h1[text()='Radio & Checkbox']");
    await expect(logo).toBeVisible();

    //toBeEnabled() or toBeDisabled()-It checks whether the given element is enabled/disabled
    const yesRadioButton = await page.locator("//input[@type='radio' and @name='answer' and @id='yes']");
    await yesRadioButton.click();
    await expect(yesRadioButton).toBeEnabled();

    //toBeChecked()-It checks whether the given checkbox element is checked or unchecked
    const Checkbox = await page.locator("//label[text()=' I agree to the ']/input");
    await Checkbox.click();
    await expect(Checkbox).toBeChecked();

    await page.goto('https://letcode.in/edit');

    //toHaveAttribute()-It checks whether the given attribute is availabe in the element
    const textbox = await page.locator("#dontwrite");
    await expect(textbox).toHaveAttribute('type','text');
    
    //toHaveText- Text inbetween open and closed elements (Full value)
    await expect(await page.locator("//label[text()='Clear the text']")).toHaveText('Clear the text');

    //toContainText- Text inbetween open and closed elements (Partial value)
    await expect(await page.locator("//label[text()='Clear the text']")).toContainText('Clear')

    //toHaveValue- After filling the text box, It’s used to check the inputbox has value or not
    const textBox = await page.locator("//input[@id='fullName']")
    textBox.fill("Dharshini");
    await expect(textBox).toHaveValue('Dharshini');
})