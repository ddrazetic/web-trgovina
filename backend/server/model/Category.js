const { Sequelize, DataTypes } = require('sequelize')
const db = require('../database/database.js')

const Category = db.define('category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Category;