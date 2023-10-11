const { ROLES_CACHE_KEY } = require("../constant");
const { createNewRole, getAllRoles } = require("../repository/role.repo");

class RoleService { 
    constructor(localCache) {
        this.localCache = localCache;
    }

    createNewRole = async ({ roleName, permissionIds }) => {
        const role = await createNewRole({ roleName, permissionIds });
        return role;
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