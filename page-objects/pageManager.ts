import { Page } from '@playwright/test';
import { signUpPage } from '../page-objects/signUpPage'

import { wishListAProduct } from './wishListAProduct';

import { orderingPage } from './orderingPage';

import { contactUsPage } from './contactUsPage';
export class PageManager {
    private readonly page: Page

    private readonly signUpPage: signUpPage
    private readonly wishListAProduct: wishListAProduct


    private readonly signUpPage: signUpPage
    private readonly orderingPage: orderingPage

    constructor(page: Page) {
        this.page = page
        this.signUpPage = new signUpPage(this.page)
        this.orderingPage = new orderingPage(this.page)
    }
    onSignUpPage() {
        return this.signUpPage


    private readonly contactUsPage: contactUsPage

    constructor(page: Page) {
        this.page = page
        this.signUpPage = new signUpPage(this.page)
        this.wishListAProduct = new wishListAProduct(this.page)

    }
    onContactUsPage() {
        return this.contactUsPage
    }

    onWishlistPage() {
        return this.wishListAProduct
    }
    onSignUpPage(){
        return this.signUpPage
    }
}

    onOrderingPage() {
        return this.orderingPage
    }
}

