require('cypress-xpath');
describe('my UI test suit', function(){

    it('verify url', function(){

        cy.visit("http://localhost:4200/festivals")
        cy.wait(2000)
        cy.xpath('//ol/li').should('have.length.above', 0)
    })   
    

})

         
