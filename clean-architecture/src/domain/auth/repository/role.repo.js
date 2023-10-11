const { PrismaClient } = require('@prisma/client');
const ErrorResponse = require('../../dto/error.response');
const { HTTP_STATUS_CODE } = require('../../../infrastructure/constant');

const prisma = new PrismaClient();

const createNewRole = async ({ roleName, permissionIds = [] }) => {
    return await prisma.$transaction(async (tx) => {
        const role = await tx.role.create({
            data: {
                roleName: roleName,
            }
        });

        if(!role) {
            throw new ErrorResponse('Fail to create new role', HTTP_STATUS_CODE.BAD_REQUEST);
        };
    
        for(const permissionId of permissionIds) {
            await tx.permissionBinding.create({
                data: {
                    roleId: role.id,
                    permissionId: permissionId,
                }
            });
        };

        return role;
    });
}

const getAllRoles = async () => {
    const roles = await prisma.role.findMany({});
    return roles;
}

const getRoleByRoleId = async ({ roleId }) => {
    const role = await prisma.role.findFirst({
        where: {
            id: roleId,
        }
    });
    return role;
}

const getRolesByUserId = async ({ userId }) => {
    const roleBindings = await prisma.roleBinding.findMany({
        where: {
            userId
        }
    });
    const roleIds = roleBindings.map((roleBinding) => roleBinding.roleId);
    const roles = [];
    for(const roleId of roleIds) {
        const role = await getRoleByRoleId({ roleId });
        roles.push(role);
    }
    return roles;
}

module.exports = {
    createNewRole,
    getAllRoles,
    getRoleByRoleId,
    getRolesByUserId,
}