import { HomePageSelectors } from "./selectors";
import { BasePage } from "./base_page";

export class HomePage extends BasePage{

  homeSelectors = new HomePageSelectors()

  /**
   * click on navbar logo
   */
  tapOnNavbarLogo(){
    this.getElementAndClick(this.homeSelectors.navbarLogo)
  }

  /**
   * click on product add to basket button
   */
  addProductToBasket(...cards){

    for(let index of cards){
      cy.get(this.homeSelectors.itemCard).eq(Number(index)).find(this.homeSelectors.addToBasketButton).click();
      this.setDelay()
      this.verifyPopupMessage(index)
    }
  }

  /**
   * verify pop message
   */
  verifyPopupMessage(index){
    cy.get(this.homeSelectors.itemCard).eq(index).find(this.homeSelectors.itemName).invoke(
      'text').then((text)=>{
      cy.get(this.homeSelectors.addToBasketPopup).contains(text)
    })
  }

  /**
   * click on basket in navbar
   */
  tapOnBasket(){
    this.getElementAndClick(this.homeSelectors.navbarBasket);
  }

  /**
   * verify and click on search icon
   */
  tapOnSearchIcon(){
    this.verifyElementExistAndVisible(this.homeSelectors.navbarSearchIcon)
    this.getElementAndClick(this.homeSelectors.navbarSearchIcon)
  }

  /**
   * type in search field
   */
  typeInSearchField(){
    cy.get(this.homeSelectors.searchArea).type(this.strings.appleText+`{enter}`)
  }

  /**
   * verify two products after search
   */
  verifyNumberOfProductsAfterSearch(expected_length:number){
    cy.get(this.homeSelectors.itemCard).then(($item)=>{
      const itemCount = Cypress.$($item).length
      expect(itemCount).to.eq(expected_length)
    })
  }

  /**
   * verify no banana product appears after searching apple
   */
  verifyProductContainsAppleOnly(){
    cy.get(this.homeSelectors.itemCard).find(this.homeSelectors.itemName).each(($itemName)=>{
      cy.wrap($itemName).should('not.have.text',this.strings.bananaText)
    })
  }

  /**
   * validate we are getting only 2 products that are on category apple not banana
   */

  searchAppleFromProducts(){
    this.tapOnNavbarLogo()
    this.tapOnSearchIcon()
    this.typeInSearchField()
    this.verifyNumberOfProductsAfterSearch(2)
    this.verifyProductContainsAppleOnly()
  }
}