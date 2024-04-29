import { test, expect } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker';

// The page has to open everytime before starting the test since nothing is saved when the page gets reloaded or it takes some time to load
// Create the user before adding the product to cart.
test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.prestashop.com/#/en/front')
    const createUser = new PageManager(page)
    await createUser.onSignUpPage().createUser()
})
test('User can not order a product when signed in', async ({ page }) => {
    // Creating a const in order to call up the locators easier and assertion of the user inputs
    const pm = new PageManager(page);
    await pm.onOrderingPage().clickOnSweaterProduct()
    // Input of the number in field and assertion of the input data
    await pm.onOrderingPage().clickOnAddToCartButton()
    // Proceeding to Checkout
    await pm.onOrderingPage().clickOnProceedToCheckout()
    await pm.onOrderingPage().clickOnBlueBoxCheckout()
    await pm.onOrderingPage().inputAddress()
    await pm.onOrderingPage().inputCityName()
    await pm.onOrderingPage().countryDropDown()
    // Assertion of the country (Chosen country should be Arizona)
    const chooseCountryDropDown = await pm.onOrderingPage().chooseCountryFromDropDown()
    expect(chooseCountryDropDown).toContain('6')
    await pm.onOrderingPage().zipCodeInput()
    await pm.onOrderingPage().clickOnBlueContinueButton()
    // Click on blue continue button
    await pm.onOrderingPage().clickOnShippingMethodContinueButton()
    // Clicking on the Payment Checkbox
    await pm.onOrderingPage().checkThePaymentCheckbox()
    // Assertion of the Place Order button
    const placeOrderBlueBox = await pm.onOrderingPage().placeOrderButton()
    await expect(placeOrderBlueBox).toBeHidden()
})