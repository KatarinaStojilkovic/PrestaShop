import { Page } from "@playwright/test";
import {HelperBase} from './helperBase';

export class NavigationPage extends HelperBase {

readonly page: Page

constructor (page: Page){
    super (page)
}

}
