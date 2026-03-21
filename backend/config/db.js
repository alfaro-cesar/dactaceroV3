require('dotenv').config();
const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('./config.json')[env];

let sequelize;
if (config.use_env_variable) {
  const dbUrl = process.env[config.use_env_variable];
  if (!dbUrl) {
    console.warn(`⚠️ Advertencia: ${config.use_env_variable} no definida. Usando configuración por defecto.`);
    sequelize = new Sequelize(config.database, config.username, config.password, config);
  } else {
    sequelize = new Sequelize(dbUrl, config);
  }
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    logging: false,
  });
}

module.exports = sequelize;
