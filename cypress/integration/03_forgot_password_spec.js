import PasswordResetPage from '../support/Pages/PasswordReset_Page';
import LoginPage from '../support/Pages/Login_Page';

describe ('Test password reset page', () => {

    const forgot = new PasswordResetPage();
    const login = new LoginPage();

    beforeEach(() => {
        cy.fixture('Strings.json').as('strings');
        cy.fixture('Errors.json').as('errors');
        forgot.navigate();
    });

    it('Verify error is displayed if no credentials are entered', function() {
        forgot.clickResetButton();
        forgot.errorPin().should('contain', this.errors.emailMissing);
    });

    it('Reset password', function() {
        forgot.enterEmail(Cypress.env('credentials').correctEmail);
        forgot.clickResetButton();
        login.passwordResetConfirmation().should('contain', this.strings.passwordResetSuccess);
    });
});