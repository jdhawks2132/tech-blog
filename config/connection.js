const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db

// you will need JAWSDB_URL in your .env file for Heroku deployment

const sequelize = process.env.JAWSDB_URL
	? new Sequelize(process.env.JAWSDB_URL)
	: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
			host: 'localhost',
			dialect: 'mysql',
			port: 3306,
	  });

module.exports = sequelize;
