import {test, expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker';
import { assert } from 'console';
import { signUpPage } from '../page-objects/signUpPage';
import { clothesPage } from '../page-objects/clothesPage';



test.beforeEach(async({page}) =>{
    await page.goto('https://demo.prestashop.com/#/en/front')
})

test ('Clothes Page', async({page})=> {

    //Asserting the Clothes page and clicking on the clothes page element
    const onClothesPage = page.frameLocator('#framelive').getByRole('link', {name: 'Clothes'}).first()
    await onClothesPage.click()
    await onClothesPage.textContent()
    await expect(onClothesPage).toContainText('Clothes')

    // Scrolling to the element and inputing 
    const scrollToElement = await page.frameLocator('#framelive').getByRole('link', {name: 'Brown bear printed sweater'}).first().click()
    const quantity = await page.frameLocator('#framelive').locator('#quantity_wanted').fill('1200')
    
    const addToCart = await page.frameLocator('#framelive').getByRole('button', {name: 'Add to cart'}).first().click()
    const proceedToCheckout = await page.frameLocator('#framelive').getByRole('link', {name: 'Proceed to checkout'}).first().click()

    //const arrowUp = await page.locator('#framelive').locator('#class="btn btn-touchspin js-touchspin js-increase-product-quantity bootstrap-touchspin-up"').getByRole('button', {name: 'btn btn-touchspin js-touchspin js-increase-product-quantity bootstrap-touchspin-up'}).first().click()
  
    
}
)
