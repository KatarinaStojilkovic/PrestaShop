import {test, expect} from '@playwright/test'
import {NavigationPage} from '../page-objects/navigationPage'
import { PageManager } from '../page-objects/pageManager'


test.only('has title', async ({page}) => {
    await page.goto('https://demo.prestashop.com/#/en/front');
})

 test.beforeEach(async({page}) =>{
await page.goto('https://demo.prestashop.com/#/en/front')
})

