const jwt = require('jsonwebtoken');
const { BlogPost, User, PostCategory } = require('../database/models');

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
};