const { Sequelize, DataTypes } = require('sequelize')
const db = require('../database/database.js')
const Category = require('../model/Category')

const Article = db.define('article', {
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.INTEGER
    },
    specs: {
        type: DataTypes.ARRAY
    }

})

module.exports = Article;