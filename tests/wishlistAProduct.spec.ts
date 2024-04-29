import { test, expect } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker';

// The page has to open everytime before starting the test since nothing is saved when the page gets reloaded or it takes some time to load
test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.prestashop.com/#/en/front')
})
test('User can wishlist a product when signed in', async ({ page }) => {
    // Creating a const in order to call up the locators easier and assert the user inputs
    const pm = new PageManager(page);
    // Going to the Wishlist page
    await pm.onWishlistPage().chooseASweaterProduct()
    await pm.onWishlistPage().clickOnAHeartButton()
    await pm.onWishlistPage().clickPopUpForSignIn()
    // Sign in page assertion
    await pm.onSignUpPage().getSignInButton()
    // Sing up button 
    await pm.onSignUpPage().getSignUpButton()
    // Radio Button 
    await pm.onSignUpPage().getRadioButton()
    await pm.onSignUpPage().createUser()
    // Creating a new Wishlist and asserting the created list
    await pm.onWishlistPage().chooseASweaterProduct()
    await pm.onWishlistPage().clickOnAddToWishlistProduct()
    // Creating a new wishlist
    await pm.onWishlistPage().ClickOnCreateNewWishlistPopUp()
    await pm.onWishlistPage().nameNewWishlist()
    await pm.onWishlistPage().clickOnCreateNewWishlist()
    // Asserton of the new wishlist
    const newWishListCreation = await pm.onWishlistPage().newListIsCreated()
    await newWishListCreation.click()
    await expect(newWishListCreation).toHaveText('New Wishlist')
    // Assertion of the added product
    const alertDialog = await pm.onWishlistPage().productAddedToast()
    expect(alertDialog).toBeVisible

})
