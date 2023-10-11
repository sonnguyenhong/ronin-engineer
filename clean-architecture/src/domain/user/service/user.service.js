const { getUserByUsername, createUser } = require("../repository/user.repo");

class UserService {
    getUserByUsername = async ({ username }) => {
        const user = await getUserByUsername({ username });
        return user;
    }

    createUser = async ({ username, password, fullname, dateOfBirth, address }) => {
        const newUser = await createUser({ username, password, fullname, dateOfBirth, address });
        return newUser;
    }
}

module.exports = new UserService();