const express = require('express');
const { registerUser, loginUser, forgotPassword } = require('../controllers/users.controller.js');

const userRoutes = express.Router();

userRoutes.post('/register', registerUser);
userRoutes.post('/login', loginUser);
userRoutes.post('/forgot-password', forgotPassword);

module.exports = {
  userRoutes
};
