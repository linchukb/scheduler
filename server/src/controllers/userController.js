const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const register = async (req, res) => {
    try {
        const newUser = await userModel.createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error:', error.message);
        if (error.message === 'Username or email already exists') {
            res.status(409).json({ message: error.message });  // 409 Conflict
        } else {
            res.status(500).json({ message: 'Internal Server Error' });  // 500 Internal Server Error
        }
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.findUserByUsername(username);
        if (!user || !await bcrypt.compare(password, user.password)) {
            res.status(401).json({ message: 'Invalid username or password' });
        } else {
            res.json(user);
        }
    } catch (error) {
        console.error('Error:', error.message);
        if(error.message === 'Invalid username or password'){
            res.status(409).json({message: error.message});
        }else{
            res.status(500).json({ message: 'Internal Server Error' }); 
        }
    }
};

module.exports = {
    register,
    login,
};