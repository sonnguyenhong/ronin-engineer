const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getFlightSeatsByFlightId = async ({ flightId }) => {
    const flightSeats = await prisma.flightSeat.findMany({
        where: {
            flightId: flightId,
        }
    });

    return flightSeats;
};

const getFlightSeatByCodeAndFlightId = async ({ flightId, seatCode }) => {
    const flightSeat = await prisma.flightSeat.findFirst({
        where: {
            flightId: flightId,
            seatCode: seatCode,
        },
    });

    return flightSeat;
};

const createFlightSeat = async ({
    flightId, 
    seatCode,
    price,
}) => {
    const newFlightSeat = await prisma.flightSeat.create({
        data: {
            flightId, 
            seatCode,
            price,
        },
    });

    return newFlightSeat;
};

module.exports = {
    getFlightSeatsByFlightId,
    getFlightSeatByCodeAndFlightId,
    createFlightSeat,
};
