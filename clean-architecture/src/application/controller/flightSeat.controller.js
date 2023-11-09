const SuccessResponse = require("../dto/success.response");
const FlightSeatService = require('../../domain/flightSeat/service/flightSeat.service');

class FlightSeatController {
    constructor(localCache) {
        this.flightSeatService = new FlightSeatService(localCache);
    }

    getFlightSeatsByFlightId = async (req, res, next) => {
        try {
            const flightSeats = await this.flightSeatService.getFlightSeatsByFlightId(req.query);

            return new SuccessResponse({ 
                message: 'Get all flight seats successfully',
                data: flightSeats,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }

    createFlightSeat = async (req, res, next) => {
        try {   
            const newFlightSeat = await this.flightSeatService.createFlightSeat(req.body);

            return new SuccessResponse({
                message: 'Create new flight seat successfully',
                data: newFlightSeat,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }
}

module.exports = FlightSeatController;