const SuccessResponse = require("../dto/success.response");
const authService = require('../../domain/auth/service/auth.service');

class AuthController {
    signUp = async (req, res, next) => {
        try {
            const newUser = await authService.signUp(req.body);

            return new SuccessResponse({
                message: 'Sign up successfully',
                data: newUser,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }

    signIn = async (req, res, next) => {
        try {
            const accessToken = await authService.signIn(req.body);

            return new SuccessResponse({
                message: 'Sign in successfully',
                data: accessToken,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }
}

module.exports = AuthController;