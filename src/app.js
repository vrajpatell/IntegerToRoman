const express = require("express");
const app = express();

const romanNumeralRouter = require("../src/Routes/romanNumeralRouter");

app.use("/romannumeral", romanNumeralRouter);

module.exports = app;
