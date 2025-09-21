//const{test, expect} = require('@playwright/test');
import {test, expect, chromium} from '@playwright/test'
//Note: Before running any test case, kindly commend all other test cases which are written in this file
//Only annotation
test.only('test1-Only annotation', async ({page})=>{
    console.log("Test1-Only");
})

//Skip annotation-without condition
test.skip('test2-Skip annotation without condition', async ({page})=>{
    console.log("test2-Skip annotation without condition");
})

// //Skip annotation-with condition
test.skip('test3-Skip annotation with condition', async ({page, browserName})=>{
    console.log("test3-Skip annotation with condition");
    if(browserName==='Chromium')
    {
     test.skip();
    }
    //this testcase will be skipped if I run the test on the chromium
})

// //fixme annotation-This annotation works as skip annotation. The name indicates itself that if this testcase has any exception, we have no time to fix that but we have to test all other test cases, in this case we can use this annotation.
test('test4-fixme annotation', async ({page})=>{

    console.log("test4-Skip annotation");
    test.fixme();
})

// //fail annotation- without condition: It fails the test case
test('test5-Fail annotation', async ({page})=>{
    test.fail(); //This will fail the entire test case even if the testcase works fine
    console.log("Test5-Fail without condition");
    expect(1).toBe(2);  //Assertion-fail  So fail=fail=pass
})

//fail annotation- with condition: It fails the test case based on the given condition
test('test6-Fail annotation', async ({page, browserName})=>{
    if(browserName==='chromium'){   //pass  //Remember: It's case sensitive Chromium!=chromium
        test.fail(); //Fail 
    }  //Pass!=fail = fail
    console.log("Test6-Fail with condition");
})

// slow annotation- It extends the time to 3x
//Default timing in configuration file x = 3000 milli seconds = 3 seconds
//slow gives= 3(3000)
test.only('test7-slow annotation', async ({page})=>{
    // test.slow();
    test.setTimeout(5000)
    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("test7-slow annotion")
})


 
