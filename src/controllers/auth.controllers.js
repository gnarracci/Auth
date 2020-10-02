import User from '../models/User';

export const signup = async (req, res) => {
    const {username, email, password, role} = req.body;

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })
    console.log(newUser)


    res.json('signup');
}

export const signin = async (req, res) => {
    res.json('signin');
}