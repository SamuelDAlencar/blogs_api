const { Category } = require('../database/models');

module.exports = {
  postCategory: async (name) => {
    if (!name) {
      const error = {
        status: 400,
        message: '"name" is required',
      };

      throw error;
    }

    const category = await Category.create({ name });

    return category;
  },
};
