import { makeAutoObservable, toJS } from "mobx";
// import { nanoid } from "nanoid";
// import { toast } from "react-toastify";

class RootStore {
  categories = [
    {
      id: 1,
      name: "McDonald's - food",
      nameLink: "McDonald%27s",
      lat: 45.55,
      lng: 18,
    },
    {
      id: 2,
      name: "dm - cosmetics",
      nameLink: "Dm-drogerie_markt",
      lat: 45.55,
      lng: 18.696078454047157,
    },
    {
      id: 3,
      name: "Spar - store",
      nameLink: "SPAR_(retailer)",
      lat: 45.55,
      lng: 18.692632655771277,
    },
    {
      id: 4,
      name: "Müller - cosmetics",
      nameLink: "Müller_(store)",
      lat: 45.54,
      lng: 18.709641155059742,
    },
    {
      id: 5,
      name: "IKEA - furniture",
      nameLink: "IKEA",
      lat: 45.54,
      lng: 18.68881878214098,
    },
    {
      id: 6,
      name: "Konzum - store",
      nameLink: "Konzum",
      lat: 45.55,
      lng: 18.69598254513013,
    },
    {
      id: 7,
      name: "Kaufland - store",
      nameLink: "Kaufland",
      lat: 45.54,
      lng: 18.709384694091177,
    },
  ];
  products = [
    {
      id: 1,
      name: "Laptop Lenovo legion",
      nameLink: "McDonald%27s",
      lat: 45.55,
      lng: 18.69,
      category: "opis opis opis opis opisopis opis opis opisopis",
    },
    {
      id: 2,
      name: "Komp",
      nameLink: "Dm-drogerie_markt",
      lat: 45.55,
      lng: 18.696078454047157,
      category: "opis opis opis opis opisopis opis opis opisopis",
    },
    {
      id: 3,
      name: "monitor",
      nameLink: "SPAR_(retailer)",
      lat: 45.55,
      lng: 18.692632655771277,
      category: "opis opis opis opis opisopis opis opis opisopis",
    },
    {
      id: 4,
      name: "usb",
      nameLink: "Müller_(store)",
      lat: 45.54,
      lng: 18.709641155059742,
      category: "opis opis opis opis opisopis opis opis opisopis",
    },
    {
      id: 5,
      name: "rac",
      nameLink: "IKEA",
      lat: 45.6,
      lng: 18.68881878214098,
      category: "ekrani",
    },
    {
      id: 6,
      name: "Konzum - store",
      nameLink: "Konzum",
      lat: 45.26,
      lng: 18.69598254513013,
      category: "Racunala",
    },
    {
      id: 7,
      name: "Kaufland - store",
      nameLink: "Kaufland",
      lat: 45.51,
      lng: 18.709384694091177,
      category: "Racunala",
    },
  ];

  toggleHamburger = () => {
    this.isOpenHamburger = !this.isOpenHamburger;
    // if (window.innerWidth < 800) {
    // }
    // console.log(window.innerWidth);
  };
  productCountCart = 10;
  productPriceCart = 59.99;
  showingList = false;
  isLoggedIn = false;
  isOpenHamburger = false;
  showingCart = false;
  loading = false;
  error = "error";
  searchInput = "";
  currentProduct = [];

  constructor() {
    makeAutoObservable(this);
  }

  setShowingList = () => {
    this.showingList = !this.showingList;
    // console.log(this.showingList);
  };
  setShowingCart = () => {
    this.showingCart = !this.showingCart;
    console.log(this.showingCart);
  };
  findProduct = (id) => {
    this.currentProduct = this.products.find((obj) => {
      return obj.id === parseInt(id);
    });
    console.log(toJS(this.currentProduct));
  };
}

export default RootStore;
