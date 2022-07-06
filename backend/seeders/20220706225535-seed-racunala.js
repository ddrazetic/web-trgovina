'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('articles', [
      {
        categoryId: '2',
        name: "Računalo LINKS PCPLUS e-office / Core i7 11700, 16GB, 512GB SSD NVMe, Intel Graphics, Windows 11, crno",
        description: "Procesor: Intel Core i7 11700, Memorija: 16GB DDR4, Grafička kartica: Intel Graphics, Pohrana: SSD 512GB NVMe, OS: Windows 11",
        img_url: "https://www.links.hr/content/images/thumbs/014/0142124_racunalo-links-pcplus-e-office-core-i7-11700-16gb-512gb-ssd-nvme-intel-graphics-windows-11-crno-034.jpg",
        price: 6999,
        units_available: 5,
        units_sold: 14,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '2',
        name: "Računalo ASUS D300TA-3101002930 / Core i3 10110, 8GB, 256GB SSD, Intel Graphics, bez OS, crno",
        description: "Operativni sustav Bez OS [Nema], Procesor Intel Core i3 10110, Grafika Intel Graphics, Radna memorija (RAM) 8GB DDR4, Tvrdi disk n/a, SSD:256GB",
        img_url: "https://www.links.hr/content/images/thumbs/012/0125837_racunalo-asus-d300ta-3101002930-core-i3-10110-8gb-256gb-ssd-intel-graphics-bez-os-crno-034300112.jpg",
        price: 3699,
        units_available: 18,
        units_sold: 19,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '2',
        name: "Računalo ACER Veriton S2680G DT.VV2EX.00G / Core i3 10105, 8GB, 512GB SSD, DVDRW, Intel Graphics, tipkovnica, miš, bezOS, crno",
        description: "Operativni sustav Nema [Bez OS - UEFI Shell], Procesor Intel Core i3 10105, Grafika Intel UHD Graphics 630, Radna memorija (RAM) 8GB, Tvrdi disk n/a, SSD:512GB",
        img_url: "https://www.links.hr/content/images/thumbs/013/0138632_racunalo-acer-veriton-s2680g-dt-vv2ex-00g-core-i3-10105-8gb-512gb-ssd-dvdrw-intel-graphics-tipkovni.png",
        price: 4499,
        units_available: 17,
        units_sold: 15,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '2',
        name: "Računalo LINKS MEGA 5000 / Core i5 10400F, 16GB, 1000GB SSD NVMe, GeForce GTX 1650 4GB, bez OS, crno",
        description: "Procesor: Intel Core i5 11400, Memorija: 16GB DDR4, Grafička kartica: Geforce GTX 1650 4GB, Pohrana: SSD 1000GB NVMe, OS: nema OS",
        img_url: "https://www.links.hr/content/images/thumbs/014/0142119_racunalo-links-mega-5000-core-i5-10400f-16gb-1000gb-ssd-nvme-geforce-gtx-1650-4gb-bez-os-crno-03490.jpg",
        price: 7199,
        units_available: 2,
        units_sold: 6,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '2',
        name: "Računalo LINKS Gaming G68A / Ryzen 3 1200, 16GB, 500GB NVMe, GTX 1050Ti 4GB",
        description: "Matična ploča: AMD B450, Procesor: AMD Ryzen 3 1200, Memorija: 16GB DDR4, Grafička kartica: Nvidia GeForce GTX 1050Ti 4GB, Pohrana: SSD 500GB NVMe, Napajanje: 600W, Kućište: NX600, OS: Nema",
        img_url: "https://www.links.hr/content/images/thumbs/012/0129128_racunalo-links-gaming-g68a-ryzen-3-1200-16gb-500gb-nvme-gtx-1050ti-4gb-034900227.jpg",
        price: 5499,
        units_available: 0,
        units_sold: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '2',
        name: "Računalo LINKS PCPLUS Gamer / Ryzen 5 5600, 16GB, 250GB SSD + 2000GB HDD, GeForce GTX 1660 Super, Windows 10",
        description: "Procesor: AMD Ryzen 5 5600, Memorija: 16GB DDR4, Grafička kartica: nVidia GeForce GTX 1660 Supe, Pohrana: SSD 250GB NVMe + 2000GB SATA, OS: Windows 10",
        img_url: "https://www.links.hr/content/images/thumbs/014/0142058_racunalo-links-pcplus-gamer-ryzen-5-5600-16gb-250gb-ssd-2000gb-hdd-geforce-gtx-1660-super-windows-1.jpg",
        price: 10999,
        units_available: 11,
        units_sold: 18,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '2',
        name: "Računalo ASUS ROG Strix GA15 G15DK-WB7730 / Ryzen 7 5800X, 32GB, 1000GB SATA + 512GB SSD, GeForce RTX 3070 8GB, nema OS, crno",
        description: "Operativni sustav nema OS, Procesor AMD Ryzen 7 5800X, Grafika NVIDIA GeForce RTX RTX3070 8GB DDR6 with LHR : 3x DP, 2x HDMI, Radna memorija (RAM) 32GB, Tvrdi disk 1000GB SATA 7200RPM 3.5in HDD, SSD:512GB M.2 NVMe PCIe 4.0 Performance SSD",
        img_url: "https://www.links.hr/content/images/thumbs/014/0142017_racunalo-asus-rog-strix-ga15-g15dk-wb7730-ryzen-7-5800x-32gb-1000gb-sata-512gb-ssd-geforce-rtx-3070.png",
        price: 16699,
        units_available: 5,
        units_sold: 12,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '2',
        name: "Računalo AiO HP 24-ck0012ny 65S77EA / Core i5 12400T, 16GB, 512GB SSD, Intel Graphics, 24\" IPS FHD, Windows 11, bijelo",
        description: "Operativni sustav:Windows 11 Home, Procesor Intel Core i5 12500T, Grafika Intel UHD Graphics 770, Radna memorija (RAM) 16GB, Tvrdi disk:n/a, SSD:512GB",
        img_url: "https://www.links.hr/content/images/thumbs/014/0145264_racunalo-aio-hp-24-ck0012ny-65s77ea-core-i5-12400t-16gb-512gb-ssd-intel-graphics-24-ips-fhd-windows.png",
        price: 8074,
        units_available: 0,
        units_sold: 10,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '2',
        name: "Računalo AiO HP 24-ck0007ny 65S76EA / Core i7 12700T, 16GB, 512GB SSD, Intel Graphics, 24\" IPS FHD, Windows 11, bijelo",
        description: "Operativni sustav:Windows 11 Home, Procesor Intel Core i7 12700T, Grafika Intel UHD Graphics 770, Radna memorija (RAM) 16GB, Tvrdi disk:n/a, SSD:512GB, Optička jedinica: n/a",
        img_url: "https://www.links.hr/content/images/thumbs/014/0145263_racunalo-aio-hp-24-ck0007ny-65s76ea-core-i7-12700t-16gb-512gb-ssd-intel-graphics-24-ips-fhd-windows.png",
        price: 9404,
        units_available: 6,
        units_sold: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '2',
        name: "Računalo AiO HP 24-ck0017ny 65S83EA / Core i3 12100T, 16GB, 512GB SSD, Intel Graphics, 24\" IPS FHD, Windows 11, bijelo",
        description: "Operativni sustav:Windows 11 Home, Procesor Intel Core i3 12100T, Grafika Intel UHD Graphics 730, Radna memorija (RAM) 16GB, Tvrdi disk:n/a, SSD:512GB",
        img_url: "https://www.links.hr/content/images/thumbs/014/0145265_racunalo-aio-hp-24-ck0017ny-65s83ea-core-i3-12100t-16gb-512gb-ssd-intel-graphics-24-ips-fhd-windows.png",
        price: 7409,
        units_available: 2,
        units_sold: 18,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    ])
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
