/// <reference types="Cypress" />
describe('Browser actions', ()=>{
    it("Should load book's website", ()=>{
        cy.visit('http://books.toscrape.com', {timeout: 10000})
        cy.url().should('include', 'toscrape.com')
    })

    it('Should click on Travel category', ()=>{
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    })
    
})
