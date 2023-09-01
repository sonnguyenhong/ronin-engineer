const AirportService = require("../services/airport.service");

class AirportController {
    static async getAirports(req, res, next) {
        try {
            const airports = await AirportService.getAirports(req.query);
            return res.json({
                status: 200,
                message: 'Get all airports successfully',
                data: airports
            });
        } catch (err) {
            return next(err);
        }
    }

    static async addAirport(req, res, next) {
        try {
            const newAirport = await AirportService.addAirport(req.body);
            return res.json({
                status: 201,
                message: 'Create airport successfully',
                data: newAirport,
            })
        } catch (err) {
            return next(err);
        }
    }
}

module.exports = AirportController;