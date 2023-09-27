const NodeCache = require('node-cache');

const { LOCALCACHE_TTL } = require('../config');

const localCache = new NodeCache({ stdTTL: LOCALCACHE_TTL });

module.exports = localCache;