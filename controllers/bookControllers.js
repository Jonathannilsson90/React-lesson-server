/// Importing models from Bookdmodel folder
const book = require("../models/Bookmodel");
/// desc    Get All books
/// route   GET /books/
/// access  Private
const getAllBooks = async (req, res) => {
  try {
    res.json(await book.find());
  } catch (error) {
    console.log({ message: error });
  }
};
/// desc    Get specific book
/// route   GET /books/:bookId
/// access  Private
const getBook = async (req, res) => {
  try {
    res.json(await book.findOne({ _id: req.params.bookId }));
  } catch (error) {
    console.log({ message: error });
  }
};
/// desc    Post new book
/// route   POST /books/
/// access  Private
const postBook = async (req, res) => {
  try {
    /// title(string),author(string),liked(boolean).
    const createBook = new book({
      title: req.body.title,
      author: req.body.author,
      liked: req.body.liked,
      img: req.body.img,
    });
    res.json(await createBook.save());
  } catch (error) {
    console.log({ message: error });
  }
};
/// desc    Delete book by Id
/// route   DELETE /books/:bookId
/// access  Private
const deleteBook = async (req, res) => {
  try {
    res.json(await book.deleteOne({ _id: req.params.bookId }));
  } catch (error) {
    res.json({ message: error });
  }
};
/// desc    Update new book
/// route   PUT /books/:bookId
/// access  Private
const updateBook = async (req, res) => {
  try {
    res.json(
      await book.updateOne(
        { _id: req.params.bookId },
        {
          $set: {
            title: req.body.title,
            author: req.body.author,
            liked: req.body.liked,
            img: req.body.img,
          },
        }
      )
    );
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  getAllBooks,
  postBook,
  getBook,
  deleteBook,
  updateBook,
};
