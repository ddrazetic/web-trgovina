const { DataTypes } = require('sequelize')
const db = require('../database/database.js')

const Order = db.define('orders', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'users',
            key: 'id'
        }
      },
      articles:{
        type: DataTypes.JSON,
        allowNull: false
      }
})
module.exports = Order;