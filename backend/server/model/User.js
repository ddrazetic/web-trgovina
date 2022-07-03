const { DataTypes } = require('sequelize')
const db = require('../database/database.js')

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    hash: {
        type: DataTypes.STRING,
        required: true
    },
    salt: {
        type: DataTypes.STRING,
        required: true
    }


})
module.exports = User;