const jwt = require("jsonwebtoken");
const KEY = process.env.JWT_KEY;

module.exports = {
  signToken(payload) {
    return jwt.sign(payload, KEY);
  },
  verifyToken(token) {
    return jwt.verify(token, KEY);
  },
};
