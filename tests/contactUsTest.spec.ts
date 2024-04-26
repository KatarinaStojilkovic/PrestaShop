import { expect, test } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.prestashop.com/#/en/front')
})
test('Contact Us Form', async ({ page }) => {
    // Creating a const for Page manager in order to call up the pages easier.
    const pm = new PageManager(page)
    const userIsNotSignedIn = 'Sign in' 
    await pm.onContactUsPage().signInLocator()
    // Assertion that the user is not signed in.
    expect(userIsNotSignedIn).toContain('Sign in')
    await pm.onContactUsPage().clickOnContactUsForm()
    await pm.onContactUsPage().clickOnSubjectFromDropDown()
    await pm.onContactUsPage().webmasterFromDropDown()
    // Assertion that the option "Webmaster" is selected.
    const webmasterSelection = 'Webmaster'
    await pm.onContactUsPage().clickOnContactUsForm()
    expect(webmasterSelection).toContain('Webmaster')
    // Generate fake email.
    const emailInputGenerator = await pm.onContactUsPage().emailInputLocator()
    const generatedEmail = faker.internet.email()
    // Assertion that the email is generated.
    await emailInputGenerator.fill(generatedEmail)
    const fieldValue = await emailInputGenerator.inputValue()
    expect(fieldValue).toBe(generatedEmail)
    // Assertion that the text in the Message box is typed.
    await pm.onContactUsPage().messageBoxInput()
    const messageBoxText = 'Do you have any new upcoming products?'
    expect(messageBoxText).toContain('Do you have any new upcoming products?')
    await pm.onContactUsPage().clickOnSendButton()
    // Assertion that the user is still not signed in.
    expect(userIsNotSignedIn).toContain('Sign in')
    // Assertion that the message is sent.
    const messageIsSent = await pm.onContactUsPage().messageSentGreenBox()
    await expect(messageIsSent).toHaveText('Your message has been successfully sent to our team.')
}
)
