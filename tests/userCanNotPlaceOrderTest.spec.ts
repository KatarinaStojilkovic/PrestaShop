import { test, expect } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker';
import exp from 'constants';

// The page has to open everytime before starting the test since nothing is saved when the page gets reloaded or it takes some time to load
test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.prestashop.com/#/en/front')
})
test('User can not place order after signing in', async ({ page }) => {
    // Creating a const in order to call up the locators easier and assert the user inputs
    // Sign in page assertion
    const pm = new PageManager(page)
    const signIn = await pm.onSignUpPage().getSignInButton()
    await signIn.click()
    expect(signIn).toBeVisible()
    // Sing up button 
    const signUpButton = await pm.onSignUpPage().getSignUpButton()
    await signUpButton.click()
    await expect(signUpButton).toBeVisible()
    // Radio Button assertion
    const radioButton = await pm.onSignUpPage().getRadioButton()
    await radioButton.click()
    const isChecked = 'Mrs'
    await radioButton.isChecked()
    expect(isChecked).toMatch('Mrs')
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
    // Birthday assertion
    const birthday = await pm.onSignUpPage().getBirthday()
    const generatedBday = faker.date.between('1950/01/01', '2024/05/05').toLocaleDateString('en-US')
    await birthday.fill(generatedBday)
    const birthdayInput = await birthday.inputValue()
    expect(birthdayInput).toBe(generatedBday)
    // Checkbox assertion
    const checkBox = await pm.onSignUpPage().getCheckBox()
    await checkBox.click()
    const isChecked1 = 'I agree to the terms and conditions and the privacy policy'
    await checkBox.isChecked()
    expect(isChecked1).toContain('I agree to the terms and conditions and the privacy policy')
    // Checkbox assertion
    const checkBox1 = await pm.onSignUpPage().getCheckBox1()
    await checkBox1.click()
    const isChecked2 = 'Customer data privacy'
    await checkBox1.isChecked()
    expect(isChecked2).toContain('Customer data privacy')
    // Save button assertion
    const saveButton = await pm.onSignUpPage().getSaveButton()
    await saveButton.click()
    expect(saveButton).toBeInViewport()
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
    expect('Arizona').toMatch('Arizona')
    await pm.onOrderingPage().zipCodeInput()
    await pm.onOrderingPage().blueContinueButton()
    // Assertion of the blue continue button
    await pm.onOrderingPage().shippingMethodContinueButton()
    expect('Continue').toContain('Continue')
    // Assertion of the Payment Checkbox
    await pm.onOrderingPage().paymentCheckbox()
    const paymentCheckboxAssert = 'I agree to the terms of service and will adhere to them unconditionally.'
    expect(paymentCheckboxAssert).toContain('I agree to the terms of service and will adhere to them unconditionally.')
    // Assertion of the Place Order button
    await pm.onOrderingPage().placeOrderButton()
    expect('Place order').toMatch('Place order')
})