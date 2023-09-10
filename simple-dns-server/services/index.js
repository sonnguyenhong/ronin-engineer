const redis = require('../redis');

redis.get('foo').then(value => console.log(value));