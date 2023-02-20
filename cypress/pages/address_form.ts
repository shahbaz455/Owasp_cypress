import { Basket } from "./basket";
import { AddressSelectors } from "./selectors";

export class CustomerDetails extends Basket {
  addressSelectors = new AddressSelectors()


  /**
   *  tap on add new address
   */
  tapOnAddNewAddress(){
    this.getElementAndClick(this.addressSelectors.addNewAddressButton);
  }

  /**
   *  add country in new address
   */
  addCountry(){
    this.enterText(this.addressSelectors.countryInputField, this.strings.country)
  }

  /**
   * add name to new address
   */
  addName(){
    this.enterText(this.addressSelectors.nameInputField, this.strings.name);
  }

  /**
   * add mobile number to new address
   */
  addMobileNumber(){
    this.enterText(this.addressSelectors.mobileInputField, this.generateRandomNumber(1000000000))
  }

  /**
   * add zip code to new address
   */
  addZipCode(){
    this.enterText(this.addressSelectors.zipCode, "54000")
  }

  /**
   *  add address to new address
   */
  addAddress(){
    let address = this.generateAddress()
    this.enterText(this.addressSelectors.addressTextarea, address)
  }

  /**
   * add city to new address
   */
  addCity(){
    this.enterText(this.addressSelectors.cityInputField,this.strings.city)
  }

  /**
   * add state to new address
   */
  addState(){
    this.enterText(this.addressSelectors.stateInputField,this.strings.state)
  }

  /**
   * verify Submit button active
   */
  verifyAndClickOnSubmitButton(){
    this.verifyElementIsEnabledThenClick(this.addressSelectors.submitButton)
  }


  /**
   * verify Address exist in select address
   */
  verifyAddress(){
    this.verifyElementExistAndVisible(this.addressSelectors.addressInSelectAddress)
  }

  /**
   * click on radio button to select address
   */
  selectAddress(indexNumber){
    cy.get(this.addressSelectors.addressInSelectAddress).eq(indexNumber).click()
  }

  /**
   * verify continue button is enabled
   */
  verifyAndClickOnContinueButton(){
    this.verifyElementIsEnabledThenClick(this.addressSelectors.continueButton)
  }


  /**
   * fill address form by passing all the value
   */
  fillAddressForm(){
    this.addCountry()
    this.addName()
    this.addMobileNumber()
    this.addZipCode()
    this.addAddress()
    this.addCity()
    this.addState()
    this.verifyAndClickOnSubmitButton()
  }

  /**
   * select right address
   */
  selectDeliveryAddress(index){
    this.verifyAddress()
    this.selectAddress(index)
    this.verifyAndClickOnContinueButton()
  }

}