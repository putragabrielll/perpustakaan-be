const allBooks = require("express").Router();

const booksController = require("../../controllers/books/books.controller");

allBooks.get("/", booksController.getAllBooks);
allBooks.get("/:id", booksController.getBookById);

module.exports = allBooks;