import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config';

export const signup = async (req, res) => {
    const {username, email, password, role} = req.body;

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    // Save User
    const saveUser = await newUser.save();

    // JWT Token
    const token = jwt.sign({id: saveUser._id}, config.SECRET, {
        expiresIn: 43200 // Token expire in 12 hours
    })


    res.json({token});
}

export const signin = async (req, res) => {
    res.json('signin');
}