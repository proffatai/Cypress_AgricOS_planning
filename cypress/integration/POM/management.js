describe('Management Menu', () => {
    
    beforeEach(()=>{
        cy.visit('/')
        cy.login('Excel01', 1234)
        cy.contains('Management').click({force:true})
    })
    
    it('Hub management', () => {
        cy.get('.bg-green').should('be.visible').and('have.text','Hubs')
        cy.get('.css-1ffq8v0-MuiTypography-root').should('have.text', 'Hub Management')
        cy.get('.css-1i9d0p9-MuiStack-root > .MuiButton-root').should('be.visible').and('have.text','Create hub')
        cy.get('#tableTitle').should('have.text', 'Users') /// First error on application, the label should be Hubs not Users

        cy.get('#mui-5').click()
        cy.get('[data-value="25"]').click().then(pageCount=>{
            const count=pageCount.text()
            expect(count).to.equal('25')
        })
    })

      //Not yet working
      it('Dense Slide', () => {
        // cy.get("input[class='MuiSwitch-input PrivateSwitchBase-input css-1m9pwf3']") 
    })
    //Not yet working
    it('Create new hub', () => {
        cy.get('.css-1i9d0p9-MuiStack-root > .MuiButton-root').click()
       
    })

    it('Edit a hub', () => {
        cy.get('[data-testid="ModeEditIcon"]').click({force:true}).wait(4000)
        cy.get('.css-1i9d0p9-MuiStack-root > .MuiTypography-root').should('have.text',"Edit Hub")
        cy.get('#name').should('be.disabled').and('visible')
       
    })

    it('User management', () => {
        cy.get('.css-e53awj-MuiStack-root > :nth-child(2)').click()
        cy.get('.bg-green').should('be.visible').and('have.text','Users')
        cy.get('.css-1ffq8v0-MuiTypography-root').should('have.text', 'User Management')

    })

    it('Create new user', () => {
        cy.get('.css-1i9d0p9-MuiStack-root > .MuiButton-root').click()
        
       
    })

    it.only('Search valid user and clear button', () => {
        cy.get('.css-e53awj-MuiStack-root > :nth-child(2)').click()
        cy.get('.div.MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root >input#mui-8').type('Aanu Babajide')
        
       
    })

    it('Search invalid user', () => {
        cy.get('#mui-8')
        
       
    })
})