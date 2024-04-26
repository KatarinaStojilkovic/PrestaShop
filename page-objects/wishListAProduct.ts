import { Page } from "@playwright/test";

export class wishListAProduct {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }
    // Finding locators for the product wishlisting and the heart button on the product's page
    async chooseAnyProduct() {
        return this.page.frameLocator('#framelive').getByRole('link', { name: 'Today is a good day Framed poster' }).first().click()
    }
    async clickOnAHeartButton() {
        return this.page.frameLocator('#framelive').locator('.wishlist-button-add').first().click()
    }
    async clickPopUpForSignIn() {
        return this.page.frameLocator('#framelive').getByRole('dialog').getByRole('link', { name: 'Sign in' }).first().click()
    }
    async createNewWishlistPopUp() {
        return this.page.frameLocator('#framelive').getByText('add_circle_outline Create new').click()
    }
    async addToWishlistProduct() {
        return this.page.frameLocator('#framelive').locator('#add-to-cart-or-refresh').getByRole('button', { name: 'favorite_border' }).click()
    }
    async nameNewWishlist() {
        return this.page.frameLocator('#framelive').getByPlaceholder('Add name').fill('New Wishlist')
    }
    async createNewWishlist() {
        return this.page.frameLocator('#framelive').getByRole('button', { name: 'Create wishlist' }).click()
    }
    async newListCreated() {
        return this.page.frameLocator('#framelive').getByText('New Wishlist').click()
    }
    async productAddedPopUp() {
        return this.page.frameLocator('#framelive').getByText('Product added')
    }
}