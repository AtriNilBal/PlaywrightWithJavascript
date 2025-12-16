const { Given,When } = require('@cucumber/cucumber');
const SaucePoManager = require('../../pages/sauce/SaucePoManager');

Given('I launch the application', async function() {
    //await this.page.goto('https://www.saucedemo.com/');
    //await this.page.waitForLoadState('domcontentloaded');
    const poManager = new SaucePoManager(this.page);
    const loginPage = poManager.getLoginPage();
    await loginPage.navigateTo();
    await this.page.waitForLoadState('domcontentloaded');
    this.poManager = poManager;
    this.loginPage = loginPage;
});

When('I login using {string} and {string}', async function(username, password) {
    await this.loginPage.enterUsername(username);
    await this.loginPage.enterPassword(password);
    await this.loginPage.clickLogin();
});

When('I click on a product to add to cart', async function() {
    const landingPage = this.poManager.getLandingPage();
    await landingPage.addProductToCart();
    await this.page.waitForTimeout(2000);
});