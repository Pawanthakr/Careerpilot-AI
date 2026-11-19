const express = require('express');
const authrouter = express.Router();
const authcontroller = require('../controllers/auth.controller');   


/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authrouter.post('/register',authcontroller.registerUser);


/**
 * @route POST /api/auth/login
 * @description Login a user with email and password
 * @access Public
 */
authrouter.post('/login',authcontroller.loginUser);





module.exports = authrouter;