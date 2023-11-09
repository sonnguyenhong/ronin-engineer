const { getTicketsByReservationId, createTicket } = require('../repository/ticket.repo');

class TicketService {
    constructor(localCache) {
        this.localCache = localCache;
    }

    getTicketsByReservationId = async ({ reservationId }) => {
        const tickets = await getTicketsByReservationId({ reservationId });
        return tickets;
    }

    createTicket = async ({ reservationId, seatId, passengerName, passengerId }) => {
        const newTicket = await createTicket({ reservationId, seatId, passengerName, passengerId });
        return newTicket;
    }
}

module.exports = TicketService;