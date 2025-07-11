const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true,
  reporter: 'cypress-mochawesome-reporter', 
  //projectId: "b6bh2b",
  //projectId: "m4t5cs",
  //projectId: "w423xs",
  projectId: "b58sz9",
  reporterOptions: {
   
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    enableCode:false,
    embeddedvideos: true,
    video: true,
  },
  e2e: {
    baseUrl: "https://jplus.jainam.in",
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },

//projectId: "m4t5cs",
  //projectId: "v4584h", 
  e2e: {
         //projectId: "m4t5cs",
          setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
      // node event listeners

     
    },
   // baseUrl: 'https://comet.jainam.in/#/startup',
  },
});

