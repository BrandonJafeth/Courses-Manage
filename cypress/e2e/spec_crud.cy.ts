describe('CRUD test', () => {
    it('Add course', () => {
      cy.visit('http://localhost:5173/');
      cy.get('button#create-btn').click();
      cy.get('input#name').type('Curso de Prueba')
      cy.get('input#professor').type('Akion Vargas')
      cy.get('input#course_code').type('PDS123')
      cy.get('input#classroom_number').type('321')
      cy.get('span.slider').click()
      cy.get('input#maximun_quota').type('2')
      cy.get('button.sendButton').click();
      cy.get('button.swal2-confirm').click();
     cy.wait(1000);
    });

  it('Search and Edit', () => {
    cy.visit('http://localhost:5173/');
    cy.get('input.Search-input').type('Curso de Prueba')
    cy.get('button.search-icon').click();
    cy.wait(1000);
    cy.get('button#editBtn').should('be.visible').eq(0).click()
    cy.get('[title="maximunquota"]').clear().type('20')
    cy.get('[title="currentRe"]').clear().type('16')
    cy.get('[title="classNumber"]').clear().type('106')
    cy.get('[title="professor"]').clear().type('Sr. Cheng')
    cy.get('[title="CourseCode"]').clear().type('API204')
    cy.get('[title="CourseName"]').clear().type('Api Testing')
    cy.get('button.sendButton').click();
    cy.get('button.swal2-confirm').click()
    cy.wait(1000)
  })
  it('view edit course', () => {
    cy.visit('http://localhost:5173/');
    cy.get('input.Search-input').type('Api Testing')
    cy.get('button.search-icon').click();
    cy.wait(1000);
    cy.get('button#editBtn').should('be.visible').eq(0).click()
    cy.visit('http://localhost:5173/');
    cy.get('[title="view"]').should('be.visible').eq(0).click();
    cy.wait(1000)
  })
  it('search and destroy', () => {
    cy.visit('http://localhost:5173/');
    cy.get('input.Search-input').type('Api Testing')
    cy.get('button.search-icon').click();
    cy.wait(1000)
    cy.get('[title="delete"]').should('be.visible').eq(0).click()
    cy.get('button.swal2-confirm').click()
  })
  });