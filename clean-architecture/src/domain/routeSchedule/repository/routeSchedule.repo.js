const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllRouteSchedules = async ({ page, perPage, sortOrder, sortBy, filter }) => {
    const routeSchedules = await prisma.routeSchedule.findMany({
        where: filter,
        skip: (page - 1) * perPage,
        take: perPage,
        orderBy: [
        {
            [sortBy]: sortOrder,
        },
        ],
    });

    return routeSchedules;
};

const getRouteSchedulesByCode = async ({ code }) => {
    const routeSchedule = await prisma.routeSchedule.findUnique({
        where: {
            code: code,
        }
    });
    return routeSchedule;
}

const createRouteSchedule = async ({ code, flightRouteId, flightId, startTime, finishTime }) => {
    const newRouteSchedule = await prisma.routeSchedule.create({
        data: {
            code, 
            flightRouteId,
            flightId,
            startTime,
            finishTime,
        }
    });
    return newRouteSchedule;
}

module.exports = {
    getAllRouteSchedules,
    getRouteSchedulesByCode,
    createRouteSchedule,
};
