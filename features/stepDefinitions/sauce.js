const { Given } = require('@cucumber/cucumber');

Given('I launch the application', async function() {
    await this.page.goto('https://www.saucedemo.com/');
    await this.page.waitForLoadState('domcontentloaded');
});