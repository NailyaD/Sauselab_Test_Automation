  context('Buy item', () => {
  
      before(() => {
  
          cy.visit('https://www.saucedemo.com/')
          .get('#user-name')
          .type('standard_user')
          .get('#password')
          .type('secret_sauce')
          .get('#login-button')
          .click();
      });
      
      it('Buys an item from the site', () => {
          cy.get('#add-to-cart-sauce-labs-backpack')
          .click();
          cy.get('#shopping_cart_container')
          .click();
          cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');
          cy.get('#checkout')
          .click();
          cy.get('#first-name')
          .type('NN')
          .get('#last-name')
          .type('DD')
          .get('#postal-code')
          .type('111111')
          .get('#continue')
          .click();
          cy.get('#finish')
          .click();
          cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!');
      });
  });
 