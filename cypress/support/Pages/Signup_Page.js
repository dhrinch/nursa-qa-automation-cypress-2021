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

    signupButton(){
        return cy.get('button[type="submit"]');
    }

    navigate() {
        cy.visit(url+'/register');
    }

    signup(firstName, lastName, password) {
        this.firstNameField().type(`${firstName}`);
        this.lastNameField().type(`${lastName}`);
        cy.fillEmail();
        this.passwordField().type(`${password}`);
        this.confirmPasswordField().type(`${password}`);
        this.signupButton().click();
    }
}
export default SignupPage