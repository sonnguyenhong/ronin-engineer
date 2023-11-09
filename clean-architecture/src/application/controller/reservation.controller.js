const SuccessResponse = require("../dto/success.response");
const ReservationService = require('../../domain/reservation/service/reservation.service');

class ReservationController {
    constructor(localCache) {
        this.reservationService = new ReservationService(localCache);
    }

    getAllReservations = async (req, res, next) => {
        try {
            const reservations = await this.reservationService.getAllReservations(req.query);

            return new SuccessResponse({ 
                message: 'Get all reservations successfully',
                data: reservations,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }

    createReservation = async (req, res, next) => {
        try {   
            const newReservation = await this.reservationService.createReservation(req.body);

            return new SuccessResponse({
                message: 'Create new reservation successfully',
                data: newReservation,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }
}

module.exports = ReservationController;