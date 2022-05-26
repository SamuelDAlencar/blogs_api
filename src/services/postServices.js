const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
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

  getById: async (id) => {
    const post = await BlogPost.findOne({
      where: { id },
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

    if (post) return post;

    const error = { status: 404, message: 'Post does not exist' };
    throw error;
  },

  updateById: async (id, { title, content }) => {
    await BlogPost.update({ title, content }, { where: { id } });

    const updatedPost = await BlogPost.findOne({
      where: { id },
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

    return updatedPost;
  },

  deleteById: async (id) => {
    await BlogPost.destroy({ where: { id } });
  },

  getByQuery: async (query) => {
    const posts = await BlogPost.findAll({
      where: {
        [Op.or]: {
          title: { [Op.substring]: query },
          content: { [Op.substring]: query },
        },
      },
      include: [{
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      }, {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      }],
    });

    return posts;
  },
};