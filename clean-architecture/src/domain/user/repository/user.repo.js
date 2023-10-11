const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getUserByUsername = async ({ username }) => {
    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    });

    return user;
}

const createUser = async ({ username, password, fullname, dateOfBirth, address }) => {
    const newUser = await prisma.user.create({
        data: {
            username,
            password, 
            fullname,
            dateOfBirth,
            address,
        }
    });
    return newUser;
}

module.exports = {
    getUserByUsername,
    createUser
}