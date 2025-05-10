const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    video: false,
    specPattern: "tests/**/*.cy.{js,ts}",
    supportFile: "cypress/support/e2e.js",
  },
});
