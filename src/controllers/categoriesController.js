const categoriesServices = require('../services/categoriesServices');

module.exports = {
  postCategory: async (req, res) => {
    try {
      const { name } = req.body;

      const category = await categoriesServices.postCategory(name);

      return res.status(201).json(category);
    } catch (error) {
      return res.status(error.status).json({ message: error.message });
    }
  },
};
