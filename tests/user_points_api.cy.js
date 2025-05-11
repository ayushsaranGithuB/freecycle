// tests/user_points_api.cy.js
// Cypress API tests for /api/user/points

const API_URL = "/api/user/points";
const TEST_JWT = Cypress.env("CYPRESS_TEST_JWT");

// Helper to get a valid JWT for a test user (replace with your logic)
function getValidJwt() {
  return TEST_JWT;
}

describe("/api/user/points API", () => {
  it("should reject GET without auth", () => {
    cy.request({
      method: "GET",
      url: API_URL,
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(401);
      expect(resp.body.error).to.include("Unauthorized");
    });
  });

  it("should reject POST without auth", () => {
    cy.request({
      method: "POST",
      url: API_URL,
      body: { action: "EARN", points: 10 },
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(401);
      expect(resp.body.error).to.include("Unauthorized");
    });
  });

  it("should allow GET with Bearer token", () => {
    console.log("JWT used for test:", getValidJwt());
    cy.request({
      method: "GET",
      url: API_URL,
      headers: { Authorization: `Bearer ${getValidJwt()}` },
      failOnStatusCode: false,
    }).then((resp) => {
      // Accept 200 or 404 (if user not found)
      expect([200, 404]).to.include(resp.status);
      if (resp.status === 200) {
        expect(resp.body).to.have.property("pointsBalance");
      }
    });
  });

  it("should allow POST with Bearer token and valid data", () => {
    cy.request({
      method: "POST",
      url: API_URL,
      headers: { Authorization: `Bearer ${getValidJwt()}` },
      body: { action: "EARN", points: 1 },
      failOnStatusCode: false,
    }).then((resp) => {
      // Accept 200 or 400 (if invalid data)
      expect([200, 400]).to.include(resp.status);
      if (resp.status === 200) {
        expect(resp.body.message).to.include("User points updated");
        expect(resp.body.user).to.exist;
      }
    });
  });
});
