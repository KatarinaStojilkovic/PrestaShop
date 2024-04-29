import { Page } from "@playwright/test";

export class cartProductsCalculation {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    async proceedToCheckoutButton() {
        await this.page.frameLocator('#framelive').getByRole('link', { name: 'Proceed to checkout' }).first().click()
    }
    async sweaterPrice() {
        return this.page.frameLocator('#framelive').getByText('€34.46')
    }
    async increaseTheProductNumber() {
        for (let i = 0; i < 4; i++) {
            await this.page.frameLocator('#framelive').locator('.input-group-btn-vertical').getByRole('button').first().click()
        }
    }
    async assertQuantity() {
        this.page.frameLocator('#framelive').locator('.js-cart-line-product-quantity form-control').getByLabel('Hummingbird printed sweater')
    }
}
