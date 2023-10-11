const { PrismaClient } = require('@prisma/client');
const { getRolesByUserId } = require('./role.repo');

const prisma = new PrismaClient();

const getPermissionsById = async ({ permissionId }) => {
    const permission = await prisma.permission.findUnique({
        where: {
            id: permissionId,
        }
    });
    return permission;
}

const getPermissionsByUserId = async ({ userId }) => {
    const roles = await getRolesByUserId({ userId });
    const roleIds = roles.map((role) => role.id);

    const permissions = [];
    const permissionsOfRoles = await prisma.permissionBinding.findMany({
        where: {
            roleId: {
                in: roleIds
            }
        }
    });
    const permissionIds = permissionsOfRoles.map((permission) => permission.permissionId);
    for(const permissionId of permissionIds) {
        const permission = await getPermissionsById({ permissionId });
        permissions.push(permission);
    }

    return permissions;
}
 
module.exports = {
    getPermissionsById,
    getPermissionsByUserId,
}