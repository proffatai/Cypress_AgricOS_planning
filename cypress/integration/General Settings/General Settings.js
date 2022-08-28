import {
  Given,
  When,
  And,
  Then,
  Before,
} from "cypress-cucumber-preprocessor/steps";
/// <reference types ="cypress">

let credentials;
let url ='http://planning.uat.agric-os.com/general-settings';
let headings =[];
//for cucumber framework, we use the Before() hook and not the beforeEach or before
Before(() => {

  // importing the stored username and password     
  cy.fixture('Login_credentials').then( (data) =>{
          credentials=data
             })
   //Headings that should be present in the app
   headings =[
    "Select Country",
    "Default Language",
    "Time Zone",
    "Select Currency",
    "Crop Types",
    "Season",
    "Network Types",
    "Clearance Threshold",
]
 } );

 // Step definition for a successful Login
Given("User is on the homepage of the planning module", () => {
  cy.visit("/");
  cy.url().should("equal", "http://planning.uat.agric-os.com/");
});
When("User enters correct username", () => {
  cy.get("#username").type(credentials.username);
});

And("User enters correct password", () => {
  cy.get("#password").type(credentials.password);
});

And("User clicks the login button", () => {
  cy.get(".MuiButton-root").click();
});

Then("User should be taken to the dashboard", () => {
  cy.get(".MuiToolbar-root > .MuiTypography-root")
    .should("contain", "Dashboard")
    .and("be.visible"); // verifying that the first page is the dashboard
});
 
 //Step definition to verify if some headings are present
Given("User has successfully logged in to the application", () => {
  cy.visit("/");
  cy.get("#username").type(credentials.username);
  cy.get("#password").type(credentials.password);
  cy.get(".MuiButton-root").click();
  cy.get(".MuiToolbar-root > .MuiTypography-root")
    .should("contain", "Dashboard")
    .and("be.visible"); // verifying that the first page is the dashboard
});

When("User is on the General Settings page", () => {
  cy.contains('General Settings').click()
  cy.url().should('equal', url)  //Affirming that we are on general settings page
});
Then("Application should display all the menus", () => {
//Checking if the first 8 headings are present
let i=1 // I started from 1 due to the format of the css used on the page
while(i<headings.length+1){
cy.get(':nth-child('+i+') > .css-1rgwm5s-MuiTypography-root').should('contain',headings[i-1]).and('be.visible')
  i++
}
});
 
Given ("User has successfully logged in to the application",()=>{

})
When ("User is on the General Settings page",()=>{
  
})

//after clicking all this buttons, they remain opened and we can still verify 
//their content or go back to select any value from it which we did in the Then block
And("User has located the country, language, timezone and currency field",()=>{
  cy.get('#companyCountry').click()
  cy.get('#companyLanguage').click({force:true})
  cy.get('#companyTimezone').click({force:true})
  cy.get('#companyCurrency').click({force:true})
})
Then("User should be able to select any value from the options available",()=>{
  cy.get('.MuiMenuItem-root').should('contain', 'Nigeria')
  cy.get('[data-value="FRENCH"]').should('contain', 'FRENCH')
  cy.get('[data-value="UTC/GMT +2"]').click({force:true})
  cy.get('#menu-companyCurrency > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click({force:true}) // selected dollar
})


Given ("User has successfully logged in to the application",()=>{

})
When ("User is on the General Settings page",()=>{
  
})
And("User has located the crop, season and airtime field",()=>{
  cy.get(':nth-child(5) > .rmsc > .dropdown-container > .dropdown-heading > .dropdown-heading-dropdown-arrow').click({force:true})
  cy.get('#companySeason').click({force:true})
  cy.get(':nth-child(7) > .rmsc > .dropdown-container > .dropdown-heading > .dropdown-heading-dropdown-arrow').click({force:true})
})
Then("User should be able to select from the options available",()=>{
  cy.contains('Rice').click({force:true}) // since currency dropdown uses a shadow DOM, we can directly select / chose the item directly
  cy.contains('Dry').click({force:true})
  cy.contains('GLO').click({force:true})
})


Given ("User has successfully logged in to the application",()=>{

})
When ("User is on the General Settings page",()=>{
  
})
And("User has located and typed value for threshold, Number of Members per TFM Sign-up Personnel,Number of members per statement review personnel and Number of Members per Crowd Control Personnel field",()=>{
  cy.get('#clearanceThreshold').clear().type('21',{force:true} ) // clear any previous value and type a new value
  cy.get('#clearanceThreshold').clear().type('78',{force:true})
  cy.get('#capacityPerSignupPersonnel').clear().type('32',{force:true})
  cy.get('#capacityPerCrowdControlPersonnel').clear().type('42',{force:true})
})
Then("User should be able to ascertain that the values are stored",()=>{
  cy.get('#clearanceThreshold').should('have.value','21')
  cy.get('#capacityPerStatementReviewPersonnel').should('have.value','78')
  cy.get('#capacityPerSignupPersonnel').should('have.value','32')
  cy.get('#capacityPerCrowdControlPersonnel').should('have.value','42')
})
