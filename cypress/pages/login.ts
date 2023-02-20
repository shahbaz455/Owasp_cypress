import { BasePage } from "./base_page";
import { LoginPageSelectors } from "./selectors";
import { timeout } from "rxjs";

export class Login extends BasePage{

  loginSelectors = new LoginPageSelectors()

  /**
   * visit URL provided in env.json as base url
   */
  visitUrl(){
    cy.visit(Cypress.env('baseUrl'))
  }

  /**
   * locate username field and type username
   */
  enterUsername(){
    this.enterText(this.loginSelectors.email, Cypress.env('email'))
  }

  /**
   * locate password field and type password
   */
  enterPassword(){
    this.enterText(this.loginSelectors.password, Cypress.env('password'))
  }

  /**
   * tap on login button
   */
  tapOnNavLoginButton(){
    this.getElementAndClick(this.loginSelectors.navbarLoginButton)
  }

  /**
   *  dismiss welcome popup if exist
   */
  tapOnWelcomePopupCloseButton(){
    this.clickIfExist(this.loginSelectors.popupCloseButton)
  }

  /**
   * click on account from navbar
   */
  tapOnAccount(){
    this.getElementAndClick(this.loginSelectors.navbarAccountButton)
  }

  /**
   * click on Login under Account in navbar
   */
  tapOnLogin(){
    this.getElementAndClick(this.loginSelectors.loginButton)
  }

  /**
   *  perform Login
   */
  login(){
    this.visitUrl();
    this.tapOnAccount();
    this.tapOnWelcomePopupCloseButton();
    this.tapOnNavLoginButton();
    this.enterUsername();
    this.enterPassword();
    this.tapOnLogin();
  }
}
