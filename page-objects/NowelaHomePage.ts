import { expect, Locator, Page } from '@playwright/test'

export class HomePage {

readonly page: Page
readonly responsiveLogo: Locator
 

constructor(page:Page) {
    this.page = page
    this.responsiveLogo = page.locator('.logo')
} 

async visit() {

    await this.page.goto("https://nowela.pl")
}

async clickOnLogo() {
    await this.responsiveLogo.click()
}
}
