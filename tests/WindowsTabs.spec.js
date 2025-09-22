const {test, expect, chromium} = require('@playwright/test');
test('Handle Page_Windows', async ()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();  //Page1 ficture
    const page2 = await context.newPage();  //Page2 ficture

    const allPages = context.pages()// It returns all the pages in the context
    console.log("The number pages:", allPages.length);

    await page1.goto("https://testautomationpractice.blogspot.com/");
    expect(page1).toHaveTitle("Automation Testing Practice");

    await page2.goto("https://demoblaze.com/");
    expect(page2).toHaveTitle("STORE");

    await page2.waitForTimeout(5000);

})

test.only('Handle Page_Tabs', async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1_tab = await context.newPage(); 

    await page1_tab.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    expect(page1_tab).toHaveTitle("OrangeHRM");

    const pagePromise = context.waitForEvent('page'); //this will open new tab
    await page1_tab.locator("//a[normalize-space()='OrangeHRM, Inc']").click(); //This new line will be opened on the newly opened tab
    
    const page2_tab = await pagePromise;
    
    await expect(page2_tab).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM'); //Checking title of the page

    await page1_tab.waitForTimeout(5000);

})