const { test, expect } = require('@playwright/test');
test('Input Handling', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Entering date directly using fill()
    await page.fill('#datepicker', '10/09/2025');


    //Fetching through date picker
    const date = 2;
    const month = 'March';
    const year = '2026';

    await page.locator('#datepicker').click();

    while (true) {
        const datePickerMonth = (await page.locator('.ui-datepicker-month').textContent())?.trim();
        const datePickerYear = (await page.locator('.ui-datepicker-year').textContent())?.trim();

        if (month === datePickerMonth && parseInt(year) === parseInt(datePickerYear)) {
            break;
        } else if (parseInt(year) > parseInt(datePickerYear) || (parseInt(year) === parseInt(datePickerYear) && getMonthNumber(month) > getMonthNumber(datePickerMonth))) {
            await page.click("//a[normalize-space()='Next']");
        } else {
            await page.click("//a[normalize-space()='Prev']");
        }
    }

    const datePickerDates = await page.$$("//table[@class='ui-datepicker-calendar']//a[@class='ui-state-default']");
    for (let datePickerDate of datePickerDates) {
        const text = await datePickerDate.textContent();
        if (parseInt(text) === date) {
            await datePickerDate.click();
            break;
        }
    }

    await page.waitForTimeout(5000);

    // Helper function to get month number
    function getMonthNumber(month) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthNames.indexOf(month);
    }

})