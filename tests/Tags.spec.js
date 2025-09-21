//const{test, expect} = require('@playwright/test');
import {test, expect} from '@playwright/test'
test('test1',{tag: '@Sanity'}, async ({page})=>{
    console.log("Test1-Sanity");
})
test('test2', {tag: '@Sanity'}, async ({page})=>{
    console.log("Test2-Sanity");
})
test('test3', {tag: '@Regression'}, async ({page})=>{
    console.log("Test3-Regression");
})
test('test4', {tag: '@Regression'}, async ({page})=>{
    console.log("Test4-Regression");
})
test('test5', {tag: ['@Sanity','@Regression']},async ({page})=>{
    console.log("Test5-SanityAndRegression");
})

// ┌─────────────────────────────────────────────┐
// │            Sanity Test Execution            │
// └─────────────────────────────────────────────┘

// npx playwright test Tags.spec.js --project=chromium --headed --grep "@Sanity"
//It executes only Sanity testing included test cases:TC01, TC02 and TC05.
// npx playwright test Tags.spec.js --project=chromium --headed --grep-invert "@Regression"
//It executes only Regression testcase, not combined test cases. TC03 and TC04


