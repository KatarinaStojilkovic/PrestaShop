import { test, expect } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { assert } from 'console'
import { parse } from 'path'

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
    const productPrice = await pm.onCartProductsPage().sweaterPriceDiscount()
    // Console.log to check the product price per 1 item
    console.log('price read', productPrice)
    await pm.onClothesPage().clickOnAddToCartButton()
    await pm.onCartProductsPage().proceedToCheckoutButton()
    await pm.onCartProductsPage().increaseTheProductNumber(4)
    // Assertion of the quantity
    const inputOfTheSweaters = await pm.onCartProductsPage().assertQuantity()
    await expect(inputOfTheSweaters).toHaveValue('5')
    //test.setTimeout(5000)
    const priceMultipliedBy5 = await pm.onCartProductsPage().priceMultipliedBy5()
    // Console.log to check the product price per more items
    console.log('new price', priceMultipliedBy5)
    // Assertion that the product price and the new price are not equal
    expect(productPrice).not.toEqual(priceMultipliedBy5)
    // da se izbrise euro valuta i da se izmesti string u broj i onda da se assertuje sta treba
})

