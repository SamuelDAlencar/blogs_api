const Joi = require('joi');
const { User } = require('../database/models');

const loginJoi = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      'any.required': 'Some required fields are missing',
      'string.empty': 'Some required fields are missing',
    }),
    password: Joi.string().required().messages({
      'any.required': 'Some required fields are missing',
      'string.empty': 'Some required fields are missing',
    }),
  });

  return schema.validate(data);
};

const signUpJoi = (data) => {
  const schema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  });

  return schema.validate(data);
};

module.exports = {
  validateLogin: async (req, res, next) => {
    const { error } = loginJoi(req.body);
    const valid = error == null;

    const userExists = await User.findOne({
      where: req.body,
    });

    if (valid && userExists) {
      next();
    } else if (!valid) {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');

      return res.status(400).json({ message });
    }

    if (!userExists) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
  },

  validateSignUp: async (req, res, next) => {
    const { error } = signUpJoi(req.body);
    const valid = error == null;
    const userExists = await User.findOne({
      where: req.body,
    });

    if (valid && !userExists) {
      next();
    } else if (!valid) {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');

      return res.status(400).json({ message });
    }

    if (userExists) {
      return res.status(409).json({ message: 'User already registered' });
    }
  },
};
