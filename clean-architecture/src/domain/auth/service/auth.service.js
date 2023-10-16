const { HTTP_STATUS_CODE } = require("../../../infrastructure/constant");
const ErrorResponse = require("../../dto/error.response");
const { getUserByUsername, createUser } = require("../../user/service/user.service");
const { SECRET_KEY } = require("../constant");
const { getPermissionsByUserId } = require("../repository/permission.repo");
const { getRolesByUserId } = require("../repository/role.repo");
const { checkMatchPassword, createAccessToken } = require("../util/auth.util");

class AuthService {
    signUp = async ({ username, password, fullname, dateOfBirth, address }) => {
        const existedUser = await getUserByUsername({ username });
        
        if(existedUser) {
            throw new ErrorResponse('Username existed', HTTP_STATUS_CODE.BAD_REQUEST);
        }
        const newUser = await createUser({ 
            username, 
            password, 
            fullname, 
            dateOfBirth, 
            address 
        });

        return newUser;
    }

    signIn = async ({ username, password }) => {
        const existedUser = await getUserByUsername({ username });
        
        if(!existedUser) {
            throw new ErrorResponse('Username not existed', HTTP_STATUS_CODE.BAD_REQUEST);
        }
        const isMatchPassword = await checkMatchPassword({ userPassword: password, hashedPassword: existedUser.password });
        if(!isMatchPassword) {
            throw new ErrorResponse('Password is not match', HTTP_STATUS_CODE.BAD_GATEWAY);
        }

        const userRoles = await getRolesByUserId({ userId: existedUser.id });
        const userPermissions = await getPermissionsByUserId({ userId: existedUser.id });

        const accessToken = createAccessToken({ 
            userId: existedUser.id,
            roles: userRoles,
            permissions: userPermissions,
            secretKey: SECRET_KEY,
        });

        return accessToken;
    }
}

module.exports = new AuthService();