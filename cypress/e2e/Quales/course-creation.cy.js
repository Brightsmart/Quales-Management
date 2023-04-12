/// <reference types="cypress" />

describe('Automation of course creation process and Delete on the Quales Course Management app', () => {

    it('verify that courses are successfully created after inputing all the expected fields', () => {

        cy.visit('https://academy.quales.tech/');
        cy.get('.css-48p1y4 > .MuiButtonBase-root').click();
        cy.get('[data-testid="EmailAddress"]').type('ay@mail.com');
        cy.get('[data-testid="Password"]').type('pass1234');
        cy.get('.MuiButton-contained').click();
        cy.contains('Courses').should('be.visible');
        cy.contains('Login Successfull').should('be.visible');
        cy.contains('List of Courses').should('be.visible');
        cy.get('.MuiGrid-root > .MuiButtonBase-root').click();
        cy.wait(4000);
        cy.get('[data-testid="Title*"]').click({force:true});
        cy.get('[data-testid="Title*"]').type('Software Development Life Cycle');
        cy.get('[data-testid="Description*"]').type('To know about the processes of SDLC');
        cy.viewport("macbook-16");
        cy.get('#demo-simple-select').click(); 
        cy.get('[data-value="3"]').click();
        //cy.get('[data-testid="isPremium"]').click();
        cy.get('[data-testid="ImageURL"]').type('https://source.unsplash.com/user/c_v_r/900x800');
        cy.get('[data-testid="offline"]').click();
        cy.get('[data-testid="Address*"]').type('https://www.youtube.com/watch?v=8vXoMqWgbQQ');
        cy.get('.css-tzsjye > .MuiButton-root').click();
    })
    it('Verify that created courses can be deleted from the web app', () => {
        cy.visit('https://academy.quales.tech/');
        cy.get('.css-48p1y4 > .MuiButtonBase-root').click();
        cy.get('[data-testid="EmailAddress"]').type('ay@mail.com');
        cy.get('[data-testid="Password"]').type('pass1234');
        cy.get('.MuiButton-contained').click();
        cy.wait(4000);
        cy.get(':nth-child(8) > .MuiCardContent-root > .MuiTypography-body1').click();
        cy.get('.css-wvpqgg').click();
        cy.get('.MuiBox-root > .MuiButton-contained').click();

    })
})