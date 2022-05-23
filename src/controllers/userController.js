const { User } = require('../database/models');
const generateJwt = require('../utils/generateJwt');

module.exports = {
  signUp: (req, res) => {
    const { displayName, email, image } = req.body;
    const userData = req.body;
    const payload = { displayName, email, image };
    const token = generateJwt(payload);

    User.create(userData);

    return res.status(201).json({ token });
  },
};
