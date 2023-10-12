const express = require('express');

const PermissionController = require('../controller/permission.controller');
const localCache = require('../../infrastructure/config/localCache');

const router = express.Router();
const permissionController = new PermissionController(localCache);

router.get('/', permissionController.getAllPermissions);

module.exports = router;