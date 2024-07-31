const cron = require("node-cron");
const email = require("../service/email-service");
const transporter = require("../config/emailconfig");

const emailservice = new email();
const setUpjobs = () => {
  cron.schedule("*/2 * * * *", async () => {
    try {
      const resonse = await emailservice.fetchpendingEmails();
      resonse.forEach((email) => {
        transporter.sendMail(
          {
            to: email.recepientEmail,
            subject: email.subject,
            text: email.content,
          },
          async (err, data) => {
            if (err) {
              console.log(err);
            } else { 
              console.log(data);
              await emailservice.updateTicket(email.id, { status: "SUCCESS" });
            }
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = setUpjobs;
