const booksModels = require("../../models/books.model");

const hendlerError = require("../../helpers/utils");


exports.getAllBooks = async (req, res) => {
    try {
        const booksList = await booksModels.getAllBooks();

        return res.status(200).json({
            success: true,
            message: "List of books",
            results: booksList
        })
    } catch (error) {
        hendlerError.outError(error, res);
    }
}

exports.getBookById = async (req, res) => {
    try {
        const idBooks = Number(req.params.id);
        const bookDetails = await booksModels.getBookById(idBooks);

        if (!bookDetails) {
            throw ({code: "THROW", message: "Book not found"});
        }

        return res.status(200).json({
            success: true,
            message: "Details book",
            results: bookDetails
        })
    } catch (error) {
        hendlerError.outError(error, res);
    }
}