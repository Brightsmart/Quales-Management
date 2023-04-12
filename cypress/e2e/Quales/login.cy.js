/// <reference types="cypress" />

describe("this is were i'm gonna run all test suite for Login page", () => {

    it('verify that users login successfully', () => {

        cy.visit('https://academy.quales.tech/');
        cy.get('.css-48p1y4 > .MuiButtonBase-root').click();
        cy.get('[data-testid="EmailAddress"]').type('ay@mail.com');
        cy.get('[data-testid="Password"]').type('pass1234');
        cy.get('.MuiButton-contained').click();
        cy.contains('Courses').should('be.visible');
        cy.contains('Login Successfull').should('be.visible');
        cy.contains('List of Courses').should('be.visible');
        // test that users are able to log out
        cy.wait(5000);
        cy.get('.MuiToolbar-root > .MuiButton-root').click();
        cy.contains('Logged out successfully').should('be.visible');
        cy.contains('Email Address').should('be.visible');
    })
})