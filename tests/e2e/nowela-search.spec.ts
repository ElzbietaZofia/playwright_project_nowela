import { test, expect } from '@playwright/test'
import { SearchBox } from '@page-objects/NowelaSearch'
import { HomePage } from '@page-objects/NowelaHomePage'


test.describe("Search results", () => {
    let searchBox: SearchBox
	let homePage: HomePage


test.beforeEach(async ({page}) => {
    searchBox = new SearchBox(page)
	homePage = new HomePage(page)

	await homePage.visit()
})

test("Search results", async ({page}) => {

	await searchBox.fillSearchBox("rumuński")

	await searchBox.assertProductCount()
})

test("Empty search box", async ({page}) => {

	await searchBox.fillSearchBox("")

	await searchBox.assertSearchCounter()
})


})