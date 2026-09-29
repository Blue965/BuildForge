const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['model', 'animation', 'texture', 'script', 'ui', 'sound'],
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  fileUrl: {
    type: String,
    required: true
  },
  aiGenerated: {
    type: Boolean,
    default: false
  },
  aiPrompt: String,
  thumbnail: String,
  tags: [String],
  stats: {
    downloads: { type: Number, default: 0 },
    favorites: { type: Number, default: 0 },
    views: { type: Number, default: 0 }
  },
  isPublic: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.models.Asset || mongoose.model('Asset', assetSchema);
