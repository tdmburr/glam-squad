/// <reference types="Cypress" />

describe('User dashboard with user flows.', () => {
  
  beforeEach(() => {
    
    cy.intercept("GET", 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=dior', {
      statusCode: 200,
      fixture: 'multipleStub.json'
    }).as('home')
      cy.visit("http://localhost:3000/")
  })

  it('Should have a title', () => {

    cy.get('header')
  })

  it('Should have a flashy header text', () => {

    cy.get('header')
      .contains('h1', 'Elevate your beauty game with Glam Squad!')
  })

  it('Should have a selector with a dropdown menu, and a submit / clear button', () => {

    cy.get('.select')
      .select("Maybelline")
    cy.get('button')
      .contains('SUBMIT')
      // .click()
    cy.get('button')
      .contains('CLEAR')      
  })

  it('Should have a featured brand tag to display to the user', () => {

    cy.get('.featured-container')
      .contains('h3', /Featured Brand/i)
  })
})
