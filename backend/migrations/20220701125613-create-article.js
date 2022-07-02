'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onDelete: 'CASCADE',
          references:{
              model: 'categories',
              key: 'id'
          }
      },
      name: {
          type: Sequelize.STRING,
          unique: true
      },
      description: {
          type: Sequelize.TEXT
      },
      img_url: {
        type: Sequelize.STRING(2048)
      },
      price: {
          type: Sequelize.FLOAT,
          allowNull: false
      },
      units_available: {
          type: Sequelize.SMALLINT
      },
      units_sold: {
          type: Sequelize.SMALLINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('articles');
  }
};