'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('articles', [
  {
    categoryId: '1',
    name:'Laptop ASUS Vivobook 17 X712EA-BX321T / Core i3 1115G4, 8GB, 512GB SSD, Intel Graphics, 17.3" HD+, Windows 10, srebrni',
    description: 'Procesor: Intel Core i3-1115G4 Processor 3.0 GHz (6M Cache, up to 4.1 GHz, 2 cores), Radna memorija (RAM): 8GB DDR4, Tvrdi disk:n/a, SSD:512GB, Grafika: Intel HD Graphics, Operacijski sustav: Windows 10 Home, Ekran: 17,3 HD+ (1600 x 900) 16:9. LED',
    img_url: 'https://www.links.hr/content/images/thumbs/013/0137014_prijenosno-racunalo-asus-vivobook-17-x712ea-bx321t-core-i3-1115g4-8gb-512gb-ssd-intel-graphics-17-3_400.jpg',
    price: 4499.00,
    units_available: 4,
    units_sold: 16,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: '1',
    name:'Laptop LENOVO IdeaPad Gaming 3 82K20130SC / Ryzen 5 5600H, 8GB, 512GB SSD, GeForce RTX 3050 4GB, 15.6" 165Hz IPS FHD, bez OS, crni',
    description: 'Procesor: AMD Ryzen 5 5600H (6C / 12T, 3.3 / 4.2GHz, 3MB L2 / 16MB L3), Radna memorija (RAM): 1x 8GB SO-DIMM DDR4-3200, SSD: 512GB, Grafika: NVIDIA GeForce RTX 3050 4GB GDDR6, Operativni sustav: Bez OS [Nema], Ekran: 15.6" FHD (1920x1080) IPS 300nits Anti-glare, 165Hz, 100% sRGB',
    img_url: 'https://www.links.hr/content/images/thumbs/013/0139586_laptop-lenovo-ideapad-gaming-3-82k20130sc-ryzen-5-5600h-8gb-512gb-ssd-geforce-rtx-3050-4gb-15-6-165.jpg',
    price: 6999.00,
    units_available: 2,
    units_sold: 18,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: '1',
    name:'Laptop APPLE MacBook Pro 16" mk183cr/a Retina / OctaCore Apple M1 Pro, 16GB, 512GB SSD, Apple Graphics, HR tipkovnica, sivi',
    description: 'Procesor: OctaCore Apple M1 Pro - 10 core,Radna memorija (RAM): 16GB,Tvrdi disk: n/a,SSD:512GB,Grafika: Apple Graphics - 16 core,Operacijski sustav: Apple MacOS [Big Sur], Ekran: 16.2" 3456 x 2234 Retina',
    img_url: 'https://www.links.hr/content/images/thumbs/011/0115327_prijenosno-racunalo-apple-macbook-pro-16-mk183cra-retina-octacore-apple-m1-pro-16gb-512gb-ssd-apple-.jpg',
    price: 22979.00,
    units_available: 0,
    units_sold: 20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: '2',
    name:'Računalo LINKS Office U62I / G6405, 8GB, 250GB NVMe, HD Graphics',
    description: 'Procesor: Pentium G6405, Radna memorija: 8GB, SSD: 250GB, Grafika: Intel HD Graphics',
    img_url: 'https://www.links.hr/content/images/thumbs/013/0136031_racunalo-links-office-u62i-g6405-8gb-250gb-nvme-hd-graphics-033300284.jpg',
    price: 2599.00,
    units_available: 20,
    units_sold: 64,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: '2',
    name:'Računalo ACER Nitro 50 DG.E35EX.008 / Core i5 12400F, 16GB, 1000GB SSD, GeForce GTX 1660S 6GB, nema OS, crno',
    description: 'Operativni sustav Nema [Bez OS - UEFI Shell, Procesor Intel Core i5 12400F, Grafika GeForce GTX 1660S 6GB, Radna memorija (RAM) 16GB, Tvrdi disk n/a, SSD:1000GB',
    img_url: 'https://www.links.hr/content/images/thumbs/014/0143849_racunalo-acer-nitro-50-dg-e35ex-002-core-i5-12400f-16gb-1000gb-ssd-geforce-rtx-3060ti-8gb-nema-os-c.jpg',
    price: 9999.00,
    units_available: 5,
    units_sold: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: '2',
    name:'Računalo AiO HP 27-dp1027ny 65S90EA / Core i7 1165G7, 16GB, 512GB SSD, Intel HD Graphics, 27" IPS FHD, tipkovnica, miš, Windows 11, srebrno',
    description: 'Operativni sustav:Windows 11 Home, Procesor Intel Core i7 1165G7, Grafika Intel Iris X Graphics, Radna memorija (RAM) 16GB, Tvrdi disk:n/a, SSD:512GB',
    img_url: 'https://www.links.hr/content/images/thumbs/014/0144169_racunalo-aio-hp-27-dp1027ny-65s90ea-core-i7-1165g7-16gb-512gb-ssd-intel-hd-graphics-27-ips-fhd-tipk.png',
    price: 8739.05,
    units_available: 10,
    units_sold: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: '3',
    name:'Monitor 27" ASUS PA278QV, WQHD, IPS, 75Hz, 5ms, 350cd/m2, 1000:1, zvučnici, crni',
    description: 'Dijagonala ekrana: 27", Maksimalna rezolucija: 2560x1440, Panel: IPS, Frekvencija: 75Hz',
    img_url: 'https://www.links.hr/content/images/thumbs/014/0141614_monitor-27-asus-pa278qv-wqhd-ips-75hz-5ms-350cdm2-10001-zvucnici-crni.jpg',
    price: 3086.55,
    units_available: 15,
    units_sold: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: '3',
    name:'Monitor 24.5" LENOVO G25-10 65FEGAC2EU, FHD, TN, 144Hz, 1ms, 400cd/m2, 1000:1, AMD FreeSync Premium, G-SYNC Compatible, crni',
    description: 'Dijagonala ekrana: 24.5", Maksimalna rezolucija: 1920x1080, Panel: TN, Frekvencija: 144 Hz',
    img_url: 'https://www.links.hr/content/images/thumbs/013/0136131_monitor-24-5-lenovo-g25-10-65fegac2eu-fhd-tn-144hz-1ms-400cd-m2-1000-1-amd-freesync-premium-g-sync-.jpg',
    price: 1804.05,
    units_available: 10,
    units_sold: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: '3',
    name:'Monitor 27" HP OMEN X27i Gaming, 8AC94AA, IPS, 2K, 165Hz, 1ms, 350cd/m2, 1000:1, crni',
    description: 'Dijagonala ekrana: 27", Maksimalna rezolucija: 2560x1440, Panel: IPS, Frekvencija: 165 Hz',
    img_url: 'https://www.links.hr/content/images/thumbs/010/0106113_monitor-27-hp-omen-x27i-gaming-8ac94aa-ips-2k-165hz-1ms-350cd-m2-1000-1-crni-100300851.jpg',
    price: 3609.05,
    units_available: 10,
    units_sold: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: '4',
    name:'Tipkovnica STEELSERIES Apex 5, RGB, mehanička, US layout, USB, crna',
    description: 'Bežična ne, Vrsta priključka USB, Mehanička Da, Switch: SteelSeries Hybrid mehanički RGB Switch',
    img_url: 'https://www.links.hr/content/images/thumbs/009/0096666_tipkovnica-steelseries-apex-5-rgb-mehanicka-us-layout-usb-crna-101200602.jpg',
    price: 1044.05,
    units_available: 10,
    units_sold: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: '4',
    name:'Miš STEELSERIES Aerox 3 2022 Edition, optički, RGB, 8500 CPI, mat crni, USB',
    description: 'Senzor: SteelSeries TrueMove Core, Tip senzora: Optički, CPI: 200 – 8 500 u koracima od 100 CPI, IPS: 300, na SteelSeries QcK površinama, Ubrzanje: 35G, Stopa/pooling: 1000 Hz / 1 ms',
    img_url: 'https://www.links.hr/content/images/thumbs/012/0120609_mis-steelseries-aerox-3-opticki-rgb-8500-cpi-bijeli-usb.jpg',
    price: 521.55,
    units_available: 10,
    units_sold: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: '4',
    name:'Slušalice TURTLE BEACH Stealth 600, bežične, mikrofon, PS4, bijelo-plave',
    description: 'Frekvencijski raspon: 20 - 20000Hz, Mikrofon: Da, Vrsta priključka: USB, Boja: bijelo-plave',
    img_url: 'https://www.links.hr/content/images/thumbs/008/0089482_slusalice-turtle-beach-stealth-600-bezicne-mikrofon-ps4-bijelo-plave-1005061403.jpg',
    price: 779.00,
    units_available: 15,
    units_sold: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: '5',
    name:'Memorija USB 3.0 FLASH DRIVE, 64 GB, KINGSTON DT 100 G3, DT100G3/64GB, crni',
    description: 'Sučelje USB 3.0, Kapacitet 64 GB, Brzina čitanja [MB/s] 100, Brzina pisanja [MB/s], Boja Crna',
    img_url: 'https://www.links.hr/content/images/thumbs/000/0006403_memorija-usb-3-0-flash-drive-64-gb-kingston-dt-100-g3-crni-1000001403.jpg',
    price: 65.55,
    units_available: 10,
    units_sold: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: '5',
    name:'Memorijska kartica KINGSTON Canvas Select Plus Micro SDCS2/128GB, SDXC 128GB, Class 10 UHS-I + adapter',
    description: 'Format microSDXC, Kapacitet [GB] 128, Čitanje [MB/s] 100, Pisanje [MB/s] --, Dodatno Sa SD adapterom',
    img_url: 'https://www.links.hr/content/images/thumbs/007/0071067_memorijska-kartica-kingston-canvas-select-plus-micro-sdcs2-128gb-sdxc-128gb-class-10-uhs-i-adapter-.jpg',
    price: 132.05,
    units_available: 10,
    units_sold: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: '5',
    name:'Memorijska kartica KINGSTON Canvas Select Plus SDS2/64GB, SDXC 64GB, Class 10 UHS-I',
    description: 'Format SDXC, Kapacitet [GB] 64, Čitanje [MB/s] 100, Pisanje [MB/s] --',
    img_url: 'https://www.links.hr/content/images/thumbs/007/0071076_memorijska-kartica-kingston-canvas-select-plus-sds2-64gb-sdxc-64gb-class-10-uhs-i-300900584.jpg',
    price: 94.05,
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
