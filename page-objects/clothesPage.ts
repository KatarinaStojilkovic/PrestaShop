import { Page } from "@playwright/test";
import { faker } from '@faker-js/faker';


export class clothesPage {

    readonly page: Page

        constructor (page: Page){
            this.page = page
        }

    async onClothesPage (){
        await this.page.frameLocator('#framelive').getByRole('link', {name: 'Clothes'}).first().click()

    }
    // async scrollToShirt (){
    // const scrollToElement = this.page.frameLocator('#framelive').getByRole('link', {name: 'Brown bear printed sweater'})
    // await scrollToElement.scrollIntoViewIfNeeded();
    // }

}