import { Page } from "@playwright/test";

export class cartProductsCalculation {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    async proceedToCheckoutButton(){
            return this.page.frameLocator('#framelive').getByRole('link', { name: 'Proceed to checkout' }).first().click()
    }
    async increaseTheProductNumber() {
        return this.page.frameLocator('#framelive').locator('.input-group-btn-vertical').getByRole('button').first().click()
    }
}
