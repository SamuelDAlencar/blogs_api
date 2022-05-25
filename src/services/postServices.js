const jwt = require('jsonwebtoken');
const { BlogPost, User, PostCategory, Category } = require('../database/models');

module.exports = {
  post: async ({ title, content, categoryIds }, token) => {
    const { data } = jwt.decode(token);
    const { id } = await User.findOne({ where: { email: data } });

    const post = await BlogPost.create({ title, content, userId: id });

    const categoryPost = categoryIds.map(async (cId) => {
      await PostCategory.create({ postId: post.id, categoryId: cId });
    });

    return { post, categoryPost };
  },

  getAll: async () => {
    const posts = await BlogPost.findAll({
      include: [{
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      }, {
        model: Category,
        as: 'categories',
        through: {
          attributes: [],
        },
      }],
    });

    return posts;
  },
};