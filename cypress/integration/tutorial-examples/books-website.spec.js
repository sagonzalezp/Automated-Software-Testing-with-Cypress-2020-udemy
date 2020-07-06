/// <reference types="Cypress" />
describe('Browser actions', ()=>{
    it("Should load book's website", ()=>{
        cy.visit('http://books.toscrape.com', {timeout: 10000})
        cy.url().should('include', 'toscrape.com')
        cy.log('Website loaded')
        cy.reload()
        cy.log('After the reload')
    })

    it('Should click on Travel category', ()=>{
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    })
    
    it('Should display currect number of books', ()=>{
        cy.get('.product_pod').its('length').should('eq', 11)
        cy.get('.form-horizontal').should('contain', '11 results.')
    })

    it('Should check the price of the book', ()=>{
        cy.get(':nth-child(22) > a').click()
        cy.get(':nth-child(4) > .product_pod > .image_container > a > .thumbnail').click()
        cy.get('.product_main > .price_color').should('have.text', '£23.88')
    })
})