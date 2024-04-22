import { Page } from "@playwright/test";
import { DateModule, SimpleDateModule, faker } from '@faker-js/faker';


export class signUpPage {

readonly page: Page

    constructor (page: Page){
        this.page = page
    }

async createUser (){
    await this.page.frameLocator('#framelive').getByRole('link', {name: 'Sign in'}).first().click()
    await this.page.frameLocator('#framelive').getByRole('link', {name: 'No account? Create one here'}).click()
    await this.page.frameLocator('#framelive').getByText('Mrs.').first().click()
    await this.page.frameLocator('#framelive').getByLabel('First name').fill(faker.person.firstName())
    await this.page.frameLocator('#framelive').getByLabel('Last name').fill(faker.person.lastName())
    await this.page.frameLocator('#framelive').getByLabel('Email').fill(faker.internet.email())
    await this.page.frameLocator('#framelive').getByLabel('Password input').fill(faker.internet.password())
    await this.page.frameLocator('#framelive').getByPlaceholder('MM/DD/YYYY').fill( faker.date.between('1950/01/01', '2024/05/05').toLocaleDateString('en-US'))
    await this.page.frameLocator('#framelive').getByText('I agree to the terms and conditions and the privacy policy').click()
    await this.page.frameLocator('#framelive').getByText('Customer data privacy').click()
    await this.page.frameLocator('#framelive').getByRole('button', {name: 'Save'}).click()
    }

 

}