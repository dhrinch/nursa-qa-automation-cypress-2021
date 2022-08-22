import MainPage from '../support/Pages/Main_Page';
import ProductPage from '../support/Pages/Product_Page';

describe('Test Search Functionality', () => {
    const main = new MainPage();
    
    beforeEach(() => {
        cy.fixture('Strings.json').as('strings');
        cy.fixture('Errors.json').as('errors');
        main.navigate();
    });
    
    it('Access t-shirts category', function() {
        main.clickCategoryDropdownTees();
        cy.get('main.categoryDropdownTees()> :nth-child(0)');
        cy.url().should('eq',Cypress.config().baseUrl + '/taxons/t-shirts/men');
    });
});