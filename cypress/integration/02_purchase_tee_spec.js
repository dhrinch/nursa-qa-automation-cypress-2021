import MainPage from '../support/Pages/Main_Page';
import CategoryPage from '../support/Pages/Category_Page';
import ProductPage from '../support/Pages/Product_Page';
import CartPage from '../support/Pages/Cart_Page';

describe('Test buying product', () => {
    const main = new MainPage();
    const category = new CategoryPage();
    const product = new ProductPage();
    const cart = new CartPage();
    
    beforeEach(() => {
        cy.fixture('Strings.json').as('strings');
    });
    
    it('Access t-shirts category', function() {
        main.navigate();
        main.selectMenTees();
        cy.url().should('eq',Cypress.config().baseUrl + this.strings.categoryMenTShirtAddress);
    });

    it('Select Grey Raglan Tee', function() {
        category.navigate(this.strings.categoryMenTShirtAddress);
        category.selectClothingItem(this.strings.raglanTee);
        cy.wait(500);
        product.productName().should('contain', this.strings.raglanTee);
    })

    it('Add Grey Raglan Tee to cart', function() {
        product.navigate(this.strings.productMenGreyRaglanTeeAddress);
        product.addToCart();
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