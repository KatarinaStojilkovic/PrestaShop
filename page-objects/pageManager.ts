import { Page } from '@playwright/test';
import { cartProductsCalculation } from './cartProductsCalculation';
import { clothesPage } from './clothesPage';

export class PageManager {

    private readonly page: Page
    private readonly cartProductsCalculation: cartProductsCalculation
    private readonly clothesPage: clothesPage

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
}