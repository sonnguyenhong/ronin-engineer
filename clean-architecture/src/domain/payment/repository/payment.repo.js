const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getPaymentByReservationId = async ({ reservationId }) => {
    const payment = await prisma.payment.findUnique({
        where: {
            reservationId: reservationId,
        }
    });

    return payment;
};

const createPayment = async ({ reservationId, totalPrice }) => {
    const newPayment = await prisma.payment.create({
        data: {
            reservationId,
            totalPrice,
        }
    });
    return newPayment;
}

module.exports = {
    getPaymentByReservationId,
    createPayment,
};
