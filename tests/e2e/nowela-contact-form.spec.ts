

import { test, expect } from '@playwright/test'
import { ContactForm } from '@page-objects/NowelaContactForm'
import { HomePage } from '@page-objects/NowelaHomePage'

test.describe("Contact Form", () => {
	let contactForm: ContactForm
	let homePage: HomePage

test.beforeEach(async ({page}) => {
	contactForm = new ContactForm(page)
	homePage = new HomePage(page)

	await homePage.visit()
})
	
test("Open contact form page", async ({page}) => {

	await contactForm.openContactForm()

	await contactForm.assertContactFormUrl()
})


test.skip("Submit contact form", async ({page}) => {

	await contactForm.openContactForm()
	await contactForm.fillContactForm("Jan Kowalski", "kasimos211@youke1.com", "Wiadomosc testowa raz dwa trzy.")
	await contactForm.selectSubject()
	await contactForm.submitContactForm()

	await contactForm.assertSuccessMessage()
})

test("Empty contact form", async ({page}) => {

	await contactForm.openContactForm()
	await contactForm.fillContactForm("","","")
	await contactForm.selectSubject()
	await contactForm.submitContactForm()

	await contactForm.assertContactFormErrorMessage()
})

})
