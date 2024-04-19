import { Page } from "@playwright/test";

export class signInPage {

readonly page: Page

    constructor (page: Page){
        this.page = page
    }

}