/// <reference types="Cypress"/>

describe('My first test suite', () => {
    it('First test', () => {
        cy.visit('/')
        cy.contains('Form').click();
        cy.contains('Form Layouts').click()

    })

    it('Test Fill Inline form', () => {
        cy.get('input[placeholder="Jane Doe"]').type('Kharis Muhaimin')
        cy.get('[placeholder="Email"][type="text"]').type('kharismm19@gmail.com')
        cy.get('.custom-checkbox').first().click()
        cy.get('[status="primary"][type="submit"]')
        cy.contains('Submit')
    });


    it('Test Fill Using the Grid', () => {
        cy.get('#inputEmail1').type('kharismm19@gmail.com')
        cy.get('#inputPassword2').type('123456')
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
        cy.get('[status="primary"][type="submit"]')
        cy.contains('Sign in')
    });

    it('Test Fill Basic form', () => {
        cy.get('#exampleInputEmail1').type('kharismm19@gmail.com')
        cy.get('#exampleInputPassword1').type('123456')
        cy.get('.custom-checkbox').eq(1).click()
        cy.get('[status="danger"][type="submit"]')
        cy.contains('Submit')
    });

    it('Test Fill Form without labels', () => {
        cy.get('[placeholder="Recipients"]').type('Kharis Muhaimin')
        cy.get('[placeholder="Subject"]').type('Project Cypress')
        cy.get('textarea[placeholder="Message"]').type('Tugas PPL 3A Pengujian Menggunakan Cypress')
        cy.get('[status="success"][type="submit"]')
        cy.contains('Send')
    });

    
    it('Fill Block form', () => {
        cy.get('#inputFirstName').type('Kharis')
        cy.get('#inputLastName').type('Muhaimin')
        cy.get('#inputEmail').type('kharismm19@gmail.com')
        cy.get('#inputWebsite').type('www.tugaspplkharis.com')
        cy.get('[status="primary"][type="submit"]')
        cy.contains('Submit')
    });

    it('Fill Horizontal form', () => {
        cy.get('#inputEmail3').type('kharismm19@gmail.com')
        cy.get('#inputPassword3').type('123456')
        cy.get('.custom-checkbox').last().click()
        cy.get('[status="warning"][type="submit"]')
        cy.contains('Sign in')
    });

})