import { Strings } from "../globals/strings";

export class BasePage {

    strings = new Strings();

    /**
     * set a delay
     * @param value - value of time to wait
     */
    setDelay(value: number = 2000) {
        cy.wait(value);
    }

    /**
     * check for element existence in the Dom if exist then click
     * @param element - WebElement
     */

    clickIfExist(element) {
        this.setDelay()
        cy.get('body').then((body) => {
            if (body.find(element).length > 0) {
                cy.get(element ).click({ multiple: true , force:true});
            }
        });
    }

    /**
     * get element and click on it
     * @param selector - WebElement
     */

    getElementAndClick(selector: any) {
        return cy.get(selector, { timeout:10000 }).click({force:true})
    }

    /**
     * type in input field
     * @param selector - selector for input field
     * @param text - string to type
     */
    enterText(selector: any, text: string){
        cy.get(selector).clear().type(text);
    }

    /**
     * verify element exist and is visible
     * @param selector - selector for element to verify
     */
    verifyElementExistAndVisible(selector: any){
        cy.get(selector).should('exist').should('be.visible');
    }

    /**
     * create a random number of any length
     */
    generateRandomNumber(max:number){
        return String(Math.floor(Math.random() * max));
    }

    /**
     *  generate random string for address
     */
    generateAddress(){
        return  Math.random().toString(36).substring(2,7);
    }

    /**
     * verify element contains text
     */
    verifyElementContainsText(element,text){
        cy.get(element).contains(text)
    }

    /**
     * verify element is enabled
     * @param element
     */
    verifyElementIsEnabledThenClick(element){
        cy.get(element).should("be.enabled").click();
    }
}