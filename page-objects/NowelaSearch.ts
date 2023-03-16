import { expect, Locator, Page } from '@playwright/test'

export class SearchBox {

    readonly page: Page
    readonly inputSearchBox: Locator 
    readonly productList: Locator
    readonly searchCounter: Locator


constructor(page:Page) {
    this.page = page
    this.inputSearchBox = page.locator('input[name="search_query"]')
    this.productList = page.locator('.product_list')
    this.searchCounter = page.locator('.heading-counter')
} 

async fillSearchBox(query: string) {

    await this.inputSearchBox.type(query)
    await this.page.keyboard.press('Enter')
}

async assertProductCount() {
    await expect(this.productList).toHaveCount(1)
}

async assertSearchCounter() {
    await expect(this.searchCounter).toContainText('znaleziono 0 rezultatów.')

}
}
