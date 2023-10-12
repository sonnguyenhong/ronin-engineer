const { Prisma } = require("@prisma/client");
const { HTTP_STATUS_CODE } = require("../../../infrastructure/constant");
const ErrorResponse = require("../../dto/error.response");
const { ROLES_CACHE_KEY } = require("../constant");
const { createNewRole, getAllRoles, getRoleByRoleId, updateRoleById } = require("../repository/role.repo");
const { getPermissionIdsByRoleId, deletePermissionBinding, createPermissionBinding } = require("../repository/permission.repo");

class RoleService { 
    constructor(localCache) {
        this.localCache = localCache;
    }

    createNewRole = async ({ roleName, permissionIds }) => {
        const role = await createNewRole({ roleName, permissionIds });
        return role;
    }

    updateRoleById = async ({ roleId, roleName, permissions }) => {
        let updatedRole;
        updatedRole = await getRoleByRoleId({ roleId: parseInt(roleId) });
        
        if(!updatedRole) {
            throw new ErrorResponse(`Role with id ${roleId} not existed`, HTTP_STATUS_CODE.NOT_FOUND);
        }
        if(roleName) {
            updatedRole = await updateRoleById({ roleId: parseInt(roleId), roleName });
        }
        if(permissions) {
            const oldPermissionIds = (await getPermissionIdsByRoleId({ roleId: parseInt(roleId) })).map(permission => permission.permissionId);
            for(const permissionId of oldPermissionIds) {
                if(!permissions.includes(permissionId)) {
                    await deletePermissionBinding({ permissionBindingId: permissionId });
                }
            }

            for(const permissionId of permissions) {
                if(!oldPermissionIds.includes(permissionId)) {
                    await createPermissionBinding({ roleId: parseInt(roleId), permissionId });
                }
            }
        }

        return updatedRole;
    }

    getAllRoles = async () => {
        let roles;
        roles = this.localCache.get(ROLES_CACHE_KEY);

        if(!roles) {
            console.log('CACHE MISS');
            roles = await getAllRoles();
            this.localCache.set(ROLES_CACHE_KEY, roles);
        }

        return roles;
    }
}

module.exports = RoleService;