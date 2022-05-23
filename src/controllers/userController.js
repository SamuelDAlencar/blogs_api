const userServices = require('../services/userServices');

module.exports = {
  signUp: async (req, res) => {
    const token = await userServices.signUp(req.body);

    return res.status(201).json({ token });
  },

  getAll: async (req, res) => {
    const users = await userServices.getAll();

    res.status(200).json(users);
  },

  getById: async (req, res) => {
    try {
      const user = await userServices.getById(req.params.id);

      res.status(200).json(user);
    } catch (error) {
      return res.status(error.status).json({ message: error.message });
    }
  },
};
