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
    async getClothesPage() {
        this.page.frameLocator('#framelive').getByRole('link', { name: 'Clothes' }).first()
    }
    async getElementInput() {
        await this.page.frameLocator('#framelive').getByRole('link', { name: 'Brown bear printed sweater' }).first().click()
    }
    async getInputData() {
        await this.page.frameLocator('#framelive').locator('#quantity_wanted').fill('1200')
    }
    async getAddToCart() {
        await this.page.frameLocator('#framelive').getByRole('button', { name: 'Add to cart' }).first().click()
    }
    async getProceedToCheckout() {
        await this.page.frameLocator('#framelive').getByRole('link', { name: 'Proceed to checkout' }).first().click()
    }
    async getArrowClick() {
        await this.page.frameLocator('#framelive').locator('.input-group-btn-vertical').getByRole('button').first().click()
    }
    async getErrorMessage() {
        this.page.frameLocator('#framelive').getByRole('alert')
    }
    async getTextErrorMessage() {
        this.page.frameLocator('#framelive').getByText('The available purchase order quantity for this product is 1200.')
    }
    async getProceedToButton() {
        this.page.frameLocator('iframe[name="framelive"]').locator('.btn btn-primary').filter({ hasText: 'Proceed to checkout' }).nth(4)
    }
}