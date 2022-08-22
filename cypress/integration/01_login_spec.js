import LoginPage from '../support/Pages/Login_Page';
import MainPage from '../support/Pages/Main_Page';

describe('Test login page', () => {
    const login = new LoginPage();
    
    beforeEach(() => {
        cy.fixture('Strings.json').as('strings');
        cy.fixture('Errors.json').as('errors');
        login.navigate();
    });
    
    it('Verify error is displayed if no credentials are entered', function() {
        login.clickLoginButton();
        login.errorMessage().should('contain', this.errors.wrongCredentials);
    });
    
    it('Verify error is displayed if email is in wrong format', function() {
        login.enterUsername(Cypress.env('credentials').invalidEmailFormat);
        login.clickLoginButton();
        login.errorMessage().should('contain', this.errors.wrongCredentials);
    });
    
    it('Verify error is displayed if non-existing email is entered', function() {
        cy.enterCredentials(Cypress.env('credentials').nonExistingEmail, 
                            Cypress.env('credentials').correctPassword);
        login.clickLoginButton();
        login.errorMessage().should('contain', this.errors.wrongCredentials);
    });

    it('Verify error is displayed if wrong password is entered', function() {
        cy.logIn(Cypress.env('credentials').correctEmail, 
                 Cypress.env('credentials').nonExistingPassword)
        login.errorMessage().should('contain', this.errors.wrongCredentials);
    });
    
   it('Verify login with correct credentials', function() {
        cy.logIn(Cypress.env('credentials').correctEmail, 
                 Cypress.env('credentials').correctPassword);
        const main = new MainPage();
                 main.logoutButton().should('be.visible');
    });
});