import { Page } from "@playwright/test";

export class contactUsPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }
    async getContacUsForm (){
        return this.page.frameLocator('#framelive').locator('#contact-link').getByRole('link', { name: 'Contact us' }).first().click()
    }
}