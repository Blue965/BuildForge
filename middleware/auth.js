const jwt = require("jsonwebtoken");
const User = require("../models/User");

const COOKIE_NAME = "buildforge_session";

async function requireAuth(
  req,
  res,
  next
) {
  try {
    const token =
      req.cookies[COOKIE_NAME];

    if (!token) {
      return res.status(401).json({
        success: false,
        error: "Authentication required.",
      });
    }

    const decoded =
      jwt.verify(
        token,
        process.env.JWT_SECRET
      );

    const user =
      await User.findById(
        decoded.sub
      );

    if (!user) {
      return res.status(401).json({
        success: false,
        error: "User not found.",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      error:
        "Your session is invalid or expired.",
    });
  }
}

module.exports = requireAuth;
