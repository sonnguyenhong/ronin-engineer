const express = require('express');

const FlightRouteController = require('../controller/flightRoute.controller');
const localCache = require('../../infrastructure/config/localCache');

const router = express.Router();
const flightRouteController = new FlightRouteController(localCache);

router.get('/', flightRouteController.getFlightRoutesByAirport);
router.post('/', flightRouteController.createFlightRoute);

module.exports = router;