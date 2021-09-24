// Import necessary modules
const { Sequelize } = require('sequelize');

// ORM database connection
let sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASS,
	{
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: 'mysql',
		logging: false
	}
);

// Models synchronization
//sequelize.sync(err => {
//	console.log("Database sync error", err)
//});

module.exports = sequelize;