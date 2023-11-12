const { authMiddleware } = require('../middleware/auth.middleware');
const { 
    AIRPORT_SERVICE,
    API_VERSION,
    AIRPORT_ROUTE,
    ROLE_ROUTE,
    PERMISSION_ROUTE,
    AUTH_ROUTE,
    USER_ROUTE,
    AIRCRAFT_ROUTE,
    FLIGHT_ROUTE,
    FLIGHT_SEAT,
    RESERVATION,
    TICKET,
    PAYMENT,
    ROUTE_SCHEDULE_ROUTE,
    FLIGHT_ROUTE_ROUTE, 
} = require('./constant');

function route(app) {
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${AIRPORT_ROUTE}`, authMiddleware, require('./airport.route'));
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${ROLE_ROUTE}`, authMiddleware, require('./role.route'));
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${PERMISSION_ROUTE}`, authMiddleware, require('./permission.route'));
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${AUTH_ROUTE}`, require('./auth.route'));
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${USER_ROUTE}`, authMiddleware, require('./user.route'));
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${AIRCRAFT_ROUTE}`, authMiddleware, require('./aircraft.route'));
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${FLIGHT_ROUTE}`, authMiddleware, require('./flight.route'));
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${FLIGHT_SEAT}`, authMiddleware, require('./flightSeat.route'));
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${RESERVATION}`, authMiddleware, require('./reservation.route'));
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${TICKET}`, authMiddleware, require('./ticket.route'));
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${PAYMENT}`, authMiddleware, require('./payment.route'));
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${FLIGHT_ROUTE_ROUTE}`, authMiddleware, require('./flightRoute.route'));
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${ROUTE_SCHEDULE_ROUTE}`, authMiddleware, require('./routeSchedule.route'));
}

module.exports = route;