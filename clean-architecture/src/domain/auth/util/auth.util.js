const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { ACCESSTOKEN_EXPIRES_IN } = require('../constant');

const hashPassword = async ({ password }) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

const checkMatchPassword = async ({ userPassword, hashedPassword }) => {
    const isMatchPassword = await bcrypt.compare(userPassword, hashedPassword);
    return isMatchPassword;
}

const createAccessToken = ({ userId, roles, permissions, secretKey }) => {
    const payload = {
        userId, 
        roles,
        permissions,
    };

    const accessToken = jwt.sign(payload, secretKey, {
        expiresIn: ACCESSTOKEN_EXPIRES_IN,
    });

    return accessToken;
}

module.exports = {
    hashPassword,
    checkMatchPassword,
    createAccessToken,
}