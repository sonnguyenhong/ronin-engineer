const express = require('express');

const AircraftController = require('../controller/aircraft.controller');
const localCache = require('../../infrastructure/config/localCache');
const { authMiddleware } = require('../middleware/auth.middleware');

const router = express.Router();
const aircraftController = new AircraftController(localCache);

router.get('/', authMiddleware, aircraftController.getAllAirports);
router.post('/', authMiddleware, aircraftController.createAirport);

module.exports = router;