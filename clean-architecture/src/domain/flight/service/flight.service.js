const { getAllFlights, createFlight, getFlightByCode } = require('../repository/flight.repo');
const { LIST_FLIGHTS_CACHE } = require('../constant');
const ErrorResponse = require('../../dto/error.response');
const { HTTP_STATUS_CODE } = require('../../../infrastructure/constant');

class FlightService {
    constructor(localCache) {
        this.localCache = localCache;
    }

    getAllFlights = async ({ page = 1, perPage = 5, sortOrder = 'asc', sortBy = 'id', filter = {} }) => {
        let flights;
        const listFlightCacheKey = LIST_FLIGHTS_CACHE(page, perPage);

        flights = this.localCache.get(listFlightCacheKey);
        if(!flights) {
            console.log('CACHE MISS');
            flights = await getAllFlights({ page, perPage, sortOrder, sortBy, filter });
            this.localCache.set(listFlightCacheKey, flights);
        }
        
        return flights;
    }

    createFlight = async ({ 
        code,
        aircraftId,
        sourceAirportId,
        destAirportId,
        departureTime,
        estimatedArrivalTime,
        actualArrivalTime,
        totalCapacity,
        availableCapacity,
        data,
        status,
    }) => {
        const existedFlight = await getFlightByCode({ code });
        if(existedFlight) {
            throw new ErrorResponse('Flight code existed', HTTP_STATUS_CODE.BAD_REQUEST);
        }
        const newFlight = await createFlight({ 
            code,
            aircraftId,
            sourceAirportId,
            destAirportId,
            departureTime,
            estimatedArrivalTime,
            actualArrivalTime,
            totalCapacity,
            availableCapacity,
            data,
            status,
         });
        this.localCache.del(this.localCache.keys());
        return newFlight;
    }
}

module.exports = FlightService;