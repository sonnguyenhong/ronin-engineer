const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getTicketsByReservationId = async ({ reservationId }) => {
    const tickets = await prisma.ticket.findMany({
        where: {
            reservationId: reservationId,
        }
    });

    return tickets;
};

const createTicket = async ({ code, reservationId, seatId, passengerName, passengerId }) => {
    const newTicket = await prisma.ticket.create({
        data: {
            code,
            reservationId,
            seatId,
            passengerName,
            passengerId,
        }
    });
    return newTicket;
}

module.exports = {
    getTicketsByReservationId,
    createTicket,
};
