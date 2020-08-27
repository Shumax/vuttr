/* eslint-disable class-methods-use-this */
const Sequelize = require('sequelize');
const { Tool } = require('../models');

class ToolController {
  async index(request, response) {
    const { tag } = request.query;

    const { Op } = Sequelize;

    try {
      if (tag) {
        const findTool = await Tool.findAll({
          where: {
            tags: {
              [Op.like]: `%${tag}%`,
            },
          },
        });

        return response.json(findTool);
      }
      const findAllTools = await Tool.findAll();

      return response.json(findAllTools);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async storage(request, response) {
    try {
      const toolBuild = await Tool.create(request.body);
      return response.status(201).json(toolBuild);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async destroy(request, response) {
    try {
      const findTool = await Tool.findByPk(request.params.id);

      await findTool.destroy();

      return response.status(204).json();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

module.exports = new ToolController();
