const {Sequelize} =  require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mariadb',
        pool: {
            max: 10,
            min: 0,
            acquire: 3000,
            idle: 1000,
        },
        logging: true
    }
);

module.exports = sequelize;