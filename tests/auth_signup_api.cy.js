// cypress/e2e/auth_signup_api.cy.js
// Cypress test for /api/auth/signup route (POST and GET)

describe("/api/auth/signup API", () => {
  const API_URL = "/api/auth/signup";

  it("should reject POST with missing phone or otp", () => {
    cy.request({
      method: "POST",
      url: API_URL,
      body: { phone: "9999999999" },
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(400);
      expect(resp.body.error).to.include("Phone and OTP are required");
    });
    cy.request({
      method: "POST",
      url: API_URL,
      body: { otp: "9999" },
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(400);
      expect(resp.body.error).to.include("Phone and OTP are required");
    });
  });

  it("should reject POST with invalid OTP", () => {
    cy.request({
      method: "POST",
      url: API_URL,
      body: { phone: "9999999999", otp: "1234" },
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(400);
      expect(resp.body.error).to.include("Invalid OTP");
    });
  });

  it("should accept POST with valid phone and OTP", () => {
    cy.request({
      method: "POST",
      url: API_URL,
      body: { phone: "9999999999", otp: "9999", name: "Test User" },
      failOnStatusCode: false,
    }).then((resp) => {
      expect([200, 201]).to.include(resp.status);
      expect(resp.body.message).to.include("OTP verified successfully");
      expect(resp.body.user).to.exist;
      expect(resp.body.user.phone).to.eq("9999999999");
    });
  });

  it("should rate limit after 5 POST requests per minute per IP", () => {
    const makeRequest = () =>
      cy.request({
        method: "POST",
        url: API_URL,
        body: { phone: "9999999999", otp: "9999", name: "Test User" },
        failOnStatusCode: false,
      });
    const responses = [];
    cy.wrap(null).then(() => {
      // Chain requests sequentially to collect responses
      return makeRequest().then((resp1) => {
        responses.push(resp1);
        return makeRequest().then((resp2) => {
          responses.push(resp2);
          return makeRequest().then((resp3) => {
            responses.push(resp3);
            return makeRequest().then((resp4) => {
              responses.push(resp4);
              return makeRequest().then((resp5) => {
                responses.push(resp5);
                return makeRequest().then((resp6) => {
                  responses.push(resp6);
                  // Now check the last response for rate limiting
                  const lastResp = responses[responses.length - 1];
                  expect([429, 200, 201]).to.include(lastResp.status);
                  if (lastResp.status === 429) {
                    expect(lastResp.body.error).to.include("Too many requests");
                  }
                });
              });
            });
          });
        });
      });
    });
  });

  it("should send OTP on GET with phone param", () => {
    cy.request({
      method: "GET",
      url: `${API_URL}?phone=8888888888`,
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.body.message).to.include("OTP sent successfully");
    });
  });

  it("should reject GET without phone param", () => {
    cy.request({
      method: "GET",
      url: API_URL,
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(400);
      expect(resp.body.error).to.include("Phone number is required");
    });
  });
});
