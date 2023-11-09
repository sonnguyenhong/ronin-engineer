const { getAllAircrafts, createAircraft, getAircraftByCode } = require('../repository/aircraft.repo');
const { LIST_AIRCRAFTS_CACHE } = require('../constant');
const ErrorResponse = require('../../dto/error.response');
const { HTTP_STATUS_CODE } = require('../../../infrastructure/constant');

class AircraftService {
    constructor(localCache) {
        this.localCache = localCache;
    }

    getAllAircrafts = async ({ page = 1, perPage = 5, sortOrder = 'asc', sortBy = 'id', filter = {} }) => {
        let aircrafts;
        const listAircraftCacheKey = LIST_AIRCRAFTS_CACHE(page, perPage);

        aircrafts = this.localCache.get(listAircraftCacheKey);
        if(!aircrafts) {
            console.log('CACHE MISS');
            aircrafts = await getAllAircrafts({ page, perPage, sortOrder, sortBy, filter });
            this.localCache.set(listAircraftCacheKey, aircrafts);
        }
        
        return aircrafts;
    }

    createAircraft = async ({ code, name }) => {
        const existedAircraft = await getAircraftByCode({ code });
        if(existedAircraft) {
            throw new ErrorResponse('Aircraft code existed', HTTP_STATUS_CODE.BAD_REQUEST);
        }
        const newAircraft = await createAircraft({ code, name });
        this.localCache.del(this.localCache.keys());
        return newAircraft;
    }
}

module.exports = AircraftService;