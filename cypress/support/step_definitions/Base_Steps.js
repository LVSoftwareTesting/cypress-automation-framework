import { After, Before, When } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.log("Executes before each scenario/Test.");
    cy.clearLocalStorage();
})

Before({tags: "@smoke and @login"}, () => {
    cy.log("Executing Smoke Pack");

})

After(() => {
    cy.log("Executes after each scenario/Test.");
})

When("I wait for {int} seconds", (seconds) => {
    cy.wait(seconds * 1000);
})