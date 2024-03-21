require('dotenv').config({
    path: './.env'
});

const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})

module.exports = app