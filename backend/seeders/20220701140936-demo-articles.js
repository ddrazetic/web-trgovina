'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('articles', [
  {
    category_id: '1',
    name:'Laptop ASUS Vivobook 17 X712EA-BX321T / Core i3 1115G4, 8GB, 512GB SSD, Intel Graphics, 17.3" HD+, Windows 10, srebrni',
    description: 'Prijenosno računalo ASUS Vivobook 17 X712EA-BX321T / Core i3 1115G4, 8GB, 512GB SSD, Intel Graphics, 17.3" HD+, Windows 10, srebrno',
    price: 4499,
    specs: ['Procesor: Intel Core i3-1115G4 Processor 3.0 GHz (6M Cache, up to 4.1 GHz, 2 cores)','Radna memorija (RAM): 8GB DDR4', 'Tvrdi disk:n/a, SSD:512GB', 'Grafika: Intel HD Graphics', 'Operacijski sustav: Windows 10 Home', 'Ekran: 17,3 HD+ (1600 x 900) 16:9. LED'],
    units_available: 15,
    units_sold: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_id: '1',
    name:'Laptop LENOVO IdeaPad Gaming 3 82K20130SC / Ryzen 5 5600H, 8GB, 512GB SSD, GeForce RTX 3050 4GB, 15.6" 165Hz IPS FHD, bez OS, crni',
    description: 'Laptop LENOVO IdeaPad Gaming 3 82K20130SC / Ryzen 5 5600H, 8GB, 512GB SSD, GeForce RTX 3050 4GB, 15.6" 165Hz IPS FHD, bez OS, crni',
    price: 6999,
    specs: ['Procesor: AMD Ryzen 5 5600H (6C / 12T, 3.3 / 4.2GHz, 3MB L2 / 16MB L3)','Radna memorija (RAM): 1x 8GB SO-DIMM DDR4-3200','SSD: 512GB','Grafika: NVIDIA GeForce RTX 3050 4GB GDDR6','Operativni sustav: Bez OS [Nema]', 'Ekran: 15.6" FHD (1920x1080) IPS 300nits Anti-glare, 165Hz, 100% sRGB, DC dimmer'],
    units_available: 15,
    units_sold: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_id: '1',
    name:'Laptop APPLE MacBook Pro 16" mk183cr/a Retina / OctaCore Apple M1 Pro, 16GB, 512GB SSD, Apple Graphics, HR tipkovnica, sivi',
    description: '',
    price: 22979,
    specs: ['Procesor: OctaCore Apple M1 Pro - 10 core','Radna memorija (RAM): 16GB','Tvrdi disk: n/a','SSD:512GB','Grafika: Apple Graphics - 16 core','Operacijski sustav: Apple MacOS [Big Sur]', 'Ekran: 16.2" 3456 x 2234 Retina'],
    units_available: 10,
    units_sold: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  
]);
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('articles', null, {});
  }
};
