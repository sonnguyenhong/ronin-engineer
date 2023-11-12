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

const getFlightById = async ({ id }) => {
    const flight = await prisma.flight.findUnique({ 
        where: {
            id: id,
        }
    });

    return flight;
}

const createFlight = async ({
    code,
    aircraftId,
    sourceAirportId,
    destAirportId,
    departureTime,
    estimatedArrivalTime,
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
            totalCapacity,
            availableCapacity,
            data,
            status,
        },
    });

    return newFlight;
};

const updateFlight = async ({ 
    id,
    version,
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
    const updatedFlight = await prisma.flight.update({ 
        where: {
            id: id,
            version: version,
        },
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
            version: version + 1,
        }
    });

    return updatedFlight;
}

module.exports = {
    getAllFlights,
    getFlightByCode,
    getFlightById,
    createFlight,
    updateFlight,
};
