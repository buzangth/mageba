const Sequelize = require('sequelize');

const sequelize = new Sequelize('mageba', 'sa', 'p@$$w0rd', {
    dialect: 'mssql',
    dialectOptions: {
      options: {
        useUTC: false,
        dateFirst: 1,
      }
    }
  })