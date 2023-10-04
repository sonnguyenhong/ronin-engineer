const { getAllAirports, createAirport, getAirportByCode } = require('../repository/airport.repo');
const { LIST_AIRPORTS_CACHE } = require('../constant');
const ErrorResponse = require('../../dto/error.response');
const { HTTP_STATUS_CODE } = require('../../../infrastructure/constant');

class AirportService {
    constructor(localCache) {
        this.localCache = localCache;
    }

    getAllAirports = async ({ page = 1, perPage = 5, sortOrder = 'asc', sortBy = 'id', filter = {} }) => {
        let airports;
        const listAirportCacheKey = LIST_AIRPORTS_CACHE(page, perPage);

        airports = this.localCache.get(listAirportCacheKey);
        if(!airports) {
            console.log('CACHE MISS');
            airports = await getAllAirports({ page, perPage, sortOrder, sortBy, filter });
            this.localCache.set(listAirportCacheKey, airports);
        }
        
        return airports;
    }

    createAirport = async ({ code, name }) => {
        const existedAirport = getAirportByCode({ code });
        if(existedAirport) {
            throw new ErrorResponse('Airport code existed', HTTP_STATUS_CODE.BAD_REQUEST);
        }
        const newAirport = await createAirport({ code, name });
        this.localCache.del(this.localCache.keys());
        return newAirport;
    }
}

module.exports = AirportService;