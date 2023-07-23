const express = require("express");
const app = express();

const romanNumeralRouter = require("./romanNumeralRouter");

app.use("/romannumeral", romanNumeralRouter);

module.exports = app;
