const express = require('express');

const AirportController = require('../controller/airport.controller');
const localCache = require('../../infrastructure/config/localCache');
const { authMiddleware } = require('../middleware/auth.middleware');

const router = express.Router();
const airportController = new AirportController(localCache);

router.get('/', authMiddleware, airportController.getAllAirports);
router.post('/', authMiddleware, airportController.createAirport);

module.exports = router;