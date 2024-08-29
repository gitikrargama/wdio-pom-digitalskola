
describe('Test Saucedemo', () => {
    it('Test 1 - Login Successfully', async () => {
        await browser.pause(3000)
        await browser.url("https://www.saucedemo.com/")
        
        const usernameTextbox = await browser.$("#user-name")
        const passwordTextbox = await browser.$("#password")
        const loginButton = await browser.$('//input[@type="submit"]')

        await usernameTextbox.addValue("standard_user")
        await passwordTextbox.addValue("secret_sauce")
        await loginButton.click()

        await browser.pause(3000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(browser).toHaveTitle('Swag Labs')
        
    });
    it('Test 2 - Add Item To Chart Successfully', async () => {
        
    const firstItemAddToCartButton = await $('button.btn_inventory');
    await firstItemAddToCartButton.click();

    const cartBadge = await $('.shopping_cart_badge');
    await expect(cartBadge).toBeDisplayed();
    await expect(cartBadge).toHaveText('1');
    await browser.pause(3000)

    const cartLink = await $('.shopping_cart_link');
    await cartLink.click();
    await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');

    const cartItem = await $('.cart_item .inventory_item_name');
    await expect(cartItem).toHaveText('Sauce Labs Backpack'); 
    await browser.pause(3000)
    });
});