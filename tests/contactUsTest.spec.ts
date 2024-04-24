import { test, expect } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'


test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.prestashop.com/#/en/front')
})

test ('Contact Us Form', async ({ page }) => {
const pm = new PageManager(page)
await pm.onContactUsPage().clickOnContactUsForm()

}
)
