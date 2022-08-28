Feature: Dashboard screen

    User has successfully logged in to the application and can access the application


    Scenario: User with valid username and valid password
        Given User is on the homepage of the planning module
        When User enters correct username
        And  User enters correct password
        And User clicks the login button
        Then User should be taken to the dashboard

    Scenario: Verify all the Menus on the dashboard are present
        Given User has successfully logged in to the application
        When User is on the Dashboard
        Then Application should display all the menus
   
    Scenario: User wants to access some functionalities on the dashboard
        Given  User has successfully logged in to the application
        When User wants to verify if some components are present
        Then Application should display the components


    Scenario:  User should be able to sign out of the application
        Given User has successfully logged in to the application
        When User access the log out button
        And User clicks on the log out button
        Then User is taken out of the application