const LoginPage = require('../sauce/LoginPage');
const LandingPage = require('../sauce/LandingPage');

class SaucePoManager {

    constructor(page) {
        this.loginPage = new LoginPage(page);
        this.landingPage = new LandingPage(page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getLandingPage() {
        return this.landingPage;
    }
}
module.exports = (SaucePoManager);