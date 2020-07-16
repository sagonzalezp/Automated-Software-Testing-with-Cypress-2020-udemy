describe('Keyborard press simulation', ()=>{
    it('Should submit searchbox pressing enter', ()=>{
        cy.visit('zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('Just some text {enter}')
    })
})