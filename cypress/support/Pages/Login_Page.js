const url = Cypress.config('baseUrl');

class LoginPage {
    signupConfirmation(){
        return cy.get('.pusher > :nth-child(2) > :nth-child(2)')
    }
    
    usernameInput(){
        return cy.get('[id = "_username"]');
    }

    passwordInput() {
        return cy.get('[id = "_password"]');
    }

    loginButton() {
        return cy.get('button[type = "submit"]');
    }

    forgotPasswordButton() {
        return cy.get('.loadable > .right');
    }

    rememberMeCheckbox() {
        return cy.get('.ui > label');
    }

    errorMessage() {
        return cy.get('.negative > .content > p');
    }
    
    navigate() {
        cy.visit(url+'/login');
    }

    enterUsername(email) {
        this.usernameInput()
            .clear()
            .type(email);
    }

    enterPassword(password) {
        this.passwordInput()
            .clear()
            .type(password);
    }

    toggleRememberMe() {
        this.rememberMeCheckbox()
            .click();
    }

    clickLoginButton() {
        this.loginButton()
            .click();
    }

    clickForgotPasswordButton() {
        this.forgotPasswordButton()
            .click();
    }
}
export default LoginPage