'use strict';
const {
  Model
} = require('sequelize');
const Article = require('./article');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(Article,{
        onDelete: 'CASCADE',
      })
    }
  }
  Category.init({
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
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};