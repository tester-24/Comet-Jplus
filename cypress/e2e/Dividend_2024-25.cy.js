describe('Dividend_2024-25', () => {
    it('Dividend_2024-25', () => {
       cy.Login()
       cy.wait(4000)
  
      // cy.origin('https://comet.jainam.in', () => {
       cy.wait(8000)

        // Click on reports menu
        cy.get("#ReportDropdown").click()
        cy.get("body > app-root:nth-child(1) > app-layout:nth-child(2) > app-headerpanel:nth-child(1) > div:nth-child(1) > div:nth-child(2) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > a:nth-child(6)").click()
        cy.wait(2000)
        cy.get('kendo-dropdownlist[name="Year"]').click();
        cy.wait(2000)
        cy.get('.k-list-item').contains('2024-2025').click();
        cy.wait(2000)
        cy.get('input[kendotextbox]').type('WA5320');
        // View Data
        cy.get(".btn.btn-block.w-100.border-0").click()
        cy.wait(5000)
        // Excel Download
        cy.get(".ng-star-inserted[src='../../../../assets/image/icon/excel.png']").click()
        cy.wait(2000)
        cy.get(".ng-star-inserted[src='../../../../assets/image/icon/pdf.png']").click()

    }); 
}); 
//}); 