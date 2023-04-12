/// <reference types="cypress" />

describe("Doing a negative test suite for Login", ()=> {

    it("verify that users doesn't login with invalid credentials", ()=> {
        cy.visit('https://academy.quales.tech/');
        cy.contains('QLearn');
        cy.contains('Training');
        cy.contains('Courses');
        cy.get('.css-48p1y4 > .MuiButtonBase-root').click();
        cy.get('[data-testid="EmailAddress"]').type('ght@ya.com');
        cy.get('[data-testid="Password"]').type('123refd');
        cy.get('.MuiButton-contained').click();
        cy.contains('Password must be 8 characters with at least one letter and one digit');
    })

    it("verify that users doesn't login with invalid credentials", ()=> {
        cy.visit('https://academy.quales.tech/');
        cy.contains('QLearn');
        cy.contains('Training');
        cy.contains('Courses');
        cy.get('.css-48p1y4 > .MuiButtonBase-root').click();
        cy.get('[data-testid="EmailAddress"]').type('ght@ya.com');
        cy.get('[data-testid="Password"]').type('123refd56y');
        cy.get('.MuiButton-contained').click();
        cy.contains('Invalid Login Credential');
    })
})