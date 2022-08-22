const url = Cypress.config('baseUrl');

class MainPage {

    logoutButton(){
        return cy.get('.sylius-logout-button');
    }

    categoryDropdownTees(){
        return cy.get('header > .ui.menu > :nth-child(1)');
    }

    navigate() {
        cy.visit(url);
    }

    enterSearchText(productName) {
        getSearchField()
            .clear()
            .type(productName)
    }
    
    clickSearch() {
        cy.get('[name=submit_search]').click();
    }

    clickLogoutButton(){
        this.logoutButton()
            .click();
    }

    clickCategoryDropdownTees(){
        this.categoryDropdownTees()
            .click();
    }
}
export default MainPage