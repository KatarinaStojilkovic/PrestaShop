import { Page } from '@playwright/test';
import { signUpPage } from '../page-objects/signUpPage'
import { wishListAProduct } from './wishListAProduct';
import { orderingPage } from './orderingPage';
import { contactUsPage } from './contactUsPage';
import { clothesPage } from './clothesPage';

export class PageManager {
    private readonly page: Page

    private readonly signUpPage: signUpPage
    private readonly wishListAProduct: wishListAProduct
    private readonly contactUsPage: contactUsPage
    private readonly orderingPage: orderingPage
    private readonly clothesPage: clothesPage

    constructor(page: Page) {
        this.page = page
        this.signUpPage = new signUpPage(this.page)
        this.orderingPage = new orderingPage(this.page)
    }
    onSignUpPage() {
        return this.signUpPage
    }
    onContactUsPage() {
        return this.contactUsPage
    }
    onWishlistPage() {
        return this.wishListAProduct
    }
    onOrderingPage() {
        return this.orderingPage
    }
    onClothesPage() {
        return this.clothesPage
    }
}

