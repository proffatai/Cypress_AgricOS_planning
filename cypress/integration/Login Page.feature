Feature: Login page

    Only user with valid login credentials should be able to login

    Scenario: User with valid username and valid password
        Given User is on the homepage of the planning module
        When User enters correct username
        And  User enters correct password
        And User clicks the login button
        Then User should be taken to the dashboard
        
    Scenario: User with invalid username and an valid password
        Given User is on the homepage of the planning module
        When User enters incorrect username
        And  User enters correct password
        And User clicks the login button
        Then User should not be taken to the dashboard

        
    Scenario: User with invalid username and an invalid password
        Given User is on the homepage of the planning module
        When User enters incorrect username
        And  User enters incorrect password
        And User clicks the login button
        Then User should not be taken to the dashboard

    Scenario: User with valid username and an invalid password
        Given User is on the homepage of the planning module
        When User enters correct username
        And  User enters incorrect password
        And User clicks the login button
        Then User should not be taken to the dashboard due to password