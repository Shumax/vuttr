const { Router } = require('express');
const ToolController = require('./app/controllers/ToolController.js');

const routes = Router();


routes.post('/tools', ToolController.store);


module.exports = routes;