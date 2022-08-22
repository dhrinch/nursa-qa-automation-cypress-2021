import PasswordResetPage from '../support/Pages/PasswordReset_Page';

describe ('Test password reset page', () => {

    const forgot = new PasswordResetPage();

    beforeEach(() => {
        cy.fixture('Strings.json').as('strings');
        cy.fixture('Errors.json').as('errors');
        forgot.navigate();
    });

    
    it.only('Verify "Forgot Password" token is being sent when Send button is clicked', () => {
        forgot.enterEmail(Cypress.env('credentials').correctEmail);
        cy.intercept('POST', 'forgotten-password').as('forgot');
        forgot.clickResetButton();

        cy.wait('@forgot').then((xhr) => {
            const response = xhr.response.body;
            token = response.token;
            cy.log(token);
            cy.get('@forgot')
                .its('request.payload').should('deep.equal', {
                    email: Cypress.env('credentials').correctEmail
                })
            cy.get('@forgot')
                .its('response.body').should('contain', {
                    reset: 'success',
                })
        });
    });
    
    it('Verify error is displayed if no credentials are entered', function() {
        resetPage.enterEmail(Cypress.env('credentials').correctEmail);
        resetPage.clickResetButton();
        // process all emails
        mailServer.bind((addr, id, email) => {
            console.log('--- email ---')
            console.log(addr, id, email);});
    });
});