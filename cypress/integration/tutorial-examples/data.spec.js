/// <reference types="Cypress" />
describe('write / read data to JSON or text file', ()=>{
    // diferent ways to write into a file
    it('should white data into JSON', ()=>{
        cy.writeFile('cypress/fixtures/log.json', { name: "Mike", age: 25})
    })

    it('should write data into a text file', ()=>{
        cy.writeFile('cypress/fixtures/log.txt', 'Hello World')
    })

    it('should read and verify data from JSON file', ()=>{
        cy.readFile('cypress/fixtures/log.json').its('age').should('eq', 25)
    })

    it('should read and verify data from text file', ()=>{
        cy.readFile('cypress/fixtures/log.txt').should('eq', 'Hello World')
    })

    it('should read and verify browser document content', ()=>{
        cy.visit('https://www.example.com')
        cy.wait(2000)
        cy.document().its('contentType').should('eq', 'text/html')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })
})