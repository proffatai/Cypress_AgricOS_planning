export class loginPage {
  navigate(url) {
    cy.visit(url);
  }

  validLogin(username, password) {
    cy.login(username, password);
    cy.get(".MuiToolbar-root > .MuiTypography-root")
      .should("contain", "Dashboard")
      .and("be.visible"); // verifying that the first page is the dashboard
  }

  invalidLogin(inUsername, inPassword) {
    cy.login(inUsername, inPassword);
    cy.get('[style="color: red; text-align: center;"]').should(
      "have.text",
      "User " + inUsername + " not found"
    );
  }

  invalidUsernameLogin(inUsername, password) {
    cy.login(inUsername, password);
    cy.get('[style="color: red; text-align: center;"]').should(
      "have.text",
      "User " + inUsername + " not found"
    );
  }

  invalidpasswordLogin(username, inpassword) {
    cy.login(username, inpassword);
    cy.get('[style="color: red; text-align: center;"]').should(
      "have.text",
      "Your password not matching"
    );
  }
  verifyBGlogo() {
    cy.get("img").should("be.visible").and("have.attr", "src");
    cy.get("img").should("have.attr", "alt");
  }
  verifyBackgroundText() {
    cy.get(".MuiBox-root > .MuiTypography-root")
      .should("be.visible")
      .and("have.text", "Agric OS Planning Module");
  }
}
