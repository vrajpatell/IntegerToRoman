const express = require("express");
const router = express.Router();

const { integerToRoman } = require("../Service/romanToInteger");
const console = require('../util/logger');

const now = new Date();
const timestamp = now.toISOString();

router.get("/", (req, res) => {
  let { query } = req.query;
  if (query === undefined || query === null) {
    console.log(`Router: Status:${res.statusCode} :: ${timestamp} `);
    return res.status(400).json({ error: "Input is required" });
  }

  let num;
  try {
    num = parseInt(query);
  } catch {
    console.log(`Router: Status:${res.statusCode} :: ${timestamp} `);
    return res.status(400).json({ error: "Invalid input, must be a number" });
  }

  if (!Number.isInteger(num)) {
    console.log(`Router: Status:${res.statusCode} :: ${timestamp} `);
    return res.status(400).json({ error: "Input must be an integer" });
  }

  if (num <= 0 || num > 3999) {
    return res.status(400).json({ error: "Number must be between 1 and 3999" });
  }

  try {
    num = parseInt(query);
    const romanNumeral = integerToRoman(num);
    res.status(200).json({ input: num, output: romanNumeral });
    console.log(`Router: Status:${res.statusCode} for integer input:${num} Getting Output:${romanNumeral}`);
  } catch (err) {
    res.status(500).json({ error: "Error converting to roman numeral" });
    console.log(`Router: Status:${res.statusCode} for integer input:${num}`);
  }
});

module.exports = router;
