const { test,testInfo } = require('@playwright/test');

test('@sauce sample test to launch sauce demo webapp', async ({browser}, testInfo) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.saucedemo.com/');
    const screenshot = await page.screenshot();
    await testInfo.attach('screenshot', {body:screenshot, contentType:'image/png'});
});