const { Tool } = require('../models');

class ToolController {

	async store(request, response) {
    try {
      const toolBuild = await Tool.create(request.body);

      return response.json(toolBuild);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
	}
	
}

module.exports = new ToolController();