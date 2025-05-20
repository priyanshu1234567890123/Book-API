

import review from "../Utils/Reviewschema.js";

// creating review ,update reiew, delete review

export const createReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const review1 = await review.create({
      book: req.params.id,
      user: req.user._id,
      rating,
      comment
    });
    res.status(201).json(review1);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateReview = async (req, res) => {
  try {
    const review1= await review.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true }
    );
    if (!review1) return res.status(404).json({ message: 'Review not found or unauthorized' });
    res.json(review1);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const review1 = await review.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!review1) return res.status(404).json({ message: 'Review not found or unauthorized' });
    res.json({ message: 'Review deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
