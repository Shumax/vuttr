/* eslint-disable object-shorthand */
/* eslint-disable class-methods-use-this */
const bcrypt = require('bcryptjs');
const { User } = require('../models');

class UserController {
  async storage(request, response) {
    const { name, email, password } = request.body;

    try {
      if (await User.findOne({ where: { email: email } })) {
        return response.status(400).json({ error: 'User already exists' });
      }

      const userBuild = await User.create({
        name: name,
        email: email,
        password: await bcrypt.hash(password, 8),
      });

      return response.status(201).json(userBuild);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async signin(request, response) {
    const { email, password } = request.body;
    const findUser = await User.findOne({ where: { email: email } });

    try {
      if (findUser) {
        return response.status(404).json({ error: 'User not found' });
      }

      const validatePassword = bcrypt.compareHash(password, findUser.password);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

module.exports = new UserController();
