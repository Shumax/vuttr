module.exports = {
  development: {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'senha_da_nasa',
    database: 'vuttr_development',
    operatorAliases: false,
    define: {
      timestamps: false,
      underscored: true,
      underscoredAll: true,
    },
  },
  test: {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'senha_da_nasa',
    database: 'vuttr_test',
    operatorAliases: false,
    define: {
      timestamps: false,
      underscored: true,
      underscoredAll: true,
    },
  },
};
