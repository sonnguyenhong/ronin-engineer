const SuccessResponse = require("../dto/success.response");
const AircraftService = require('../../domain/aircraft/service/aircraft.service');

class AircraftController {
    constructor(localCache) {
        this.aircraftService = new AircraftService(localCache);
    }

    getAllAircrafts = async (req, res, next) => {
        try {
            const aircrafts = await this.aircraftService.getAllAircrafts(req.query);

            return new SuccessResponse({ 
                message: 'Get all aircrafts successfully',
                data: aircrafts,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }

    createAircraft = async (req, res, next) => {
        try {   
            const newAircraft = await this.aircraftService.createAircraft(req.body);

            return new SuccessResponse({
                message: 'Create new aircraft successfully',
                data: newAircraft,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }
}

module.exports = AircraftController;