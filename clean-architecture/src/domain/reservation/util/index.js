const randomstring = require('randomstring');
const { RESERVATION_CODE_LENGTH } = require('../constant');

const randomReservationCode = () => {
    return randomstring.generate(RESERVATION_CODE_LENGTH);
}

module.exports = {
    randomReservationCode,
}