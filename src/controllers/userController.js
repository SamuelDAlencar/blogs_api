const { User } = require('../database/models');
const generateJwt = require('../utils/generateJwt');

module.exports = {
  signUp: async (req, res) => {
    const { displayName, email, image } = req.body;
    const userData = req.body;
    const payload = { displayName, email, image };
    const token = generateJwt(payload);

    await User.create(userData);

    return res.status(201).json({ token });
  },

  getAll: async (req, res) => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });

    res.status(200).json(users);
  },
};
