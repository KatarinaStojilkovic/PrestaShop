import { chromium, expect, test } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.prestashop.com/#/en/front')
})
test('Contact Us Form', async ({ page }) => {
    const pm = new PageManager(page)
    const userIsNotSignedIn = await pm.onContactUsPage().userNotSignedIn()
    expect(userIsNotSignedIn).toBeDefined()
    await pm.onContactUsPage().clickOnContactUsForm()
    await pm.onContactUsPage().clickOnSubjectFromDropDown()
    await pm.onContactUsPage().clickOnWebmasterInDropDown()
    await pm.onContactUsPage().clickOnContactUsForm()
    expect('Webmaster').toEqual('Webmaster')
    const emailInputGenerator = await pm.onContactUsPage().emailInput()
    const generatedEmail = faker.internet.email()
    await emailInputGenerator.fill(generatedEmail)
    const fieldValue = await emailInputGenerator.inputValue()
    expect(fieldValue).toBe(generatedEmail)
    await pm.onContactUsPage().subjectMessage()
    const sendButtonClick = await pm.onContactUsPage().sendButton()
    expect(sendButtonClick).toBeDefined()
    expect(userIsNotSignedIn).toBeDefined()
}
)
