const express = require('express');

const ReservationController = require('../controller/reservation.controller');
const localCache = require('../../infrastructure/config/localCache');

const router = express.Router();
const reservationController = new ReservationController(localCache);

router.get('/', reservationController.getAllReservations);
router.post('/', reservationController.createReservation);

module.exports = router;