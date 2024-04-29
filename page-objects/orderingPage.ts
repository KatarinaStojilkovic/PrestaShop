import { Page } from "@playwright/test";

export class orderingPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }
    async clickOnSweaterProduct() {
        return this.page.frameLocator('#framelive').getByRole('link', { name: 'Brown bear printed sweater' }).first().click()
    }
    async clickOnAddToCartButton() {
        return this.page.frameLocator('#framelive').getByRole('button', { name: 'Add to cart' }).first().click()
    }
    async clickOnProceedToCheckout() {
        return this.page.frameLocator('#framelive').getByRole('link', { name: 'Proceed to checkout' }).click()
    }
    async blueBoxCheckout() {
        return this.page.frameLocator('#framelive').locator('#main div').filter({ hasText: 'Proceed to checkout' }).nth(3).click()
    }
    async inputAddress() {
        return this.page.frameLocator('#framelive').getByLabel('Address', { exact: true }).fill('Random address')
    }
    async inputCityName() {
        return this.page.frameLocator('#framelive').getByLabel('City').fill('Random City')
    }
    async countryDropDown() {
        return this.page.frameLocator('#framelive').getByLabel('State').click()
    }
    async chooseCountryFromDropDown() {
        return this.page.frameLocator('#framelive').getByLabel('State').selectOption('Arizona')
    }
    async zipCodeInput() {
        return this.page.frameLocator('#framelive').getByLabel('Zip/Postal Code').fill("12345")
    }
    async blueContinueButton() {
        return this.page.frameLocator('#framelive').getByRole('button', { name: 'Continue' }).click()
    }
    async shippingMethodContinueButton() {
        return this.page.frameLocator('#framelive').locator('#js-delivery').getByRole('button', { name: 'Continue' }).first().click()
    }
    async paymentCheckbox() {
        return this.page.frameLocator('#framelive').locator('#conditions-to-approve').getByText('I agree to the terms of service and will adhere to them unconditionally.').click()
    }
    async placeOrderButton() {
        return this.page.frameLocator('#framelive').locator('#btn btn-primary center-block disabled').getByRole('button', {name: 'Place order'})
    }
}

