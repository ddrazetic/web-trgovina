'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [
    {
      name: 'LAPTOPI I OPREMA',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'RAČUNALA I OPREMA',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'MONITORI I OPREMA',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'PERIFERIJA RAČUNALA',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'POHRANA PODATAKA',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'GAMING ZONA',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'BATERIJE I PUNJAČI',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'MOBITELI I OPREMA',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', null, {
      truncate: true,
      cascade: true,
    });
  }
};
