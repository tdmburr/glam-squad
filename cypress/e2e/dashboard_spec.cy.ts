/// <reference types="Cypress" />

describe('User dashboard with user flows.', () => {
  
  beforeEach(() => {
    
    cy.intercept("GET", 'http://makeup-api.herokuapp.com/api/v1/**', {
      statusCode: 200,
      fixture: 'multipleStub.json'
    })
    cy.intercept("GET", 'http://makeup-api.herokuapp.com/api/v1/', {
      statusCode: 200,
      fixture: 'singleStub.json'
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

  it('Should have a featured brand tag to display to the user', () => {

    cy.get('.featured-container')
      .contains('h3', "Featured Brand: CoverGirl")
  })
})
