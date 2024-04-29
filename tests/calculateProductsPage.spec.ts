import { test, expect } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'

// The page has to open everytime before starting the test since nothing is saved when the page gets reloaded or it takes some time to load
test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.prestashop.com/#/en/front')
})
test('Total calculation of the products in the shopping cart', async ({ page }) => {
    // Creating a const in order to call up the locators easier and assert the user inputs
    const pm = new PageManager(page)
    await pm.onClothesPage().clickOnClothesMenu()
    await pm.onClothesPage().hummingbirdPrintedSweater()
    // Assertion of the price per 1 Hummingbird Sweater
    const productPrice = await pm.onCartProductsPage().sweaterPrice()
    expect(productPrice).toHaveText('€34.46')
    await pm.onClothesPage().clickOnAddToCartButton()
    await pm.onCartProductsPage().proceedToCheckoutButton()
    await pm.onCartProductsPage().increaseTheProductNumber()
    // Assertion of the quantity
    await pm.onCartProductsPage().assertQuantity()
    const value = (5)
    expect(value).toEqual(5)
})

