import { Page } from '@playwright/test';
import { contactUsPage } from './contactUsPage';

export class PageManager {
    private readonly page: Page
    private readonly contactUsPage: contactUsPage

    constructor(page: Page) {
        this.page = page
        this.contactUsPage = new contactUsPage(this.page)
    }
    onContactUsPage() {
        return this.contactUsPage
    }
}