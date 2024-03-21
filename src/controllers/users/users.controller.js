const usersModels = require("../../models/users.model");

const hendlerError = require("../../helpers/utils");


exports.getAllUsers = async (req, res) => {
    try {
        const usersList = await usersModels.getAllUsers();

        return res.status(200).json({
            success: true,
            message: "List of users",
            results: usersList
        })
    } catch (error) {
        hendlerError.outError(error, res);
    }
}

exports.getUserById = async (req, res) => {
    try {
        const idUsers = Number(req.params.id);
        const userDetails = await usersModels.getUserById(idUsers);

        if (!userDetails) {
            throw ({code: "THROW", message: "User not found"});
        }

        return res.status(200).json({
            success: true,
            message: "Details users",
            results: userDetails
        })
    } catch (error) {
        hendlerError.outError(error, res);
    }
}