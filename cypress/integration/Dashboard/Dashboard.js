import {
  Given,
  When,
  And,
  Then,
  Before,
} from "cypress-cucumber-preprocessor/steps";
/// <reference types ="cypress">

let credentials;
let url = "http://planning.uat.agric-os.com/";
let menus;
//for cucumber framework, we use the Before() hook and not the beforeEach or before
Before(() => {
  // importing the stored username and password
  cy.fixture("Login_credentials").then((data) => {
    credentials = data;
  });
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
    "App Support",
  ];
});

// Step definition for a successful Login
Given("User is on the homepage of the planning module", () => {
  cy.visit("/");
  cy.url().should("equal", url);
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

//Step definition to verify all the Menus on the dashboard are present
Given("User has successfully logged in to the application", () => {
  cy.visit("/");
  cy.get("#username").type(credentials.username);
  cy.get("#password").type(credentials.password);
  cy.get(".MuiButton-root").click();

  cy.get(".MuiToolbar-root > .MuiTypography-root")
    .should("contain", "Dashboard")
    .and("be.visible"); // verifying that the first page is the dashboard
});

When("User is on the Dashboard", () => {
  cy.url().should("equal", "http://planning.uat.agric-os.com/dashboard");
  cy.get(".MuiToolbar-root > .MuiTypography-root")
    .should("contain", "Dashboard")
    .and("be.visible"); // verifying that the first page is the dashboard
});
Then("Application should display all the menus", () => {
  //Checking if all the menus are present
  let i = 0;
  while (i < menus.length) {
    cy.get(".MuiList-padding").should("contain", menus[i]).and("be.visible");
    i++;
  }
});
//Step definition for User wants to access some functionalities on the dashboard
Given("User has successfully logged in to the application", () => {});
When("User wants to verify if some components are present", () => {
    //Accessing some components on the dashboard
    cy.get(".css-6tke00-MuiTypography-root")
    cy.get(".css-0 > .MuiTypography-root")
});
Then("Application should display the components", () => {
  //verifying that the hub id is present
  cy.get(".css-6tke00-MuiTypography-root").should("have.text", "Hub: Lagos");
  //verifying that the Overall Status is present
  cy.get(".css-0 > .MuiTypography-root").should("contain", "Overall Status");
});
//step definition for logout
Given("User has successfully logged in to the application", () => {});
When("User access the log out button", () => {
  //checking out for the logout button
  cy.contains("Logout").should("be.enabled").and("be.visible");
});

And("User clicks on the log out button", () => {
  //Logging out of the app
  cy.contains("Logout").click({ force: true });
});

Then("User is taken out of the application", () => {
  //Affirming that the appp has signed out successfully by checking the url of the new page
  cy.url().should("equal", url); // alternative cy.url().should('eq',url)
});
