const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {

    projectId: "4ff94c",
    specPattern: "cypress/e2e/",
    viewportWidth: 2000,
    viewportHeight: 1260,
    defaultCommandTimeout: 30000,
    experimentalSourceRewriting: false,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    "reporter": "mochawesome",
    "reporterOptions": {
      "charts": true,
      "overwrite": false,
      "html": false,
      "json": true,
      "reportDir": "cypress/report"
    },

    setupNodeEvents(on, config) {
      on('task', {
        setGlobal(value: any) {
          config.env.data = value
          return null;
        },

        getGlobal() {
          return config.env.data
        },

      })

    }
  },

});
