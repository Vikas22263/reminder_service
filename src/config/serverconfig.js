const dotenv = require("dotenv");

dotenv.config({path:".env"});

module.exports = {
  USER: process.env.USER,
  PASS: process.env.PASS,
  PORT:process.env.PORT
};
