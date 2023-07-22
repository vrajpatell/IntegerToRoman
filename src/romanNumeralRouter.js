const express = require("express");
const router = express.Router();

const integerToRoman = require("./romanToInteger");

router.get("/", (req, res) => {
  let { query } = req.query;
  if (query === undefined || query === null) {
    return res.status(400).json({ error: "Input is required" });
  }

  let num;
  try {
    num = parseInt(query);
  } catch {
    return res.status(400).json({ error: "Invalid input, must be a number" });
  }

  if (!Number.isInteger(num)) {
    return res.status(400).json({ error: "Input must be an integer" });
  }

  if (num <= 0 || num > 3999) {
    return res.status(400).json({ error: "Number must be between 1 and 3999" });
  }

  try {
    num = parseInt(query);
    const romanNumeral = integerToRoman(num);
    res.status(200).json({ input: num, output: romanNumeral });
  } catch (err) {
    res.status(500).json({ error: "Error converting to roman numeral" });
  }
});

module.exports = router;
