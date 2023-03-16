
import { test, expect } from '@playwright/test'
import { LoginPage } from '@page-objects/NowelaLoginPage'
import { HomePage } from '@page-objects/NowelaHomePage'

test.describe("Login and Logout", () => {
	let loginPage: LoginPage 
	let homePage: HomePage
	
test.beforeEach(async ({page}) => {
	loginPage = new LoginPage(page)
	homePage = new HomePage(page)

	await homePage.visit()
})

	const userEmailInvalid = "invalid@example.com"
	const userEmailValid = "fokate8648@wifame.com"
	const userPasswordInvalid = "invalidpassword"
	const userPasswordValid = "HasloTestowe1!"



test("Negative scenario invalid email and invalid password", async ({page}) => {

	await loginPage.login(userEmailInvalid,userPasswordInvalid)
	await loginPage.assertLoginErrorMessage()
})


test("Negative scenario valid email and invalid password", async ({page}) => {

	await loginPage.login(userEmailValid,userPasswordInvalid)
	await loginPage.assertLoginErrorMessage()
})


test("Negative scenario invalid email and valid password", async ({page}) => {

	await loginPage.login(userEmailInvalid,userPasswordValid)
	await loginPage.assertLoginErrorMessage()
})

 
test("Negative scenario empty email and empty password", async ({page}) => {

	await loginPage.login("", "")
	await loginPage.assertEmptyLoginErrorMessage()
})


test("Positive scenario", async ({page}) => {

	await loginPage.login(userEmailValid,userPasswordValid)
	await loginPage.assertAccountTab()
	await loginPage.logout()
	await loginPage.assertLogoutUrl()
})
})
