require('dotenv').config({
    path: './.env'
});

const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Swagger
const swaggerUi = require("swagger-ui-express")
const swaggerDocument = require("./swagger/apidocs.json")

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
// end Swagger


// ================================================
// Cek apakah link utama berjalan
app.get("/", (req, res) => {
    return res.status(200).json({
        status: 200,
        success: true,
        message: "Welcome to Perpustakaan API"
    })
})

app.use("/", require("./src/routers/index"));

// Respons bila link yg input tidak ada
app.use("/", (req, res) => {
    return res.status(404).json({
        status: 404,
        success: false,
        message: "Link not found"
    })
});
// ================================================


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})

module.exports = app