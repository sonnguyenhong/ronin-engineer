const redis = require('redis');
const { REDIS_URL } = require('.');

const MAX_LOCK_RETRY = 3;
const DELAY_MS = 3000;

const redisClient = redis.createClient({
    url: REDIS_URL,
});

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const lock = async (key, value, ttl) => {
    return await redisClient.set(key, value, {
        EX: ttl,    // in seconds
        NX: true,
    });
}

const lockWithRetry = async (key, value, ttl) => {
    let currentRetry = 0;
    while(currentRetry < MAX_LOCK_RETRY) {
        const isLock = await lock(key, value, ttl);
        if(isLock) {
            return true;
        } else {
            await delay(DELAY_MS);
            currentRetry = currentRetry + 1;
        }
    }

    return false;
}

const unLock = async (key) => {
    return await redisClient.del(key);
}

module.exports = {
    redisClient,
    lockWithRetry,
    unLock,
};