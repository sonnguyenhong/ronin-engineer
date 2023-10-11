const SECRET_KEY = process.env.SECRET_KEY;
const ACCESSTOKEN_EXPIRES_IN = process.env.ACCESSTOKEN_EXPIRES_IN;
const ROLES_CACHE_KEY = "roles";

module.exports = {
    SECRET_KEY,
    ACCESSTOKEN_EXPIRES_IN,
    ROLES_CACHE_KEY,
}