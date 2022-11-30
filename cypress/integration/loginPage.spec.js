///<reference types="cypress"/>
import { loginPage } from "./POM/loginPage";


describe("Planning Login Screen", () => {

    
let credentials;
const my_login_page = new loginPage();
    // importing the stored username and password
    before(() => {
        cy.fixture("Login_credentials").then((data) => {
            credentials = data;
        });
    });

    beforeEach(() => {
        my_login_page.navigate("/");
    });

    it("Valid username and valid password", () => {
        my_login_page.validLogin(credentials.username, credentials.password);
    });
    it("Invalid username and invalid password", () => {
        my_login_page.invalidLogin(credentials.inUsername, credentials.inPassword);
    });

    it("Invalid username and valid password", () => {
        my_login_page.invalidUsernameLogin(
            credentials.inUsername,
            credentials.password
        );
    });
    it("Valid username and invalid password", () => {
        my_login_page.invalidpasswordLogin(
            credentials.username,
            credentials.inPassword
        );
    });
    it("Verifying BG logo is present", () => {
        my_login_page.verifyBGlogo();
    });

    it("Verifying background image is present", () => {
        my_login_page.verifyBackgroundText();
    });

})