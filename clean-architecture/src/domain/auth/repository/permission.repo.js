const { PrismaClient } = require('@prisma/client');
const { getRolesByUserId } = require('./role.repo');

const prisma = new PrismaClient();

const getAllPermissions = async () => {
    const permissions = await prisma.permission.findMany({});
    return permissions;
}

const getPermissionsById = async ({ permissionId }) => {
    const permission = await prisma.permission.findUnique({
        where: {
            id: permissionId,
        }
    });
    return permission;
}

const getPermissionIdsByRoleId = async ({ roleId }) => {
    const permissionIdsOfRole = await prisma.permissionBinding.findMany({
        where: {
            roleId,
        }
    });
    
    return permissionIdsOfRole;
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

const getPermissionBinding = async ({ roleId, permissionId }) => {
    const permissionBinding = await prisma.permissionBinding.findFirst({ 
        where: {
            roleId: parseInt(roleId), 
            permissionId: parseInt(permissionId),
        }
    });
    
    return permissionBinding;
}

const createPermissionBinding = async ({ roleId, permissionId }) => {
    const newPermissionBinding = await prisma.permissionBinding.create({
        data: {
            roleId,
            permissionId,
        }
    });
    
    return newPermissionBinding;
}

const deletePermissionBinding = async ({ permissionBindingId }) => {
    const deletedPermissionBinding = await prisma.permissionBinding.delete({
        where: {
            id: parseInt(permissionBindingId),
        }
    });
    
    return deletedPermissionBinding;
}
  
module.exports = {
    getAllPermissions,
    getPermissionsById,
    getPermissionIdsByRoleId,
    getPermissionsByUserId,
    getPermissionBinding,
    createPermissionBinding,
    deletePermissionBinding,
}