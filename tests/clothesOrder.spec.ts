import {test, expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker';
import { assert } from 'console';
import { signUpPage } from '../page-objects/signUpPage';
import { sign } from 'crypto';
import { clothesPage } from '../page-objects/clothesPage';
import exp from 'constants';


test.beforeEach(async({page}) =>{
    await page.goto('https://demo.prestashop.com/#/en/front')
})

test ('Clothes Page', async ({page}) => {

    const onClothesPage = await page.frameLocator('#framelive').getByRole('link', {name: 'Clothes'}).first()
    await onClothesPage.click()
    await onClothesPage.textContent()
    await expect(onClothesPage).toContainText('Clothes')
    await page.mouse.down(25)

})
