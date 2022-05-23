const generateJwt = require('../utils/generateJwt');
const { User } = require('../database/models');

module.exports = {
  create: (req, res) => {
    const userData = req.body;

    User.create(userData);

    return res.status(201).json(userData);
  },

  login: (req, res) => {
    const userData = req.body;

    const token = generateJwt(userData);

    return res.status(200).json({ token });
  },
};
