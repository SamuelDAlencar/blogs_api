const generateJwt = require('../utils/generateJwt');

module.exports = {
  login: (email) => {
    const token = generateJwt(email);

    return token;
  },
};
