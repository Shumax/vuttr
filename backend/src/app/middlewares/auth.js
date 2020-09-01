/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');

module.exports = async (request, response, next) => {
  const tokenVerify = request.headers.authorization;

  try {
    if (!tokenVerify) {
      return response.status(401).send({ error: 'No token provided' });
    }

    jwt.verify(tokenVerify, 'secret', (err, decoded) => {
      request.userId = decoded.id;
      next();
    });
  } catch (err) {
    return response.status(401).send({ error: 'Token invalid' });
  }
};
