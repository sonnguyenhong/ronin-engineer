const { getPaymentByReservationId, createPayment } = require('../repository/payment.repo');
const ErrorResponse = require('../../dto/error.response');
const { HTTP_STATUS_CODE } = require('../../../infrastructure/constant');

class PaymentService {
    constructor(localCache) {
        this.localCache = localCache;
    }

    getPaymentByReservationId = async ({ reservationId }) => {
        const payment = await getPaymentByReservationId({ reservationId });
        return payment;
    }

    createPayment = async ({ reservationId, totalPrice }) => {
        const existedPaymentReservation = await getPaymentByReservationId({ reservationId });
        if(existedPaymentReservation) {
            throw new ErrorResponse('Reservation payment existed', HTTP_STATUS_CODE.BAD_REQUEST);
        }
        const newPayment = await createPayment({ reservationId, totalPrice });
        return newPayment;
    }
}

module.exports = PaymentService;