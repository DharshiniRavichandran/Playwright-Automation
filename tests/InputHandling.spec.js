const{test, expect} = require('@playwright/test');
test('Input Handling', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // ┌──────────────────────────────┐
    // │      DropdownHandling        │
    // └──────────────────────────────┘
  

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

    
    // ┌──────────────────────────────┐
    // │        AlertHandling         │
    // └──────────────────────────────┘

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

    
    
    // ┌──────────────────────────────┐
    // │        TableHandling         │
    // └──────────────────────────────┘

    //First we need reach the table
    const table = await page.locator('#productTable');
    //Finding the total number of columns
    const columns = await table.locator('thead tr th');
    console.log("The number of columns:", await columns.count());
    //Finding the total number of rows
    const rows = await table.locator('tbody tr');
    console.log("The number of rows:", await rows.count());
    //Assertion with total number of rows and columns
    await expect(await columns.count()).toBe(4);
    await expect(await rows.count()).toBe(5);

    //Select one particular row among all rows for selecting the data
    // const matchedRow = rows.filter({
    // has: page.locator('td'),
    // hasText: 'Smartwatch'
    // })
    // await matchedRow.locator('input').check();

    //Function calling
    await mutipleSelect(rows, page, 'Smartphone');
    await mutipleSelect(rows, page, 'Tablet');

    //Reusable function for multiple value selection
    async function mutipleSelect(rows, page, name) {
      const matchedRow = rows.filter({
    has: page.locator('td'),
    hasText: name
    })
    await matchedRow.locator('input').check();  
    }
  
   //Getting all pages and all data
    const pages = await page.locator('.pagination li a');
    console.log("Total number of pages:",await pages.count())
    for (let p = 0; p<await pages.count(); p++)
    {
        if(p>0)
        {
            await pages.nth(p).click();
        }
        //Fetching all the data from the table
        for(let i = 0; i<await rows.count(); i++){
        const row = await rows.nth(i);
        const tds = await row.locator('td');
        for(let j = 0; j< await tds.count()-1; j++){
            console.log(await tds.nth(j).textContent());
        }
    }

    }

    // ┌──────────────────────────────┐
    // │        CommonCode            │
    // └──────────────────────────────┘
       await page.waitForTimeout(5000);
})