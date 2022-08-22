const url = Cypress.config('baseUrl');

class SignupPage {

    navigate() {
        cy.visit(url+'/register');
    }
}
export default SignupPage