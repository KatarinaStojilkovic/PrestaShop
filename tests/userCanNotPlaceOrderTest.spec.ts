import { test, expect } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker';

// The page has to open everytime before starting the test since nothing is saved when the page gets reloaded or it takes some time to load
test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.prestashop.com/#/en/front')
})
test('User can not order a product when signed in', async ({ page }) => {
    // Creating a const in order to call up the locators easier and assertion of the user inputs
    const pm = new PageManager(page);

    // Sign in page assertion
    await pm.onSignUpPage().getSignInButton()
    // Sing up button 
    await pm.onSignUpPage().getSignUpButton()
    // Radio Button 
    await pm.onSignUpPage().getRadioButton()
    // First Name assertion
    const firstName = await pm.onSignUpPage().getFirstName()
    const generatedFirstName = faker.person.firstName()
    await firstName.fill(generatedFirstName)
    const fieldValue = await firstName.inputValue()
    expect(fieldValue).toBe(generatedFirstName)
    // Last Name assertion
    const lastName = await pm.onSignUpPage().getLastName()
    const generatedLastName = faker.person.lastName()
    await lastName.fill(generatedLastName)
    const fieldValue1 = await lastName.inputValue()
    expect(fieldValue1).toBe(generatedLastName)
    // Email assertion
    const email = await pm.onSignUpPage().getEmail()
    const generatedEmail = faker.internet.email()
    await email.fill(generatedEmail)
    const emailInput = await email.inputValue()
    expect(emailInput).toBe(generatedEmail)
    // Password assertion
    const password = await pm.onSignUpPage().getPassword()
    const generatedPassword = faker.internet.password()
    await password.fill(generatedPassword)
    const passwordInput = await password.inputValue()
    expect(passwordInput).toBe(generatedPassword)
    // Birthday 
    const birthday = await pm.onSignUpPage().getBirthday()
    const generatedBday = faker.date.between('1950/01/01', '2024/05/05').toLocaleDateString('en-US')
    await birthday.fill(generatedBday)
    const birthdayInput = await birthday.inputValue()
    expect(birthdayInput).toBe(generatedBday)
    // Checkbox 
    await (await pm.onSignUpPage().getCheckBox()).check()
    await (await pm.onSignUpPage().getCheckBox1()).check()
    // Save button 
    await pm.onSignUpPage().getSaveButton()
    await pm.onOrderingPage().clickOnSweaterProduct()
    // Input of the number in field and assertion of the input data
    await pm.onOrderingPage().clickOnAddToCartButton()
    // Proceeding to Checkout
    await pm.onOrderingPage().clickOnProceedToCheckout()
    await pm.onOrderingPage().blueBoxCheckout()
    expect('Proceed to checkout').toContain('Proceed to checkout')
    await pm.onOrderingPage().inputAddress()
    await pm.onOrderingPage().inputCityName()
    await pm.onOrderingPage().countryDropDown()
    // Assertion of the country
    await pm.onOrderingPage().chooseCountryFromDropDown()
    expect('Arizona').toContain('Arizona')
    await pm.onOrderingPage().zipCodeInput()
    await pm.onOrderingPage().blueContinueButton()
    // Click on blue continue button
    await pm.onOrderingPage().shippingMethodContinueButton()
    // Clicking on the Payment Checkbox
    await pm.onOrderingPage().paymentCheckbox()
    // Assertion of the Place Order button
    const placeOrderBlueBox = await pm.onOrderingPage().placeOrderButton()
    await expect(placeOrderBlueBox).toBeHidden()
})