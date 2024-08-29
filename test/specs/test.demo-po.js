import CartPage from "../pageobjects/cart page";
import HomePage from "../pageobjects/home page";
import LoginPage from "../pageobjects/login.page";


describe('Test', () => {
    it('Test 3 - Successfull Login - Page Object Based', async () => {
        await LoginPage.open()

        await browser.pause(2000)

        await LoginPage.login("standard_user", "secret_sauce")

        await browser.pause(2000)

        await HomePage.validateOnHomePage()
    });
    it('Test 4 - Add Item To Cart - Page Object Based', async () => {
        await HomePage.addItemToCart()

        await browser.pause(2000)

        await HomePage.cartIcon.click()
        await CartPage.validateOnCartPage()
        
        await browser.pause(2000)
    });
});