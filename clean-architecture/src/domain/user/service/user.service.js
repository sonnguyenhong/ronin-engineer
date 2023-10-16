const { HTTP_STATUS_CODE } = require("../../../infrastructure/constant");
const ErrorResponse = require("../../dto/error.response");
const { getUserByUsername, createUser, getUserById, assignRolesForUser } = require("../repository/user.repo");
const { hashPassword } = require("../util");

class UserService {
    getUserByUsername = async ({ username }) => {
        const user = await getUserByUsername({ username });
        return user;
    }

    createUser = async ({ username, password, fullname, dateOfBirth, address }) => {
        const existedUser = await getUserByUsername({ username });
        if(existedUser) {
            throw new ErrorResponse('Username existed', HTTP_STATUS_CODE.BAD_REQUEST);
        }
        const hashedPassword = await hashPassword({ password });
        const newUser = await createUser({ username, password: hashedPassword, fullname, dateOfBirth, address });
        return newUser;
    }

    assignRolesForUser = async ({ userId, roleIds }) => {
        const user = await getUserById({ userId });
        
        if(!user) {
            throw new ErrorResponse(`User with id ${userId} not exist`, HTTP_STATUS_CODE.NOT_FOUND);
        }
        await assignRolesForUser({ userId, roleIds });

        return user;
    }
}

module.exports = new UserService();