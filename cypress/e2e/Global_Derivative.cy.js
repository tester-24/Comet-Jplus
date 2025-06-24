describe('Global_Derivative', () => {
    it('Global_Derivative', () => {
       cy.Login()
       cy.wait(1500)
  
      // cy.origin('https://comet.jainam.in', () => {
      // cy.wait(8000)

       // Click on reports menu
       cy.get("#ReportDropdown").click()
       cy.get("body > app-root:nth-child(1) > app-layout:nth-child(2) > app-headerpanel:nth-child(1) > div:nth-child(1) > div:nth-child(2) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > a:nth-child(4)").click()
       cy.wait(1500)
       // Click the Segment dropdown
       cy.get("label:contains('Segment')").next("kendo-dropdownlist").find("button").click()
       cy.wait(1500)
       cy.get('ul[role="listbox"]').contains('Derivative').click()
       cy.get("kendo-dropdownlist[name='downloadby'] button.k-input-button").click()
       cy.wait(1500)

       // Scriptwise Scenario
       cy.get('ul[role="listbox"]').contains('ScriptWise').click()
       cy.wait(1500)
       cy.get("#datepicker-1").click()
       cy.wait(1500)
       cy.get("#datepicker-1").clear().type("01-06-2025")
       cy.wait(1500)
       cy.get("input[name='code']").type("wa5320")

       cy.get("kendo-dropdownlist[name='downloadType'] button.k-input-button").click()
       cy.get("ul[role='listbox'] li:contains('PDF')").click()
       cy.get("button[class='btn submit-btn btn-block border-0 w-100']").click()

       cy.wait(1500)
       cy.get("kendo-dropdownlist[name='downloadType'] button.k-input-button").click()
       cy.wait(1500)
       cy.get("ul[role='listbox'] li:contains('Excel')").click()
       cy.get("button[class='btn submit-btn btn-block border-0 w-100']").click()

       // Datewise Scenario
       cy.get("kendo-dropdownlist[name='downloadby'] button.k-input-button").click()
       cy.wait(1500)
       cy.get('ul[role="listbox"]').contains('DateWise').click()
       cy.wait(1500)
       // Download Excel
       cy.get("button[class='btn submit-btn btn-block border-0 w-100']").click()

       // Download PDF
       cy.get("kendo-dropdownlist[name='downloadType'] button.k-input-button").click()
       cy.get("ul[role='listbox'] li:contains('PDF')").click()
       cy.get("button[class='btn submit-btn btn-block border-0 w-100']").click()
    }); 
}); 
// }); 
