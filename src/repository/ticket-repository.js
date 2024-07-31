const { Op } = require("sequelize");
const { NOtificationTicket } = require("../models/index");

class TicketRepository {
  async getall() {
    try {
      const reponse = await NOtificationTicket.findAll();
      return reponse;
    } catch (error) {
      console.log(error);
    }
  }

  async create(data) {
    try {
      const ticket = await NOtificationTicket.create(data);
    } catch (error) {
      console(error);
    }
  }

  async get(filter) {
    try {
      const ticket = await NOtificationTicket.findAll({
        where: {
          status: filter.status,
          notificationTime: {
            [Op.lte]: new Date(),
          },
        },
      });
      return ticket;
    } catch (error) {
      throw { error };
    }
  }
  async update(ticketId, data) {
    try {
      const ticket = await NOtificationTicket.findByPk(ticketId);
      if (data.status) {
        ticket.staus = data.status;
        await ticket.save();
      }
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = TicketRepository;
