const express = require('express');
const AirportController = require('../controllers/airport.controller');
const router = express.Router();

router.get('/', AirportController.getAirports);
router.post('/', AirportController.addAirport);

module.exports = router;