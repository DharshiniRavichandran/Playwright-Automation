//const{test, expect} = require('@playwright/test');
import {test, expect} from '@playwright/test';
test('Normal screenshot',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'NormalScreenshot.png'});
})
test('The whole page screenshot',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'FullPageScreenshot.png',fullPage:true});
})
test('Element Screenshot',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("[name='BookTable']").screenshot({path:'tests/Screenshots/'+Date.now()+'ElementScreenshot.png'});
})

