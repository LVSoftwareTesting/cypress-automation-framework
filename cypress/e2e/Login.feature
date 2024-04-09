@login @regression
Feature: Login Page

    Background: Pre-conditions
        When I wait for 0 seconds
        Given I navigate to the webdriveruniversity login page

    Scenario Outline: Validate valid and invalid login credentials
        And I type an user name <username> and last name '<password>'
        And I click on the login button
        Then I should be presented with alert box with text '<text>'

        Examples:
            | username  | password      | text                 |
            | webdriver | webdriver123  | validation succeeded |
            | webdriver | webdriver1234 | validation failed    |
            | webdriver | password      | validation failed    |
