const { AIRPORT_SERVICE, API_VERSION, AIRPORT_ROUTE } = require('./constant');

function route(app) {
    app.use(`/${AIRPORT_SERVICE}/${API_VERSION}/${AIRPORT_ROUTE}`, require('./airport.route'));
}

module.exports = route;