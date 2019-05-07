describe('My First Test in arthoria', () => {
    it('Visits the app arthoria', () => {
      cy.visit('www.arthoria.de')
      cy.contains('Willkommen bei Arthoria')
    // go to www.arthoria.de and look if it contains this text
      cy.contains('Login')
        .click()
    // contains 'login' , click on it

      cy.contains('Passwort vergessen?')
        .click()
    // contains 'Passwort vergessen?', click on it
    })  
    it('Visits the app arthoria', () => {
      cy.visit('www.arthoria.de')
      cy.contains('Anleitung')
          .click()
    // go to <text>, contains <text>, click on it

      cy.visit('www.arthoria.de')   
      cy.contains('Jetzt kostenlos anmelden!')
          .click()
    // go to <text>, contains <text>, click on it
    })
    it('Visits the app arthoria', () => {
      cy.visit('www.arthoria.de')
      cy.contains('Willkommen bei Arthoria')
      
      cy.contains('Login')
        .click()
      cy.get('input[name="nick"]').should('have.value', 'mariposa')
        .type('mariposa')
     // cy.get('input')
     //   .type('testtest')
    })

    
  })