const express = require('express');

const TicketController = require('../controller/ticket.controller');
const localCache = require('../../infrastructure/config/localCache');

const router = express.Router();
const ticketController = new TicketController(localCache);

router.get('/', ticketController.getTicketsByReservationId);
router.post('/', ticketController.createTicket);

module.exports = router;