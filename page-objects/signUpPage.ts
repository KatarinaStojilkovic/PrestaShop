import { Page } from "@playwright/test";
import { DateModule, SimpleDateModule, faker } from '@faker-js/faker';
import { sign } from "crypto";


export class signUpPage {

readonly page: Page

    constructor (page: Page){
        this.page = page
    }
    
async createUser (){
   const signIn = await this.page.frameLocator('#framelive').getByRole('link', {name: 'Sign in'}).first().click()
   const signUpButton = await this.page.frameLocator('#framelive').getByRole('link', {name: 'No account? Create one here'}).click()
   const radioButton = await this.page.frameLocator('#framelive').getByText('Mrs.').first().click()
   const firstName = await this.page.frameLocator('#framelive').getByLabel('First name').fill(faker.person.firstName())
   const lastName = await this.page.frameLocator('#framelive').getByLabel('Last name').fill(faker.person.lastName())
   const email = await this.page.frameLocator('#framelive').getByLabel('Email').fill(faker.internet.email())
   const password = await this.page.frameLocator('#framelive').getByLabel('Password input').fill(faker.internet.password())
   const birthday = await this.page.frameLocator('#framelive').getByPlaceholder('MM/DD/YYYY').fill( faker.date.between('1950/01/01', '2024/05/05').toLocaleDateString('en-US'))
   const checkBox = await this.page.frameLocator('#framelive').getByText('I agree to the terms and conditions and the privacy policy').click()
   const checkBox1 = await this.page.frameLocator('#framelive').getByText('Customer data privacy').click()
   const saveButton = await this.page.frameLocator('#framelive').getByRole('button', {name: 'Save'}).click()

}


 
}