const SuccessResponse = require("../dto/success.response");
const TicketService = require('../../domain/ticket/service/ticket.service');

class TicketController {
    constructor(localCache) {
        this.ticketService = new TicketService(localCache);
    }

    getTicketsByReservationId = async (req, res, next) => {
        try {
            const tickets = await this.ticketService.getTicketsByReservationId(req.query);

            return new SuccessResponse({ 
                message: 'Get all tickets successfully',
                data: tickets,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }

    createTicket = async (req, res, next) => {
        try {   
            const newTicket = await this.ticketService.createTicket(req.body);

            return new SuccessResponse({
                message: 'Create new ticket successfully',
                data: newTicket,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }
}

module.exports = TicketController;