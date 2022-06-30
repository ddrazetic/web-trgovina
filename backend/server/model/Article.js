const { Sequelize, DataTypes } = require('sequelize')
const db = require('../database/database.js')
const Category = require('../model/Category')

const Article = db.define('article', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Category,
            key: 'id'
        }
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    description: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.INTEGER
    },
    specs: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    units_available: {
        type: DataTypes.SMALLINT
    },
    units_sold: {
        type: DataTypes.SMALLINT
    }

})

Article.sync()

module.exports = Article;