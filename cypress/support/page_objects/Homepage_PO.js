/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class Hompage_PO extends Base_PO {
    navigateToHomepage(){
        super.navigate("");
    }

    clickOn_ContactUs_Button(){
        cy.clickAndOpenLink_InSameTab("#contact-us");
    }

    clickOn_Login_Button(){
        cy.clickAndOpenLink_InSameTab("#login-portal");
    }
}
export default Hompage_PO;