const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

const COOKIE_NAME = "buildforge_session";

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000,
  path: "/",
};

function cleanEmail(email) {
  return String(email || "")
    .trim()
    .toLowerCase();
}

function cleanUsername(username) {
  return String(username || "").trim();
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function publicUser(user) {
  return {
    id: user._id.toString(),
    username: user.username,
    email: user.email,
    createdAt: user.createdAt,
    lastLoginAt: user.lastLoginAt,
  };
}

function createToken(user) {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is missing.");
  }

  return jwt.sign(
    {
      sub: user._id.toString(),
    },
    JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
}

/* =====================================================
   REGISTER
   POST /api/auth/register
===================================================== */

router.post("/register", async (req, res) => {
  try {
    const username = cleanUsername(req.body.username);
    const email = cleanEmail(req.body.email);
    const password = String(req.body.password || "");

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        error: "Please fill in every field.",
      });
    }

    if (username.length < 3 || username.length > 24) {
      return res.status(400).json({
        success: false,
        error:
          "Username must contain between 3 and 24 characters.",
      });
    }

    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return res.status(400).json({
        success: false,
        error:
          "Username can only contain letters, numbers and underscores.",
      });
    }

    if (!validEmail(email)) {
      return res.status(400).json({
        success: false,
        error: "Please enter a valid email address.",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        error:
          "Password must contain at least 8 characters.",
      });
    }

    if (password.length > 128) {
      return res.status(400).json({
        success: false,
        error: "Password is too long.",
      });
    }

    /* Check email */

    const existingEmail = await User.findOne({
      email,
    });

    if (existingEmail) {
      return res.status(409).json({
        success: false,
        error:
          "An account with this email already exists.",
      });
    }

    /* Check username */

    const existingUsername = await User.findOne({
      username: {
        $regex: `^${username}$`,
        $options: "i",
      },
    });

    if (existingUsername) {
      return res.status(409).json({
        success: false,
        error: "This username is already taken.",
      });
    }

    /* Hash password */

    const passwordHash = await bcrypt.hash(
      password,
      12
    );

    /* Create user */

    const user = await User.create({
      username,
      email,
      passwordHash,
    });

    /* Create session */

    const token = createToken(user);

    res.cookie(
      COOKIE_NAME,
      token,
      COOKIE_OPTIONS
    );

    return res.status(201).json({
      success: true,
      message: "Account created successfully.",
      user: publicUser(user),
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        error:
          "An account with this information already exists.",
      });
    }

    return res.status(500).json({
      success: false,
      error:
        "Something went wrong while creating your account.",
    });
  }
});

/* =====================================================
   LOGIN
   POST /api/auth/login
===================================================== */

router.post("/login", async (req, res) => {
  try {
    const email = cleanEmail(req.body.email);
    const password = String(req.body.password || "");

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error:
          "Email and password are required.",
      });
    }

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        error:
          "Invalid email or password.",
      });
    }

    const passwordCorrect =
      await bcrypt.compare(
        password,
        user.passwordHash
      );

    if (!passwordCorrect) {
      return res.status(401).json({
        success: false,
        error:
          "Invalid email or password.",
      });
    }

    user.lastLoginAt = new Date();

    await user.save();

    const token = createToken(user);

    res.cookie(
      COOKIE_NAME,
      token,
      COOKIE_OPTIONS
    );

    return res.json({
      success: true,
      message: "Logged in successfully.",
      user: publicUser(user),
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return res.status(500).json({
      success: false,
      error:
        "Something went wrong while logging in.",
    });
  }
});

/* =====================================================
   CURRENT USER
   GET /api/auth/me
===================================================== */

router.get("/me", async (req, res) => {
  try {
    const token =
      req.cookies[COOKIE_NAME];

    if (!token) {
      return res.status(401).json({
        success: false,
        authenticated: false,
      });
    }

    const decoded = jwt.verify(
      token,
      JWT_SECRET
    );

    const user = await User.findById(
      decoded.sub
    );

    if (!user) {
      res.clearCookie(
        COOKIE_NAME,
        COOKIE_OPTIONS
      );

      return res.status(401).json({
        success: false,
        authenticated: false,
      });
    }

    return res.json({
      success: true,
      authenticated: true,
      user: publicUser(user),
    });
  } catch (error) {
    res.clearCookie(
      COOKIE_NAME,
      COOKIE_OPTIONS
    );

    return res.status(401).json({
      success: false,
      authenticated: false,
    });
  }
});

/* =====================================================
   LOGOUT
   POST /api/auth/logout
===================================================== */

router.post("/logout", async (req, res) => {
  res.clearCookie(
    COOKIE_NAME,
    COOKIE_OPTIONS
  );

  return res.json({
    success: true,
    message: "Logged out successfully.",
  });
});

module.exports = router;
