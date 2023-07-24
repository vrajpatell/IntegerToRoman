// This function will Override Console.log statements and The file logging is useful for 
// maintaining a record of important events or errors, while the standard output allows 
// immediate visibility during development and debugging.

// Importing 'fs' to work on files and 'util' to access utility functions.
const fs = require('fs');
const util = require('util');

// Creates a write stream to log messages to a file named 'routerLogs.log' in the 'logs' directory.
const log_file = fs.createWriteStream(__dirname + '/logs/routerLogs.log', {flags : 'w'});

// Creates a reference to the standard output (console) to log messages in addition to the file.
const log_stdout = process.stdout;

// Override the default 'console.log' function to log messages to both the file and the standard output.
console.log = function(logger) { //
  log_file.write(util.format(logger) + '\n');
  log_stdout.write(util.format(logger) + '\n');
};

// Export the modified 'console' object to be used as a custom logger in other modules.
module.exports = console;
