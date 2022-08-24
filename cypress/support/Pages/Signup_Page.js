const url = Cypress.config('baseUrl');

class SignupPage {

    firstNameField(){
        return cy.get('#sylius_customer_registration_firstName');
    }

    lastNameField(){
        return cy.get('#sylius_customer_registration_lastName');
    }
    
    emailField(){
        return cy.get('#sylius_customer_registration_email');
    }

    passwordField(){
        return cy.get('#sylius_customer_registration_user_plainPassword_first');
    }

    confirmPasswordField(){
        return cy.get('#sylius_customer_registration_user_plainPassword_second');
    }
    
    namemErrorPin(){
        return cy.get('.sylius-validation-error');
    }

    lastNameErrorPin(){
        return cy.get('.sylius-validation-error');
    }

    emailErrorPin() {
        return cy.get('.sylius-validation-error')
    }

    passwordErrorPin() {
        return cy.get('.sylius-validation-error');
    }

    signupButton(){
        return cy.get('button[type="submit"]');
    }

    navigate() {
        cy.visit(url+'/register');
    }

    enterName(firstName) {
        this.firstNameField()
            .clear()
            .type(`${firstName}`);
    }

    enterLastName(lastName) {
        this.lastNameField()
            .clear()
            .type(`${lastName}`);
    }

    enterEmail(email) {
        this.emailField()
            .clear()
            .type(`${email}`);
    }

    enterPassword(password) {
        this.passwordField()
            .clear()
            .type(`${password}`);
    }

    enterConfirmPassword(password) {
        this.confirmPasswordField()
            .clear()
            .type(`${password}`);
    }

    clickSignupButton() {
        this.signupButton()
            .click();
    }

    fillSignupDetails(firstName, lastName, password) {
        this.enterName(firstName);
        this.enterLastName(lastName);
        cy.fillEmail();
        this.enterPassword(password);
        this.enterConfirmPassword(password);
        this.clickSignupButton();
    }
}
export default SignupPage
