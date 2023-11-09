const express = require('express');

const AirportController = require('../controller/airport.controller');
const localCache = require('../../infrastructure/config/localCache');

const router = express.Router();
const airportController = new AirportController(localCache);

router.get('/', airportController.getAllAirports);
router.post('/', airportController.createAirport);

module.exports = router;