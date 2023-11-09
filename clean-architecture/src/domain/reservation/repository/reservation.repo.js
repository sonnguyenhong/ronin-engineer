const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllReservations = async ({ page, perPage, sortOrder, sortBy, filter }) => {
    const reservations = await prisma.reservation.findMany({
        where: filter,
        skip: (page - 1) * perPage,
        take: perPage,
        orderBy: [
        {
            [sortBy]: sortOrder,
        },
        ],
    });

    return reservations;
};

const getReservationByCode = async ({ code }) => {
    const reservation = await prisma.reservation.findFirst({
        where: {
            code: code,
        },
    });

    return reservation;
};

const createReservation = async ({
    code, 
    userId,
}) => {
    const newReservation = await prisma.reservation.create({
        data: {
            code, 
            userId,
            reservationDate: new Date(),
        },
    });

    return newReservation;
};

module.exports = {
    getAllReservations,
    getReservationByCode,
    createReservation,
};
