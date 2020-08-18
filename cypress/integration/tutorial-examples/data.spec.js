/// <reference types="Cypress" />
describe('write / read data to JSON or text file', ()=>{
    // diferent ways to write into a file
    it('should white data into JSON', ()=>{
        cy.writeFile('cypress/fixtures/log.json', { name: "Mike", age: 25})
    })

    it('should write data into a text file', ()=>{
        cy.writeFile('cypress/fixtures/log.txt', 'Hello World')
    })
})