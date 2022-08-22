class CategoryPage {

    addToCartButton()   {
        return cy.get('button[type=submit]');
    }

    navigate(category) {
        cy.visit(url+'/taxon'+category);
    }
    
    addToCart(){
        addToCartButton()
            .click();
    }
}
export default CategoryPage