const SuccessResponse = require("../dto/success.response");
const FlightRouteService = require('../../domain/flightRoute/service/flightRoute.service');

class FlightRouteController {
    constructor(localCache) {
        this.flightRouteService = new FlightRouteService(localCache);
    }

    getFlightRoutesByAirport = async (req, res, next) => {
        try {
            const flightRoutes = await this.flightRouteService.getFlightRoutesByAirport(req.query);

            return new SuccessResponse({ 
                message: 'Get flight routes successfully',
                data: flightRoutes,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }

    createFlightRoute = async (req, res, next) => {
        try {   
            const newFlightRoute = await this.flightRouteService.createFlightRoute(req.body);

            return new SuccessResponse({
                message: 'Create new flight route successfully',
                data: newFlightRoute,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }
}

module.exports = FlightRouteController;