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
    await pm.onWishlistPage().chooseAnyProduct()
    await pm.onWishlistPage().clickOnAHeartButton()
    await pm.onWishlistPage().clickPopUpForSignIn()
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
    // Creating a new Wishlist and asserting the created list
    await pm.onWishlistPage().chooseAnyProduct()
    await pm.onWishlistPage().addToWishlistProduct()
    await pm.onWishlistPage().createNewWishlistPopUp()
    // Assertion of the creating a new wishlist
    expect('Create wishlist').toContain('Create wishlist')
    await pm.onWishlistPage().nameNewWishlist()
    await pm.onWishlistPage().createNewWishlist()
    await pm.onWishlistPage().newListCreated()
    // Asserton of the new wishlist
    expect('New Wishlist').toContain('New Wishlist')
    // Assertion of the added product
    const alertDialog = await pm.onWishlistPage().productAddedToast()
    expect(alertDialog).toBeVisible

})
