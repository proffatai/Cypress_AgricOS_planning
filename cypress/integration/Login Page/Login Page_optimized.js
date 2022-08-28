// Optimizing the code for login page_old.js

import {Given, When, And, Then, Before} from 'cypress-cucumber-preprocessor/steps'
/// <reference types ="cypress">

let credentials;
let url ='http://planning.uat.agric-os.com/'

//for cucumber framework, we use the Before() hook and not the beforeEach or before
Before(()=>{
 
        // importing the stored username and password     
        cy.fixture('Login_credentials').then( (data) =>{
            credentials=data
               })
})

// Successful Login
Given('User is on the homepage of the planning module',()=>{
        cy.visit('/')
        cy.url().should('equal',url)
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
        //we dont need to repeat the same cypress script since we have already done so earlier
        //cucumber will use the same script we used earlier since their title is matching
    })

When('User enters incorrect username',()=>{
        cy.get('#username').type(credentials.inUsername) //we have to provide a template for incorrect username
    })
    
And('User enters correct password',()=>{
      //we dont need to write any script since we have written a script for correct password previously
      //cucumber will use that same script here since their title is matching
    })

And('User clicks the login button',()=>{
      //we dont need to write any script since we have written a script for login button previously
      //cucumber will use that same script here since their title is matching
    })
    
Then('User should not be taken to the dashboard',()=>{ // we are providing a template for the title, user should not be taken to the dashboard
    cy.get('[style="color: red; text-align: center;"]').should('have.text','User ' + credentials.inUsername+' not found')
    })

// Unsuccessful Login
Given('User is on the homepage of the planning module',()=>{
        
    })

When('User enters incorrect username',()=>{
        cy.get('#username').type(credentials.inUsername) //we need to provide a cypress template for the script, user enters incorrect password
    })
    
And('User enters incorrect password',()=>{
       
    })

And('User clicks the login button',()=>{
      
    })
    
Then('User should not be taken to the dashboard',()=>{

    })    
    
 // Unsuccessful Login
Given('User is on the homepage of the planning module',()=>{
      
    })

When('User enters correct username',()=>{
       
    })
    
And('User enters incorrect password',()=>{
       
    })

And('User clicks the login button',()=>{
        
    })
    
Then('User should not be taken to the dashboard due to password',()=>{ // I had to change the tile of this message since I want to
    // check for a different error message otherwise, cucumber will use the matching cypress command for it
    cy.get('[style="color: red; text-align: center;"]').should('have.text','Your password not matching')
    })

   