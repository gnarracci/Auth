import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config';
import Role from '../models/Role';

export const signup = async (req, res) => {
    const {username, email, password, roles} = req.body;

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    // Find Roles
    if (req.body.roles) {
        const foundRoles = await Role.find({name: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id)
    } else {
        const role = await Role.findOne({name: "user"})
        newUser.roles = [role._id];
    }

    // Save User
    const saveUser = await newUser.save();
    console.log(saveUser);

    // JWT Token
    const token = jwt.sign({id: saveUser._id}, config.SECRET, {
        expiresIn: 43200 // Token expire in 12 hours
    })


    res.json({token});
}

export const signin = async (req, res) => {
    res.json('signin');
}