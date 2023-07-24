// Importing the Express application from the './app' module.
const app = require('./app');

// Importing the emailService module responsible for sending emails.
const emailService = require("./Service/emailService");

const now = new Date();
const timestamp = now.toISOString();

// Local Host will listen to port '8080'.
const port = 8080;

// Start the Express application and listen on the specified port.
app.listen(port, () => {

  // Log a message indicating that the API is now listening on the specified port along with the current timestamp.
  console.log(`API listening on port ${port} || Timestamp ${timestamp}`);

  // Send a notification email indicating that the service has started.
  emailService.sendServiceStartEmail();
});