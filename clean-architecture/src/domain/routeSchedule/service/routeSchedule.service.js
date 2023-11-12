const { getAllRouteSchedules, getRouteSchedulesByCode, createRouteSchedule } = require('../repository/routeSchedule.repo');
const ErrorResponse = require('../../dto/error.response');
const { HTTP_STATUS_CODE } = require('../../../infrastructure/constant');

class RouteScheduleService {
    constructor(localCache) {
        this.localCache = localCache;
    }

    getAllRouteSchedules = async ({ page, perPage, sortOrder, sortBy, filter }) => {
        const routeSchedules = await getAllRouteSchedules({ page, perPage, sortOrder, sortBy, filter });
        return routeSchedules;
    }

    createRouteSchedule = async ({ code, flightRouteId, flightId, startTime, finishTime }) => {
        const existedRouteSchedule = await getRouteSchedulesByCode({ code });
        if(existedRouteSchedule) {
            throw new ErrorResponse('Route schedule code existed', HTTP_STATUS_CODE.BAD_REQUEST);
        }
        const newRouteSchedule = await createRouteSchedule({ code, flightRouteId, flightId, startTime, finishTime });
        return newRouteSchedule;
    }
}

module.exports = RouteScheduleService;