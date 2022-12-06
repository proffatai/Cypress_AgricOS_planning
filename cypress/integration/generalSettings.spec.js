///<reference types="cypress"/>
import { loginPage } from "./POM/loginPage";
import { generalSettings } from "./POM/generalSettings";

describe("General Settings", () => {
  let credentials;
  const my_login_page = new loginPage();
  const general = new generalSettings();
  // importing the stored username and password
  before(() => {
    cy.fixture("Login_credentials").then((data) => {
      credentials = data;
    });
  });

  beforeEach(() => {
    my_login_page.navigate("/");
    my_login_page.validLogin(credentials.username, credentials.password);
    general.visitGeneralSettings();
  });

  it("Verify the headings on the page", () => {
    general.verifyHeadngs();
  });
  it("Select Country", () => {
    general.selectCountry();
  });
  it("Select Language", () => {
    general.selectLanguage();
  });
  it("Select Timezone", () => {
    general.selectTimezone();
  });
  it("Select Currency", () => {
    general.selectCurrency();
  });
  it("Select Crop type", () => {
    general.selectCrop();
  });
  it("Select Season", () => {
    general.selectSeason();
  });
  it("Select Airtime", () => {
    general.selectAirtime();
  });
  it("Select Threshold", () => {
    general.selectThreshold();
  });
  it("Select Date", () => {
    general.selectDate();
  });
});
