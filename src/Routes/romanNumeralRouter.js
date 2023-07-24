// Importing Express library and craeting instance for Router.
const express = require("express");
const router = express.Router();

// Importing function for converting integers to Roman numerals from the service module
const { integerToRoman } = require("../Service/integerToRoman");

// Importing custom logger for logging service messages.
const console = require("../util/logger");

// Importing Email Service to give alerts on email for successfully starting or error reporting.
const emailService = require("../Service/emailService");

// Get the current timestamp for logging purposes
const now = new Date();
const timestamp = now.toISOString();

// capture the execution time
const start = Date.now();

// GET Requests routes
router.get("/", (req, res) => {
  let { query } = req.query;

  // Check if the 'query' parameter is missing or null
  if (query === undefined || query === null) {
    console.log(`Router: Status:${400} || Input is required || Timestamp ${timestamp} `);
    return res.status(400).json({ error: "Input is required" });
  }

  let num;
    // Validating the 'query' parameter as an integer
  try {
    num = parseInt(query);
  } catch {
    console.log(`Router: Status:${400} || Invalid input, must be a number || Timestamp ${timestamp} `);
    return res.status(400).json({ error: "Invalid input, must be a number" });
  }

  // Checking if the parsed number is an integer
  if (!Number.isInteger(num)) {
    console.log(`Router: Status:${400} || Input must be an integer || Timestamp ${timestamp} `);
    return res.status(400).json({ error: "Input must be an integer" });
  }

  // Verifying if integer is in valid range of 1 to 3999
  if (num <= 0 || num > 3999) {
    console.log(`Router: Status:${400} || Number must be between 1 and 3999 || Timestamp ${timestamp} `);
    return res.status(400).json({ error: "Number must be between 1 and 3999" });
  }

  try {

    num = parseInt(query);
    const romanNumeral = integerToRoman(num);

    // Response with the input number and its corresponding Roman numeral
    res.status(200).json({ input: num, output: romanNumeral });

    // Logs successful conversion and execution time.
    const end = Date.now();
    console.log(`Router: Status:${200} || integer input:${num} Getting Output:${romanNumeral} || Timestamp ${timestamp} || Execution time: ${end - start} ms`);
  } catch (err) {

    // Logs unsuccessful response if there is Error in Converting to Roman with Internal Server Occurs
    res.status(500).json({ error: "Error converting to roman numeral" });
    console.log(`Router: Status:${500} for integer input:${num}`);

    // Email Service will send Alerts on email.
    emailService.sendErrorEmail(err);
  }
});

// Export Router Object so that it can be used by other modules within this sub directory.
module.exports = router;
