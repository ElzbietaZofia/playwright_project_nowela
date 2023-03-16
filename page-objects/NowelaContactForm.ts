import { expect, Locator, Page } from '@playwright/test'

export class ContactForm {

    readonly page: Page
	readonly contactTab: Locator 
    readonly inputFormName: Locator 
	readonly inputFormMail: Locator
	readonly inputFormMessage: Locator
	readonly dropdownSubject: Locator
	readonly submitFormButton: Locator
    readonly successMessage: Locator
    readonly errorMessage: Locator
   
    

constructor(page: Page) {
    this.page = page
    this.contactTab = page.locator("#header > div.menu-container > div > div > nav > div > div > div > div > ul > li:nth-child(7) > a > span")
    this.inputFormName = page.locator('#name')
    this.inputFormMail = page.locator('input[name="from"]')
    this.inputFormMessage = page.locator('#message')
    this.dropdownSubject = page.locator('#id_contact')
    this.submitFormButton = page.locator('#submitMessage')
    this.successMessage = page.locator('.alert-success')
    this.errorMessage = page.locator('.alert-danger li')
   
}

async openContactForm() {
    await this.contactTab.click()
}

async fillContactForm(name: string, email: string, message: string)
{
    await this.inputFormName.type(name)
    await this.inputFormMail.type(email)
    await this.inputFormMessage.type(message)
}

async selectSubject() {
    await this.dropdownSubject.click()
    await this.dropdownSubject.selectOption({label: "Dział IT"})
}

async submitContactForm() {
    await this.submitFormButton.click()
}

async assertContactFormUrl() {
    await expect(this.page).toHaveURL('https://nowela.pl/kontakt')
}

async assertSuccessMessage() {
    await expect(this.successMessage).toContainText('Twoja wiadomość została pomyślnie wysłana do Działu Obsługi Klienta.')
}

async assertContactFormErrorMessage() {
    await expect(this.errorMessage).toContainText('Nieprawidłowy adres e-mail')
}
}