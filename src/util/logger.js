var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/logs/routerLogs.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(logger) { //
  log_file.write(util.format(logger) + '\n');
  log_stdout.write(util.format(logger) + '\n');
};

module.exports = console;