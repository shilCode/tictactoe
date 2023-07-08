
  it('should verify circle win', () => {
    cy.visit('https://tictactoe-seven-theta.vercel.app/')
    cy.get('div#0.square').click()
    cy.get('div#1.square').click()
    cy.get('div#3.square').click()
    cy.get('div#4.square').click()
    cy.get('div#6.square').click()

    cy.get('[id="info"]').should('contain','Circle Wins!')

    
  })

  it('should verify cross win', () => {
    cy.visit('https://tictactoe-seven-theta.vercel.app/')
    cy.get('div#0.square').click()
    cy.get('div#1.square').click()
    cy.get('div#2.square').click()
    cy.get('div#4.square').click()
    cy.get('div#6.square').click()
    cy.get('div#7.square').click()

    cy.get('[id="info"]').should('contain','Cross Wins!')
  })


