const { test, expect } = require('@playwright/test');

test('File Handling', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/'); 
  //Single file uploading
  await page.waitForSelector('#singleFileForm input[type="file"]');
  const singleFile = await page.locator('#singleFileForm input[type="file"]');
  await singleFile.setInputFiles("tests\\Files\\file1.txt");

  //Multiple file uploading
  await page.waitForSelector('#multipleFilesInput');
  const multiFile = await page.locator('#multipleFilesInput');
  await multiFile.setInputFiles(["tests\\Files\\file1.txt","tests\\Files\\file2.txt"]);
});