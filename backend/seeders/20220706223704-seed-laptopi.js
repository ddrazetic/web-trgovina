'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('articles', [
      {
        categoryId: '1',
        name: "Laptop MICROSOFT Surface Laptop 4 5BT-00070 / Core i5 1135G7, 8GB, 512GB SSD, Intel Graphics, 13.5\" touch, Windows 10, crni",
        description: "Procesor: Intel Core i5 1135G7, Radna memorija (RAM): 8GB [LPDDR4X SDRAM], Tvrdi disk: n/a, SSD:512GB, Grafika: Intel Iris Xe Graphics, Operacijski sustav: Windows 10 Home 20H2, Ekran: 13.5\" 2256 x 1504 multi-touch",
        img_url: "https://www.links.hr/content/images/thumbs/011/0115455_prijenosno-racunalo-microsoft-surface-laptop-4-5bt-00070-core-i5-1135g7-8gb-512gb-ssd-hd-graphics-1.jpg",
        price: 12399,
        units_available: 5,
        units_sold: 19,
        createdAt: new Date(),
        updatedAt: new Date()
        
    },
    {
        categoryId: '1',
        name: "Laptop ACER Swift 3 NX.ABLEX.00H / Core i5 1135G7, 16GB, 512GB SSD, Intel Graphics, 14\" IPS FHD, Windows 10 Pro, srebrni",
        description: "Procesor: Intel Core i5-1135G7, Radna memorija (RAM): 16GB LPDDR4X, Tvrdi disk: n/a, SSD:512GB, Grafika: Intel Iris Xe Graphics, Operacijski sustav: Windows 10 Pro, Ekran: 14\" 1920x1080 In-plane Switching (IPS) Technology",
        img_url: "https://www.links.hr/content/images/thumbs/012/0129553_prijenosno-racunalo-acer-swift-3-nx-ablex-00h-core-i5-1135g7-16gb-512gb-ssd-intel-graphics-14-ips-f.jpg",
        price: 7699,
        units_available: 6,
        units_sold: 6,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '1',
        name: "Laptop ACER Swift X NX.AYKEX.00C / Core i5 11320H, 16GB, 512GB SSD, GeForce RTX 3050 4GB, 16,1\" IPS FHD, bez OS, sivi",
        description: "Procesor: Intel Core i5 11320H, Radna memorija (RAM): 16GB, Tvrdi disk: n/a, SSD:512GB, Grafika: nVidia GeForce RTX 3050 4GB, Operacijski sustav: bez OS, Ekran: 16,1\" 1920x1080 In-plane Switching (IPS) Technology",
        img_url: "https://www.links.hr/content/images/thumbs/014/0143928_laptop-acer-swift-x-nxaykex00c-core-i5-11320h-16gb-512gb-ssd-geforce-rtx-3050-4gb-161-ips-fhd-bez-os.png",
        price: 9399,
        units_available: 9,
        units_sold: 8,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '1',
        name: "Laptop ACER Swift 1 NX.A7BEX.009 / Pentium N6000, 8GB, 256GB SSD, Intel Graphics, 14\" IPS FHD, bez OS, zlatni",
        description: "Procesor: Intel Pentium Silver N6000, Radna memorija (RAM): 8GB LDDR4X, Tvrdi disk: n/a, SSD:256GB, Grafika: Intel UHD Graphics, Operacijski sustav: Bez OS [Nema - UEFI Shell], Ekran: 14\" 1920x1080 In-plane Switching (IPS) Technology",
        img_url: "https://www.links.hr/content/images/thumbs/012/0121700_prijenosno-racunalo-acer-swift-1-nx-a7bex-009-pentium-n6000-8gb-256gb-ssd-intel-graphics-14-ips-fhd.jpg",
        price: 3899,
        units_available: 5,
        units_sold: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '1',
        name: "Laptop ACER Swift 1 NX.A9UEX.001 / Pentium N6000, 8GB, 256GB SSD, Intel Graphics, 14\" IPS FHD, bez OS, rozi",
        description: "Procesor: Intel Pentium Silver N6000, Radna memorija (RAM): 4GB LDDR4X, Tvrdi disk: n/a, SSD:256GB, Grafika: Intel UHD Graphics, Operacijski sustav: Bez OS [Nema], Ekran: 14\" 1920x1080 In-plane Switching (IPS) Technology",
        img_url: "https://www.links.hr/content/images/thumbs/012/0121701_prijenosno-racunalo-acer-swift-1-nx-a9uex-001-pentium-n6000-8gb-256gb-ssd-intel-graphics-14-ips-fhd.jpg",
        price: 3799,
        units_available: 17,
        units_sold: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '1',
        name: "Laptop ASUS ROG Flow X13 GV301RC-LJ106W / Ryzen 9 6900HS, 16GB, SSD 1000GB, GeForce RTX 3050 4GB, 13.4\" IPS 120Hz, Windows 11, crni",
        description: "Procesor: AMD Ryzen 9 6900HS, Radna memorija (RAM): 16GB DDR4, Tvrdi disk: SSD 1000GB, Grafika: GeForce RTX 3050 4GB, Operacijski sustav: Windows 11 Home, Ekran: 13.4\" 1920 x 1200 IPS 120Hz",
        img_url: "https://www.links.hr/content/images/thumbs/014/0142719_laptop-asus-rog-flow-x13-gv301rc-lj106w-ryzen-9-6900hs-16gb-ssd-1000gb-geforce-rtx-3050-4gb-134-ips-.jpg",
        price: 23599,
        units_available: 8,
        units_sold: 13,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '1',
        name: "Laptop ASUS ROG Flow X13 GV301QC-K6010T / Ryzen 7 5800HS, 16GB, 1000GB SSD, GeForce RTX 3050 4GB, 13.4\" IPS 120Hz touch, Windows 10, crni",
        description: "Procesor: AMD Ryzen 7 5800HS, Radna memorija (RAM): 16GB, SSD: 1000GB, Grafika: GeForce RTX 3050 4GB, Operacijski sustav: Windows 10 Home, Ekran: 13.4\" WUXGA (1920 x 1200) IPS Touch",
        img_url: "https://www.links.hr/content/images/thumbs/012/0127462_prijenosno-racunalo-asus-rog-flow-x13-gv301qc-k6010t-ryzen-7-5800hs-16gb-1000gb-ssd-geforce-rtx-305.jpg",
        price: 13899,
        units_available: 13,
        units_sold: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '1',
        name: "Laptop ASUS ROG Zephyrus G14 GA401QC-HZ042T / Ryzen 7 5800HS, 16GB, 1000GB SSD, GeForce RTX 3050 4GB, 14\" FHD IPS 144Hz, Windows 10, sivi",
        description: "Procesor: AMD Ryzen 7 5800HS, Radna memorija (RAM): 16GB, HDD: n/a, SSD: 1000GB, Grafika: nVidia GeForce RTX 3050 4GB [ROG Boost 1600MHz @ 60W (75W Dynamic Boost)], Operacijski sustav: Windows 10 Home, Ekran: 14\" 1920 x 1080 144Hz IPS",
        img_url: "https://www.links.hr/content/images/thumbs/011/0110994_prijenosno-racunalo-asus-rog-zephyrus-g14-ga401qc-hz042t-ryzen-7-5800hs-16gb-1000gb-ssd-geforce-rtx-.jpg",
        price: 11999,
        units_available: 1,
        units_sold: 6,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '1',
        name: "Laptop ASUS ROG Strix G15 G513IC-HN039 / Ryzen 7 4800H, 16GB, 1000GB SSD, GeForce RTX 3050 4GB, 15.6\" IPS 144Hz FHD, bez OS, sivi",
        description: "Procesor: AMD Ryzen 7 4800H, Radna memorija (RAM): 16GB, Tvrdi disk: n/a, SSD:1000GB, Grafika: GeForce RTX 3050 4GB, Operacijski sustav: Bez OS [Nema], Ekran: 15.6\" FHD IPS 144Hz",
        img_url: "https://www.links.hr/content/images/thumbs/011/0113343_prijenosno-racunalo-asus-rog-strix-g15-g513ic-hn039-ryzen-7-4800h-16gb-1000gb-ssd-geforce-rtx-3050-.jpg",
        price: 9949,
        units_available: 17,
        units_sold: 7,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    ]);
  },

  async down (queryInterface, Sequelize) {
  }
};
