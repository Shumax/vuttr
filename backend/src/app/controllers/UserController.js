/* eslint-disable class-methods-use-this */
const { User } = require('../models');

class UserController {
  async storage(request, response) {
    try {
      const userBuild = await User.create(request.body);
      return response.status(201).json(userBuild);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

module.exports = new UserController();
