const url = Cypress.config('baseUrl');

class PasswordResetPage {

    emailInput() {
        return cy.get('[id = "sylius_user_request_password_reset_email"]');
    }

    errorPin(){
        return cy.get('.field > .ui');
    }

    resetButton(){
        return cy.get('button[type = "submit"]');
    }
    
    navigate() {
        cy.visit(url+'/forgotten-password');
    }

    enterEmail(email) {
        this.emailInput()
            .clear()
            .type(email);
    }

    clickResetButton() {
        this.resetButton()
            .click();
    }
    
}
export default PasswordResetPage