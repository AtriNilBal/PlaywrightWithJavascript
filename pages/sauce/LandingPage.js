class LandingPage {

    constructor(page) {
        this.page = page;
        this.backPack = this.page.getByText('Sauce Labs Backpack');
        this.addProductToCartFromPDP = this.page.getByRole('button', {name: 'Add to cart'})
    }

    async viewProduct() {
        await this.backPack.click();
        await this.page.waitForLoadState('domcontentloaded')
    }

    async addProductToCart() {
        await this.viewProduct();
        await this.page.waitForLoadState('domcontentloaded')
        await this.addProductToCartFromPDP.click();
    }
}
module.exports = (LandingPage);