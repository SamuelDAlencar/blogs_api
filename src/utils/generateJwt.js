const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  algorithm: 'HS256',
};

module.exports = (payload) => {
  const token = jwt.sign({ data: payload }, secret, jwtConfig);

  return token;
};
