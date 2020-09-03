/* eslint-disable object-shorthand */
/* eslint-disable class-methods-use-this */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

class UserController {
  async index(request, response) {
    try {
      const findAllUsers = await User.findAll();

      return response.json(findAllUsers);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async destroy(request, response) {
    try {
      const findUser = await User.findByPk(request.params.id);

      await findUser.destroy();

      return response.status(204).json();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async update(request, response) {
    try {
      request.body.password = await bcrypt.hash(request.body.password, 8);

      const updateUser = await User.update(
        request.body,
        { where: { id: request.params.id } },
      );

      return response.status(202).json(updateUser);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

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

    try {
      if (!findedUser) {
        return response.status(404).json({ error: 'User not found' });
      }
      const validatePassword = await bcrypt.compare(password, findedUser.password);
      const token = jwt.sign({ id: findedUser.id }, 'secret', { expiresIn: 7200 });

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
