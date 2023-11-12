const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getFlightRoutesByAirport = async ({ airportId }) => {
    const flightRoutes = await prisma.flightRoute.findMany({
        where: {
            airportId: airportId,
        }
    });

    return flightRoutes;
};

const getFlightRouteByCodeAndAirportId = async ({ airportId, code }) => {
    const flightRoute = await prisma.flightRoute.findFirst({
        where: {
            airportId: airportId, 
            code: code,
        }
    });
    return flightRoute;
}

const createFlightRoute = async ({ airportId, code }) => {
    const newFlightRoute = await prisma.flightRoute.create({
        data: {
            airportId,
            code,
        }
    });
    return newFlightRoute;
}

module.exports = {
    getFlightRoutesByAirport,
    getFlightRouteByCodeAndAirportId,
    createFlightRoute,
};
