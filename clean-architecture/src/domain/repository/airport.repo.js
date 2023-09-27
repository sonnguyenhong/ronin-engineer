const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllAirports = async ({ page, perPage, sortOrder, sortBy, filter }) => {
    const airport = await prisma.airport.findMany({
        where: filter,
        skip: (page-1) * perPage,
        take: perPage,
        orderBy: [
            {
                [sortBy]: sortOrder
            }
        ]
    });

    return airport;
}

const createAirport = async ({ code, name }) => {
    const newAirport = await prisma.airport.create({
        data: {
            code,
            name,
        }
    });

    return newAirport;
}

module.exports = {
    getAllAirports,
    createAirport,
}