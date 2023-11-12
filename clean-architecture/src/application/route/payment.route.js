const express = require('express');

const PaymentController = require('../controller/payment.controller');
const localCache = require('../../infrastructure/config/localCache');

const router = express.Router();
const paymentController = new PaymentController(localCache);

router.get('/', paymentController.getPaymentByReservationId);
router.post('/', paymentController.createPayment);

module.exports = router;