const DEFAULT_ERROR_STATUS = 500;
const DEFAULT_ERROR_MESSAGE = 'Internal Server Error';

module.exports = {
    DEFAULT_ERROR_STATUS, 
    DEFAULT_ERROR_MESSAGE,
    HTTP_STATUS_CODE: require('./httpStatusCode'),
    REASON_PHRASE: require('./reasonPhrase'),
    API_STATUS_CODE: require('./apiStatusCode'),
    API_RESPONSE_TYPE: require('./apiResponseType'),
}