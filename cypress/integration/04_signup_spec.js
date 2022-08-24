import SignupPage from '../support/Pages/Signup_Page';
import LoginPage from '../support/Pages/Login_Page';

describe ('Test signup page', () => {

    const signup = new SignupPage();
    
    beforeEach(() => {
        cy.fixture('Strings.json').as('strings');
        cy.fixture('Errors.json').as('errors');
        signup.navigate();
    });

    it('Verify error message is displayed if first name is missing', function() {
        signup.enterLastName(this.strings.signupLastName);
        cy.fillEmail();
        signup.enterPassword(this.strings.signupPassword);
        signup.enterConfirmPassword(this.strings.signupPassword);
        signup.clickSignupButton();
        signup.namemErrorPin().should('contain', this.errors.nameMissing);
    });

    it('Verify error message is displayed if last name is missing', function() {
        signup.enterName(this.strings.signupName);
        cy.fillEmail();
        signup.enterPassword(this.strings.signupPassword);
        signup.enterConfirmPassword(this.strings.signupPassword);
        signup.clickSignupButton();
        signup.lastNameErrorPin().should('contain', this.errors.lastNameMissing);
    });

    it('Verify error message is displayed if email is missing', function() {
        signup.enterName(this.strings.signupName);
        signup.enterLastName(this.strings.signupLastName);
        signup.enterPassword(this.strings.signupPassword);
        signup.enterConfirmPassword(this.strings.signupPassword);
        signup.clickSignupButton();
        signup.emailErrorPin().should('contain', this.errors.emailMissing);
    });

    it('Verify error message is displayed if email is in wrong format', function() {
        signup.enterName(this.strings.signupName);
        signup.enterLastName(this.strings.signupLastName);
        signup.enterEmail(this.strings.invalidEmailFormat);
        signup.enterPassword(this.strings.signupPassword);
        signup.enterConfirmPassword(this.strings.signupPassword);
        signup.clickSignupButton();
        signup.emailErrorPin().should('contain', this.errors.emailInvalid);
    });

    it('Verify error message is displayed if password is missing', function() {
        signup.enterName(this.strings.signupName);
        signup.enterLastName(this.strings.signupLastName);
        cy.fillEmail();
        signup.clickSignupButton();
        signup.passwordErrorPin().should('contain', this.errors.passwordMissing);
    });

    it('Verify error message is displayed if password is too short', function() {
        signup.enterName(this.strings.signupName);
        signup.enterLastName(this.strings.signupLastName);
        cy.fillEmail();
        signup.enterPassword(this.strings.shortPassword);
        signup.enterConfirmPassword(this.strings.shortPassword);
        signup.clickSignupButton();
        signup.passwordErrorPin().should('contain', this.errors.passwordTooShort);
    });

    it('Verify error message is displayed when passwords are not matching', function() {
        signup.enterName(this.strings.signupName);
        signup.enterLastName(this.strings.signupLastName);
        cy.fillEmail();
        signup.enterPassword(this.strings.shortPassword);
        signup.enterConfirmPassword(this.strings.nonMatchingPassword);
        signup.clickSignupButton();
        signup.passwordErrorPin().should('contain', this.errors.passwordsNotMatching);
    });

    it('Verify error message is displayed if name is too short', function() {
        signup.enterName(this.strings.shortName);
        signup.enterLastName(this.strings.signupLastName);
        cy.fillEmail();
        signup.enterPassword(this.strings.shortPassword);
        signup.enterConfirmPassword(this.strings.shortPassword);
        signup.clickSignupButton();
        signup.passwordErrorPin().should('contain', this.errors.nameTooShort);
    });

    it('Verify error message is displayed if last name is too short', function() {
        signup.enterName(this.strings.signupName);
        signup.enterLastName(this.strings.shortLastName);
        cy.fillEmail();
        signup.enterPassword(this.strings.shortPassword);
        signup.enterConfirmPassword(this.strings.shortPassword);
        signup.clickSignupButton();
        signup.passwordErrorPin().should('contain', this.errors.lastNameTooShort);
    });
        
    it('Verify signup for a new user', function() {
        signup.fillSignupDetails(this.strings.signupName,
                                this.strings.signupLastName,
                                this.strings.signupPassword,
                                this.strings.signupPassword);
        const login = new LoginPage();
        login.signupConfirmation().should('contain', this.strings.registrationSuccess);
    });
});
