Feature: General settings screen

    User has successfully logged in to the application and can now on the General Settings page

    Scenario: User with valid username and valid password
        Given User is on the homepage of the planning module
        When User enters correct username
        And  User enters correct password
        And User clicks the login button
        Then User should be taken to the dashboard
    
    Scenario: Verify that some of the headings are present 
        Given User has successfully logged in to the application
        When User is on the General Settings page
        Then Application should display all the menus
    
    Scenario: User wants to select country, language, timezone and currency
    Given User has successfully logged in to the application
    When User is on the General Settings page
    And User has located the country, language, timezone and currency field    
    Then User should be able to select any value from the options available

     Scenario: User wants to select crop, season and airtime
    Given User has successfully logged in to the application
    When User is on the General Settings page
    And User has located the crop, season and airtime field    
    Then User should be able to select from the options available
    @focus
    Scenario: User wants to enter value for threshold, Number of Members per TFM Sign-up Personnel,Number of members per statement review personnel and Number of Members per Crowd Control Personnel
    Given User has successfully logged in to the application
    When User is on the General Settings page
    And User has located and typed value for threshold, Number of Members per TFM Sign-up Personnel,Number of members per statement review personnel and Number of Members per Crowd Control Personnel field    
    Then User should be able to ascertain that the values are stored
    