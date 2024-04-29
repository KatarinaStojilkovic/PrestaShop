import { Page } from '@playwright/test';
import { signUpPage } from '../page-objects/signUpPage'
import { wishListAProduct } from './wishListAProduct';
import { contactUsPage } from './contactUsPage';

export class PageManager {
    private readonly page: Page
    private readonly signUpPage: signUpPage
    private readonly wishListAProduct: wishListAProduct

    constructor(page: Page) {
        this.page = page
        this.signUpPage = new signUpPage(this.page)
        this.wishListAProduct = new wishListAProduct(this.page)
    private readonly contactUsPage: contactUsPage

    constructor(page: Page) {
        this.page = page
        this.contactUsPage = new contactUsPage(this.page)
    }
    onContactUsPage() {
        return this.contactUsPage
    }
    onWishlistPage() {
        return this.wishListAProduct
    }
}