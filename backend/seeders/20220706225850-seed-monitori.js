'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('articles',[
      {
        categoryId: '3',
        name: "Monitor 31.5\" DELL S3222DGM, QHD, VA, 165Hz, 1ms, 350cd/m2, 3000:1, zakrivljeni, crni",
        description: "Dijagonala ekrana: 31.5\", Maksimalna rezolucija: 2K QHD - 2560x1440@165Hz(DP)/144Hz(HDMI);, Panel: VA, Frekvencija: 165 Hz, Vrijeme odaziva [ms]: 1 [gray to gray MPRT], Svjetlina [cd/m2]: 350",
        img_url: "https://www.links.hr/content/images/thumbs/011/0111720_monitor-31-5-dell-s3222dgm-qhd-165hz-1ms-350cd-m2-3000-1-zakrivljeni-crni-100300955.jpg",
        price: 3039,
        units_available: 0,
        units_sold: 14,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '3',
        name: "Monitor 27\" DELL S2721DGFA, QHD, IPS, 165Hz, 1ms, 400 cd/m2, 1000:1, pivot, sivi",
        description: "Tip ploče: IPS LED 27 \" NVIDIA G-SYNC i AMD FreeSync;, Omjer slike: 16: 9;, Rezolucija: 2560x1440 @ 165Hz;, Korak piksela: 0,2331 mm;, Podrška u boji: 1,07B boja;, Raspon boja (tipičan): 98% DCI-P3;, Vrijeme odziva: 1 ms (sivo do sivo);, Maksimalni kut gledanja: 178 ° / 178 °;, Svjetlina: 400cd / m2;",
        img_url: "https://www.links.hr/content/images/thumbs/010/0100459_monitor-27-dell-s2721dgfa-ips-165hz-1ms-400-cd-m2-1000-1-pivot-sivi-100300795.jpg",
        price: 3324,
        units_available: 5,
        units_sold: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '3',
        name: "Monitor 25\" DELL Alienware AW2521HFLA, FHD, IPS, 240Hz, 1ms, 400cd/m2, 1000:1, AMD FreeSync Premium/nVidia G-Sync, crno/bijeli",
        description: "Dijagonala ekrana: 25\", Maksimalna rezolucija: 1920x1080, Panel: IPS, Frekvencija: 240 Hz, Vrijeme odaziva [ms]: 1, Svjetlina [cd/m2]: 400",
        img_url: "https://www.links.hr/content/images/thumbs/009/0095447_monitor-25-dell-alienware-aw2521hfla-amd-freesync-premium-nvidia-g-sync-240hz-1ms-400cd-m2-1000-1-c.jpg",
        price: 2089,
        units_available: 16,
        units_sold: 19,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '3',
        name: "Monitor 24\" DELL S2421HGF, FHD, TN, 144Hz, 1ms, 350cd/m2, 1000:1, pivot, crni",
        description: "Dijagonala ekrana: 24\", Maksimalna rezolucija: 1920 x 1080, Panel: TN, Frekvencija: 144 Hz, Vrijeme odaziva [ms]: 1, Svjetlina [cd/m2]: 350",
        img_url: "https://www.links.hr/content/images/thumbs/008/0087358_monitor-24-dell-s2421hgf-144hz-1ms-350cdm2-10001-pivot-crni.jpg",
        price: 1756,
        units_available: 19,
        units_sold: 10,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '3',
        name: "Monitor 24\" ACER ConceptD CM2241W, FHD, IPS, 75Hz, 4ms, 350cd/m2, 100M:1, crni",
        description: "Dijagonala ekrana: 24\", Maksimalna rezolucija: 1920x1200, Panel: IPS, Frekvencija: 75Hz, Vrijeme odaziva [ms]: 4, Svjetlina [cd/m2]: 350",
        img_url: "https://www.links.hr/content/images/thumbs/008/0084259_monitor-24-acer-conceptd-cm2241w-75hz-4ms-350cd-m2-100000000-1-crni-100300556.jpg",
        price: 2944,
        units_available: 16,
        units_sold: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '3',
        name: "Monitor 27\" LED ACER Nitro VG270bmiix, FHD, IPS, 75 Hz, 1ms, 250cd/m2, 100M:1, zvučnici, crni",
        description: "Dijagonala ekrana: 27\", Maksimalna rezolucija: 1920 x 1080, Panel: IPS, Frekvencija: 75 Hz, Vrijeme odaziva [ms]: 1, Svjetlina [cd/m2]: 250",
        img_url: "https://www.links.hr/content/images/thumbs/006/0063688_monitor-27-led-acer-nitro-vg270-um-hv0ee-001-75-hz-1ms-250cd-m2-100-000-000-1-zvucnici-crni-1003004.png",
        price: 1424,
        units_available: 15,
        units_sold: 15,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '3',
        name: "Monitor 23.8\" ACER VG240YPbiip, IPS, 144Hz, 1ms, 250cd/m2, 100.000.000:1, crni",
        description: "Dijagonala ekrana: 23.8\", Maksimalna rezolucija: 1920 x 1080, Panel: IPS, Frekvencija: 144 Hz, Vrijeme odaziva [ms]: 1, Svjetlina [cd/m2]: 250",
        img_url: "https://www.links.hr/content/images/thumbs/007/0072665_monitor-23-8-acer-vg240ypbiip-ips-144hz-1ms-250cd-m2-100-000-000-1-crni-100300482.png",
        price: 1414,
        units_available: 4,
        units_sold: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '3',
        name: "Monitor 31.5\" LED ACER Nitro XZ322QUPbmiiphx, QHD, VA, 144Hz, 4ms, 400cd/m2, 100M:1, zakrivljeni, crni",
        description: "Dijagonala ekrana: 31.5\", Maksimalna rezolucija: 2560 x 1440, Panel: VA, Frekvencija: 144 Hz, Vrijeme odaziva [ms]: 4, Svjetlina [cd/m2]: 400",
        img_url: "https://www.links.hr/content/images/thumbs/008/0089912_monitor-31-5-led-acer-nitro-xz322qupbmiiphx-144hz-4ms-400cd-m2-100m-1-zakrivljeni-crni-100300592.jpg",
        price: 3371,
        units_available: 1,
        units_sold: 8,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '3',
        name: "Monitor 24\" BenQ Zowie XL2411K, FHD, TN, 144Hz, 1ms, 320cd/m2, 1000:1, pivot, crni",
        description: "Dijagonala ekrana: 24\", Maksimalna rezolucija: 1920 x 1080, Panel: TN, Frenkencija: 144Hz, Vrijeme odaziva [ms]: 1ms, Svjetlina [cd/m2]: 320",
        img_url: "https://www.links.hr/content/images/thumbs/013/0135853_monitor-24-benq-zowie-xl2411k-fhd-tn-144hz-1ms-320cd-m2-1000-1-pivot-crni-1003001067.png",
        price: 1671,
        units_available: 5,
        units_sold: 17,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '3',
        name: "Monitor 21.5\" BenQ GW2283, FHD, IPS, 60Hz, 5ms, 250cd/m2, 1000:1, zvučnici, crni",
        description: "Dijagonala ekrana: 21.5\", Maksimalna rezolucija: 1920 x 1080, Panel: IPS, Frenkencija: 60Hz, Vrijeme odaziva [ms]: 5ms, Svjetlina [cd/m2]: 250",
        img_url: "https://www.links.hr/content/images/thumbs/013/0135841_monitor-21-5-benq-gw2283-fhd-ips-60hz-5ms-250cd-m2-1000-1-zvucnici-crni-1003001062.jpg",
        price: 1281,
        units_available: 18,
        units_sold: 6,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '3',
        name: "Monitor 25\" BenQ Zowie XL2540K, FHD, TN, 240Hz, 1ms, 320cd/m2, 1000:1, pivot, crni",
        description: "Dijagonala ekrana: 25\", Maksimalna rezolucija: 1920 x 1080, Panel: TN, Frenkencija: 240Hz, Vrijeme odaziva [ms]: 1ms, Svjetlina [cd/m2]: 320",
        img_url: "https://www.links.hr/content/images/thumbs/013/0135856_monitor-25-benq-zowie-xl2540k-fhd-tn-240hz-1ms-320cd-m2-1000-1-pivot-crni-1003001065.jpg",
        price: 2801,
        units_available: 0,
        units_sold: 14,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        categoryId: '3',
        name: "Monitor 24\" BenQ BL2420PT, QHD, IPS, 60Hz, 5ms, 250cd/m2, 1000:1, pivot, crni",
        description: "Dijagonala ekrana: 24\", Maksimalna rezolucija: 2560 x 1440, Panel: IPS, Frenkencija: 60Hz, Vrijeme odaziva [ms]: 5ms, Svjetlina [cd/m2]: 250",
        img_url: "https://www.links.hr/content/images/thumbs/013/0135844_monitor-24-benq-bl2420pt-qhd-ips-60hz-5ms-250cd-m2-1000-1-pivot-crni-1003001068.png",
        price: 1832,
        units_available: 4,
        units_sold: 5,
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
