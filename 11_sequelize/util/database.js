const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'hola', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
