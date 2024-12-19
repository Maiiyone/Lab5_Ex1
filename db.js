const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
   
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: console.log, // Disable logging for cleaner console output
  }
);

// Test connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testConnection();


module.exports = sequelize;
