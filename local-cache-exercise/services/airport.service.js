const AirportModel = require("../models/airport.model");
const cache = require('./cache.service');

const TIME_TO_LIVE_IN_SECONDS = 60

class AirportService {
    static async getAirports({ limit = 5, sortBy = 'name', sortOrder = 1, page = 1, filter = {} }) {
        let airports;

        const skip = (page - 1) * limit;
        airports = cache.get(`airports-page-${page}-lim-${limit}`);
        
        if(airports === undefined) {
            console.log('CACHE MISS');
            airports = await AirportModel.find(filter)
                .sort({[sortBy]: sortOrder})
                .skip(skip)
                .limit(limit)
                .lean();
            cache.set(`airports-page-${page}-lim-${limit}`, airports, TIME_TO_LIVE_IN_SECONDS);
        }

        return airports;
    }

    static async addAirport({ code, name }) {
        const newAirport = await AirportModel.create({
            code: code,
            name: name,
        })

        console.log(cache.keys());
        cache.del(cache.keys());
        console.log(cache.keys());

        return newAirport;
    }
}

module.exports = AirportService;