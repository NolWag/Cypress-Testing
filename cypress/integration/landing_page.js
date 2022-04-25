describe('Landing Page', function() {
  beforeEach(function() {
    cy.visit('/');
  });

  it('Wholesaler section should be scrolled to from link in menu', function() {
    cy.get('.header__heading').should('have.text', 'Prismfly-Sandbox');
  });
});