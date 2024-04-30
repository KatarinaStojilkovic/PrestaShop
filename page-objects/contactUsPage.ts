import { Page } from "@playwright/test";

export class contactUsPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }
    // Creating the elements and finding locators of the mentioned ones.
    async clickOnContactUsForm() {
        this.page.frameLocator('#framelive').locator('#contact-link').getByRole('link', { name: 'Contact us' }).first().click()
    }
    async clickOnSubjectFromDropDown() {
        await this.page.frameLocator('#framelive').getByLabel('Subject').click()
    }
    async selectWebmasterFromDropDown() {

        return this.page.frameLocator('#framelive').getByLabel('Subject').selectOption('1')
    }
    async emailInputLocator() {
        return this.page.frameLocator('#framelive').getByPlaceholder('your@email.com')
    }
    async messageBoxInput() {
        return this.page.frameLocator('#framelive').getByPlaceholder('How can we help?')
    }
    async clickOnSendButton() {
        await this.page.frameLocator('#framelive').getByRole('button', { name: 'Send' }).click()
    }
    async signInLocator() {
        this.page.frameLocator('#framelive').getByRole('link', { name: 'Sign in' })
    }
    async dialogBoxSentMessage() {
        return this.page.frameLocator('#framelive').locator('#content div').getByText('Your message has been successfully sent to our team.')
    }
}