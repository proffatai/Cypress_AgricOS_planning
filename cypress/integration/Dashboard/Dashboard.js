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
    cy.get('#username').type('lagos.admin')
    cy.get('#password').type('1234')
    cy.get('.MuiButton-root').click()
    cy.get('.MuiToolbar-root > .MuiTypography-root')
      .should('contain','Dashboard').and('be.visible') // verifying that the first page is the dashboard
   
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
      
      //checking out for the logout button
      cy.contains('Logout').should('be.enabled').and('be.visible')
     
     //Logging out of the app
      cy.contains('Logout').click({force:true})
     
      //Affirming that the appp has signed out successfully by checking the url of the new page
      let url ='http://planning.uat.agric-os.com/'
      cy.url().should('equal', url) // alternative cy.url().should('eq',url)

  })
})