describe("Sign Up Flow", () => {
  it("allows a new user to sign up", () => {
    // Always generate a 10-digit phone number
    const phone = `99999${Math.floor(10000 + Math.random() * 90000)}`;
    cy.visit("/auth/signup");
    cy.get('input[type="tel"]').type(phone);
    cy.contains("Continue").click();
    cy.url().should("include", "/auth/signup/verify-otp");
    cy.get('input[type="text"]').each(($el, idx) => {
      cy.wrap($el).type("9");
    });
    cy.get('button[type="submit"]').click(); // Click the actual submit button, not a link

    // Wait for redirect to profile setup (allow up to 10 seconds)
    cy.url({ timeout: 10000 }).should("include", "/auth/signup/profile-setup");
    // Optionally, check for a unique element on the profile setup page
    // cy.contains("Profile Setup");
  });
});

describe("Login Flow", () => {
  it("allows an existing user to log in", () => {
    const phone = "9999999999";
    cy.visit("/auth");
    cy.get('input[type="tel"]').type(phone);
    cy.contains("Send OTP").click();
    cy.url().should("include", "/auth");
    cy.get('input[type="text"]').each(($el, idx) => {
      cy.wrap($el).type("9");
    });
    cy.get('button[type="submit"]').click(); // Click the actual submit button, not a link
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });
});
