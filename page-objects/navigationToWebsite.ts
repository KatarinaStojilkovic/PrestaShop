import { Page } from "@playwright/test";

export class navigationToWebsite {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async getNavigateToWebsite(){
        return this.page.keyboard.type('https://demo.prestashop.com/#/en/front')
    }

}