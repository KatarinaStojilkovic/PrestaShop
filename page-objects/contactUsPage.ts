import { Page } from "@playwright/test";

export class contactUsPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }
    async clickOnContactUsForm() {
        return this.page.frameLocator('#framelive').locator('#contact-link').getByRole('link', { name: 'Contact us' }).first().click()
    }
    async clickOnSubjectFromDropDown() {
        return this.page.frameLocator('#framelive').getByLabel('Subject').click()
    }
    async clickOnWebmasterInDropDown() {
        return this.page.frameLocator('#framelive').getByLabel('Subject').selectOption('Webmaster')
    }
    async emailInput() {
        return this.page.frameLocator('#framelive').getByPlaceholder('your@email.com')
    }
    async subjectMessage() {
        return this.page.frameLocator('#framelive').getByPlaceholder('How can we help?').fill('Do you have any new upcoming products?')
    }
    async sendButton() {
        return this.page.frameLocator('#framelive').getByRole('button', { name: 'Send' }).click
    }
    async userNotSignedIn() {
        return this.page.frameLocator('#framelive').getByRole('link', { name: 'Sign in' })
    }
}