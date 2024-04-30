import { test, expect } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker';

// The page has to open everytime before starting the test since nothing is saved when the page gets reloaded or it takes some time to load
test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.prestashop.com/#/en/front')
})

test('User can register with all valid credentials', async ({ page }) => {

    // Creating a const in order to call up the locators easier and assert the user inputs
    const pm = new PageManager(page)

    // Sign in page assertion
    const signIn = await pm.onSignUpPage().getSignInButton()
    await signIn.click()
    expect(signIn).toBeDefined()

    // Sing up button assertion
    const signUpButton = await pm.onSignUpPage().getSignUpButton()
    await signUpButton.click()

    // Radio Button assertion
    const radioButton = await pm.onSignUpPage().getRadioButton()
    await radioButton.click()
    const isChecked = await radioButton.isChecked()
    expect(isChecked).toBeTruthy()

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
    const isChecked1 = await checkBox.isChecked()
    expect(isChecked1).toBeTruthy()

    // Checkbox assertion
    const checkBox1 = await pm.onSignUpPage().getCheckBox1()
    await checkBox1.click()
    const isChecked2 = await checkBox1.isChecked()
    expect(isChecked2).toBeTruthy()

    // Save button assertion
    const saveButton = await pm.onSignUpPage().getSaveButton()
    await saveButton.click()
    expect(saveButton).toBeDefined()

})