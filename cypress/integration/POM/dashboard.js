export class dashboard {
  menus = [
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

  //Checking if all the menus are present
  verifyMenus() {
    let i = 0
    while (i < (this.menus).length) {
      cy.get('.MuiList-padding').should('contain', this.menus[i]).and('be.visible')
      i++
    }
  }

  logout(url) {
    //checking out for the logout button
    cy.get('a > .MuiButton-root').should('be.enabled')

    //Logging out of the app
    cy.get('a > .MuiButton-root').click({ force: true })
    //Affirming that the appp has signed out successfully by checking the url of the new page
    cy.url().should('equal', url) // alternative cy.url().should('eq',url)
  }

  verifyNameAndHub(firstname, hubName) {
    //verifying that the hub id is present
    cy.get('.css-6tke00-MuiTypography-root').should('have.text', 'Hub: ' + hubName)
    //verifying that the Overall Status is present
    cy.get('.css-0 > .MuiTypography-root').should('contain', 'Overall Status')

    //Verifying the name of the user account
    cy.get('.css-11oc1ts-MuiTypography-root').should('be.visible').and('have.text', 'Welcome ' + firstname)
  }

  otherChecks() {
    //Verifying that the BG icon appears on the Dashboard page
    cy.get('[style="justify-content: left; display: flex; padding: 15px;"] > img').should('be.visible')

    //Checking if the next page button is present
    cy.get('.css-11ocfn4 > .MuiButton-root').should('be.visible').and('be.enabled')
  }
}