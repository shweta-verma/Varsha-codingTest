    describe('first test', function(){
        // it('get festival list',() => {
        //     cy.request({
        //      //   method:'GET'
        //      //   url:'​https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals'
        //     }).as('festivals')
        //     cy.get('@festivals').its('status').should('eq', 200)
        //     cy.get('@festivals').then((responce) =>{
        //         cy.log().JSON.stringify(responcr.body)
        //     })
        // })

        it('get festival1 list',() => {
            
            cy.request('GET','https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals').as('festivals')
            //cy.get('@festivals').its('status').should('eq', 200)
            cy.get('@festivals').then((response)=>{
                expect(response.status).to.eq(200)
                const resp= response.body
                cy.log(resp)
                return resp
            
            })
                .then((resp)=>{
                    
                     for(let i=0; i<resp.length; i++){
                    expect(resp.body[i].bands[i]).to.have.property('name', 'Winter Primates')
                    
                     }
                    
                })
                    
                
                 
            
              } )
            // expect(response.body[0].bands[0]).have.contains('name', 'Jill Black')
            // expect(response.body[0]).to.have.property('name', 'LOL-palooza')
             // expect(response.body[0].bands[1]).to.have.property('name', 'Jill Black')
              // expect(response.body[1]).to.have.property('name', 'Small Night In')
             // expect(response.body[2]).to.have.property('name', 'Trainerella')
             // expect(response.body[3]).to.have.property('name', 'Twisted Tour')
              // expect(response.body[4].name[2]).to.have.property('name', 'Critter Gitls')


            })
        
    
    
    
        
        
        
        
