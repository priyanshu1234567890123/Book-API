import mongoose from "mongoose";

// BOOK SCHEMA 

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  description: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });



const Book= mongoose.model('book', bookSchema);
export default Book;