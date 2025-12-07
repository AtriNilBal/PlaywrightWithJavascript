const { test } = require('@playwright/test');

test.only('sample test to launch sauce demo webapp', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.saucedemo.com/');
});