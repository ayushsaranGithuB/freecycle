// Utility to generate a long-lived JWT for test user
const jwt = require("jsonwebtoken");
const secret = "dOWNKyg/3rdYSoWuq5QaX966uxZ5wOtKXFkKeX4JIjA"; // From .env.local
const payload = {
  id: "9999999999", // Should match a real user phone in your DB
  name: "Test User",
  email: "testuser@example.com",
};
// 10 years in seconds: 10 * 365 * 24 * 60 * 60 = 315360000
const token = jwt.sign(payload, secret, { expiresIn: 315360000 });
console.log(token);
