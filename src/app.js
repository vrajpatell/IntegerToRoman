// Importing Express.js library and creating Instance of Express application.
const express = require("express");
const app = express();

// importing router module for handling routes
const romanNumeralRouter = require("../src/Routes/romanNumeralRouter");

// Mount the Roman numeral router on the '/romannumeral' path.
app.use("/romannumeral", romanNumeralRouter);

// Exporting Express application for other functions to use.
module.exports = app;
