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
};