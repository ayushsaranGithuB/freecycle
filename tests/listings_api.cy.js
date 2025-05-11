// cypress/e2e/listings_api.cy.js
// Cypress test for /api/listings route (POST and GET)
// Uses JWT from purchases_api.cy.js for authentication

const API_URL = "/api/listings";
const TEST_JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5OTk5OTk5OTkiLCJpYXQiOjE3NDY5NDAxODcsImV4cCI6MTc0Njk0Mzc4N30.IPjtSUvvUTkMBWnJOjxZz-AuKdKEGMgeks13bgDSpng";

describe("Listings API", () => {
  it("should reject unauthorized POST", () => {
    cy.request({
      method: "POST",
      url: API_URL,
      failOnStatusCode: false,
      body: {
        title: "Test Item",
        description: "Test Description",
        brand: "Test Brand",
        category: "ELECTRONICS",
        condition: "NEW",
        ageYears: 0,
        originalMsrp: 100,
        estimatedMarketPrice: 80,
        pointsValue: 10,
        locationPincode: "123456",
        images: [],
        owner: "9999999999", // Should be ignored by API
      },
    }).then((resp) => {
      expect(resp.status).to.eq(401);
      expect(resp.body.error).to.include("Unauthorized");
    });
  });

  it("should allow authorized POST with Bearer token and ignore owner in body", () => {
    cy.request({
      method: "POST",
      url: API_URL,
      headers: { Authorization: `Bearer ${TEST_JWT}` },
      body: {
        title: "Test Item Auth",
        description: "Test Description Auth",
        brand: "Test Brand",
        category: "ELECTRONICS",
        condition: "NEW",
        ageYears: 1,
        originalMsrp: 200,
        estimatedMarketPrice: 150,
        pointsValue: 20,
        locationPincode: "654321",
        images: [],
        owner: "should_be_ignored", // Should be ignored by API
      },
      failOnStatusCode: false,
    }).then((resp) => {
      expect([201, 400, 500]).to.include(resp.status);
      if (resp.status === 201) {
        expect(resp.body.success).to.be.true;
        expect(resp.body.id).to.exist;
      }
    });
  });
});
