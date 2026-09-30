const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.warn("WARNING: JWT_SECRET is not configured.");
}

// ==============================
// Helpers
// ==============================

function normalizeEmail(email) {
  return String(email || "")
    .trim()
    .toLowerCase();
}

function normalizeUsername(username) {
  return String(username || "")
    .trim();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function createToken(user) {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is missing");
  }

  return jwt.sign(
    {
      sub: user._id.toString(),
      username: user.username,
      email: user.email,
    },
    JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
}

function safeUser(user) {
  return {
    id: user._id.toString(),
    username: user.username,
    email: user.email,
    createdAt: user.createdAt,
    lastLoginAt: user.lastLoginAt,
  };
}

// ==============================
// REGISTER
// POST /api/auth/register
// ==============================

router.post("/register", async (req, res) => {
  try {
    const username = normalizeUsername(req.body.username);
    const email = normalizeEmail(req.body.email);
    const password = String(req.body.password || "");

    // --------------------------
    // Validation
    // --------------------------

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        error: "Username, email and password are required.",
      });
    }

    if (username.length < 3 || username.length > 24) {
      return res.status(400).json({
        success: false,
        error: "Username must contain between 3 and 24 characters.",
      });
    }

    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return res.status(400).json({
        success: false,
        error:
          "Username can only contain letters, numbers and underscores.",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: "Please enter a valid email address.",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        error: "Password must contain at least 8 characters.",
      });
    }

    if (password.length > 128) {
      return res.status(400).json({
        success: false,
        error: "Password is too long.",
      });
    }

    // --------------------------
    // Check existing user
    // --------------------------

    const existingUser = await User.findOne({
      $or: [
        { email },
        { username },
      ],
    });

    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(409).json({
          success: false,
          error: "An account with this email already exists.",
        });
      }

      if (
        existingUser.username.toLowerCase() ===
        username.toLowerCase()
      ) {
        return res.status(409).json({
          success: false,
          error: "This username is already taken.",
        });
      }
    }

    // --------------------------
    // Hash password
    // --------------------------

    const passwordHash = await bcrypt.hash(password, 12);

    // --------------------------
    // Create user
    // --------------------------

    const user = await User.create({
      username,
      email,
      passwordHash,
    });

    // --------------------------
    // Create session token
    // --------------------------

    const token = createToken(user);

    return res.status(201).json({
      success: true,
      message: "Account created successfully.",
      token,
      user: safeUser(user),
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    // MongoDB duplicate key
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        error: "An account with this information already exists.",
      });
    }

    return res.status(500).json({
      success: false,
      error: "Unable to create account.",
    });
  }
});

// ==============================
// LOGIN
// POST /api/auth/login
// ==============================

router.post("/login", async (req, res) => {
  try {
    const email = normalizeEmail(req.body.email);
    const password = String(req.body.password || "");

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: "Email and password are required.",
      });
    }

    // --------------------------
    // Find user
    // --------------------------

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        error: "Invalid email or password.",
      });
    }

    // --------------------------
    // Check password
    // --------------------------

    const passwordMatches = await bcrypt.compare(
      password,
      user.passwordHash
    );

    if (!passwordMatches) {
      return res.status(401).json({
        success: false,
        error: "Invalid email or password.",
      });
    }

    // --------------------------
    // Update last login
    // --------------------------

    user.lastLoginAt = new Date();

    await user.save();

    // --------------------------
    // Create token
    // --------------------------

    const token = createToken(user);

    return res.json({
      success: true,
      message: "Login successful.",
      token,
      user: safeUser(user),
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return res.status(500).json({
      success: false,
      error: "Unable to login.",
    });
  }
});

// ==============================
// GET CURRENT USER
// GET /api/auth/me
// ==============================

router.get("/me", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        error: "Not authenticated.",
      });
    }

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.substring(7)
      : null;

    if (!token) {
      return res.status(401).json({
        success: false,
        error: "Invalid authorization header.",
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(decoded.sub);

    if (!user) {
      return res.status(401).json({
        success: false,
        error: "User no longer exists.",
      });
    }

    return res.json({
      success: true,
      user: safeUser(user),
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: "Invalid or expired session.",
    });
  }
});

// ==============================
// LOGOUT
// ==============================
//
// JWT is stateless, so the client removes
// the token. This endpoint exists mainly
// for a clean API.
// ==============================

router.post("/logout", async (req, res) => {
  return res.json({
    success: true,
    message: "Logged out successfully.",
  });
});

module.exports = router;
