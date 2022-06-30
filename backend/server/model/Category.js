const { Sequelize, DataTypes } = require('sequelize')
const db = require('../database/database.js')

const Category = db.define('category', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

Category.sync()

module.exports = Category;