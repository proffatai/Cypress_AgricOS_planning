describe('Homescreen of planning OS', () => {
    it('General Settings Menu', () => {
  
      cy.visit('/')
      cy.login('Excel01', 1234)
      cy.contains('General Settings').click({force:true})
      //Affirming that we are on general settings page
    let url ='http://planning-portal.agric-os.com/general-settings'
    cy.url().should('equal', url) 
     
    //Headings that should be present in the app
    const headings =[
        "Select Country",
        "Default Language",
        "Time Zone",
        "Select Currency",
        "Crop Types",
        "Season",
        "Network Types",
        "Clearance Threshold",
    ]

    //Checking if the first 8 headings are present
    let i=1
    while(i<headings.length+1){
    cy.get(':nth-child('+i+') > .css-1rgwm5s-MuiTypography-root').should('contain',headings[i-1]).and('be.visible')
      i++
    }
     //selecting country
  cy.get('#companyCountry').click()
  cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]',{ timeout: 10000 }).should('contain', 'Nigeria')
     
 //selecting language
 cy.get('#companyLanguage').click({force:true})
 cy.get('[data-value="FRENCH"]',{ timeout: 10000 }).should('contain', 'FRENCH')
 cy.get('[data-value="ENGLISH"]').should('contain', 'ENGLISH')
 cy.get('[data-value="HAUSA"]').should('contain', 'HAUSA')
   
 //selecting timezone (GNT+2)
 cy.get('#companyTimezone').click({force:true})
 cy.get('[data-value="UTC/GMT +2"]',{ timeout: 10000 }).click()

 //selecting currency 
 cy.get('#companyCurrency').click({force:true})
 cy.contains('Dollars',{ timeout: 10000 }).click({force:true}) // selected dollar

 //selecting crop
 cy.get(':nth-child(5) > .rmsc > .dropdown-container > .dropdown-heading > .dropdown-heading-dropdown-arrow',{ timeout: 10000 }).click({force:true})
//  cy.contains('Rice').click({force:true}) // since currency dropdown uses a shadow DOM, we can directly select / chose the item directly

//selecting season
cy.get('#companySeason').click({force:true})
cy.contains('Wet',{ timeout: 10000 }).click({force:true})

// cy.get(':nth-child(7) > .rmsc > .dropdown-container > .dropdown-heading > .dropdown-heading-dropdown-arrow').click({force:true})
// cy.contains('GLO',{ timeout: 10000 }).check({force:true})

//set threshold
cy.get('#clearanceThreshold').type('21',{force:true} )

//Number of members per statement review personnel
cy.get('#clearanceThreshold').type('78',{force:true})

//Number of Members per TFM Sign-up Personnel
cy.get('#capacityPerSignupPersonnel').type('32',{force:true})

//Number of Members per Crowd Control Personnel
cy.get('#capacityPerCrowdControlPersonnel').type('42',{force:true})

//date picker
cy.get(':nth-child(9) > .react-date-picker__wrapper > .react-date-picker__inputGroup > .react-date-picker__inputGroup__month').type('12',{force:true})
cy.get(':nth-child(9) > .react-date-picker__wrapper > .react-date-picker__inputGroup > .react-date-picker__inputGroup__day').type('18',{force:true})
cy.get(':nth-child(9) > .react-date-picker__wrapper > .react-date-picker__inputGroup > .react-date-picker__inputGroup__year').type('2023',{force:true})


})
  })