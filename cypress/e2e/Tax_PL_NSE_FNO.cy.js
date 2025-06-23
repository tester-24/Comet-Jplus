describe('Tax_PL_NSE_FNO', () => {
    it('Tax_PL_NSE_FNO', () => {
       cy.Login()
       cy.wait(4000)
  
     //  cy.origin('https://comet.jainam.in', () => {
       cy.wait(8000)

       cy.get("#ReportDropdown").click()
       cy.get("body > app-root:nth-child(1) > app-layout:nth-child(2) > app-headerpanel:nth-child(1) > div:nth-child(1) > div:nth-child(2) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > a:nth-child(5)").click()
       cy.wait(2000)
       cy.get("label:contains('Segment')").next("kendo-dropdownlist").find("button").click()
       cy.wait(2000)
       cy.get('ul[role="listbox"]').contains('NSE_FNO').click()
       cy.wait(2000)
       cy.get("input[name='Code']").type("wa5320")
       cy.get("button[type='submit']").click()
    }); 
}); 
// }); 