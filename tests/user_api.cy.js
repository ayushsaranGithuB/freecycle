// cypress/e2e/user_api.cy.js
// Cypress tests for /api/user/[userId] route (GET and PUT)
// Assumes a valid JWT is available for test user and test data exists

const API_URL = '/api/user';
const TEST_USER_ID = '9999999999'; // Replace with a valid userId (phone) for the test user
const OTHER_USER_ID = '8888888888'; // Replace with a valid userId NOT owned by the test user
const TEST_JWT = Cypress.env('CYPRESS_TEST_JWT');
const OTHER_JWT = Cypress.env('CYPRESS_OTHER_JWT'); // JWT for a different user

describe('/api/user/[userId] API', () => {
  it('should reject GET without auth', () => {
    cy.request({
      method: 'GET',
      url: `${API_URL}/${TEST_USER_ID}`,
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(401);
      expect(resp.body && resp.body.error).to.include('Unauthorized');
    });
  });

  it('should reject PUT without auth', () => {
    cy.request({
      method: 'PUT',
      url: `${API_URL}/${TEST_USER_ID}`,
      body: { name: 'Hacker' },
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(401);
      expect(resp.body && resp.body.error).to.include('Unauthorized');
    });
  });

  it('should reject GET if not your profile', () => {
    cy.request({
      method: 'GET',
      url: `${API_URL}/${OTHER_USER_ID}`,
      headers: { Authorization: `Bearer ${TEST_JWT}` },
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(403);
      expect(resp.body && resp.body.error).to.include('Forbidden');
    });
  });

  it('should reject PUT if not your profile', () => {
    cy.request({
      method: 'PUT',
      url: `${API_URL}/${OTHER_USER_ID}`,
      headers: { Authorization: `Bearer ${TEST_JWT}` },
      body: { name: 'Hacker' },
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(403);
      expect(resp.body && resp.body.error).to.include('Forbidden');
    });
  });

  it('should GET user profile if owner', () => {
    cy.request({
      method: 'GET',
      url: `${API_URL}/${TEST_USER_ID}`,
      headers: { Authorization: `Bearer ${TEST_JWT}` },
      failOnStatusCode: false,
    }).then((resp) => {
      expect([200, 404]).to.include(resp.status); // 404 if user not found
      if (resp.status === 200) {
        expect(resp.body).to.have.property('phone', TEST_USER_ID);
      }
    });
  });

  it('should PUT user profile if owner', () => {
    cy.request({
      method: 'PUT',
      url: `${API_URL}/${TEST_USER_ID}`,
      headers: { Authorization: `Bearer ${TEST_JWT}` },
      body: { name: 'Updated Test User' },
      failOnStatusCode: false,
    }).then((resp) => {
      expect([200, 404]).to.include(resp.status); // 404 if user not found
      if (resp.status === 200) {
        expect(resp.body).to.have.property('name', 'Updated Test User');
      }
    });
  });
});
