import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true
  },

  token: {
    type: String // For session or JWT token storage (optional)
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const book = mongoose.model('user', userSchema);

export default book;
