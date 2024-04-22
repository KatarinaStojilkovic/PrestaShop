import {test, expect} from '@playwright/test'
import {NavigationPage} from '../page-objects/navigationPage'
import { PageManager } from '../page-objects/pageManager'

test.beforeEach(async({page}) =>{
await page.goto('https://demo.prestashop.com/#/en/front')
})

// test('has title', async ({page}) => {
//     await page.goto('https://demo.prestashop.com/#/en/front');
// })


test ('Sign In', async({page}) => {
    //await page.waitForURL('https://demo.prestashop.com/#/en/front')
    await page.waitForTimeout(5000)
    //await page.getByRole('link', {name: 'Sign in'}).click()
    const frame = await page.frameLocator('#framelive').getByRole('link', {name: 'Sign in'}).first().click()
    })

