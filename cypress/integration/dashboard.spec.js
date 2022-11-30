///<reference types="cypress"/>
import { loginPage } from "./POM/loginPage";
import { dashboard } from "./POM/dashboard";


describe("Planning Login Screen", () => {


    let credentials;
    const my_login_page = new loginPage();
    const board = new dashboard();
    // importing the stored username and password
    before(() => {
        cy.fixture("Login_credentials").then((data) => {
            credentials = data;
        });
    });

    beforeEach(() => {
        my_login_page.navigate("/");
        my_login_page.validLogin(credentials.username, credentials.password);
    });


    it('Verify the available menus', () => {
        board.verifyMenus()
    })
    it("Checking Name and Hub of the user", () => {
        board.verifyNameAndHub(credentials.Firstname, credentials.hubName);
    });
    it("Testing other functionality", () => {
        board.otherChecks();
    });

    it("Logout of the app", () => {
        board.logout('http://planning-portal.agric-os.com/');
    });


});

