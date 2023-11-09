const express = require('express');

const FlightSeatController = require('../controller/flightSeat.controller');
const localCache = require('../../infrastructure/config/localCache');

const router = express.Router();
const flightSeatController = new FlightSeatController(localCache);

router.get('/', flightSeatController.getFlightSeatsByFlightId);
router.post('/', flightSeatController.createFlightSeat);

module.exports = router;