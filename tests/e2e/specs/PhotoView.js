describe('Photo View test', () => {
  it('Contains the Author, Camera and Tags', () => {
    cy.clickInPicture();
    cy.contains('Author:');
    cy.contains('Camera:');
    cy.contains('Tags:');
  });
  it('Contains the photo', () => {
    cy.clickInPicture();
    cy.get('.vel-img').should('have.length', 1);
  });
  it('Contains the Next, Prev and Close buttons', () => {
    cy.clickInPicture();
    cy.get('.btn__next').should('have.length', 1);
    cy.get('.btn__prev').should('have.length', 1);
    cy.get('.btn__close').should('have.length', 1);
  });
  it('Contains the Share Button', () => {
    cy.clickInPicture();
    cy.get('#shareButton');
  });
  it('Contains the complete Toolbar (Zoom in, Zoom out, resize and rotate buttons)', () => {
    cy.clickInPicture();
    cy.get('.toolbar-btn__zoomin').should('have.length', 1);
    cy.get('.toolbar-btn__zoomout').should('have.length', 1);
    cy.get('.toolbar-btn__resize').should('have.length', 1);
    cy.get('.toolbar-btn__rotate').should('have.length', 2);
  });
});