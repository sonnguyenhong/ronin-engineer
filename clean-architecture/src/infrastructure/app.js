// Framework and Drivers
const express = require('express');

const { DEFAULT_ERROR_STATUS, DEFAULT_ERROR_MESSAGE } = require('./constant');
const route = require('../application/route');
const { redisClient } = require('./config/redis');

const app = express();
app.use(express.json());
// APPLY ROUTES
route(app);

// ERROR HANDLER
app.use((err, req, res, next) => {
    const status = err.status || DEFAULT_ERROR_STATUS;
    const message = err.message || DEFAULT_ERROR_MESSAGE;
    const stack = err.stack;
    
    return res.status(status).json({
        status,
        message, 
        stack
    });
});

(async () => {
    redisClient.on('error', (err) => console.log('Redis client error: ', err));
    await redisClient.connect();
})();

module.exports = app;