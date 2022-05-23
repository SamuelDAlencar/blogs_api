const loginServices = require('../services/loginServices');

module.exports = {
  login: (req, res) => {
    const { email } = req.body;
    const token = loginServices.login(email);

    return res.status(200).json({ token });
  },
};
