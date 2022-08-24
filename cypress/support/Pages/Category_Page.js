const url = Cypress.config('baseUrl');

class CategoryPage {

    clothingItem(productName){
        return cy.get(`a:contains(${productName})`);
    }
    
    navigate(categoryUrl) {
        cy.visit(url+categoryUrl);
    }

    selectClothingItem(productName){
        this.clothingItem(productName)
            .click();
    }
}
export default CategoryPage