const { AIRPORT_SERVICE, API_VERSION, AIRPORT_ROUTE, ROLE_ROUTE, PERMISSION_ROUTE } = require('./constant');

function route(app) {
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${AIRPORT_ROUTE}`, require('./airport.route'));
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${ROLE_ROUTE}`, require('./role.route'));
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${PERMISSION_ROUTE}`, require('./permission.route'));
}

module.exports = route;