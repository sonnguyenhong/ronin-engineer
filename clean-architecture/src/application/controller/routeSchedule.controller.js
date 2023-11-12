const SuccessResponse = require("../dto/success.response");
const RouteScheduleService = require('../../domain/routeSchedule/service/routeSchedule.service');

class RouteScheduleController {
    constructor(localCache) {
        this.routeScheduleService = new RouteScheduleService(localCache);
    }

    getAllRouteSchedules = async (req, res, next) => {
        try {
            const routeSchedules = await this.routeScheduleService.getAllRouteSchedules(req.query);

            return new SuccessResponse({ 
                message: 'Get route schedules successfully',
                data: routeSchedules,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }

    createRouteSchedule = async (req, res, next) => {
        try {   
            const newRouteSchedule = await this.routeScheduleService.createRouteSchedule(req.body);

            return new SuccessResponse({
                message: 'Create new route schedule successfully',
                data: newRouteSchedule,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }
}

module.exports = RouteScheduleController;