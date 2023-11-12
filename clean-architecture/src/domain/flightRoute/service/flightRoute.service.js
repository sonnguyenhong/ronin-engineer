const { getFlightRoutesByAirport, getFlightRouteByCodeAndAirportId, createFlightRoute } = require('../repository/flightRoute.repo');
const ErrorResponse = require('../../dto/error.response');
const { HTTP_STATUS_CODE } = require('../../../infrastructure/constant');

class PaymentService {
    constructor(localCache) {
        this.localCache = localCache;
    }

    getFlightRoutesByAirport = async ({ reservationId }) => {
        const payment = await getPaymentByReservationId({ reservationId });
        return payment;
    }

    createFlightRoute = async ({ airportId, code }) => {
        const existedFlightRoute = await getFlightRouteByCodeAndAirportId({ airportId, code });
        if(existedFlightRoute) {
            throw new ErrorResponse('Flight route code existed', HTTP_STATUS_CODE.BAD_REQUEST);
        }
        const newFlightRoute = await createFlightRoute({ airportId, code });
        return newFlightRoute;
    }
}

module.exports = PaymentService;