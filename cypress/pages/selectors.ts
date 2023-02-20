export class LoginPageSelectors{
    readonly email = "#email"
    readonly password = "#password"
    readonly loginButton = "#loginButton"
    readonly popupCloseButton = ".close-dialog"
    readonly navbarAccountButton = "#navbarAccount"
    readonly navbarLoginButton = "#navbarLoginButton"
}

export class HomePageSelectors{
    readonly navbarLogo = ".logo"
    readonly navbarBasket = "[aria-label *= 'cart']"
    readonly navbarSearchIcon = ".mat-search_icon-search"
    readonly searchArea = ".mat-search_field .mat-form-field-flex"
    readonly addToBasketButton = ".btn-basket"
    readonly itemCard = ".mat-grid-tile"
    readonly itemName = ".item-name"
    readonly addToBasketPopup = ".mat-simple-snackbar"
}

export class BasketSelectors{
    readonly basketPageHeading = "h1"
    readonly itemsInBasket = "mat-row"
    readonly checkoutButton = "#checkoutButton .mat-button-wrapper"
    readonly deleteItem = ".fa-trash-alt"
}

export class AddressSelectors{
    readonly countryInputField = "[placeholder *= 'country']"
    readonly nameInputField = "[placeholder *= 'name']"
    readonly mobileInputField = "[placeholder *= 'mobile number']"
    readonly zipCode = "[placeholder *= 'ZIP code']"
    readonly addressTextarea = "[placeholder *= 'address']"
    readonly cityInputField = "[placeholder *= 'city']"
    readonly stateInputField = "[placeholder *= 'state']"
    readonly submitButton = "#submitButton"
    readonly addressInSelectAddress = "mat-row"
    readonly continueButton = ".btn-next"
    readonly addNewAddressButton = ".btn-new-address .mat-button-wrapper"

}
