import { Page } from "@playwright/test";
import { faker } from '@faker-js/faker';

export class signUpPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }
    async createUser() {
        // Creating locators in order to make a user input of the valid info
        // Using Faker-js library to create fake name and email in order to sign up for the website
        await this.page.frameLocator('#framelive').getByRole('link', { name: 'Sign in' }).first().click()
        await this.page.frameLocator('#framelive').getByRole('link', { name: 'No account? Create one here' }).click()
        await this.page.frameLocator('#framelive').getByText('Mrs.').first().click()
        await this.page.frameLocator('#framelive').getByLabel('First name').fill(faker.person.firstName())
        await this.page.frameLocator('#framelive').getByLabel('Last name').fill(faker.person.lastName())
        await this.page.frameLocator('#framelive').getByLabel('Email').fill(faker.internet.email())
        await this.page.frameLocator('#framelive').getByLabel('Password input').fill(faker.internet.password())
        await this.page.frameLocator('#framelive').getByPlaceholder('MM/DD/YYYY').fill(faker.date.between('1950/01/01', '2024/05/05').toLocaleDateString('en-US'))
        await this.page.frameLocator('#framelive').getByText('I agree to the terms and conditions and the privacy policy').click()
        await this.page.frameLocator('#framelive').getByText('Customer data privacy').click()
        await this.page.frameLocator('#framelive').getByRole('button', { name: 'Save' }).click()
    }
    // Creating the locators for the assertions that will be called on test page
    async getSignInButton() {
        this.page.frameLocator('#framelive').getByRole('link', { name: 'Sign in' }).first()
    }
    async getSignUpButton() {
        return this.page.frameLocator('#framelive').getByRole('link', { name: 'No account? Create one here' }).first().click()
    }
    async getRadioButton() {
        return this.page.frameLocator('#framelive').getByText('Mrs.').first()
    }
    async getFirstName() {
        return this.page.frameLocator('#framelive').getByLabel('First name')
    }
    async getLastName() {
        return this.page.frameLocator('#framelive').getByLabel('Last name')
    }
    async getEmail() {
        return this.page.frameLocator('#framelive').getByLabel('Email')
    }
    async getPassword() {
        return this.page.frameLocator('#framelive').getByLabel('Password input')
    }
    async getBirthday() {
        return this.page.frameLocator('#framelive').getByPlaceholder('MM/DD/YYYY')
    }
    async getCheckBox() {
        return this.page.frameLocator('#framelive').getByText('I agree to the terms and conditions and the privacy policy')
    }
    async getCheckBox1() {
        return this.page.frameLocator('#framelive').getByText('Customer data privacy')
    }
    async getSaveButton() {
        return this.page.frameLocator('#framelive').getByRole('button', { name: 'Save' }).click()
    }
}