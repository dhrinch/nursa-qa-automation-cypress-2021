const url = Cypress.config('baseUrl');

class CartPage {

    productName(){
        return cy.get('a > .sylius-product-name');
    }
    
    checkoutButton()   {
        return cy.get('.five > .huge');
    }

    checkoutEmailField(){
        return cy.get('#sylius_checkout_address_customer_email');
    }

    checkoutNameField(){
        return cy.get('#sylius_checkout_address_billingAddress_firstName');
    }

    checkoutLastNameField(){
        return cy.get('#sylius_checkout_address_billingAddress_lastName');
    }

    checkoutStreetField(){
        return cy.get('#sylius_checkout_address_billingAddress_street');
    }

    checkoutCountryDropdown(){
        return cy.get('#sylius_checkout_address_billingAddress_countryCode');
    }

    checkoutCityField(){
        return cy.get('#sylius_checkout_address_billingAddress_city');
    }

    checkoutZIPField(){
        return cy.get('#sylius_checkout_address_billingAddress_postcode');
    }

    checkoutNextButton(){
        return cy.get('#next-step');
    }

    checkoutPlaceOrderButton(){
        return cy.get('.loadable > .huge');
    }

    successNotification(){
        return cy.get('#sylius-thank-you')
    }

    navigate(cartUrl) {
        cy.visit(url+cartUrl);
    }
    
    selectSize(size){
        cy.get('select[name="group_1"]').select(size)
    }
    
    addToCart(){
        this.addToCartButton()
            .click();
    }

    checkoutClick(){
        this.checkoutButton()
            .click();
    }

    typeCheckoutEmail(email){
        this.checkoutEmailField()
        .clear()    
        .type(`${email}`);
    }

    typeCheckoutName(name){
        this.checkoutNameField()
        .clear()    
        .type(`${name}`);
    }

    typeCheckoutLastName(lastName){
        this.checkoutLastNameField()
        .clear()
        .type(`${lastName}`);
    }

    typeCheckoutStreet(street){
        this.checkoutStreetField()
        .clear()  
        .type(`${street}`);
    }

    typeCheckoutCity(city){
        this.checkoutCityField()
        .clear()   
        .type(`${city}`);
    }

    selectCheckoutCountry(country){
        this.checkoutCountryDropdown()
        .select(country);
    }

    typeCheckoutZIP(zip){
        this.checkoutZIPField()
        .clear()    
        .type(`${zip}`);
    }

    clickNextButton(){
        this.checkoutNextButton()
            .click();
    }

    checkoutFillDetails(email, name, lastName, street, city, country, zip){
        this.typeCheckoutEmail(email);
        this.typeCheckoutName(name);
        this.typeCheckoutLastName(lastName);
        this.typeCheckoutStreet(street);
        this.typeCheckoutCity(city);
        this.selectCheckoutCountry(country);
        this.typeCheckoutZIP(zip);
        this.clickNextButton();
    }

    clickPlaceOrder(){
        this.checkoutPlaceOrderButton()
            .click();
    }
}
export default CartPage