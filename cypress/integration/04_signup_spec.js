import SignupPage from '../support/Pages/Signup_Page';

describe ('Test signup page', () => {

    const signup = new SignupPage();

    beforeEach(() => {
        cy.fixture('Strings.json').as('strings');
        cy.fixture('Errors.json').as('errors');
        signup.navigate();
    });

    it('Test error is displayed when ')

});