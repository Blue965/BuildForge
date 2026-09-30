const mongoose = require("mongoose");

const UserSchema =
  new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 24,
      },

      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },

      passwordHash: {
        type: String,
        required: true,
      },

      createdAt: {
        type: Date,
        default: Date.now,
      },

      lastLoginAt: {
        type: Date,
        default: null,
      },
    },

    {
      versionKey: false,
    }
  );

module.exports =
  mongoose.models.User ||
  mongoose.model(
    "User",
    UserSchema
  );
