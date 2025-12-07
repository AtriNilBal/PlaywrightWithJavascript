const { Given } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Given('I launch the application', async function() {
    let context = await chromium.launch({headless: false});
    let page = await context.newPage();
    await page.goto('https://www.saucedemo.com/');
});