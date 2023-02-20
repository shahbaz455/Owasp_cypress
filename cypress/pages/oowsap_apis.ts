import { Strings } from "../globals/strings";

export class BasePageApi {

  strings = new Strings();

  getUrl(apiEndPoint:string){
    return `${Cypress.env('baseUrl')}${apiEndPoint}`
  }

  loginAndFetchToken(){
    cy.request({ method: "POST", url: this.getUrl(this.strings.loginApi),
      body: {"email": Cypress.env('email'), "password": Cypress.env('password')}
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.task('setGlobal', response.body.authentication.token )
    })
  }

  clearBasketIfProductExist(){
    cy.task('getGlobal').then(($userId) => {
      let token = `Bearer ${String($userId)}`

      cy.request({ method: "GET", url: this.getUrl(this.strings.productDetails),
        headers: { authorization: token}
      }).then((response) => {
        expect(response.status).to.eq(200)

        if (expect(response.body.data.Products.length).to.be.gt(0)){
          for (let i =0; i< response.body.data.Products.length; i++){
            cy.request({ method: "DELETE", url: this.getUrl(
              `${this.strings.addToBasketApi}/${response.body.data.Products[i]["BasketItem"]["id"]}`
              ), headers: { authorization: token }
            }).then((response) => {
              expect(response.status).to.eq(200)})

          }
        }

      })
    })
  }

  addProductToBasket(productId:number, quantity:number){
    cy.task('getGlobal').then(($userId) => {
      let type = "Bearer ";
      let token = String($userId);

      cy.request({ method: "POST", url: this.getUrl(this.strings.addToBasketApi),
        body: {"ProductId":productId, "BasketId":"8", "quantity":quantity},
        headers: { authorization: type.concat(token) }
      }).then((response) => {
        expect(response.status).to.eq(200);
      })
    })

    }

    verifyProductGotAddedSuccessfully(productCount:number){
      cy.task('getGlobal').then(($userId) => {
        let type = "Bearer ";
        let token = String($userId);

        cy.request({ method: "GET", url: this.getUrl(this.strings.productDetails),
          headers: { authorization: type.concat(token) }
        }).then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.data.Products.length).to.be.eq(productCount)
        })
      })
    }

  deleteProductBasedOnIndex(index:number){
    cy.task('getGlobal').then(($userId) => {
      let token = `Bearer ${String($userId)}`

      cy.request({ method: "GET", url: this.getUrl(this.strings.productDetails),
        headers: { authorization: token}
      }).then((response) => {
        expect(response.status).to.eq(200)

        cy.request({ method: "DELETE", url: this.getUrl(
              `${this.strings.addToBasketApi}/${response.body.data.Products[index]["BasketItem"]["id"]}`
            ), headers: { authorization: token }
          }).then((response) => {
            expect(response.status).to.eq(200)})
      })
    })
  }


}
