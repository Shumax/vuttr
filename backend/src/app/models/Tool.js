module.exports = (sequelize, DataTypes) => {
  const Tool = sequelize.define('Tool', {
    title: DataTypes.STRING,
    link: DataTypes.STRING,
    description: DataTypes.STRING,
    tags: DataTypes.STRING,
  });

  return Tool;
};
