const { authMiddleware } = require('../middleware/auth.middleware');
const { AIRPORT_SERVICE, API_VERSION, AIRPORT_ROUTE, ROLE_ROUTE, PERMISSION_ROUTE, AUTH_ROUTE, USER_ROUTE } = require('./constant');

function route(app) {
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${AIRPORT_ROUTE}`, authMiddleware, require('./airport.route'));
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${ROLE_ROUTE}`, authMiddleware, require('./role.route'));
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${PERMISSION_ROUTE}`, authMiddleware, require('./permission.route'));
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${AUTH_ROUTE}`, require('./auth.route'));
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${USER_ROUTE}`, authMiddleware, require('./user.route'));
}

module.exports = route;