describe('Home view test', () => {
  it('The AppBar buttons are correctly displayed', () => {
    cy.visit('/');
    cy.contains("Sebastian Lob");
    cy.contains("Source");
  });
  it('The initial number of pictures are 10', () => {
    cy.visit('/');
    cy.get('.picture').should('have.length', 10);
  });
  it('The mouse hover is correctly showing the Details', () => {
    cy.visit('/');
    cy.get('.picture').first().trigger("mouseenter").contains("Details");
    cy.get('.picture').first().trigger("mouseleave").contains("Details").should("not.exist");
  });
  it('When I click in some picture, its open the magnifier', () => {
    cy.clickInPicture();
  });
});