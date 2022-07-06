'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('articles',[
      {
        categoryId: '4',
        name: "Slušalice TURTLE BEACH Elite Atlas, mikrofon, PC/PS4/Xbox/Switch, crne",
        description: "Frekvencijski raspon 12 - 20000Hz, Mikrofon Da, Vrsta priključka 3.5mm, Boja crna",
        img_url: "https://www.links.hr/content/images/thumbs/008/0089471_slusalice-turtle-beach-elite-atlas-mikrofon-pc-ps4-xbox-switch-crne-1005061389.jpg",
        price: 779,
        units_available: 20,
        units_sold: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '4',
        name: "Slušalice TURTLE BEACH Recon 200, mikrofon, PC/PS4/Xbox, bijele",
        description: "Frekvencijski raspon 20 - 20000Hz, Mikrofon Da, Vrsta priključka 3.5mm, Boja bijela",
        img_url: "https://www.links.hr/content/images/thumbs/008/0089475_slusalice-turtle-beach-recon-200-mikrofon-pc-ps4-xbox-bijele-1005061395.jpg",
        price: 459,
        units_available: 18,
        units_sold: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '4',
        name: "Slušalice TURTLE BEACH Stealth 600, bežične, mikrofon, PS4, bijelo-plave",
        description: "Frekvencijski raspon 20 - 20000Hz, Mikrofon Da, Vrsta priključka USB, Boja bijelo-plave",
        img_url: "https://www.links.hr/content/images/thumbs/010/0102871_slusalice-turtle-beach-stealth-600-bezicne-mikrofon-ps4-bijelo-plave-1005061403.jpg",
        price: 779,
        units_available: 6,
        units_sold: 6,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '4',
        name: "Slušalice TURTLE BEACH Recon 200, mikrofon, PC/PS4/Xbox, crne",
        description: "Frekvencijski raspon 20 - 20000Hz, Mikrofon Da, Vrsta priključka 3.5mm, Boja crna",
        img_url: "https://www.links.hr/content/images/thumbs/008/0089476_slusalice-turtle-beach-recon-200-mikrofon-pc-ps4-xbox-crne-1005061396.jpg",
        price: 459,
        units_available: 3,
        units_sold: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '4',
        name: "Slušalice TURTLE BEACH Recon 70, mikrofon, PC/PS4/PS5/Xbox, crno-plave",
        description: "Frekvencijski raspon 20 - 20000Hz, Mikrofon Da, Vrsta priključka 3.5mm, Boja crveno-crna",
        img_url: "https://www.links.hr/content/images/thumbs/010/0102863_slusalice-turtle-beach-recon-70-mikrofon-pc-ps4-ps5-xbox-crno-plave-1005061457.jpg",
        price: 269,
        units_available: 16,
        units_sold: 6,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '4',
        name: "Miš LOGITECH MX Anywhere 3, laserski, bežični, BT, Unifying receiver USB, pale gray",
        description: "Sučelje Bluetooth, Senzor Darkfield high precision, Broj tipki 6, Rezolucija (dpi) 2000 - 4000, Vrsta Bežični, Napajanje punjiva Li-Po (500 mAh) baterija, Dimenzije (mm)100.5 x 65 x 34.4, Boja bijela [Pale gray], Masa (g) 99",
        img_url: "https://www.links.hr/content/images/thumbs/009/0090934_mis-logitech-mx-anywhere-3-laserski-bezicni-bt-unifying-receiver-usb-pale-gray-101500517.jpg",
        price: 549,
        units_available: 18,
        units_sold: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '4',
        name: "Miš LOGITECH MX Anywhere 3, laserski, bežični, BT, Unifying receiver USB, graphite",
        description: "Sučelje Bluetooth, Senzor Darkfield high precision, Broj tipki 6, Rezolucija (dpi) 2000 - 4000, Vrsta Bežični, Napajanje punjiva Li-Po (500 mAh) baterija, Dimenzije (mm)100.5 x 65 x 34.4, Boja siva, Masa (g) 99",
        img_url: "https://www.links.hr/content/images/thumbs/009/0090933_mis-logitech-mx-anywhere-3-laserski-bezicni-bt-unifying-receiver-usb-graphite-101500516.jpg",
        price: 549,
        units_available: 0,
        units_sold: 18,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '4',
        name: "Tipkovnica + miš LOGITECH MX900 Performance Combo, bežična, crna, USB",
        description: "MIŠ: Sučelje USB, Senzor Optički, Broj tipki 3, Rezolucija (dpi) 2000, Vrsta Bežični, Napajanje ugrađena baterija, Dimenzije (mm) 126 x 85,7 x 48,4, Boja crna, Masa (g) 145, , TIPKOVNICA: Bežična Da, Vrsta priključka USB, Mehanička Ne, Switch Ne, Numb Pad Da, Layout US, LED Ne, Boja crna",
        img_url: "https://www.links.hr/content/images/thumbs/005/0054290_tipkovnica-mis-logitech-mx900-performance-combo-bezicna-crna-usb.jpg",
        price: 899,
        units_available: 11,
        units_sold: 8,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '4',
        name: "Tipkovnica LOGITECH Gaming G512 Carbon, RGB, mehanička, GX Brown Tactile, UK layout, crna",
        description: "Bežična Ne, Vrsta priključka USB, Mehanička Da, SwitchGX Brown Tactile, Numb Pad Da, Layout UK, LED RGB, Boja Crna",
        img_url: "https://www.links.hr/content/images/thumbs/010/0101478_tipkovnica-logitech-gaming-g512-carbon-rgb-mehanicka-gx-brown-tactile-crna-101200655.jpg",
        price: 649,
        units_available: 9,
        units_sold: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '4',
        name: "Slušalice ASUS TUF Gaming H3, bežične, USB-C, crne",
        description: "Domet (bežične) [m]25, Povezivanje Wireless, Tip slušalica Naglavne (on ear), Trajanje baterijedo 15h",
        img_url: "https://www.links.hr/content/images/thumbs/010/0102234_slusalice-asus-tuf-gaming-h3-bezicne-usb-c-crne-1005061627.jpg",
        price: 664,
        units_available: 5,
        units_sold: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '4',
        name: "Tipkovnica ASUS ROG Falchion, RGB, mehanička, bežična, US Layout, crna, USB",
        description: "Bežična Da, Vrsta priključka USB, Mehanička Da, Switch: Cherry MX RGB, Numb Pad Ne, Layout US, LED RGB, Boja Crna",
        img_url: "https://www.links.hr/content/images/thumbs/010/0106181_tipkovnica-asus-rog-falchion-rgb-mehanicka-bezicna-us-layout-crna-usb-101200665.png",
        price: 1243,
        units_available: 6,
        units_sold: 6,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '4',
        name: "Miš ASUS ROG Keris, bežični, optički, 16000dpi, USB",
        description: "Sučelje: Bluetooth, USB, Wireless \n Senzor Optički, Rezolucija [dpi/cpi]16000 DPI, Tipke 7, Scroll 1, Indikator baterije da, Boja Crna \n Ostale karakteristike, RGB, Programabilne tipke, Software, nVidia Reflex Tehnologija Da",
        img_url: "https://www.links.hr/content/images/thumbs/010/0109765_mis-asus-rog-keris-bezicni-opticki-16000dpi-usb-101500662.jpg",
        price: 654,
        units_available: 1,
        units_sold: 9,
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
