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

const publicPath = path.join(__dirname, "../public");

/* =========================================================
   MIDDLEWARE
========================================================= */

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json({ limit: "1mb" }));

app.use(
  express.urlencoded({
    extended: true,
    limit: "1mb",
  })
);

app.use(cookieParser());

/* =========================================================
   STATIC FRONTEND
========================================================= */

app.use(express.static(publicPath));

/* =========================================================
   MONGODB
========================================================= */

let mongoConnectionPromise = null;

async function connectMongoDB() {
  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI is not configured.");
    return;
  }

  if (mongoose.connection.readyState === 1) {
    return;
  }

  if (!mongoConnectionPromise) {
    mongoConnectionPromise = mongoose
      .connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 10000,
      })
      .then(() => {
        console.log("MongoDB connected.");
      })
      .catch((error) => {
        mongoConnectionPromise = null;

        console.error(
          "MongoDB connection error:",
          error.message
        );

        throw error;
      });
  }

  return mongoConnectionPromise;
}

/* =========================================================
   HEALTH
========================================================= */

app.get("/api/health", async (req, res) => {
  try {
    await connectMongoDB();

    return res.json({
      success: true,
      app: "BuildForge",
      database:
        mongoose.connection.readyState === 1
          ? "connected"
          : "disconnected",
    });
  } catch (error) {
    return res.status(503).json({
      success: false,
      app: "BuildForge",
      database: "disconnected",
      error: "Database unavailable.",
    });
  }
});

/* =========================================================
   AUTH
========================================================= */

app.use("/api/auth", authRoutes);

/* =========================================================
   OTHER API
========================================================= */

app.use("/api/projects", projectsRoutes);
app.use("/api/users", usersRoutes);

/* =========================================================
   FRONTEND FALLBACK
========================================================= */

app.get("*", (req, res) => {
  res.sendFile(
    path.join(publicPath, "index.html")
  );
});

/* =========================================================
   ERROR HANDLER
========================================================= */

app.use((error, req, res, next) => {
  console.error("SERVER ERROR:", error);

  if (res.headersSent) {
    return next(error);
  }

  return res.status(500).json({
    success: false,
    error: "Internal server error.",
  });
});

module.exports = app;

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;

  app.listen(port, () => {
    console.log(`BuildForge server listening on port ${port}`);
  });
}
