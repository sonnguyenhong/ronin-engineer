const { AIRPORT_SERVICE, API_VERSION, AIRPORT_ROUTE, ROLE_ROUTE, PERMISSION_ROUTE, AUTH_ROUTE } = require('./constant');

function route(app) {
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${AIRPORT_ROUTE}`, require('./airport.route'));
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${ROLE_ROUTE}`, require('./role.route'));
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${PERMISSION_ROUTE}`, require('./permission.route'));
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${AUTH_ROUTE}`, require('./auth.route'));
}

module.exports = route;