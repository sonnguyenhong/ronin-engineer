const SuccessResponse = require("../dto/success.response");
const AirportService = require('../../domain/airport/service/airport.service');

class AirportController {
    constructor(localCache) {
        this.airportService = new AirportService(localCache);
    }

    getAllAirports = async (req, res, next) => {
        try {
            const airports = await this.airportService.getAllAirports(req.query);

            return new SuccessResponse({ 
                message: 'Get all airports successfully',
                data: airports,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }

    createAirport = async (req, res, next) => {
        try {   
            const newAirport = await this.airportService.createAirport(req.body);

            return new SuccessResponse({
                message: 'Create new airport successfully',
                data: newAirport,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }
}

module.exports = AirportController;