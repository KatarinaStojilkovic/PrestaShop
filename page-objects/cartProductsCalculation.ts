import { Page } from "@playwright/test";

export class cartProductsCalculation {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    async proceedToCheckoutButton() {
        await this.page.frameLocator('#framelive').getByRole('link', { name: 'Proceed to checkout' }).first().click()
    }
    async sweaterPriceDiscount() {
        return this.page.frameLocator('#framelive').locator('.current-price-value').innerText()
    }
    // Dynamic values in order to call up the function
    async increaseTheProductNumber(counter: number) {
        for (let i = 0; i < counter; i++) {
            await this.page.frameLocator('#framelive').locator('.input-group-btn-vertical').getByRole('button').first().click()
        }
    }
    async assertQuantity() {
        return this.page.frameLocator('#framelive').getByLabel('Hummingbird printed sweater')
    }
    async priceMultipliedBy5() {
        return this.page.frameLocator('#framelive').locator('#cart-subtotal-products').getByText('€').innerText()
    }
    //cena*5 = nova cena; asertacija!
}
