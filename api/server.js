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

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

if (process.env.MONGODB_URI) {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => {
      console.error('MongoDB connection error:', error.message);
    });
}

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'BuildForge'
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/users', usersRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

module.exports = app;
