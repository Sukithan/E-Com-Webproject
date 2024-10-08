const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes for users
router.post('/signup', userController.signup);
router.post('/login', userController.login);

module.exports = router;
