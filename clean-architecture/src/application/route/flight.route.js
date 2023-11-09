const express = require('express');

const FlightController = require('../controller/flight.controller');
const localCache = require('../../infrastructure/config/localCache');

const router = express.Router();
const flightController = new FlightController(localCache);

router.get('/', flightController.getAllFlights);
router.post('/', flightController.createFlight);

module.exports = router;