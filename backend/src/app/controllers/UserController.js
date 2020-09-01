/* eslint-disable object-shorthand */
/* eslint-disable class-methods-use-this */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
    const findedUser = await User.findOne({ where: { email: email } });
    const validatePassword = await bcrypt.compare(password, findedUser.password);
    const token = jwt.sign({ id: findedUser.id }, 'secret', { expiresIn: 7200 });

    try {
      if (!findedUser) {
        return response.status(404).json({ error: 'User not found' });
      }

      if (!validatePassword) {
        return response.status(400).json({ error: 'Invalid password' });
      }

      return response.json({ findedUser, token });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

module.exports = new UserController();
