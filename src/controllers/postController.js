const postServices = require('../services/postServices');

module.exports = {
  post: async (req, res) => {
    try {
      const { post } = await postServices.post(req.body, req.headers.authorization);

      return res.status(201).json(post);
    } catch (error) {
      return res.status(error.status).json({ message: error.message });
    }
  },

  getAll: async (req, res) => {
    const posts = await postServices.getAll();

    return res.status(200).json(posts);
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await postServices.getById(id);

      return res.status(200).json(post);
    } catch (error) {
      return res.status(error.status).json({ message: error.message });
    }
  },

  updateById: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const post = await postServices.updateById(id, data);

      return res.status(200).json(post);
    } catch (error) {
      return res.status(error.status).json({ message: error.message });
    }
  },
};