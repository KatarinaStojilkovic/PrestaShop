import {Page, expect} from '@playwright/test';
import {signUpPage} from '../page-objects/signUpPage'


export class PageManager {

private readonly page: Page
private readonly signUpPage: signUpPage
   



constructor (page: Page) {
this.page = page
this.signUpPage = new signUpPage(this.page)


}


onSignUpPage () {
    return this.signUpPage
}

}