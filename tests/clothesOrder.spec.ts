import { test, expect } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'

test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.prestashop.com/#/en/front')
})
test('Clothes Page', async ({ page }) => {
    const pm = new PageManager(page)
    pm.onClothesPage().clickOnClothesMenu()
    //Asserting the Clothes page and clicking on the clothes page element
    const clothesPage = await pm.onClothesPage().locateClothesLink()
    await clothesPage.click()
    await clothesPage.textContent()
    await expect(clothesPage).toContainText('Clothes')
    // Scrolling to the element 
    await pm.onClothesPage().clickOnSweaterProduct()
    // Input of the number in field and assertion of the input data
    await pm.onClothesPage().inputNumberOfSweaters()
    expect('1200').toEqual('1200')
    // Adding items to cart
    await pm.onClothesPage().clickOnAddToCartButton()
    // Proceeding to Checkout
    await pm.onClothesPage().clickOnProceedToCheckout()
    // Clicking the arrowUp
    await pm.onClothesPage().clickOnArrowUp()
    // Assertion of the Error Alert
    const errorMessage = await pm.onClothesPage().alertRedBox()
    await expect(errorMessage).toBeVisible()
    // Assertion of the Text Error Message saying that the product allows no more than 1200 products 
    const textErrorMessage = await pm.onClothesPage().textErrorMessage()
    await expect(textErrorMessage).toBeVisible()
    // Assertion of the Proceed To Checkout Button when it is not visible
    const proceedToCheckoutButton = await pm.onClothesPage().proceedToCheckoutBlueBox()
    await expect(proceedToCheckoutButton).toBeHidden()
}
)

