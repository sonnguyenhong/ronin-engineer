const { getFlightSeatByCodeAndFlightId, getFlightSeatsByFlightId, createFlightSeat } = require('../repository/flightSeat.repo');
const { LIST_FLIGHT_SEATS_CACHE } = require('../constant');
const ErrorResponse = require('../../dto/error.response');
const { HTTP_STATUS_CODE } = require('../../../infrastructure/constant');

class FlightService {
    constructor(localCache) {
        this.localCache = localCache;
    }

    getFlightSeatsByFlightId = async ({ flightId }) => {
        let flightSeats;
        const listFlightSeatsCacheKey = LIST_FLIGHT_SEATS_CACHE(flightId);

        flightSeats = this.localCache.get(listFlightSeatsCacheKey);
        if(!flightSeats) {
            console.log('CACHE MISS');
            flightSeats = await getFlightSeatsByFlightId({ flightId });
            this.localCache.set(listFlightSeatsCacheKey, flights);
        }
        
        return flightSeats;
    }

    createFlightSeat = async ({ 
        flightId, 
        seatCode,
        price,
    }) => {
        const existedFlightSeat = await getFlightSeatByCodeAndFlightId({ flightId, seatCode });
        if(existedFlightSeat) {
            throw new ErrorResponse('Flight seat code existed', HTTP_STATUS_CODE.BAD_REQUEST);
        }
        const newFlightSeat = await createFlightSeat({ 
            flightId, 
            seatCode,
            price,
         });
        this.localCache.del(this.localCache.keys());
        return newFlightSeat;
    }
}

module.exports = FlightService;