const express = require('express');

const AircraftController = require('../controller/aircraft.controller');
const localCache = require('../../infrastructure/config/localCache');

const router = express.Router();
const aircraftController = new AircraftController(localCache);

router.get('/', aircraftController.getAllAircrafts);
router.post('/', aircraftController.createAircraft);

module.exports = router;