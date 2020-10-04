import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../models/User';
import Role from '../models/Role';

export const verifyToken = async (req, res, next) => {

    try {
        // Token taken
        const token = req.headers["x-access-token"];

        // Token Sent Verification
        if(!token) return res.status(403).json({message: "No token provided!"});

        // Token Info Verification
        const decoded = jwt.verify(token, config.SECRET);

        // Id user saved on Request Object
        req.userId = decoded.id;

        // User Data
        const user = await User.findById(req.userId, {password: 0});
    
        if (!user) return res.status(404).json({message: "No User Found!"});

        next();

    } catch (error) {

        return res.status(500).json({message: "Unauthorized!"});

    }

}

// Users Roles Verfications
export const isUser = async (req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({_id: {$in: user.roles}});

    console.log(roles);
    next();
}


export const isAdmin = async (req, res, next) => {

}