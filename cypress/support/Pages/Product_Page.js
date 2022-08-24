const url = Cypress.config('baseUrl');

class ProductPage {

    productName(){
        return cy.get('#sylius-product-name');
    }
    
    addToCartButton()   {
        return cy.get('#sylius-product-adding-to-cart > .huge');
    }

    navigate(productUrl) {
        cy.visit(url+productUrl);
    }
    
    selectSize(size){
        cy.get('select[name="group_1"]').select(size)
    }
    
    addToCart(){
        this.addToCartButton()
            .click();
    }
}
export default ProductPage