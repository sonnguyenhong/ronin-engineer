const { verifyAccessToken } = require("../../domain/auth/util/auth.util");
const ErrorResponse = require("../../domain/dto/error.response");
const { HTTP_STATUS_CODE } = require("../../infrastructure/constant");
const { AUTH_HEADER, GET_METHOD, GET_ACTION, POST_METHOD, POST_ACTION, PUT_METHOD, PUT_ACTION, DELETE_METHOD, DELETE_ACTION } = require("../constant");

const MAP_ACTION = {
    [GET_METHOD]: GET_ACTION,
    [POST_METHOD]: POST_ACTION,
    [PUT_METHOD]: PUT_ACTION,
    [DELETE_METHOD]: DELETE_ACTION,
}

const authMiddleware = (req, res, next) => {
    try {
        const bearerToken = req.headers[AUTH_HEADER];
        if(!bearerToken) {
            throw new ErrorResponse('No token provided', HTTP_STATUS_CODE.UNAUTHORIZED);
        }
        const accessToken = bearerToken.split(' ')[1];
        const decoded = verifyAccessToken({ accessToken });
        const resource = req.baseUrl.split('/').pop();
        const action = MAP_ACTION[req.method];
        const resourceAction = `${resource}:${action}`;
        if(decoded.permissions.includes(resourceAction.replace('-', ''))) {
            req.user = decoded;
            return next();
        }
        throw new ErrorResponse('Forbidden action', HTTP_STATUS_CODE.FORBIDDEN);
    } catch(err) {
        next(err);
    }
}

module.exports = {
    authMiddleware,
}