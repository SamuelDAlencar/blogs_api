const { User } = require('../database/models');

module.exports = {
  validateLogin: async (req, res, next) => {
    const { email, password } = req.body;
    const userExists = await User.findOne({
      where: { email, password },
    });

    switch (true) {
      case !email || !password: {
        return res.status(400).json({
          message: 'Some required fields are missing',
        });
      } case !userExists: {
        return res.status(400).json({
          message: 'Invalid fields',
        });
      }
      default:
        next();
    }
  },
};
