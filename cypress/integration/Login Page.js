describe('Planning Login Screen', ()=>{

    let credentials;
    // importing the stored username and password
    beforeEach(()=>{
        cy.visit('/')
        cy.fixture('Login_credentials').then( (data) =>{
            credentials=data
    })

    })


    it('Valid username and valid password',()=>{
   
        cy.get('#username').type(credentials.username)
        cy.get('#password').type(credentials.password)
        cy.get('.MuiButton-root').click()
        cy.get('.MuiToolbar-root > .MuiTypography-root')
        .should('contain','Dashboard').and('be.visible') // verifying that the first page is the dashboard
    })

    it('Invalid username and invalid password',()=>{
       
        cy.get('#username').type(credentials.inUsername)
        cy.get('#password').type(credentials.inPassword)
        cy.get('.MuiButton-root').click()
        cy.get('[style="color: red; text-align: center;"]').should('have.text','User ' + credentials.inUsername+' not found')
    })

    it('Invalid username and valid password',()=>{
        
        cy.get('#username').type(credentials.inUsername)
        cy.get('#password').type(credentials.password)
        cy.get('.MuiButton-root').click()
        cy.get('[style="color: red; text-align: center;"]').should('have.text','User ' + credentials.inUsername+' not found')
    })

    it('Valid username and invalid password',()=>{
        
        cy.get('#username').type(credentials.username)
        cy.get('#password').type(credentials.inPassword)
        cy.get('.MuiButton-root').click()
        cy.get('[style="color: red; text-align: center;"]').should('have.text','Your password not matching')
    })
})