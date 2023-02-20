import { HomePage } from "./home_page";
import { BasketSelectors } from "./selectors";

export class Basket extends HomePage{

  basketSelectors = new BasketSelectors();

  /**
   * validate by checking email id exist on basket page
   */
  verifyBasketPageLoadedSuccessfully(){
     this.verifyElementExistAndVisible(this.basketSelectors.basketPageHeading)
  }

  /**
   * verify items exist in cart
   */
  verifyItemsInBasket(expected_length){
     this.verifyElementExistAndVisible(this.basketSelectors.itemsInBasket)
     this.verifyNumberOfItemsInCart(expected_length)
  }

  /**
   *  verify number of items in cart
   *  @param expected_length - expected number of items in cart
   */
  verifyNumberOfItemsInCart(expected_length:number){
    cy.get(this.basketSelectors.itemsInBasket).then(($item)=>{
      let itemCount = Cypress.$($item).length
      expect(itemCount).to.eq(expected_length)
    })
  }

  clearBasketItems(){
    this.tapOnBasket()
    this.clickIfExist(this.basketSelectors.deleteItem)
    this.setDelay()
    this.tapOnNavbarLogo()
  }

  /**
   * click on checkout button
   */
  tapOnCheckout(){
    this.getElementAndClick(this.basketSelectors.checkoutButton)
  }

  /**
   * verify basket items and tap on checkout
   */
  verifyBasketItemsAndTapOnCheckout(itemsInBasket){
    this.setDelay()
    this.verifyBasketPageLoadedSuccessfully();
    this.verifyItemsInBasket(itemsInBasket)
    this.tapOnCheckout()
  }
}
