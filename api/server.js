const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./auth');
const projectsRoutes = require('./projects');
const usersRoutes = require('./users');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend
app.use(express.static(path.join(__dirname, '../public')));

// MongoDB
if (process.env.MONGODB_URI) {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ MongoDB connecté'))
    .catch((err) => {
      console.error('❌ Erreur MongoDB:', err.message);
    });
} else {
  console.warn('⚠️ MONGODB_URI non configuré');
}

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/users', usersRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'BuildForge',
    message: 'API prête à construire des mondes Roblox',
    mongoConnected: mongoose.connection.readyState === 1
  });
});

// Frontend fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;
