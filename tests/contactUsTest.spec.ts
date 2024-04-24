import { test, expect } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'


test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.prestashop.com/#/en/front')
})

test ('Contact Us Form', async ({ page }) => {

    const pm = new PageManager(page)
   await pm.onContactUsPage().getContacUsForm()

    //Asserting the Clothes page and clicking on the clothes page element

    // const clothesPage = await pm.onClothesPage().getClothesPage()
    // await clothesPage.click()
    // await clothesPage.textContent()
    // await expect(clothesPage).toContainText('Clothes')



}
)
