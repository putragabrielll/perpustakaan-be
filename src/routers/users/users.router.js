const allUsers = require("express").Router();

const usersController = require("../../controllers/users/users.controller");

allUsers.get("/", usersController.getAllUsers);
allUsers.get("/:id", usersController.getUserById);

module.exports = allUsers