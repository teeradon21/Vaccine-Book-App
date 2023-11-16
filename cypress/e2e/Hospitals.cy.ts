describe('Hospitals', () => {
  it('Should play video, pause, and display hospital images', () => {
    //
    cy.visit('/')
    cy.get('video').should('exist')
    cy.get("video").should("have.prop", "paused", false)
    
    cy.wait(5000);

    cy.get('#play-pause').click()
    cy.get('video').should('have.prop', 'paused', true)

    cy.get('#select-hospital').click()
    cy.get('img').should('have.length.at.least', 3)
  })
})