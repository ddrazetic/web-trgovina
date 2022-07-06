'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('articles', [
      {
        categoryId: '8',
        name: "Smartphone APPLE iPhone 12, 6,1\", 256GB, plavi",
        description: "CPU model Apple A14 Bionic, Chipset Apple, GPU Da, GPU model Apple GPU, Memorija (RAM) 4GB, Memorija za pohranu (GB) 256GB, Ekran 6,1\" 2532x1170, Kamera zadnja 12 MP, Kamera prednja 12 MP, 3.5mm n/a, Bluetooth Da, WiFi Standard 802.11 b/g/n/ax, GPS Da, NFC Da, MicroSD utor n/a, Vrsta SIM-a Nano SIM, Dual SIM Da, Dimenzije [mm] 146.7 x 71.5 x 7.4, Masa [g] 164, Boja plava",
        img_url: "https://www.links.hr/content/images/thumbs/009/0092008_smartphone-apple-iphone-12-61-256gb-plavi-preorder.jpg",
        price: 7799,
        units_available: 5,
        units_sold: 20,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '8',
        name: "Smartphone REALME GT Master, 6,4\", 8GB, 256GB, Android 11, Voyager-sivi",
        description: "OS: Android 11 (REALME UI 2.0), Zaslon: 6,4\", AMOLED, 1000 nits, 1080 x 2400 pixels, Procesor: Octa-core (4x2.4 GHz Kryo 670 & 4x1.9 GHz Kryo 670), Memorija: 256 GB, RAM: 8 GB, Kamera: stražnja 64MP/8MP/2MP, LED flash, HDR, panorama, prednja: Single 32MP, HDR, panorama, Povezivost: Wi-Fi 802.11 b/g/n/ac, hotspot, Bluetooth 5.0, Baterija: 4300 mAh, Charging 65W, 100% za 33 min",
        img_url: "https://www.links.hr/content/images/thumbs/011/0119467_smartphone-realme-gt-master-6-4-8gb-256gb-android-11-voyager-sivi-0401001088.png",
        price: 2999,
        units_available: 6,
        units_sold: 12,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '8',
        name: "Smartphone ONEPLUS 9 Pro, 6.7\", 12GB, 256GB, Android 11, zeleni",
        description: "OS: Android 11, Procesor: OctaCore, CPU model: 1x2.84 GHz Kryo 680 & 3x2.42 GHz Kryo 680 & 4x1.80 GHz Kryo 680, Chipset: Qualcomm SM8350 Snapdragon 888 5G (5 nm), GPU model: Adreno 660, Memorija (RAM):12 GB, Memorija za pohranu (GB): 256 GB, Ekran: 6,67\" 1440 x 3216, Kamera zadnja: 48 + 8 + 50 + 2 MP, Kamera prednja: 16 MP, 3.5mm: n/a, Bluetooth: Da, WiFi Standard: 802.11 b/g/n/ac/6, GPS: da, NFC: da, MicroSD uto: n/a, Vrsta SIM-a: Nano SIM, Dual SIM: da, Dimenzije [mm]: 163.2 x 73.6 x 8.7, Masa [g]: 197, Boja: zelena",
        img_url: "https://www.links.hr/content/images/thumbs/012/0120578_smartphone-oneplus-9-pro-6-7-12gb-256gb-android-11-zeleni-0401001099.jpg",
        price: 7729,
        units_available: 3,
        units_sold: 17,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '8',
        name: "Smartphone XIAOMI Redmi 9T, 6.53\", 4GB, 128GB, Android 10, plavi",
        description: "Redmi 9T s 48MP AI četverostrukom kamerom s ultraširokim kutem snimanja, 6000mAh baterija koja se puni s 18W, Snapdragon 662, 6.53\" FHD zaslon, ZASLON: 6.53\" IPS LCD FHD+ 19.5:9, , KAMERE, stražnja: 48+8+2+2MP; prednja: 8 MP, , DIMENZIJE: 162.3 x 77.3 x 9.6 mm, MASA: 198 g, BATERIJA: 6000 mAh, Android 10, MIUI 12, PROCESOR: Snapdragon 662 Octa-core 4x2.0 GHz & 4x1.8 GHz, MEMORIJA: 128GB, RAM: 4GB, LTE, 18W brzo punjenje, utičnica od 3.5 mm, USB type-C 2.0, Otisak prsta bočno postavljen, Stereo zvučnici",
        img_url: "https://www.links.hr/content/images/thumbs/010/0108009_smartphone-xiaomi-redmi-9t-6-53-4gb-128gb-android-10-plavi-040100914.png",
        price: 1399,
        units_available: 8,
        units_sold: 17,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '8',
        name: "Smartphone MOTOROLA Moto E32 XT2227-2 PL, 6,6\", 4GB, 64GB, Android 11, sivi",
        description: "Nano-SIM, dual stand-by, OS: Android 11, Zaslon: 6.6'' LCD / 90 Hz / 1600 x 720 px / 268ppi, Chipset: UNISOC T606, Procesor: 2xA75 + 6xA55 1.6GHz octa-core CPU, 650MHz Mali-G57 GPU, Memorija: 64 - microSD podrška do 1TB, RAM: 4 GB, Kamera: stražnja – 16 MP, 2 MP, 2 MP / prednja – 8 MP, Senzori: Fingerprint reader, Proximity sensor,Ambient Light, Acceleromter, Notification LED, Povezivost: Wi-Fi - 802.11 a/b/g/n, 2.4GHz, Wi-Fi hotspot, USB , Type-C 2.0, Bluetooth 5.0, Baterija: 5000 mAh, Punjenje: 18W, Dimenzije: 163.95 x 74.94 x 8.49mm, Težina: 184 g, Boja: Slate Gray - Svia",
        img_url: "https://www.links.hr/content/images/thumbs/014/0140652_smartphone-motorola-moto-e32-xt2227-2-pl-6-6-4gb-64gb-android-11-sivi-010301033.jpg",
        price: 1139,
        units_available: 12,
        units_sold: 16,
        createdAt: new Date(),
        updatedAt: new Date()
    }
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
