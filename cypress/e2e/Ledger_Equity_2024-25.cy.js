describe('Ledger_Equity_2024-25', () => {
    it('Ledger_Equity_2024-25', () => {
       cy.Login()
       cy.wait(1500)
  
       //cy.origin('https://comet.jainam.in', () => {
       //cy.wait(8000)
       
       // 1. Ledger All 2024-25
        cy.get("label:contains('Segment')").next("kendo-dropdownlist").find("button").click()
        cy.wait(1500)
        cy.get('ul[role="listbox"]').contains('EQUITY').click()
        cy.get("label:contains('FY Year')").next("kendo-dropdownlist").find("button").click()
        cy.wait(1500)
        cy.contains('ul[role="listbox"] li', '2024-2025').click()
        cy.wait(1500)

        //View Data
        cy.get("input[name='Code']").type("wa5320")
        cy.get(".col-lg-2.col-md-3.mt-2").click()
        // Download Excel
        cy.get("button[title='Download']").click()
        cy.get("body > app-root:nth-child(1) > app-layout:nth-child(2) > div:nth-child(2) > app-ledger:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)").click()
        // Download PDF
        cy.get("#pdf").click()
        cy.wait(1500)
        cy.get("body > app-root:nth-child(1) > app-layout:nth-child(2) > div:nth-child(2) > app-ledger:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)").click()
        // Close Popup
        cy.get("button[aria-label='Close']").click()
        cy.wait(1500)

        
    }); 
}); 
// }); 
