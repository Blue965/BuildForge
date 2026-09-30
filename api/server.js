const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./auth');
const projectsRoutes = require('./projects');
const usersRoutes = require('./users');

const app = express();

// --------------------------------------------------
// Middleware
// --------------------------------------------------

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --------------------------------------------------
// Frontend
// --------------------------------------------------

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

// --------------------------------------------------
// MongoDB
// --------------------------------------------------

let mongoConnectionPromise = null;

if (process.env.MONGODB_URI) {
  mongoConnectionPromise = mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log('MongoDB connected');
      return true;
    })
    .catch((error) => {
      console.error('MongoDB connection error:', error.message);
      return false;
    });
} else {
  console.warn('MONGODB_URI is not configured');
}

// --------------------------------------------------
// API
// --------------------------------------------------

app.get('/api/health', async (req, res) => {
  res.json({
    status: 'ok',
    app: 'BuildForge',
    message: 'API ready to build Roblox worlds',
    mongoConfigured: Boolean(process.env.MONGODB_URI),
    mongoConnected: mongoose.connection.readyState === 1
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/users', usersRoutes);

// --------------------------------------------------
// Frontend fallback
// --------------------------------------------------

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// --------------------------------------------------
// Vercel export
// --------------------------------------------------

// IMPORTANT:
// Do NOT use app.listen() on Vercel.

module.exports = app;
