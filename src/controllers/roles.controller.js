import Role from '../models/Role';

export const getRoles = async (req, res) => {
    const roles = await Role.find();
    res.status(200).json(roles);
};