import { chromium, expect, test } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.prestashop.com/#/en/front')
})
test('Contact Us Form', async ({ page }) => {
    // Creating a const for Page manager in order to call up the pages easier.
    const pm = new PageManager(page)
    const userIsNotSignedIn = await pm.onContactUsPage().userNotSignedIn()
    // Assertion that the user is not signed in.
    expect(userIsNotSignedIn).toBeDefined()
    await pm.onContactUsPage().clickOnContactUsForm()
    await pm.onContactUsPage().clickOnSubjectFromDropDown()
    await pm.onContactUsPage().clickOnWebmasterInDropDown()
    await pm.onContactUsPage().clickOnContactUsForm()
    // Assertion that the option "Webmaster" is selected.
    expect('Webmaster').toEqual('Webmaster')
    const emailInputGenerator = await pm.onContactUsPage().emailInput()
    const generatedEmail = faker.internet.email()
    // Assertion that the email is generated.
    await emailInputGenerator.fill(generatedEmail)
    const fieldValue = await emailInputGenerator.inputValue()
    expect(fieldValue).toBe(generatedEmail)
    // Assertion that the subject text is typed.
    await pm.onContactUsPage().subjectMessage()
    const sendButtonClick = await pm.onContactUsPage().sendButton()
    expect(sendButtonClick).toBeDefined()
    // Assertion that the user is still not signed in.
    expect(userIsNotSignedIn).toBeDefined()
}
)
