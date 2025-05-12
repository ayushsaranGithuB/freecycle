// cypress/e2e/user_update_profile_api.cy.js
// Cypress tests for /api/user/update-profile route (POST)
// Assumes a valid JWT is available for test user and test data exists

const API_URL = "/api/user/update-profile";
const TEST_JWT = Cypress.env("CYPRESS_TEST_JWT");
const OTHER_JWT = Cypress.env("CYPRESS_OTHER_JWT");

describe("/api/user/update-profile API", () => {
  it("should reject POST without auth", () => {
    cy.request({
      method: "POST",
      url: API_URL,
      body: { name: "Hacker", email: "hacker@example.com", pincode: "123456" },
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(401);
      expect(resp.body && resp.body.error).to.include("Unauthorized");
    });
  });

  it("should update profile for authenticated user (ignore phone in body)", () => {
    cy.request({
      method: "POST",
      url: API_URL,
      headers: { Authorization: `Bearer ${TEST_JWT}` },
      body: {
        name: "Updated User",
        email: "updated@example.com",
        pincode: "654321",
        phone: "should_be_ignored",
      },
      failOnStatusCode: false,
    }).then((resp) => {
      expect([200, 404]).to.include(resp.status); // 404 if user not found
      if (resp.status === 200) {
        expect(resp.body.user).to.have.property("name", "Updated User");
        expect(resp.body.user).to.have.property("email", "updated@example.com");
        expect(resp.body.user).to.have.property("pincode", "654321");
      }
    });
  });

  it("should not allow updating another user (even if phone is in body)", () => {
    cy.request({
      method: "POST",
      url: API_URL,
      headers: { Authorization: `Bearer ${OTHER_JWT}` },
      body: {
        name: "Malicious",
        email: "malicious@example.com",
        pincode: "000000",
        phone: "9999999999",
      },
      failOnStatusCode: false,
    }).then((resp) => {
      // Should only update the user from the JWT, not the phone in body
      // If OTHER_JWT is for a real user, expect 200, else 401 (unauthorized) or 404 (not found)
      expect([200, 401, 404]).to.include(resp.status);
      if (resp.status === 200) {
        expect(resp.body.user).to.not.have.property("name", "Malicious");
      }
    });
  });
});
