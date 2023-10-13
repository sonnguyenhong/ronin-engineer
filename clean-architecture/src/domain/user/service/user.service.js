const { HTTP_STATUS_CODE } = require("../../../infrastructure/constant");
const ErrorResponse = require("../../dto/error.response");
const { getUserByUsername, createUser, getUserById, assignRolesForUser } = require("../repository/user.repo");

class UserService {
    getUserByUsername = async ({ username }) => {
        const user = await getUserByUsername({ username });
        return user;
    }

    createUser = async ({ username, password, fullname, dateOfBirth, address }) => {
        const newUser = await createUser({ username, password, fullname, dateOfBirth, address });
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