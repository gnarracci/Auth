import User from '../models/User';

export const signup = async (req, res) => {
    const {username, email, password, role} = req.body;

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })
    
    await newUser.save();


    res.json('signup');
}

export const signin = async (req, res) => {
    res.json('signin');
}