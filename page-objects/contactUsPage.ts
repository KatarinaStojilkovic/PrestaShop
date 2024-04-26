import { Page } from "@playwright/test";

export class contactUsPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }
    // Creating the elements and finding locators of the mentioned ones.
    async clickOnContactUsForm() {
        return this.page.frameLocator('#framelive').locator('#contact-link').getByRole('link', { name: 'Contact us' }).first().click()
    }
    async clickOnSubjectFromDropDown() {
        return this.page.frameLocator('#framelive').getByLabel('Subject').click()
    }
    async webmasterFromDropDown() {

        return await this.page.frameLocator('#framelive').getByLabel('Subject').selectOption('Webmaster')
    }
    async emailInputLocator() {
        return this.page.frameLocator('#framelive').getByPlaceholder('your@email.com')
    }
    async messageBoxInput() {
        return this.page.frameLocator('#framelive').getByPlaceholder('How can we help?').fill('Do you have any new upcoming products?')
    }
    async clickOnSendButton() {
        return this.page.frameLocator('#framelive').getByRole('button', { name: 'Send' }).click()
    }
    async signInLocator() {
        return this.page.frameLocator('#framelive').getByRole('link', { name: 'Sign in' })
    }
    async messageSentGreenBox (){
        return this.page.frameLocator('#framelive').locator('#content div').getByText('Your message has been successfully sent to our team.')
    }
}