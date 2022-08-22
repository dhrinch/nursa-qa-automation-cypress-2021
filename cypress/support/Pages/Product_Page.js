class ProductPage {

    addToCartButton()   {
        return cy.get('button[type=submit]');
    }

    selectSize(size){
        cy.get('select[name="group_1"]').select(size)
    }
    
    addToCart(){
        addToCartButton()
            .click();
    }
}
export default ProductPage