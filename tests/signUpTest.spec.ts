import {test, expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker';
import { assert } from 'console';
import { signUpPage } from '../page-objects/signUpPage';


test.beforeEach(async({page}) =>{
    await page.goto('https://demo.prestashop.com/#/en/front')
})

// Assertion of the sign in button in iFrames

// test ('Assertion of the Sign In', async ({page}) =>{
//     const signInButton = page.frameLocator('#framelive').locator('#_desktop_user_info').getByText('Sign in')
//     await signInButton.textContent()
//     await expect(signInButton).toContainText('Sign in')
  
// })

test ('User can register with all valid credentials', async({page}) => {

    // Sign In button assertion
    const signIn = await page.frameLocator('#framelive').getByRole('link', {name: 'Sign in'}).first()
    await signIn.click()
    expect(signIn).toBeDefined()
    const signUpButton = await page.frameLocator('#framelive').getByRole('link', {name: 'No account? Create one here'});
    await signUpButton.click()
   
    // Radio button assertion 
    const radioButton = await page.frameLocator('#framelive').getByText('Mrs.').first();
    await radioButton.click();
    const isChecked = await radioButton.isChecked()
    expect(isChecked).toBeTruthy()

    // First name input assertion
    const firstName = await page.frameLocator('#framelive').getByLabel('First name')
    const generatedFirstName = faker.person.firstName()
    await firstName.fill(generatedFirstName)
    const fieldValue = await firstName.inputValue()
    expect(fieldValue).toBe(generatedFirstName)

    // Last name input assertion
    const lastName = await page.frameLocator('#framelive').getByLabel('Last name')
    const generatedLastName = faker.person.lastName() 
    await lastName.fill(generatedLastName)
    const fieldValue1 = await lastName.inputValue()
    expect(fieldValue1).toBe(generatedLastName)

    // Email assertion
    const email = await page.frameLocator('#framelive').getByLabel('Email')
    const generatedEmail = faker.internet.email()
    await email.fill(generatedEmail)
    const emailInput = await email.inputValue()
    expect(emailInput).toBe(generatedEmail)

    // Password assertion
    const password = await page.frameLocator('#framelive').getByLabel('Password input')
    const generatedPassword = faker.internet.password()
    await password.fill(generatedPassword)
    const passwordInput = await password.inputValue()
    expect(passwordInput).toBe(generatedPassword)

    // Birthdate assertion
    const birthday = await page.frameLocator('#framelive').getByPlaceholder('MM/DD/YYYY')
    const generatedBday = faker.date.between('1950/01/01', '2024/05/05').toLocaleDateString('en-US')
    await birthday.fill(generatedBday)
    const birthdayInput = await birthday.inputValue()
    expect(birthdayInput).toBe(generatedBday)

    // Checkboxes
    const checkBox = await page.frameLocator('#framelive').getByText('I agree to the terms and conditions and the privacy policy')
    await checkBox.click()
    const isChecked1 = await checkBox.isChecked()
    expect(isChecked1).toBeTruthy()

    const checkBox1 = await page.frameLocator('#framelive').getByText('Customer data privacy')
    await checkBox1.click()
    const isChecked2 = await checkBox1.isChecked()
    expect(isChecked2).toBeTruthy()

    // Registration
    const saveButton = await page.frameLocator('#framelive').getByRole('button', {name: 'Save'})
    await saveButton.click()
    expect(saveButton).toBeDefined()

    // Inviting a function without assertion
    
    // const pm = new PageManager(page)
    // await pm.onSignUpPage().createUser()
   

}) 


