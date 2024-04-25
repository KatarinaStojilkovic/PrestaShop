import { Page } from '@playwright/test';
import { signUpPage } from '../page-objects/signUpPage'
import { wishListAProduct } from './wishListAProduct';

export class PageManager {

    private readonly page: Page
    private readonly signUpPage: signUpPage
    private readonly wishListAProduct: wishListAProduct

    constructor(page: Page) {
        this.page = page
        this.signUpPage = new signUpPage(this.page)
        this.wishListAProduct = new wishListAProduct(this.page)
    }

    onSignUpPage() {
        return this.signUpPage
    }
    onWishlistPage() {
        return this.wishListAProduct
    }
}