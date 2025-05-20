import Book from "../Utils/Bookschema.js";


 const createBook = async (req, res) => {
  try {
    const book = await Book.create({ ...req.body, createdBy: req.user._id });
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get book using id 
const getBooks = async (req, res) => {
  const { page = 1, limit = 10, author, genre } = req.query;
  const filter = {};
  if (author) filter.author = author;
  if (genre) filter.genre = genre;

  try {
    const books = await Book.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit));
    const count = await Book.countDocuments(filter);
    res.json({ books, totalPages: Math.ceil(count / limit), currentPage: page });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// get book details using id
const getBookDetails = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export {createBook,getBooks,getBookDetails}
