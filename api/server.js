const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");

require("dotenv").config();

const authRoutes = require("./auth");
const projectsRoutes = require("./projects");
const usersRoutes = require("./users");

const app = express();

/* =====================================================
   MIDDLEWARE
===================================================== */

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

/* =====================================================
   FRONTEND
===================================================== */

const publicPath =
  path.join(
    __dirname,
    "../public"
  );

app.use(
  express.static(publicPath)
);

/* =====================================================
   MONGODB
===================================================== */

if (process.env.MONGODB_URI) {
  mongoose
    .connect(
      process.env.MONGODB_URI
    )
    .then(() => {
      console.log(
        "MongoDB connected successfully."
      );
    })
    .catch((error) => {
      console.error(
        "MongoDB connection error:",
        error.message
      );
    });
} else {
  console.error(
    "MONGODB_URI is missing."
  );
}

/* =====================================================
   HEALTH
===================================================== */

app.get(
  "/api/health",
  (req, res) => {
    res.json({
      success: true,
      app: "BuildForge",
      database:
        mongoose.connection
          .readyState === 1
          ? "connected"
          : "disconnected",
    });
  }
);

/* =====================================================
   AUTH
===================================================== */

app.use(
  "/api/auth",
  authRoutes
);

/* =====================================================
   OTHER API
===================================================== */

app.use(
  "/api/projects",
  projectsRoutes
);

app.use(
  "/api/users",
  usersRoutes
);

/* =====================================================
   FRONTEND FALLBACK
===================================================== */

app.get(
  "*",
  (req, res) => {
    res.sendFile(
      path.join(
        publicPath,
        "index.html"
      )
    );
  }
);

module.exports = app;
