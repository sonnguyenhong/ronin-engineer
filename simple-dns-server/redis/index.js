const { createClient } = require("redis");

class Redis {
    constructor() {
        if(!Redis.instance) {
            this.client = createClient();
            this.client.connect()
                .then(() => {
                    console.log('Connect to Redis successfully')
                })
                .catch(err => {
                    console.log('Error occured when connect to Redis ', err.message);
                });
            Redis.instance = this.client;
        }
        return Redis.instance;
    }
}

const redis = new Redis();

Object.freeze(redis);

module.exports = redis;