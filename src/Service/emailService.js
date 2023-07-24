// Email Service will send notifications and alerts from service. The functions use the
// transporter to send the emails with the specified email options and log the email response
// or any errors that occur during the sending process.

// Importing 'nodemailer' library for sending emails.
const nodemailer = require('nodemailer');

// Nodemailer transporter with the SMTP settings for Outlook.
const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  service: 'outlook',
  auth: {
    user: 'integerToRomanService@outlook.com', 
    pass: 'PasswordService1'
  }
});

// Function to send an email notifying that the service has started.
function sendServiceStartEmail() {
  const mailOptions = {
    from: 'integerToRomanService@outlook.com',
    to: 'intergerToRomanServer@outlook.com',
    subject: 'Roman numeral service started',
    text: 'The roman numeral conversion service has started successfully'
  };

  // Send the email using the transporter's sendMail function.
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent for service start: ' + info.response);
    }
  });
}

// Function to send an email reporting an error in the service.
function sendErrorEmail(error) {
  // Email options for the error notification.
  const mailOptions = {
    from: 'integerToRomanService@outlook.com',
    to: 'intergerToRomanServer@outlook.com', 
    subject: 'Roman numeral service error',
    text: `The roman numeral service encountered an error: ${error}`
  };
  
  // Send the email using the transporter's sendMail function.
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error); // Logs the error if there is an issue sending the email.
    } else {
      console.log('Email sent for service error: ' + info.response); // Logs the successful email response.
    }
  });
}

// Exporting the functions to be used in other modules.
module.exports = {
  sendServiceStartEmail,
  sendErrorEmail
};