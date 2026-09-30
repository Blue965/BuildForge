const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

const authRoutes = require("./auth");
const projectsRoutes = require("./projects");
const usersRoutes = require("./users");

const app = express();

// ==============================
// Middleware
// ==============================

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==============================
// Static frontend
// ==============================

const publicPath = path.join(__dirname, "../public");

app.use(express.static(publicPath));

// ==============================
// MongoDB
// ==============================

if (process.env.MONGODB_URI) {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((error) => {
      console.error(
        "MongoDB connection error:",
        error.message
      );
    });
} else {
  console.warn("MONGODB_URI is not configured.");
}

// ==============================
// Health
// ==============================

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    app: "BuildForge",
    database:
      mongoose.connection.readyState === 1
        ? "connected"
        : "disconnected",
  });
});

// ==============================
// API routes
// ==============================

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/users", usersRoutes);

// ==============================
// Frontend fallback
// ==============================

app.get("*", (req, res) => {
  res.sendFile(
    path.join(publicPath, "index.html")
  );
});

module.exports = app;
