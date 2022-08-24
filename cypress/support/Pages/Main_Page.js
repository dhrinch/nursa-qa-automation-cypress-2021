const url = Cypress.config('baseUrl');

class MainPage {

    logoutButton(){
        return cy.get('.sylius-logout-button');
    }

    categoryDropdownTees(){
        return cy.get('header > .ui.menu > :nth-child(1)');
    }

    dropdownTeesMen(){
        return cy.get('a[href="/en_US/taxons/t-shirts/men"]');
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

    clickDropdownTeesMen(){
        this.dropdownTeesMen()
            .click();
    }

    selectMenTees(){
        this.clickCategoryDropdownTees();
        this.clickDropdownTeesMen();
    }
}
export default MainPage