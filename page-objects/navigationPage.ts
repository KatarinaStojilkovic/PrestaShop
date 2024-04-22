import { Page } from "@playwright/test";
import {HelperBase} from './helperBase';

export class NavigationPage extends HelperBase {

readonly page: Page
// readonly signInPage: Locator
// readonly
//readonly

constructor (page: Page){
    super (page)
}

// async signInPage(){
// const frame = this.page.frameLocator('#framelive').getByRole('link', {name: 'Sign in'}).first().click()
// await this.page.frameLocator('#framelive').getByRole('link', {name: 'Sign in'}).first().click()
// }


}
