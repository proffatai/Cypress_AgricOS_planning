import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
/// <reference types ="cypress">

let credentials;
let url ='http://planning.uat.agric-os.com/'

// Successful Login
Given('User is on the homepage of the planning module',()=>{
        cy.visit('/')
        cy.url().should('equal',url)

        // importing the stored username and password     
    cy.fixture('Login_credentials').then( (data) =>{
         credentials=data
            })
    })

When('User enters correct username',()=>{
        cy.get('#username').type(credentials.username)
    })
    
And('User enters correct password',()=>{
        cy.get('#password').type(credentials.password)
    })

And('User clicks the login button',()=>{
        cy.get('.MuiButton-root').click()
    })
    
Then('User should be taken to the dashboard',()=>{
        cy.get('.MuiToolbar-root > .MuiTypography-root')
        .should('contain','Dashboard').and('be.visible') // verifying that the first page is the dashboard
    })

// Unsuccessful Login
Given('User is on the homepage of the planning module',()=>{
        cy.visit('/')
        cy.url().should('equal',url)
    })

When('User enters incorrect username',()=>{
        cy.get('#username').type(credentials.inUsername)
    })
    
And('User enters correct password',()=>{
        cy.get('#password').type(credentials.password)
    })

And('User clicks the login button',()=>{
        cy.get('.MuiButton-root').click()
    })
    
Then('User should not be taken to the dashboard',()=>{
    cy.get('[style="color: red; text-align: center;"]').should('have.text','User ' + credentials.inUsername+' not found')
    })

// Unsuccessful Login
Given('User is on the homepage of the planning module',()=>{
        cy.visit('/')
        cy.url().should('equal',url)
    })

When('User enters incorrect username',()=>{
        cy.get('#username').type(credentials.inUsername)
    })
    
And('User enters incorrect password',()=>{
        cy.get('#password').type(credentials.inPassword)
    })

And('User clicks the login button',()=>{
        cy.get('.MuiButton-root').click()
    })
    
Then('User should not be taken to the dashboard',()=>{
    cy.get('[style="color: red; text-align: center;"]').should('have.text','User ' + credentials.inUsername+' not found')
    })    
    
 // Unsuccessful Login
Given('User is on the homepage of the planning module',()=>{
        cy.visit('/')
        cy.url().should('equal',url)
    })

When('User enters correct username',()=>{
        cy.get('#username').type(credentials.username)
    })
    
And('User enters incorrect password',()=>{
        cy.get('#password').type(credentials.inPassword)
    })

And('User clicks the login button',()=>{
        cy.get('.MuiButton-root').click()
    })
    
Then('User should not be taken to the dashboard due to password',()=>{
    cy.get('[style="color: red; text-align: center;"]').should('have.text','Your password not matching')
    cy.url().should('eq',url) // url of the page is unchanged when the user is unable to sign in
    })

   