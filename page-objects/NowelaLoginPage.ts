import { expect, Locator, Page } from '@playwright/test'

export class LoginPage {

    readonly page: Page
    readonly loginButton: Locator
    readonly inputEmail: Locator
    readonly inputPassword: Locator
    readonly submitLogin: Locator
    readonly loginErrorMessage: Locator
    readonly signoutButton: Locator
    readonly accountTab: Locator


constructor(page: Page) {
    this.page = page
    this.loginButton = page.locator('#x13loginButton')
    this.inputEmail = page.locator('#x13_email')
    this.inputPassword = page.locator('#x13_passwd')
    this.submitLogin = page.locator('#x13SubmitLogin')
    this.loginErrorMessage = page.locator('.alert-danger li')
    this.signoutButton = page.locator('.icon-sign-out')
    this.accountTab = page.locator('.cat-name')
} 


async login(username: string, password: string) {
    await this.loginButton.click()
    await this.inputEmail.type(username)
    await this.inputPassword.type(password)
    await this.submitLogin.click()
      }

async logout() {
    await this.loginButton.click()
    await this.signoutButton.click()
}

async assertLoginErrorMessage() {
    await expect(this.loginErrorMessage).toContainText('Błąd autentykacji')
}

async assertEmptyLoginErrorMessage() {
    await expect(this.loginErrorMessage).toContainText('Wymagany adres e-mail')
}

async assertAccountTab() {
    await expect(this.accountTab).toContainText('Moje konto')
}

async assertLogoutUrl() {
    await expect(this.page).toHaveURL('https://nowela.pl/logowanie?back=my-account')
}
}
