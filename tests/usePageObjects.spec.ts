import {test, expect} from '@playwright/test'
import {NavigationPage} from '../page-objects/navigationPage'
import { PageManager } from '../page-objects/pageManager'
import {signInPage} from '../page-objects/signInPage'
import {signUpPage} from '../page-objects/signUpPage'
import {artPage} from '../page-objects/artPage'
import {accessoriesPage} from '../page-objects/accessoriesPage'
import {clothesPage} from '../page-objects/clothesPage'


 test.beforeEach(async({page}) =>{
await page.goto('https://demo.prestashop.com/#/en/front')
})

