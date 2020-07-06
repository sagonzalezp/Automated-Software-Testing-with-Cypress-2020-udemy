/// <reference types="Cypress" />

describe('My fist simple test with cypress', ()=>{
    it('True should be Ture', ()=>{
        expect(true).to.equal(true)
    })

    it('5 should be 5', ()=>{
        expect(5).to.equal(5)
    })
})

describe('Another describe block', ()=>{
    it('False should be false', ()=>{
        expect(false).to.equal(false)
    })
})

describe('Browser actions', ()=>{
    it('Should load the URL', ()=>{
        cy.visit('http://example.com/')
    })

    it('Should check current URL', ()=>{
        cy.url().should('include', 'example.com')
    })

    it('Should wait for 3 seconds', ()=>{
        cy.wait(3000)
    })

    it('Should pause the execution', ()=>{
        cy.pause()
    })

    it('Should check for correct elements on the page', ()=>{
        cy.get('h1').should('be.visible')
    })
})