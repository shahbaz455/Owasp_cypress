import { CustomerDetails } from "../../pages/address_form";

describe("Verify user is successfully able to search and order products", function() {
  let endUser = new CustomerDetails();

  it("Verify order is placed successfully for single items", function() {
    endUser.clearBasketItems()
    cy.log("Go to Basket and clear all products")
    endUser.addProductToBasket(1);
    cy.log("Add product to bucket based on card number")
    endUser.tapOnBasket();
    cy.log("Go back to basket again to complete the order")
    endUser.verifyBasketItemsAndTapOnCheckout(1)
    cy.log("validate basket contains item and hit checkout")
    endUser.tapOnAddNewAddress()
    cy.log("tap on new address button to open up a form")
    endUser.fillAddressForm()
    cy.log("Fill all the fields in the form and hit submit")
    endUser.selectDeliveryAddress(0)
    cy.log("It will redirect us to main page where address radio button is available tap on it")

  });

  it("Verify order is placed successfully for two items", function() {
    endUser.tapOnNavbarLogo()
    cy.log("tap on logo button to load home page")
    endUser.addProductToBasket(2,3);
    cy.log("Add products to bucket based on card numbers")
    endUser.tapOnBasket();
    cy.log("Go back to basket again to complete the order")
    endUser.verifyBasketItemsAndTapOnCheckout(3)
    cy.log("validate basket contains right items and hit checkout")
    endUser.tapOnAddNewAddress()
    cy.log("tap on new address button to open up a form")
    endUser.fillAddressForm()
    cy.log("Fill all the fields in the form and hit submit")
    endUser.selectDeliveryAddress(1)
    cy.log("It will redirect us to main page where address radio button is available tap on it")

  });

  it("Validate search is working good for specific product", function() {
    endUser.searchAppleFromProducts()
    cy.log("searched for product Apple and it gave us 2 result that contains Apple as keyword not banana")
  });
});
