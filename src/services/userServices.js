const secret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const generateJwt = require('../utils/generateJwt');

module.exports = {
  signUp: async ({ displayName, email, image, password }) => {
    const token = generateJwt({ displayName, email, image });

    await User.create({ displayName, email, image, password });

    return token;
  },

  getAll: async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });

    return users;
  },

  getById: async (id) => {
    const user = await User.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
    });

    if (!user) {
      const error = {
        status: 404,
        message: 'User does not exist',
      };

      throw error;
    }

    return user;
  },

  deleteAccount: async (token) => {
    const decodedToken = jwt.verify(token, secret);
    const { id } = await User.findOne({ where: { email: decodedToken.data } });

    await User.destroy({ where: { id } });
  },
};
