import { BasePageApi } from "../../pages/oowsap_apis";

describe("Verify user is successfully able to search and order products using api", function() {
  let endUser = new BasePageApi();

  it("sign in the user, add 1 item to the basket, verify that 1 item is in the basket", function() {
    endUser.loginAndFetchToken()
    cy.log("user is signed in successfully")
    endUser.clearBasketIfProductExist()
    cy.log("clear the basket if products already exist in basket")
    endUser.addProductToBasket(1, 1)
    cy.log("Added 1 item to the basket")
    endUser.verifyProductGotAddedSuccessfully(1)
    cy.log("Product is added Successfully")
  })

  it("add 2 items instead of 1 to the basket", function() {
    endUser.clearBasketIfProductExist()
    cy.log("clear the basket if products already exist in basket")
    endUser.addProductToBasket(2, 1)
    endUser.addProductToBasket(3, 1)
    cy.log("Added 2 items to the basket")
    endUser.verifyProductGotAddedSuccessfully(2)
    cy.log("2 Products are added Successfully")
  })

  it("delete 1 item and verify only 1 item remains in the basket", function() {
    endUser.deleteProductBasedOnIndex(0)
    cy.log('deleted 1 item')
    endUser.verifyProductGotAddedSuccessfully(1)
    cy.log("Only 1 Product remains in the bucket")
  })
})
