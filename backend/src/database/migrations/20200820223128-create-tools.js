'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('tools', {
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
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('tools');
  }
};
