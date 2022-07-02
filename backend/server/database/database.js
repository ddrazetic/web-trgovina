const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });
const dbname = process.env.db_name;
const user = process.env.db_user;
const pass = process.env.db_pass;

module.exports = new Sequelize(dbname, user, pass, {
    dialect: 'postgres'
});