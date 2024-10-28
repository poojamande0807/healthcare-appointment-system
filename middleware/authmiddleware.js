const jwt = require("jsonwebtoken");
const config = require("../config/config");

module.exports = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(401).json({ error: "No token provided" });

  jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(403).json({ error: "Failed to authenticate token" });
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};
