const createOrder = require("express").Router();

const orderController = require("../../controllers/order/order.controller");

createOrder.post("/pesan", orderController.createOrder);
createOrder.patch("/kembali/:userCode", orderController.kembaliBooks);

module.exports = createOrder