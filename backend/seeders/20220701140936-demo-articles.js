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
    units_available: 4,
    units_sold: 16,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_id: '1',
    name:'Laptop LENOVO IdeaPad Gaming 3 82K20130SC / Ryzen 5 5600H, 8GB, 512GB SSD, GeForce RTX 3050 4GB, 15.6" 165Hz IPS FHD, bez OS, crni',
    description: 'Laptop LENOVO IdeaPad Gaming 3 82K20130SC / Ryzen 5 5600H, 8GB, 512GB SSD, GeForce RTX 3050 4GB, 15.6" 165Hz IPS FHD, bez OS, crni',
    price: 6999,
    specs: ['Procesor: AMD Ryzen 5 5600H (6C / 12T, 3.3 / 4.2GHz, 3MB L2 / 16MB L3)','Radna memorija (RAM): 1x 8GB SO-DIMM DDR4-3200','SSD: 512GB','Grafika: NVIDIA GeForce RTX 3050 4GB GDDR6','Operativni sustav: Bez OS [Nema]', 'Ekran: 15.6" FHD (1920x1080) IPS 300nits Anti-glare, 165Hz, 100% sRGB, DC dimmer'],
    units_available: 2,
    units_sold: 18,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_id: '1',
    name:'Laptop APPLE MacBook Pro 16" mk183cr/a Retina / OctaCore Apple M1 Pro, 16GB, 512GB SSD, Apple Graphics, HR tipkovnica, sivi',
    description: '',
    price: 22979,
    specs: ['Procesor: OctaCore Apple M1 Pro - 10 core','Radna memorija (RAM): 16GB','Tvrdi disk: n/a','SSD:512GB','Grafika: Apple Graphics - 16 core','Operacijski sustav: Apple MacOS [Big Sur]', 'Ekran: 16.2" 3456 x 2234 Retina'],
    units_available: 0,
    units_sold: 20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_id: '2',
    name:'Računalo LINKS Office U62I / G6405, 8GB, 250GB NVMe, HD Graphics',
    description: '',
    price: 2599,
    specs: ['Procesor: Pentium G6405','Radna memorija: 8GB', 'SSD: 250GB', 'Grafika: Intel HD Graphics'],
    units_available: 20,
    units_sold: 64,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_id: '2',
    name:'Računalo ACER Nitro 50 DG.E35EX.008 / Core i5 12400F, 16GB, 1000GB SSD, GeForce GTX 1660S 6GB, nema OS, crno',
    description: '',
    price: 9999,
    specs: ['Operativni sustav Nema [Bez OS - UEFI Shell', 'Procesor Intel Core i5 12400F', 'Grafika GeForce GTX 1660S 6GB', 'Radna memorija (RAM) 16GB', 'Tvrdi disk n/a', 'SSD:1000GB'],
    units_available: 5,
    units_sold: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_id: '2',
    name:'Računalo AiO HP 27-dp1027ny 65S90EA / Core i7 1165G7, 16GB, 512GB SSD, Intel HD Graphics, 27" IPS FHD, tipkovnica, miš, Windows 11, srebrno',
    description: '',
    price: 8739,
    specs: ['Operativni sustav:Windows 11 Home', 'Procesor Intel Core i7 1165G7', 'Grafika Intel Iris X Graphics', 'Radna memorija (RAM) 16GB', 'Tvrdi disk:n/a', 'SSD:512GB'],
    units_available: 10,
    units_sold: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_id: '3',
    name:'Monitor 27" ASUS PA278QV, WQHD, IPS, 75Hz, 5ms, 350cd/m2, 1000:1, zvučnici, crni',
    description: '',
    price: 3086,
    specs: ['Dijagonala ekrana: 27"', 'Maksimalna rezolucija: 2560x1440','Panel: IPS','Frekvencija: 75Hz'],
    units_available: 15,
    units_sold: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_id: '3',
    name:'Monitor 24.5" LENOVO G25-10 65FEGAC2EU, FHD, TN, 144Hz, 1ms, 400cd/m2, 1000:1, AMD FreeSync Premium, G-SYNC Compatible, crni',
    description: '',
    price: 1804,
    specs: ['Dijagonala ekrana: 24.5"', 'Maksimalna rezolucija: 1920x1080','Panel: TN','Frekvencija: 144 Hz'],
    units_available: 10,
    units_sold: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_id: '3',
    name:'Monitor 27" HP OMEN X27i Gaming, 8AC94AA, IPS, 2K, 165Hz, 1ms, 350cd/m2, 1000:1, crni',
    description: '',
    price: 3609,
    specs: ['Dijagonala ekrana: 27"','Maksimalna rezolucija: 2560x1440','Panel: IPS','Frekvencija: 165 Hz'],
    units_available: 10,
    units_sold: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_id: '4',
    name:'Tipkovnica STEELSERIES Apex 5, RGB, mehanička, US layout, USB, crna',
    description: '',
    price: 1044,
    specs: ['Bežična ne','Vrsta priključka USB','Mehanička Da','Switch: SteelSeries Hybrid mehanički RGB Switch'],
    units_available: 10,
    units_sold: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_id: '4',
    name:'Miš STEELSERIES Aerox 3 2022 Edition, optički, RGB, 8500 CPI, mat crni, USB',
    description: '',
    price: 521,
    specs: ['Senzor: SteelSeries TrueMove Core','Tip senzora: Optički','CPI: 200 – 8 500 u koracima od 100 CPI','IPS: 300, na SteelSeries QcK površinama','Ubrzanje: 35G','Stopa/pooling: 1000 Hz / 1 ms'],
    units_available: 10,
    units_sold: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_id: '4',
    name:'Slušalice TURTLE BEACH Stealth 600, bežične, mikrofon, PS4, bijelo-plave',
    description: '',
    price: 779,
    specs: ['Frekvencijski raspon: 20 - 20000Hz','Mikrofon: Da','Vrsta priključka: USB','Boja: bijelo-plave'],
    units_available: 15,
    units_sold: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_id: '5',
    name:'Memorija USB 3.0 FLASH DRIVE, 64 GB, KINGSTON DT 100 G3, DT100G3/64GB, crni',
    description: '',
    price: 65,
    specs: ['Sučelje USB 3.0','Kapacitet 64 GB','Brzina čitanja [MB/s] 100','Brzina pisanja [MB/s]', 'Boja Crna'],
    units_available: 10,
    units_sold: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_id: '5',
    name:'Memorijska kartica KINGSTON Canvas Select Plus Micro SDCS2/128GB, SDXC 128GB, Class 10 UHS-I + adapter',
    description: 'Memorijska kartica KINGSTON Canvas Select Plus Micro SDCS2/128GB, SDXC 128GB, Class 10 UHS-I + adapter',
    price: 132,
    specs: ['Format microSDXC', 'Kapacitet [GB] 128', 'Čitanje [MB/s] 100', 'Pisanje [MB/s] --', 'Dodatno Sa SD adapterom'],
    units_available: 10,
    units_sold: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_id: '5',
    name:'Memorijska kartica KINGSTON Canvas Select Plus SDS2/64GB, SDXC 64GB, Class 10 UHS-I',
    description: 'Memorijska kartica KINGSTON Canvas Select Plus SDS2/64GB, SDXC 64GB, Class 10 UHS-I',
    price: 94,
    specs: ['Format SDXC', 'Kapacitet [GB] 64', 'Čitanje [MB/s] 100', 'Pisanje [MB/s] --'],
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
