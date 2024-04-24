import { Page } from '@playwright/test';
import { clothesPage } from './clothesPage';


export class PageManager {

    private readonly page: Page
    private readonly clothesPage: clothesPage



    constructor(page: Page) {
        this.page = page
        this.clothesPage = new clothesPage(this.page)


    }
    onClothesPage() {
        return this.clothesPage
    }

}