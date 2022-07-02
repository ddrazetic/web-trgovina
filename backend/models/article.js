'use strict';
const {
  Model
} = require('sequelize');
const category = require('./category');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Article.belongsTo(category)
    }
  }
  Article.init({
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
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};