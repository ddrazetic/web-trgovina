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
    img_url: {
        type: DataTypes.STRING(2048)
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    units_available: {
        type: DataTypes.SMALLINT
    },
    units_sold: {
        type: DataTypes.SMALLINT
    }

})
module.exports = Article;