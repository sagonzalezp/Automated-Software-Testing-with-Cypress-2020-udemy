class BasePage {
    static loadHomePage(){
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(number){
        cy.wait(number)
    }
}

class HomePage extends BasePage{
    static scrollToBottom(){
        cy.get('[data-testid="submit-button"]').scrollIntoView()    
    }

    static scrollToTop(){
        cy.get('header').scrollIntoView()
    }
}


describe('Abstraction with classes', () =>{
    before(function(){
        // runs before all test inside the describe
        // sets up test data or test context
        // seed or reset the database
        HomePage.loadHomePage()
    })

    after(function(){
        //runs after all tests inside the describe
        // test clean up
        // clean cookies or localStorage
    })

    beforeEach(function(){
        // runs berfore each it block in the describe
    })

    afterEach(function(){
        // runs after each it block in the describe
    })

    it('should scroll down and up on the page', ()=>{
        //TODO
        
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(2000)
    })
})