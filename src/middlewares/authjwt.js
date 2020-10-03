import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../models/User';

export const verifyToken = async (req, res, next) => {

    try {
        // Token taken
        const token = req.headers["x-access-token"];

        // Token Sent Verification
        if(!token) return res.status(403).json({message: "No token provided!"});

        // Token Info Verification
        const decoded = jwt.verify(token, config.SECRET);

        // User Data
        const user = await User.findById(decoded.id, {password: 0});
    
        if (!user) return res.status(404).json({message: "No User Found!"});

        next();
    } catch (error) {

        return res.status(500).json({message: "Unauthorized!"});
        
    }

}