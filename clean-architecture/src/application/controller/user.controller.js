const SuccessResponse = require("../dto/success.response");
const userService = require('../../domain/user/service/user.service');

class UserController {

    assignRolesForUser = async (req, res, next) => {
        try {
            const user = await userService.assignRolesForUser(req.body);

            return new SuccessResponse({
                message: 'Assign roles for user successfully',
                data: user,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }

}

module.exports = UserController;