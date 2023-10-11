const { HTTP_STATUS_CODE } = require("../../../infrastructure/constant");
const ErrorResponse = require("../../dto/error.response");
const { getUserByUsername, createUser } = require("../../user/service/user.service");
const { hashPassword, checkMatchPassword } = require("../util/auth.util");

class AuthService {
    signUp = async ({ username, password, fullname, dateOfBirth, address }) => {
        const existedUser = await getUserByUsername({ username });
        
        if(existedUser) {
            throw new ErrorResponse('Username existed', HTTP_STATUS_CODE.BAD_REQUEST);
        }
        const hashedPassword = await hashPassword({ password });
        const newUser = await createUser({ 
            username, 
            password: hashedPassword, 
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
        const isMatchPassword = await checkMatchPassword({ password, hashedPassword: existedUser.password });
        if(!isMatchPassword) {
            throw new ErrorResponse('Password is not match', HTTP_STATUS_CODE.BAD_GATEWAY);
        }
        
    }
}

module.exports = new AuthService();