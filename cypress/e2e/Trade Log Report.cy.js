describe('Trade_Log_Report', () => {
    it('Trade_Log_Report', () => {
       cy.Login()
       cy.wait(4000)
  
     //  cy.origin('https://comet.jainam.in', () => {
       cy.wait(8000)

       // Click on reports menu
       cy.get("#ReportDropdown").click()
       cy.get("body > app-root:nth-child(1) > app-layout:nth-child(2) > app-headerpanel:nth-child(1) > div:nth-child(1) > div:nth-child(2) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > a:nth-child(3)").click()
       cy.wait(2000)
       cy.get("input[name='Code']").type("wa5320")
       cy.get("button[type='submit']").click()
       cy.wait(5000)
       cy.get("label:contains('FY Year')").next("kendo-dropdownlist").find("button").click()
       cy.wait(2000)
       cy.contains('ul[role="listbox"] li', '2024-2025').click()
       cy.get("button[type='submit']").click()

    }); 
}); 
// }); 