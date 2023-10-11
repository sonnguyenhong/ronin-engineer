const { PERMISSIONS_CACHE_KEY } = require("../constant");
const { getAllPermissions } = require("../repository/permission.repo");

class PermissionService { 
    constructor(localCache) {
        this.localCache = localCache;
    }

    getAllPermissions = async () => {
        let permissions;
        permissions = this.localCache.get(PERMISSIONS_CACHE_KEY);

        if(!permissions) {
            console.log('CACHE MISS');
            permissions = await getAllPermissions();
            this.localCache.set(PERMISSIONS_CACHE_KEY, permissions);
        }

        return permissions;
    }
}

module.exports = PermissionService;