const express = require('express');

const RoleController = require('../controller/role.controller');
const localCache = require('../../infrastructure/config/localCache');

const router = express.Router();
const roleController = new RoleController(localCache);

router.get('/', roleController.getAllRoles);
router.post('/', roleController.createNewRole);
router.put('/:roleId', roleController.updateRoleById);

module.exports = router;