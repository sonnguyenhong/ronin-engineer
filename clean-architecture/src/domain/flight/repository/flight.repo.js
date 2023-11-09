const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllFlights = async ({ page, perPage, sortOrder, sortBy, filter }) => {
    const flights = await prisma.flight.findMany({
        where: filter,
        skip: (page - 1) * perPage,
        take: perPage,
        orderBy: [
        {
            [sortBy]: sortOrder,
        },
        ],
    });

    return flights;
};

const getFlightByCode = async ({ code }) => {
    const flight = await prisma.flight.findUnique({
        where: {
        code: code,
        },
    });

    return flight;
};

const createFlight = async ({
    code,
    aircraftId,
    sourceAirportId,
    destAirportId,
    departureTime,
    estimatedArrivalTime,
    actualArrivalTime,
    totalCapacity,
    availableCapacity,
    data,
    status,
}) => {
    const newFlight = await prisma.flight.create({
        data: {
            code,
            aircraftId,
            sourceAirportId,
            destAirportId,
            departureTime,
            estimatedArrivalTime,
            actualArrivalTime,
            totalCapacity,
            availableCapacity,
            data,
            status,
        },
    });

    return newFlight;
};

module.exports = {
    getAllFlights,
    getFlightByCode,
    createFlight,
};
