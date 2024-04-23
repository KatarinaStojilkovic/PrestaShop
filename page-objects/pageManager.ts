import {Page, expect} from '@playwright/test';
import {signUpPage} from '../page-objects/signUpPage'
import { clothesPage } from './clothesPage';


export class PageManager {

private readonly page: Page
private readonly signUpPage: signUpPage
private readonly clothesPage: clothesPage



constructor (page: Page) {
this.page = page
this.signUpPage = new signUpPage(this.page)
this.clothesPage = new clothesPage(this.page)


}
onClothesPage (){
    return this.clothesPage
}

onSignUpPage () {
    return this.signUpPage
}


}