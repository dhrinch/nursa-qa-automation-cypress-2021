// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('enterCredentials', (email, password) => { 
    cy.get('[id = "_username"]')
        .clear()
        .type(email);
    cy.get('[id = "_password"]')
        .clear()
        .type(password);
})

Cypress.Commands.add('logIn', (email, password) => { 
    cy.enterCredentials(email, password);
    cy.get('button[type = "submit"]')
        .click();
})

Cypress.Commands.add("fillEmail", ()=> {
    function makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
   }
   
   console.log(makeid(5));
  cy.get('#sylius_customer_registration_email')
    .type(makeid(6) + "@test.com");
})
