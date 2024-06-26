// /// <reference types="cypress" /> - to get suggestions
import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";
// import Base_PO from "../page_objects/Base_PO";
import Hompage_PO from "../page_objects/Homepage_PO";

// const url = "https://www.webdriveruniversity.com/";

// const basePage = new Base_PO();
const homePage = new Hompage_PO();


Before(() => {
    cy.log("Executing commands inside Homepage Steps.");
})

Given(`I navigate to the webdriveruniversity hompegae`, () => {
    // cy.visit(url);
    // basePage.navigate("");
    homePage.navigate("");
})

When(`I click on the contact us button`, () => {
    // cy.get("#contact-us").invoke("removeAttr", "target").click();
    // cy.clickAndOpenLink_InSameTab("#contact-us");
    homePage.clickOn_ContactUs_Button();
})

When(`I click on the login button on home page`, () => {
    // cy.get("#login-portal").invoke("removeAttr", "target").click();
    // cy.clickAndOpenLink_InSameTab("#login-portal");
    homePage.clickOn_Login_Button();
})