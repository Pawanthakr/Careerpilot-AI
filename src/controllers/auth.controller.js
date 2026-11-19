const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');  
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


/**
 * @route POST /api/auth/register
 * @description Register a new user,expects username, email and password in the request body
 * @access Public   
 */
async function registerUser(req, res) {

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please provide username, email and password' });
    }
    const existingUser = await userModel.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        return res.status(400).json({ message: 'Account already exists with the provided email or username' });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username,
        email,
        password: hash
    });

    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1d' });
    
    res.cookie('token', token)
    res.status(201).json({ message: 'User registered successfully',
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    });

}

/**
 * @route POST /api/auth/login
 * @description login a user, expects email and password in the request body
 * @access Public   
 */

async function loginUser(req, res) {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }
    
    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.cookie('token', token)
    res.status(200).json({ message: 'User logged in successfully',
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    });
    



   

 
}

module.exports = {registerUser, loginUser}  

 
