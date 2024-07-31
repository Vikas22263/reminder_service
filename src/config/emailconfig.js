const nodemailer = require("nodemailer");
const { PASS, USER } = require("./serverconfig");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: USER,
    pass: PASS,
  },
});

module.exports = transporter;
