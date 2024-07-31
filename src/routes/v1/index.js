const { Router } = require("express");
const { createTicket } = require("../../controllers/ticket-controller");
const route = Router();

route.post("ticket", createTicket);

module.exports = route;
