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
      },
      totalSum : {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      totalQty : {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status : {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
})
module.exports = Order;