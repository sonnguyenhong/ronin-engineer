const express = require('express');

const UserController = require('../controller/user.controller');

const router = express.Router();
const userController = new UserController();

router.post('/assign_roles_for_user', userController.assignRolesForUser);

module.exports = router;