const generateJwt = require('../utils/generateJwt');

module.exports = {
  login: (req, res) => {
    const { email } = req.body;

    const token = generateJwt(email);

    return res.status(200).json({ token });
  },
};
