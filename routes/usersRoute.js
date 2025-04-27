const express = require('express');
const UsersController = require('../controllers/usersController');
const {} = require('../validators/usersDTO');

const router = express.Router();

router.post('/auth/register', UsersController.registerUser);
router.post('/auth/login', UsersController.loginUser);
router.post('/auth/forgot-password', UsersController.loginUser);
router.post('/auth/reset-password', UsersController.loginUser);
router.post('/auth/verify-email', UsersController.verifyEmail);
router.get('/auth/me', UsersController.verifyPhone);
router.post('/auth/logout', UsersController.logoutUser);

module.exports = router;