const{test, expect} = require('@playwright/test');

//Before and after each hooks will run before and after excuting each test case.

let page;  //So this page ficture has been declared globally.

test.beforeAll('Before each hook-Login', async ({browser})=>{
page = await browser.newPage();   //Assigning new page to the 'page' variable. so no need declared again and again
//login
    await page.goto("https://demoblaze.com/");
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[contains(text(), 'Log in')]").click();
})
test.afterAll('After each hook-Logout', async ()=>{
//logout
    await page.locator("//a[contains(text(), 'Log out')]").click();
    await page.waitForTimeout(5000);
})

test('test1', async ()=>{ 
    
    //HomePage
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9);

})
test('test2', async ()=>{
    //Add product to the cart
    page.on("Dialog", async({dialog})=>{
        await expect(dialog.type()).toContain('alert');
        await expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    })
    await page.locator("//a[contains(text(), 'Samsung galaxy s6')]").click();
    await page.locator("//a[contains(@class, 'btn btn-success btn-lg')]").click();    
})
