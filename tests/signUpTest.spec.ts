import {test, expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker';

test.beforeEach(async({page}) =>{
    await page.goto('https://demo.prestashop.com/#/en/front')
})

test ('Assertions of the Sign In', async ({page}) =>{
    const signInButton = page.frameLocator('#framelive').locator('#_desktop_user_info').getByText('Sign in')
    await signInButton.textContent()
    await expect(signInButton).toContainText('Sign in')
  
})

test ('User can register with all valid credentials', async({page}) => {
    
    const pm = new PageManager(page)
    await pm.onSignUpPage().createUser()
 

}) 


