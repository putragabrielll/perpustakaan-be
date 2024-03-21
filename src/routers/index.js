const router = require("express").Router();

router.use("/users", require("./users/users.router"));
router.use("/books", require("./books/books.router"));

module.exports = router;