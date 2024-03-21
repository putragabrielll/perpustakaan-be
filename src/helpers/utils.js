exports.outError = (err, response) => {
    if (err.code === "THROW") {
        return response.status(400).json({
            success: false,
            message: err.message
        })
    } else {
        return response.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}