'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('articles', [
      {
        categoryId: '7',
        name: "Baterija DURACELL CR 2032",
        description: "Baterija DURACELL, litijska CR2032",
        img_url: "https://www.links.hr/content/images/thumbs/008/0080503_baterija-duracell-cr-2032.jpg",
        price: 9.5,
        units_available: 3,
        units_sold: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '7',
        name: "Baterija DURACELL litijska 2025",
        description: "Lithium, 1x2025 3V",
        img_url: "https://www.links.hr/content/images/thumbs/005/0054420_baterija-duracell-litijska-2025-481000051.jpg",
        price: 8.55,
        units_available: 5,
        units_sold: 8,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '7',
        name: "Baterija PANASONIC BK3HGAE2BE, tip AA, 2700mAh, punjive, 2kom",
        description: "Panasonic baterije Ni-Mh AA 2 komada 2700mAh",
        img_url: "https://www.links.hr/content/images/thumbs/005/0050482_baterija-panasonic-bk3hgae2be-tip-aa-2700mah-punjive-2kom.jpg",
        price: 56,
        units_available: 12,
        units_sold: 10,
        createdAt: new Date(),
        updatedAt: new Date()
    },
     ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
