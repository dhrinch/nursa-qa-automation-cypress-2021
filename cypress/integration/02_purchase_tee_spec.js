import MainPage from '../support/Pages/Main_Page';
import CategoryPage from '../support/Pages/Category_Page';
import ProductPage from '../support/Pages/Product_Page';
import CartPage from '../support/Pages/Cart_Page';

describe('Test buying product', () => {
    
    beforeEach(() => {
        cy.fixture('Strings.json').as('strings');
    });
    
    it('Test accessing t-shirts category', function() {
        const main = new MainPage();
        main.navigate();
        main.selectMenTees();
        cy.url().should('eq',Cypress.config().baseUrl + this.strings.categoryMenTShirtAddress);
    });

    it('Test selecting Grey Raglan Tee', function() {
        const category = new CategoryPage();
        category.navigate(this.strings.categoryMenTShirtAddress);
        category.selectClothingItem(this.strings.raglanTee);
        cy.wait(500);
        const product = new ProductPage();
        product.productName().should('contain', this.strings.raglanTee);
    })

    it('test purchasing Grey Raglan Tee', function() {
        const product = new ProductPage();
        product.navigate(this.strings.productMenGreyRaglanTeeAddress);
        product.addToCart();
        const cart = new CartPage();
        cart.productName().should('contain', this.strings.raglanTee);
        cart.checkoutClick();
        cart.checkoutFillDetails(this.strings.email,
                                 this.strings.name,
                                 this.strings.lastName,
                                 this.strings.streetAddress,
                                 this.strings.city,
                                 this.strings.country,
                                 this.strings.zip);
        cart.clickNextButton();
        cart.clickNextButton();
        cart.clickPlaceOrder();
        cart.successNotification().should('be.visible');
    })
});