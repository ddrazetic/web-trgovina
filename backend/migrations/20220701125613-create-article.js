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
      price: {
          type: Sequelize.INTEGER
      },
      specs: {
          type: Sequelize.ARRAY(Sequelize.STRING)
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