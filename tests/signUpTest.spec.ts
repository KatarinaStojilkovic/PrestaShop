import {test, expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker';

test.beforeEach(async({page}) =>{
    await page.goto('https://demo.prestashop.com/#/en/front')
})

test ('SignUpPage', async({page}) => {
    
    const pm = new PageManager(page)
    await pm.onSignUpPage()
 

}) 


