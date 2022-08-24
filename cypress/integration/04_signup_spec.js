import SignupPage from '../support/Pages/Signup_Page';
import LoginPage from '../support/Pages/Login_Page';

describe ('Test signup page', () => {

    const signup = new SignupPage();
    const login = new LoginPage();

    beforeEach(() => {
        cy.fixture('Strings.json').as('strings');
        signup.navigate();
    });

    it('Sign up as a new user', function() {
        signup.signup(this.strings.signupName,
                     this.strings.signupLastName,
                     this.strings.signupPassword,
                     this.strings.signupPassword);
                     login.signupConfirmation().should('contain', this.strings.registrationSuccess);
    });
});