function route(app) {
    app.use('/airport-service/v1/airports', require('./airport.route'));
}

module.exports = route;