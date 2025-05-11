// Utility to generate a 1-year JWT for test user
const jwt = require("jsonwebtoken");
const secret = "dOWNKyg/3rdYSoWuq5QaX966uxZ5wOtKXFkKeX4JIjA"; // From .env.local/.env.test
const payload = {
  id: "9999999999", // Should match a real user phone in your DB
  name: "Test User",
  email: "testuser@example.com",
};
// 1 year in seconds: 365 * 24 * 60 * 60 = 31536000
const token = jwt.sign(payload, secret, { expiresIn: 31536000 });
console.log(token);
