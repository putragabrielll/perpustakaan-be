const router = require("express").Router();

router.use("/users", require("./users/users.router"));
router.use("/books", require("./books/books.router"));
router.use("/order", require("./order/order.router"));


module.exports = router;