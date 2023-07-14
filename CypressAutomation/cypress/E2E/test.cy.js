    describe('first test', function(){
        

        it('get festival1 list',() => {
            
            cy.request('GET','https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals').as('festivals')
        
            cy.get('@festivals').then((response)=>{
                expect(response.status).to.eq(200)
                const resp= response.body
                return resp
            
            })
                .then((resp)=>{
                    for(let i=0; i<resp.length; i++){
                        expect(resp.body[i].bands[i]).to.have.property('name', 'Winter Primates')
                    }
                    })
                    
                })
            })