import { Page } from "@playwright/test";

export class clothesPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }
    // Creating the locators for the pages and elements on the website
    async clickOnClothesMenu() {
        await this.page.frameLocator('#framelive').getByRole('link', { name: 'Clothes' }).first().click()
    }
    async hummingbirdPrintedSweater() {
        await this.page.frameLocator('#framelive').getByRole('link', { name: 'Brown bear printed sweater' }).first().click()
    }
    async clickOnAddToCartButton() {
        await this.page.frameLocator('#framelive').getByRole('button', { name: 'Add to cart' }).first().click()
    }
}