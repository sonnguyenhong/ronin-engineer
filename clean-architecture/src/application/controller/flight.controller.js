const SuccessResponse = require("../dto/success.response");
const FlightService = require('../../domain/flight/service/flight.service');

class FlightController {
    constructor(localCache) {
        this.flightService = new FlightService(localCache);
    }

    getAllFlights = async (req, res, next) => {
        try {
            const flights = await this.flightService.getAllFlights(req.query);

            return new SuccessResponse({ 
                message: 'Get all flights successfully',
                data: flights,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }

    createFlight = async (req, res, next) => {
        try {   
            const newFlight = await this.flightService.createFlight(req.body);

            return new SuccessResponse({
                message: 'Create new flight successfully',
                data: newFlight,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }
}

module.exports = FlightController;