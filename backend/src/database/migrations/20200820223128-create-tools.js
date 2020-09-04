module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('tools', {
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
  }),

  down: (queryInterface) => queryInterface.dropTable('tools'),
};
