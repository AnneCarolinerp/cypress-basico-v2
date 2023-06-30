Cypress._.times(3, function () {
  it('Testa a página da política de privacidade de forma independente', function () {
    cy.visit('./src/privacy.html')
    cy.contains('CAC TAT - Política de privacidade').should('be.visible')
    cy.contains('Não salvamos dados submetidos no formulário da aplicação CAC TAT. Utilzamos as tecnologias HTML, CSS e JavaScript, para simular uma aplicação real. No entanto, a aplicação é um exemplo, sem qualquer persistência de dados, e usada para fins de ensino.').should('be.visible')
    cy.contains('Talking About Testing').should('be.visible')
  })
})