'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    return await queryInterface.bulkInsert('articles', [{
      categoryId: '5',
      name: "Memorija USB 3.0 FLASH DRIVE, 64 GB, KINGSTON DT 100 G3, DT100G3/64GB, crni",
      description: "Sučelje USB 3.0, Kapacitet 64 GB, Brzina čitanja [MB/s] 100, Brzina pisanja [MB/s], Boja Crna",
      img_url: "https://www.links.hr/content/images/thumbs/000/0006403_memorija-usb-3-0-flash-drive-64-gb-kingston-dt-100-g3-crni-1000001403.jpg",
      price: 65,
      units_available: 3,
      units_sold: 9,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      categoryId: '5',
      name: "Memorija USB 3.1 FLASH DRIVE, 32 GB, KINGSTON DT Micro 3.1, DTMC3/32GB, srebrna",
      description: "Sučelje USB 3.1, Kapacitet 32 GB, Brzina čitanja [MB/s] 100, Brzina pisanja [MB/s] --, Boja Srebrna",
      img_url: "https://www.links.hr/content/images/thumbs/002/0020220_memorija-usb-3-1-flash-drive-32-gb-kingston-micro-usb-dtmc3-32gb-srebrna-051300425.jpg",
      price: 91,
      units_available: 7,
      units_sold: 13,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      categoryId: '5',
      name: "Memorija USB-C FLASH DRIVE, 64 GB, KINGSTON DT80/64GB, crno-sivi",
      description: "Sučelje USB 3.2 Type-C, Kapacitet 64 GB, Brzina čitanja [MB/s] 200, Brzina pisanja [MB/s] 60, Boja Crno-siva",
      img_url: "https://www.links.hr/content/images/thumbs/008/0088838_memorija-usb-3-2-type-c-flash-drive-64-gb-kingston-dt80-64gb-crno-sivi-520100025.jpg",
      price: 118,
      units_available: 15,
      units_sold: 8,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      categoryId: '5',
      name: "Memorijska kartica KINGSTON Canvas Go Plus Micro SDCG3/128GB, SDXC 128GB, Class 10 UHS-I + adapter",
      description: "Format microSDXC, Kapacitet [GB] 128, Čitanje [MB/s] 170, Pisanje [MB/s] 90, Dodatno Sa SD adapterom",
      img_url: "https://www.links.hr/content/images/thumbs/008/0080831_memorijska-kartica-kingston-canvas-go-plus-micro-sdcg3-128gb-sdxc-128gb-class-10-uhs-i-adapter-5231.jpg",
      price: 208,
      units_available: 7,
      units_sold: 18,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      categoryId: '5',
      name: "Memorijska kartica KINGSTON Canvas Go Plus Micro SDCG3/64GB, SDXC 64GB, Class 10 UHS-I + adapter",
      description: "Format microSDXC, Kapacitet [GB] 64, Čitanje [MB/s] 170, Pisanje [MB/s] 70, Dodatno Sa SD adapterom",
      img_url: "https://www.links.hr/content/images/thumbs/008/0080834_memorijska-kartica-kingston-canvas-go-plus-micro-sdcg3-64gb-sdxc-64gb-class-10-uhs-i-adapter-523110.jpg",
      price: 94,
      units_available: 0,
      units_sold: 5,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      categoryId: '5',
      name: "Memorijska kartica KINGSTON Canvas Select Plus Micro SDCS2/128GB, SDXC 128GB, Class 10 UHS-I + adapter",
      description: "Format microSDXC, Kapacitet [GB] 128, Čitanje [MB/s] 100, Pisanje [MB/s] --, Dodatno Sa SD adapterom",
      img_url: "https://www.links.hr/content/images/thumbs/007/0071067_memorijska-kartica-kingston-canvas-select-plus-micro-sdcs2-128gb-sdxc-128gb-class-10-uhs-i-adapter-.jpg",
      price: 132,
      units_available: 9,
      units_sold: 4,
      createdAt: new Date(),
      updatedAt: new Date()
  },]);

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
