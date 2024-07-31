const ticketservice = require("../service/email-service");
const TicketSerive = new ticketservice();

const createTicket = () => {
  try {
    const response = TicketSerive.createNotification(req.body);
    return res.status(200).json({
      data: response,
      message: "notication ticket created sucessfully",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createTicket,
};
