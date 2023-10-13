const express = require('express');

const AuthController = require('../controller/auth.controller');

const router = express.Router();
const authController = new AuthController();

router.post('/sign_up', authController.signUp);
router.post('/sign_in', authController.signIn);

module.exports = router;