class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = this.page.getByPlaceholder('Username');
        this.password = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', {name: 'Login'});
    }

    async navigateTo() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async enterUsername(string) {
        await this.username.fill(string);
        return this;
    }

    async enterPassword(string) {
        await this.password.fill(string);
        return this;
    }

    async clickLogin() {
        await this.loginButton.click();
        return this;
    }
}
module.exports = (LoginPage);