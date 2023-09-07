const express = require('express');
const router = express.Router();
const authController = require('../Controller/Auth');

router.post('/register', authController.register);

router.post('/login', authController.login);

router.get('/profile', authController.authenticateToken, authController.getProfile);

module.exports = router;
