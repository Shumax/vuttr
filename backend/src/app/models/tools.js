module.exports = (sequelize, DataTypes) => {
	const Tools = sequelize.define('Tools',{
		title: DataTypes.STRING,
		link: DataTypes.STRING,
		description: DataTypes.STRING,
		tags: DataTypes.JSON,
	});

	return Tools;
}