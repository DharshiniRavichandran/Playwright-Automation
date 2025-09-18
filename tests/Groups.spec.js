//const{test, expect} = require('@playwright/test');
import {test, expect} from '@playwright/test';
test.beforeAll('Before all', async()=>{
    console.log("beforeAll hook has been executed");
})
test.afterAll('After all', async()=>{
    console.log("afterAll hook has been executed");
})

test.beforeEach('Before each', async({page})=>{
    console.log("beforeAll hook has been executed");
})
test.afterEach('After each', async({page})=>{
    console.log("afterAll hook has been executed");
})

test.describe('Group1',()=>{
    test('test1',async({page})=>
        {
        console.log("Test1 has been executed");
    })
    test('test2',async({page})=>
        {
        console.log("Test2 has been executed");
    })
})
test.describe('Group2', ()=>{
    test('test4',async({page})=>
        {
        console.log("Test3 has been executed");
    })
    test('test5',async({page})=>
        {
        console.log("Test4 has been executed");
    })
})