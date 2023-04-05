///<reference types="cypress" />
const { defineConfig } = require("cypress");
//const { config } = require("cypress/types/bluebird");
const { reporters, setup } = require("mocha");
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
/*
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}
*/
module.exports = defineConfig({
//  projectId: "huk46b",
  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: 
  { charts: true, 
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    reportPageTitle: 'Abstracta Suite', 
    embeddedScreenshots: true, 
    inlineAssets: true,
     saveAllAttempts: false,
      overwrite: true, 
      html: true, 
      json: false, 
      screenshotsFolder: "D:\cypress\cypress\integration\FinmarkAutomation\screenshotsFolder",
       reportDir: "D:\cypress\cypress\integration\FinmarkAutomation\screenshotsFolder", 
      },
  
      
    setupNodeEvents(on,config){
    require('cypress-mochawesome-reporter/plugin')(on);
  }
 

});
