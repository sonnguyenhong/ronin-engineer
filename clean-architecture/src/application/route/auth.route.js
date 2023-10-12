const express = require('express');

const AuthController = require('../controller/auth.controller');

const router = express.Router();
const authController = new AuthController();

router.post('/signUp', authController.signUp);
router.post('/signIn', authController.signIn);

module.exports = router;