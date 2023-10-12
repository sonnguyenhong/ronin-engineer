const SuccessResponse = require("../dto/success.response");
const PermissionService = require('../../domain/auth/service/permission.service');

class PermissionController {
    constructor(localCache) {
        this.permissionService = new PermissionService(localCache);
    }

    getAllPermissions = async (req, res, next) => {
        try {
            const permissions = await this.permissionService.getAllPermissions();
            
            return new SuccessResponse({ 
                message: 'Get all permissions successfully',
                data: permissions,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }
}

module.exports = PermissionController;