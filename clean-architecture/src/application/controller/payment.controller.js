const SuccessResponse = require("../dto/success.response");
const PaymentService = require('../../domain/payment/service/payment.service');

class PaymentController {
    constructor(localCache) {
        this.paymentService = new PaymentService(localCache);
    }

    getPaymentByReservationId = async (req, res, next) => {
        try {
            const payment = await this.paymentService.getPaymentByReservationId(req.query);

            return new SuccessResponse({ 
                message: 'Get payment successfully',
                data: payment,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }

    createPayment = async (req, res, next) => {
        try {   
            const newPayment = await this.paymentService.createPayment(req.body);

            return new SuccessResponse({
                message: 'Create new payment successfully',
                data: newPayment,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }
}

module.exports = PaymentController;