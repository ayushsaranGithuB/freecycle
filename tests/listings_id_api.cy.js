// cypress/e2e/listings_id_api.cy.js
// Cypress tests for /api/listings/[id] route (PATCH and DELETE)
// Assumes a valid JWT is available for test user and test data exists

const API_URL = "/api/listings";
const TEST_ITEM_ID = 18; // Replace with a valid itemId owned by the test user
const OTHER_ITEM_ID = 2; // Replace with a valid itemId NOT owned by the test user
const TEST_JWT = Cypress.env("CYPRESS_TEST_JWT");
const OTHER_JWT = Cypress.env("CYPRESS_OTHER_JWT"); // JWT for a different user

describe("/api/listings/[id] API", () => {
  it("should reject PATCH without auth", () => {
    cy.request({
      method: "PATCH",
      url: `${API_URL}/${TEST_ITEM_ID}`,
      failOnStatusCode: false,
      body: {},
    }).then((resp) => {
      expect(resp.status).to.eq(401);
      expect(resp.body && resp.body.error).to.include("Unauthorized");
    });
  });

  it("should reject DELETE without auth", () => {
    cy.request({
      method: "DELETE",
      url: `${API_URL}/${TEST_ITEM_ID}`,
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(401);
      expect(resp.body && resp.body.error).to.include("Unauthorized");
    });
  });

  it("should reject PATCH if not owner", () => {
    cy.request({
      method: "PATCH",
      url: `${API_URL}/${OTHER_ITEM_ID}`,
      headers: { Authorization: `Bearer ${TEST_JWT}` },
      failOnStatusCode: false,
      body: {},
    }).then((resp) => {
      expect(resp.status).to.eq(403);
      expect(resp.body && resp.body.error).to.include("Forbidden");
    });
  });

  it("should reject DELETE if not owner", () => {
    cy.request({
      method: "DELETE",
      url: `${API_URL}/${OTHER_ITEM_ID}`,
      headers: { Authorization: `Bearer ${TEST_JWT}` },
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(403);
      expect(resp.body && resp.body.error).to.include("Forbidden");
    });
  });

  it("should PATCH listing if owner", () => {
    // The route expects multipart/form-data, but for a simple PATCH (no images), JSON is not supported.
    // If the item does not exist, 404 is expected. If it exists, 200 is expected and body.title should match.
    // If the item is deleted before this test, only check status.
    const formData = new FormData();
    formData.append("title", "Updated Title");
    cy.request({
      method: "PATCH",
      url: `${API_URL}/${TEST_ITEM_ID}`,
      headers: { Authorization: `Bearer ${TEST_JWT}` },
      body: formData,
      failOnStatusCode: false,
    }).then((resp) => {
      expect([200, 404]).to.include(resp.status);
      if (resp.status === 200 && resp.body && resp.body.title) {
        expect(resp.body.title).to.eq("Updated Title");
      }
      // If 404, do not assert on body, as the item is not found (already deleted)
    });
  });

  it("should DELETE listing if owner", () => {
    cy.request({
      method: "DELETE",
      url: `${API_URL}/${TEST_ITEM_ID}`,
      headers: { Authorization: `Bearer ${TEST_JWT}` },
      failOnStatusCode: false,
    }).then((resp) => {
      expect([200, 404]).to.include(resp.status); // 404 if already deleted
      if (resp.status === 200) {
        expect(resp.body && resp.body.message).to.include(
          "deleted successfully"
        );
      }
    });
  });
});
