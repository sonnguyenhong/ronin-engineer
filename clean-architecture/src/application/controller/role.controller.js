const SuccessResponse = require("../dto/success.response");
const RoleService = require('../../domain/auth/service/role.service');

class RoleController {
    constructor(localCache) {
        this.roleService = new RoleService(localCache);
    }

    getAllRoles = async (req, res, next) => {
        try {
            const roles = await this.roleService.getAllRoles();
            
            return new SuccessResponse({ 
                message: 'Get all roles successfully',
                data: roles,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }

    createNewRole = async (req, res, next) => {
        try {
            const newRole = await this.roleService.createNewRole({ 
                roleName: req.body.roleName,
                permissionIds: req.body.permissionIds,
            });

            return new SuccessResponse({
                message: 'Create new role successfully',
                data: newRole,
            }).send(res);
        } catch(err) {
            next(err);
        }
    }
}

module.exports = RoleController;