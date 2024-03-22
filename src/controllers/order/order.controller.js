const booksModels = require("../../models/books.model");
const usersModels = require("../../models/users.model");
const orderModels = require("../../models/order.model");
const moment = require('moment')

const hendlerError = require("../../helpers/utils");

exports.createOrder = async (req, res) => {
    try {
        const { codeUsers, codeBooks } = req.body;
        const findUser = await usersModels.getUserCode(codeUsers);
        if (!findUser) {
            throw ({code: "THROW", message: "User not found"});
        }
        if (findUser.statusUsersId === 2) {
            throw ({code: "THROW", message: "User is penalized"});
        }

        let booksTotal = codeBooks.split(",")
        if (booksTotal.length > 1) {
            throw ({code: "THROW", message: "Books can only be 1"});
        }
        const findBook = await booksModels.getBooksCode(codeBooks);
        if (!findBook) {
            throw ({code: "THROW", message: "Book not found"});
        }
        if (findBook.stock < 1 && findBook.statusBooksId === 2) {
            throw ({code: "THROW", message: "Book not ready"});
        }

        const newOrder = await orderModels.addOrder(findUser.id, findBook.id);
        await orderModels.updateStock(findBook.id);

        return res.status(200).json({
            success: true,
            message: "Order created",
            results: newOrder
        })
    } catch (error) {
        hendlerError.outError(error, res);
    }
}

exports.kembaliBooks = async (req, res) => {
    try {
        const { booksCode } = req.query
        if (booksCode == null) {
            throw ({code: "THROW", message: `Book code not be null`});
        }

        const findUser = await usersModels.getUserCode(req.params.userCode);
        if (!findUser) {
            throw ({code: "THROW", message: "User not found"});
        }
        const findBook = await booksModels.getBooksCode(booksCode);
        if (booksCode === 'undefined') {
            throw ({code: "THROW", message: `no books borrowed with book code ${booksCode}`});
        }
        
        const bookBack = await orderModels.updateKembali(findUser.id, findBook.id);
        let tglPinjam = new moment(bookBack.createdAt)
        let tglKembali = new moment(bookBack.updatedAt)
        var selisihHari = tglKembali.diff(tglPinjam, 'days')
        if (selisihHari > 7) {
            await usersModels.updateUserStatus(findUser.id);
        }
        await orderModels.deleteOrder(findUser.id, findBook.id);
        await booksModels.updateBookStatus(findBook.id);
        
        return res.status(200).json({
            success: true,
            message: "Book received by admin",
            results: {
                userName: findUser.name,
                userCode: findUser.code,
                userStatus: selisihHari > 7 ? "Penalty" : "Active",
                bookTitle: findBook.title,
                booksCode: findBook.code,
                totalHariPinjam: selisihHari
            }
        })
    } catch (error) {
        hendlerError.outError(error, res);
    }
}
