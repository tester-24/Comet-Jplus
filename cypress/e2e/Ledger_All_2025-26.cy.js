describe('Ledger_All_2025-26', () => {
    it('Ledger_All_2025-26', () => {
       cy.Login()
       cy.wait(4000)
  
      // cy.origin('https://comet.jainam.in', () => {
       cy.wait(8000)
       
       // 1. Ledger All 2025-26  7 days View 
        cy.get("label:contains('FY Year')").next("kendo-dropdownlist").find("button").click()
        cy.wait(2000)
        cy.get("input[name='Code']").type("wa5320")
        //View Data
        // cy.get("input[name='Code']").type("wa5320")
        cy.get(".col-lg-2.col-md-3.mt-2").click()
        // Download Excel
        cy.get("button[title='Download']").click()
        cy.get("body > app-root:nth-child(1) > app-layout:nth-child(2) > div:nth-child(2) > app-ledger:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)").click()
        // Download PDF
        cy.get("#pdf").click()
        cy.wait(2000)
        cy.get("body > app-root:nth-child(1) > app-layout:nth-child(2) > div:nth-child(2) > app-ledger:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)").click()
        // Close Popup
        cy.get("button[aria-label='Close']").click()
        cy.wait(2000)
  
        // 2. Ledger All 2025-26  15 days View 
        cy.get("label:contains('Calendar')").next("kendo-dropdownlist").find("button").click()
        cy.wait(2000)
        cy.contains('ul[role="listbox"] li', 'Last 15 Days').click();
        //View Data
        //cy.get("input[name='Code']").type("wa5320")
        cy.get(".col-lg-2.col-md-3.mt-2").click()
        cy.wait(5000)
        // Download Excel
        cy.get("button[title='Download']").click()
        cy.get("body > app-root:nth-child(1) > app-layout:nth-child(2) > div:nth-child(2) > app-ledger:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)").click()
        // Download PDF
        cy.get("#pdf").click()
        cy.wait(2000)
        cy.get("body > app-root:nth-child(1) > app-layout:nth-child(2) > div:nth-child(2) > app-ledger:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)").click()
        // Close Popup
        cy.get("button[aria-label='Close']").click()
        cy.wait(2000)
  
        // 3. Ledger All 2025-26  30 days View
        cy.get("label:contains('Calendar')").next("kendo-dropdownlist").find("button").click()
        cy.wait(2000)
        cy.contains('ul[role="listbox"] li', 'Last 30 Days').click();
        cy.wait(2000)
        //View Data
        //cy.get("input[name='Code']").type("wa5320")
        cy.get(".col-lg-2.col-md-3.mt-2").click()
        cy.wait(5000)
        // Download Excel
        cy.get("button[title='Download']").click()
        cy.get("body > app-root:nth-child(1) > app-layout:nth-child(2) > div:nth-child(2) > app-ledger:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)").click()
        // Download PDF
        cy.get("#pdf").click()
        cy.wait(2000)
        cy.get("body > app-root:nth-child(1) > app-layout:nth-child(2) > div:nth-child(2) > app-ledger:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)").click()
        // Close Popup
        cy.get("button[aria-label='Close']").click()
        cy.wait(2000)
      
  
        // 4. Ledger All 2025-26  CFY View
        cy.get("label:contains('Calendar')").next("kendo-dropdownlist").find("button").click()
        cy.wait(2000)
        cy.contains('ul[role="listbox"] li', 'Current Financial Year').click();
        cy.wait(2000)
        //View Data
        //cy.get("input[name='Code']").type("wa5320")
        cy.get(".col-lg-2.col-md-3.mt-2").click()
        cy.wait(5000)
        // Download Excel
        cy.get("button[title='Download']").click()
        cy.get("body > app-root:nth-child(1) > app-layout:nth-child(2) > div:nth-child(2) > app-ledger:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)").click()
        // Download PDF
        cy.get("#pdf").click()
        cy.wait(2000)
        cy.get("body > app-root:nth-child(1) > app-layout:nth-child(2) > div:nth-child(2) > app-ledger:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)").click()
        // Close Popup
        cy.get("button[aria-label='Close']").click()
        cy.wait(2000)
  
        // 5. Ledger All 2025-26  CFY View
        cy.get("label:contains('Calendar')").next("kendo-dropdownlist").find("button").click()
        cy.wait(2000)
        cy.contains('ul[role="listbox"] li', 'Custom').click();
        cy.wait(2000)
  
        cy.get("#datepicker-1").click()
        cy.get("#datepicker-1").clear().type("01/06-2025")
        cy.wait(2000)
        cy.get("kendo-datepicker[id='ToCustomCalendarDate'] kendo-icon[class='k-i-calendar k-button-icon k-icon ng-star-inserted']").click()
        cy.wait(2000)
        cy.get('.k-calendar-nav-today').click()
        cy.wait(2000)

        //View Data
        //cy.get("input[name='Code']").type("wa5320")
        cy.get(".col-lg-2.col-md-3.mt-2").click()
        cy.wait(5000)
        // Download Excel
        cy.get("button[title='Download']").click()
        cy.get("body > app-root:nth-child(1) > app-layout:nth-child(2) > div:nth-child(2) > app-ledger:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)").click()
        // Download PDF
        cy.get("#pdf").click()
        cy.wait(2000)
        cy.get("body > app-root:nth-child(1) > app-layout:nth-child(2) > div:nth-child(2) > app-ledger:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)").click()
        // Close Popup
        cy.get("button[aria-label='Close']").click()
        cy.wait(2000)
  
               }); 
               }); 
              // }); 