describe("User dashboard with error handling", () => {

  beforeEach(() => {
    cy.intercept("GET", 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=CoverGirl', {
      statusCode: 200,
      fixture: 'multipleStub.json'
    })
  })

    it('Should have an error message if the API is broken', () => {

      cy.visit('http://localhost:3000/error')
      cy.get('.message')
        .contains('p', "Oops, that's not very glam-of-us")
    })

    it('Should show an error message if no rating is available', () => {
      cy.visit('http://localhost:3000/');
      cy.get('[href="/coverg/499"] > .product-card')
        .find('span.error-message')
        .contains('Not Available');
    });
})