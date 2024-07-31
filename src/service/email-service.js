const transporter = require("../config/emailconfig");
const TicketRepository = require("../repository/ticket-repository");
const repo = new TicketRepository();
class emailService {
  async sendMail(from, to, subject, text) {
    const info = await transporter.sendMail({
      from: from,
      to: to,
      subject: subject,
      text: text,
    });
    return info;
  }

  async fetchpendingEmails() {
    try {
      const result = repo.get({ status: "PENDING" });
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async updateTicket(ticketId, status) {
    try {
      const resonse = await repo.update(ticketId, status);
      return resonse;
    } catch (error) {
      throw { error };
    }
  }
  async createNotification(data) {
    try {
      const result = await repo.create(data);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = emailService;
