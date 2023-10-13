const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getUserById = async ({ userId }) => {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        }
    });

    return user;
}

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

const assignRolesForUser = async ({ userId, roleIds }) => {
    for(const roleId of roleIds) {
        await prisma.roleBinding.create({
            data: {
                userId: parseInt(userId),
                roleId: parseInt(roleId),
            }
        });
    }
    
    return {
        userId,
        roleIds,
    }
}

module.exports = {
    getUserById,
    getUserByUsername,
    createUser,
    assignRolesForUser,
}