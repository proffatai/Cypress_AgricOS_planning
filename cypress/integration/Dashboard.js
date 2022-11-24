describe('Homescreen of planning OS', () => {
  it('Dashboard Menu', () => {

    const menus =[
      "Dashboard",
      "General Settings",
      "Management",
      "Member Settings",
      "Lock Input",
      "Goal Settings",
      "Farm Input",
      "Credit Sustainability",
      "Location planning",
      "Personnel planning",
      "Logistics",
      "Assets",
      "App Support"
    ]
    cy.visit('/')
    cy.login('Excel01', 1234)
    cy.get('.MuiToolbar-root > .MuiTypography-root').should('contain','Dashboard').and('be.visible') // verifying that the first page is the dashboard
   
      //Checking if all the menus are present
      let i=0
      while(i<menus.length){
        cy.get('.MuiList-padding').should('contain',menus[i]).and('be.visible')
        i++
      }

      //verifying that the hub id is present
      cy.get('.css-6tke00-MuiTypography-root').should('have.text', 'Hub: Lagos')
      //verifying that the Overall Status is present
      cy.get('.css-0 > .MuiTypography-root').should('contain', 'Overall Status')
      
      //Verifying the name of the user account
      cy.get('.css-11oc1ts-MuiTypography-root').should('be.visible').and('have.text','Welcome Stephen')
      //Verifying that the BG icon appears on the Dashboard page
      cy.get('[style="justify-content: left; display: flex; padding: 15px;"] > img').should('be.visible')

      //Checking if the next page button is present
      cy.get('.css-11ocfn4 > .MuiButton-root').should('be.visible').and('be.enabled')

      //checking out for the logout button
      cy.get('a > .MuiButton-root').should('be.enabled')
     
     //Logging out of the app
     cy.get('a > .MuiButton-root').click({force:true})
     
      //Affirming that the appp has signed out successfully by checking the url of the new page
      let url ='http://planning-portal.agric-os.com/'
      cy.url().should('equal', url) // alternative cy.url().should('eq',url)

  })
})