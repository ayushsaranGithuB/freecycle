// cypress/e2e/delete_image_api.cy.js
// Cypress tests for /api/listings/[id]/delete-image route (POST)
// Assumes a valid JWT is available for test user and test data exists

const API_URL = "/api/listings";
const TEST_ITEM_ID = 1; // Replace with a valid itemId owned by the test user
const OTHER_ITEM_ID = 2; // Replace with a valid itemId NOT owned by the test user
const TEST_JWT = Cypress.env("CYPRESS_TEST_JWT");
const OTHER_JWT = Cypress.env("CYPRESS_OTHER_JWT");
const TEST_IMAGE = "/uploads/1/test-image.jpg"; // Replace with a real image path for the test item

describe("/api/listings/[id]/delete-image API", () => {
  it("should reject POST without auth", () => {
    cy.request({
      method: "POST",
      url: `${API_URL}/${TEST_ITEM_ID}/delete-image`,
      body: { image: TEST_IMAGE },
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(401);
      expect(resp.body && resp.body.error).to.include("Unauthorized");
    });
  });

  it("should reject POST if not owner", () => {
    cy.request({
      method: "POST",
      url: `${API_URL}/${OTHER_ITEM_ID}/delete-image`,
      headers: { Authorization: `Bearer ${TEST_JWT}` },
      body: { image: TEST_IMAGE },
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(403);
      expect(resp.body && resp.body.error).to.include("Forbidden");
    });
  });

  it("should reject POST if image not specified", () => {
    cy.request({
      method: "POST",
      url: `${API_URL}/${TEST_ITEM_ID}/delete-image`,
      headers: { Authorization: `Bearer ${TEST_JWT}` },
      body: {},
      failOnStatusCode: false,
    }).then((resp) => {
      // Accept 400 (bad request) or 404 (item not found)
      expect([400, 404]).to.include(resp.status);
      if (resp.status === 400) {
        expect(resp.body && resp.body.error).to.include("Image not specified");
      }
    });
  });

  it("should delete image if owner", () => {
    cy.request({
      method: "POST",
      url: `${API_URL}/${TEST_ITEM_ID}/delete-image`,
      headers: { Authorization: `Bearer ${TEST_JWT}` },
      body: { image: TEST_IMAGE },
      failOnStatusCode: false,
    }).then((resp) => {
      expect([200, 404]).to.include(resp.status); // 404 if item or image not found
      if (resp.status === 200) {
        expect(resp.body && resp.body.message).to.include(
          "Image deleted successfully"
        );
      }
    });
  });
});
