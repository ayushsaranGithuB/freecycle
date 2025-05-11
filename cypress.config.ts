import { defineConfig } from 'cypress'


module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    video: false,
    specPattern: "tests/**/*.cy.{js,ts}",
    supportFile: false, // Disable supportFile as suggested by Cypress error
    setupNodeEvents(on, config) { },
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
