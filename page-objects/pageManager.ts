import { Page } from '@playwright/test';
import { cartProductsCalculation } from './cartProductsCalculation';
import { clothesPage } from './clothesPage';
import { contactUsPage } from './contactUsPage';

export class PageManager {
    private readonly page: Page
    private readonly cartProductsCalculation: cartProductsCalculation
    private readonly clothesPage: clothesPage
    private readonly contactUsPage: contactUsPage

    constructor(page: Page) {
        this.page = page
        this.cartProductsCalculation = new cartProductsCalculation(this.page)
        this.clothesPage = new clothesPage(page)
    }
    onCartProductsPage() {
        return this.cartProductsCalculation
    }
    onClothesPage() {
        return this.clothesPage
    }
    onContactUsPage() {
        return this.contactUsPage
    }
}