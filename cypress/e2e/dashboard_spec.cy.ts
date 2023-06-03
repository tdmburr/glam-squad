/// <reference types="Cypress" />

describe('User dashboard with user flows.', () => {
  
  beforeEach(() => {
    
    cy.intercept("GET", 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=CoverGirl', {
      statusCode: 200,
      fixture: 'multipleStub.json'
    })
    cy.intercept("GET", 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline', {
      statusCode: 200,
      fixture: 'multipleStub.json'
    })
    cy.visit("http://localhost:3000/")   
  })

  it('Should have a title', () => {

    cy.get('header')
  })

  it('Should have a flashy header text', () => {

    cy.get('header')
      .contains('h1', 'Elevate your beauty game with Glam Squad!')
  })

  it('Should have a selector with a dropdown menu with several brand options, once selected the featured brand should update', () => {

    cy.get('.select')
      .select("Maybelline")
    cy.get('.featured-container')
      .contains('h3', "Featured Brand: Maybelline")     
  })

  it('Should have a featured brand tag to display to the user by default', () => {

    cy.get('.featured-container')
      .contains('h3', "Featured Brand: CoverGirl")
  })

  it('Should have visible cards for a brand, they should be clickable to view product details, following being clicked, you should be able to click the logo to return home', () => {

     cy.get('[href="/maybelline/495"] > .product-card > .product-name')
      .click()
    cy.get('.product-info-img')
    cy.get('.product-name')
    cy.get('.product-info-container')
      .contains('Brand')
    cy.get('.product-info-container')
      .contains('Price')
    cy.get('.product-info-container')
      .contains('Rating')  
    cy.get(':nth-child(2) > :nth-child(6)')
      .contains('Maybelline Face Studio Master Hi-Light Light Boosting bronzer formula has an expert balance of shade + shimmer illuminator')
    cy.get('#header-logo')
      .click()
  })


})
