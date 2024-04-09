// /// <reference types="cypress" /> - to get suggestions
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_objects/Login_PO";

let stub;
const loginPage = new Login_PO;

Given('I navigate to the webdriveruniversity login page', () => {
  loginPage.navigateTo_Login_Page();
})

When(
  `I type an user name {word} and last name {string}`,
  (username, password) => {
    // cy.get('[type="text"]').type(username);
    // cy.get("#password").type(password);
    loginPage.type_Username(username);
    loginPage.type_Password(password);
  }
);

When(`I click on the login button`, () => {
  stub = cy.stub();
  cy.on('window:alert', stub)
  // cy.get("#login-button").click();
  loginPage.clickOn_Login_Button();
});

Then(`I should be presented with alert box with text {string}`, (message) => {
  expect(stub).to.have.been.calledWith(message);
})