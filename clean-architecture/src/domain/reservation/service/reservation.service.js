const { getAllReservations, getReservationByCode, createReservation } = require('../repository/reservation.repo');
const ErrorResponse = require('../../dto/error.response');
const { HTTP_STATUS_CODE } = require('../../../infrastructure/constant');
const { randomReservationCode } = require('../util');

class FlightService {
    constructor(localCache) {
        this.localCache = localCache;
    }

    getAllReservations = async ({ page, perPage, sortOrder, sortBy, filter }) => {
        const reservations = await getAllReservations({ page, perPage, sortOrder, sortBy, filter });
        return reservations;
    }

    getReservationByCode = async ({ code }) => {
        const reservation = await getReservationByCode({ code });
        return reservation;
    }

    createReservation = async ({ userId }) => {
        const reservationCode = randomReservationCode();
        const existedReservation = await getReservationByCode({ reservationCode });
        if(existedReservation) {
            throw new ErrorResponse('Reservation code existed', HTTP_STATUS_CODE.BAD_REQUEST);
        }
        const newReservation = await createReservation({ 
            code: reservationCode,
            userId,
        });

        return newReservation;
    }
}

module.exports = FlightService;