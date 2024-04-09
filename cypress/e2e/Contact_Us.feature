@contact-us @regression
Feature: WebdriverUniversity - Contact Us Page

    Background: Pre-conditions
        Given I navigate to the webdriveruniversity hompegae
        When I click on the contact us button

    Scenario: Valid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I type an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submision message

    Scenario: Invalid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessful contact us submision message

    Scenario: Valid Contact Us Form Submission - Using specific data
        And I type a specific first name "Sarah"
        And I type a specific last name "Woods"
        And I enter an specific email address "sarah_woods101@gmail.com"
        And I type a specific word "Hello world, how are you?" and number 6788 within the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submision message

    @smoke
    Scenario Outline: Valid Contact Us page
        And I type a first name <firstName> and last name '<lastName>'
        And I type an '<emailAddress>' and a '<comment>'
        And I click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress            | comment                 | message                      |
            | John      | Jones    | john_johnes@email.com   | Hello how are you?      | Thank You for your Message!  |
            | Mia       | Carter   | mia_carter123@email.com | Test123 Test321         | Thank You for your Message!  |
            | Grace     | Hudson   | grace_hudson            | Do you create websites? | Error: Invalid email address |