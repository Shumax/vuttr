'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
		return await queryInterface.createTable('Tools', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			link: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			description: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			tags: {
				allowNull: false,
				type: Sequelize.JSON,
			},
		});
  },

  down: async (queryInterface) => {
    return await queryInterface.dropTable('Tools');
  }
};
