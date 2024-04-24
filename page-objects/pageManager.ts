import { Page } from '@playwright/test';
import { contactUsPage } from './contactUsPage';
import { navigationToWebsite } from './navigationToWebsite';


export class PageManager {

    private readonly page: Page
    private readonly navigatioToWebsite: navigationToWebsite
    private readonly contactUsPage: contactUsPage



    constructor(page: Page) {
        this.page = page
        this.contactUsPage = new contactUsPage(this.page)
        this.navigatioToWebsite = new navigationToWebsite(this.page)


    }
    onClothesPage() {
        return this.contactUsPage
    }

    onNavigationPage() {
        return this.navigatioToWebsite
    }

}