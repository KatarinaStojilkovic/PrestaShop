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
    // Assertion that the option "Webmaster" is selected.
    const webmasterselection = await pm.onContactUsPage().selectWebmasterFromDropDown()
    expect(webmasterselection).toContain('1')
    await pm.onContactUsPage().clickOnContactUsForm()
    // Generate fake email and assert
    const emailInputGenerator = await pm.onContactUsPage().emailInputLocator()
    const generatedEmail = faker.internet.email()
    await emailInputGenerator.fill(generatedEmail)
    const fieldValue = await emailInputGenerator.inputValue()
    expect(fieldValue).toBe(generatedEmail)
    // Assertion that the text in the Message box is typed.
    const messageBoxText = page.frameLocator('#framelive').getByPlaceholder('How can we help?')
    await messageBoxText.fill('Do you have any new upcoming products?')
    expect(messageBoxText).toBeVisible()
    await pm.onContactUsPage().clickOnSendButton()
    // Assertion that the user is still not signed in.
    expect(userIsNotSignedIn).toContain('Sign in')
    // Assertion that the message is sent.
    const messageIsSent = await pm.onContactUsPage().dialogBoxSentMessage()
    await expect(messageIsSent).toContainText('Your message has been successfully sent to our team.')
}
)
