const { getAllAirports, createAirport } = require('../domain/repository/airport.repo');
const { LIST_AIRPORTS_CACHE } = require('./constant');

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
        const newAirport = await createAirport({ code, name });
        this.localCache.del(this.localCache.keys());
        return newAirport;
    }
}

module.exports = AirportService;