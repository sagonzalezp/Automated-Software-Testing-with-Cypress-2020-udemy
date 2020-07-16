describe('Using custom commands',()=>{
    it('should loging to application using custom command', ()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username', 'password')
    })
})