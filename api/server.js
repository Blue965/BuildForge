const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const authRoutes = require('../api/auth');
const projectsRoutes = require('../api/projects');
const usersRoutes = require('../api/users');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

if (process.env.MONGODB_URI) {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('✅ MongoDB connecté'))
    .catch((err) => console.error('❌ Erreur MongoDB:', err.message));
} else {
  console.warn('⚠️ MONGODB_URI non configuré — mode démo actif');
}

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/users', usersRoutes);

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'BuildForge',
    message: 'API prête à construire des mondes Roblox',
    mongoConnected: mongoose.connection.readyState === 1
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n🚀 BuildForge running on http://localhost:${PORT}`);
  console.log(`📚 API base: http://localhost:${PORT}/api\n`);
});

module.exports = app;
