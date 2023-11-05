const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllAircrafts = async ({ page, perPage, sortOrder, sortBy, filter }) => {
    const aircrafts = await prisma.aircraft.findMany({
        where: filter,
        skip: (page-1) * perPage,
        take: perPage,
        orderBy: [
            {
                [sortBy]: sortOrder
            }
        ]
    });

    return aircrafts;
}

const getAircraftByCode = async ({ code }) => {
    const aircraft = await prisma.aircraft.findUnique({
        where: {
            code: code
        }
    });

    return aircraft;
}

const createAircraft = async ({ code, name }) => {
    const newAircraft = await prisma.aircraft.create({
        data: {
            code,
            name,
        }
    });

    return newAircraft;
}

module.exports = {
    getAllAircrafts,
    getAircraftByCode,
    createAircraft,
}