describe('Page Test', () => {
  it('Page Load', () => {
    cy.visit('http://localhost:5173/');
  });
  it('Prev and Next Page', () => {
    cy.visit('http://localhost:5173/');
    cy.get('button.Btn[title="next"]').should('be.visible').click();
    cy.wait(1000);
    cy.get('button.Btn[title="prev"]').click();
    cy.wait(1000);
  });
  it('Change Dark mode',()=>{
    cy.visit('http://localhost:5173/');
    cy.get('span.slider-theme').click()
    cy.wait(1000)
    cy.get('span.slider-theme').click()
  })
  it('Change Limit',()=>{
    cy.visit('http://localhost:5173/');
    cy.get('select.LimitSel').select('10');
    cy.wait(1000)
    cy.get('select.LimitSel').should('have.value', '10');
    cy.wait(1000)
  })
});

