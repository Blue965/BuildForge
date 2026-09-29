const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'buildforge-dev-secret-change-me';

const createToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      username: user.username,
      email: user.email,
      provider: user.provider
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
};

router.post('/google', async (req, res) => {
  try {
    const { email, name, avatar, googleId } = req.body;

    if (!email || !name) {
      return res.status(400).json({ error: 'Email et nom requis' });
    }

    let user = await User.findOne({ email, provider: 'google' });
    if (!user) {
      user = await User.create({
        provider: 'google',
        providerId: googleId || `google_${email}`,
        email,
        username: name,
        avatar: avatar || ''
      });
    } else {
      user.avatar = avatar || user.avatar;
      await user.save();
    }

    const token = createToken(user);

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        provider: user.provider
      }
    });
  } catch (error) {
    console.error('Google auth error:', error);
    res.status(500).json({ error: 'Erreur authentification Google' });
  }
});

router.post('/roblox', async (req, res) => {
  try {
    const { username, avatar, robloxId } = req.body;

    if (!username) {
      return res.status(400).json({ error: 'Nom Roblox requis' });
    }

    let user = await User.findOne({ username, provider: 'roblox' });
    if (!user) {
      user = await User.create({
        provider: 'roblox',
        providerId: robloxId || `roblox_${username}`,
        email: `${username}@roblox.local`,
        username,
        avatar: avatar || ''
      });
    } else {
      user.avatar = avatar || user.avatar;
      await user.save();
    }

    const token = createToken(user);

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        provider: user.provider
      }
    });
  } catch (error) {
    console.error('Roblox auth error:', error);
    res.status(500).json({ error: 'Erreur authentification Roblox' });
  }
});

router.post('/email', async (req, res) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email et mot de passe requis' });
    }

    const safeUsername = username || email.split('@')[0];

    let user = await User.findOne({ email, provider: 'email' });
    if (!user) {
      user = await User.create({
        provider: 'email',
        providerId: `email_${email}`,
        email,
        username: safeUsername,
        avatar: ''
      });
    }

    const token = createToken(user);

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        provider: user.provider
      }
    });
  } catch (error) {
    console.error('Email auth error:', error);
    res.status(500).json({ error: 'Erreur authentification email' });
  }
});

router.post('/logout', (req, res) => {
  res.json({ success: true, message: 'Déconnecté avec succès' });
});

module.exports = router;
