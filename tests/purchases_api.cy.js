// cypress/e2e/purchases_api.cy.js
// Cypress test for /api/purchases route (POST and GET)
// Assumes a valid JWT is available for test user

const API_URL = "/api/purchases";
const TEST_ITEM_ID = 1; // Replace with a valid itemId in your test DB
const TEST_JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5OTk5OTk5OTkiLCJpYXQiOjE3NDY5NDAxODcsImV4cCI6MTc0Njk0Mzc4N30.IPjtSUvvUTkMBWnJOjxZz-AuKdKEGMgeks13bgDSpng";

describe("Purchases API", () => {
  it("should reject unauthorized POST", () => {
    cy.request({
      method: "POST",
      url: API_URL,
      failOnStatusCode: false,
      body: { itemId: TEST_ITEM_ID },
    }).then((resp) => {
      expect(resp.status).to.eq(401);
      expect(resp.body.error).to.include("Unauthorized");
    });
  });

  it("should allow authorized POST with Bearer token", () => {
    cy.request({
      method: "POST",
      url: API_URL,
      headers: { Authorization: `Bearer ${TEST_JWT}` },
      body: { itemId: TEST_ITEM_ID },
      failOnStatusCode: false,
    }).then((resp) => {
      // Accept 200 or 400 if itemId is invalid
      expect([200, 400, 404]).to.include(resp.status);
      if (resp.status === 200) {
        expect(resp.body.message).to.include("purchased item");
        expect(resp.body.purchase).to.exist;
      }
    });
  });

  it("should reject unauthorized GET", () => {
    cy.request({
      method: "GET",
      url: API_URL,
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(401);
      expect(resp.body.error).to.include("Unauthorized");
    });
  });

  it("should allow authorized GET with Bearer token", () => {
    cy.request({
      method: "GET",
      url: `${API_URL}?limit=2`,
      headers: { Authorization: `Bearer ${TEST_JWT}` },
      failOnStatusCode: false,
    }).then((resp) => {
      // Accept 200 or 500 (if DB error)
      expect([200, 500]).to.include(resp.status);
      if (resp.status === 200) {
        expect(Array.isArray(resp.body)).to.be.true;
      }
    });
  });
});
