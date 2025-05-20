import mongoose from 'mongoose';

//ONLY LOGIN USER CREATE A REVIEW THIS IS REVIEW SCHEMA

const reviewSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
}, { timestamps: true });

reviewSchema.index({ book: 1, user: 1 }, { unique: true }); // Enforce one review per user per book

const review= mongoose.model('Review', reviewSchema);
export default review;