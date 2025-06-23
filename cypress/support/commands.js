// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('Login', (Username,password) => {
      
    const user = Username || Cypress.env('Username');
    const pass = password || Cypress.env('password');
    cy.visit('https://jplus.jainam.in/')
    cy.wait(2000)
    
    // Login Flow
    cy.xpath("/html/body/app-root/app-layout/app-sign-in/div/div/div[2]/div/form/div[1]/kendo-textbox").type('1126')
   // click on continue button
   cy.wait(2000)
    cy.xpath("//button[normalize-space()='Continue']").click()
   // enter password
   cy.wait(2000)
    cy.xpath('/html/body/app-root/app-layout/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/div/div/div/kendo-textbox/input').type('J@inam$789')
   // click on continue button
    cy.xpath("//button[normalize-space()='Continue']").click()
    
    // enter the pin 
    cy.get('#pin1').type(1)
    cy.get('#pin2').type(2)
    cy.get('#pin3').type(3)
    cy.get('#pin4').type(4)

    cy.wait(8000)
    cy.xpath("/html/body/app-root/app-layout/app-partner-header-navbar/div[1]/div/nav/div[2]/ul/li[3]/a/span/img[1]").click({force:true})
    cy.wait(1500)
    cy.window().then((win) => {
                 cy.stub(win, 'open').callsFake((url) => {    
                   win.location.href = url;                                        
                });
               });  
      
      cy.xpath("/html[1]/body[1]/app-root[1]/app-layout[1]/app-partner-header-navbar[1]/div[1]/div[1]/nav[1]/div[2]/ul[1]/li[3]/div[1]/div[1]/ul[2]/li[2]/a[1]").click({force:true})
 
})
