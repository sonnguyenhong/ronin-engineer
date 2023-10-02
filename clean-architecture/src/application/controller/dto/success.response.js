const { HTTP_STATUS_CODE, REASON_PHRASE, API_STATUS_CODE, API_RESPONSE_TYPE } = require('../constant');
 
class SuccessResponse {
    constructor({ status = HTTP_STATUS_CODE.OK, message = REASON_PHRASE.OK, data={} }) {
        const meta = {
            code: API_STATUS_CODE.SUCCESS,
            type: API_RESPONSE_TYPE.SUCCESS,
            message: message,
        }
        this.status = status;
        this.meta = meta;
        this.data = data;
    }

    send(res) {
        return res.status(this.status).json(this);
    }
}

module.exports = SuccessResponse;