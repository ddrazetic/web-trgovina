'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    return await queryInterface.bulkInsert('articles', [
      {
        categoryId: '6',
        name: "Igra za SONY PlayStation 4, Hades",
        description: "Igra za SONY PlayStation 4, Hades",
        img_url: "https://www.links.hr/content/images/thumbs/011/0110241_igra-za-sony-playstation-4-hades-650209474.jpg",
        price: 189,
        units_available: 17,
        units_sold: 5,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '6',
        name: "Igra za SONY PlayStation 4, GTA Trilogy",
        description: "Igra za SONY PlayStation 4, GTA Trilogy",
        img_url: "https://www.links.hr/content/images/thumbs/012/0121508_igra-za-sony-playstation-4-gta-trilogy-650209489.jpg",
        price: 229,
        units_available: 1,
        units_sold: 13,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '6',
        name: "Gaming stolica GENESIS Nitro 550 RGB NFG-0783, crno-plava",
        description: "Materijal presvlake Tkanina, Eko-koža, Osnovni materijal Metal, Materijal kotača Najlon, Unutarnji materijal Hladna pjena, pjena, Boja plava, crna, Mehanizam stolice Buttefly, Plinski lift klase 4, Funkcije Podesivi nasloni za ruke, Podesiva visina, Ležeće sjedalo, Okretno sjedalo, Funkcija ljuljanja, Naslon za ruke podesivi, 1D, Osvjetljenje br, Preporučena visina 160 - 195 cm, Prihvatljiva težina 150 kg, Dubina sjedala 49 cm, Širina sjedala 51 cm, Širina naslona 56 cm, Visina naslona 81 cm, Visina sjedala 128 - 135 cm, Podesiva visina sjedala 48 - 55 cm, Visina naslona za ruke 27 - 34 cm, Veličina kotača 60 mm, Težina 21 kg",
        img_url: "https://www.links.hr/content/images/thumbs/013/0138746_gaming-stolica-genesis-nitro-550-rgb-nfg-0783-crno-plava-011103015.jpg",
        price: 1399,
        units_available: 19,
        units_sold: 5,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '6',
        name: "Gaming stolica GENESIS Nitro 330 RGB NFG-0752, crno-crvena",
        description: "Materijal presvlake Tkanina, Eko-koža, Osnovni materijal Najlon, Materijal kotača Najlon, Unutarnji materijal Pjena, Boja crvena, crna, Mehanizam stolice Buttefly, Plinski lift klase 4, Funkcije Podesiva visina, okretno sjedalo, funkcija ljuljanja, Naslon za ruke Nije podesiv, Osvjetljenje br, Preporučena visina 150 - 170 cm, Prihvatljiva težina 150 kg, Dubina sjedala 53 cm, Širina sjedala 54 cm, Širina naslona 54 cm, Visina naslona 70 cm, Visina sjedala 110 - 117 cm, Podesiva visina sjedala 44 - 51 cm, Veličina kotača 50 mm, Težina 18 kg",
        img_url: "https://www.links.hr/content/images/thumbs/013/0138745_gaming-stolica-genesis-nitro-330-rgb-nfg-0752-crno-crvena-011103014.png",
        price: 1099,
        units_available: 8,
        units_sold: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '6',
        name: "Gamepad MARVO Scorpion GT-014, za PC/PS3, žičani, crni",
        description: "Broj tipki: 12, Analogne tipke: 2, Dvostruki motori za vibracije, Sučelje: USB 2.0, Duljina kabela: 1.8m, Kompatibilnost: PS3, PC, Android, OS: Windows 7 ili novije, Android 4.2+",
        img_url: "https://www.links.hr/content/images/thumbs/009/0094682_gamepad-marvo-scorpion-gt-014-za-pc-ps3-zicani-crni-102010176.jpg",
        price: 69,
        units_available: 3,
        units_sold: 12,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '6',
        name: "Gamepad MARVO Scorpion GT-006, za PC, žičani, crni",
        description: "Vibracijski efekti, 2 analogna mini palice, Kompatibilnost: PC, Duljina kabela: 1.5m, USB 2.0 Plug & Play, OS podrška: Windows 7 ili novije",
        img_url: "https://www.links.hr/content/images/thumbs/009/0094681_gamepad-marvo-scorpion-gt-006-za-pc-zicani-crni-102010175.jpg",
        price: 49,
        units_available: 0,
        units_sold: 19,
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
