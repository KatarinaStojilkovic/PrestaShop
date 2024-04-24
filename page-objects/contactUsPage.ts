import { Page } from "@playwright/test";

export class contactUsPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }
    async clickOnContactUsForm (){
        return this.page.frameLocator('#framelive').locator('#contact-link').getByRole('link', { name: 'Contact us' }).first().click()
    }
    async cclickOnSubjectFromDropDown (){
        return this.page.frameLocator('#framelive]').getByLabel('Subject')
    }
}