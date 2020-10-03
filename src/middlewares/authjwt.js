import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../models/User';

export const verifyToken = async (req, res, next) => {

    // Token taken
    const token = req.headers["x-access-token"];

    console.log(token);

    // Token Sent Verification
    if(!token) return res.status(403).json({message: "Not token provided!"});

    //Token Info Verification
    const decoded = jwt.verify(token, config.SECRET);

    console.log(decoded);

    next();

}