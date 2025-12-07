const{ chromium } = require('playwright');
const { BeforeAll, Before } = require('@cucumber/cucumber');

let browser, context, page;

BeforeAll(async function() {
    browser = await chromium.launch({headless: false});
    context = await browser.newContext();
    page = await context.newPage();
});

Before(async function() {
    this.page = page;
});