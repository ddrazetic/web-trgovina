import { makeAutoObservable, toJS, runInAction } from "mobx";
import CategoryService from "../Services/CategoryService";
import ProductService from "../Services/ProductService";
import UserService from "../Services/UserService";
import { toast } from "react-toastify";

// import { nanoid } from "nanoid";
// import { toast } from "react-toastify";

class RootStore {
  isLoggedIn = "";
  constructor() {
    this.CategoryService = new CategoryService();
    this.ProductService = new ProductService();
    this.UserService = new UserService();
    // this.UserService.getUser();
    makeAutoObservable(this);
  }
  categories = [];
  state = "initial";
  numberOfCategories = 0;
  getCategories = async () => {
    this.state = "pending";
    try {
      const data = await this.CategoryService.get();
      // console.log(data);
      runInAction(() => {
        // console.log(data.data);
        this.categories = data.data;
        this.numberOfCategories = data.data.length;
        // console.log(this.numberOfCategories);
        this.state = "success";
      });
    } catch (error) {
      runInAction(() => {
        this.state = "error";
      });
    }
  };

  products = [];
  numberOfProducts = 0;
  getProducts = async () => {
    this.state = "pending";
    try {
      const data = await this.ProductService.get();
      // console.log(data);
      runInAction(() => {
        // console.log(data.data);
        this.products = data.data;
        this.numberOfProducts = data.data.length;
        // console.log(this.numberOfCategories);
        this.state = "success";
      });
    } catch (error) {
      runInAction(() => {
        this.state = "error";
      });
    }
  };

  toggleHamburger = () => {
    this.isOpenHamburger = !this.isOpenHamburger;
  };
  productCountCart = 10;
  productPriceCart = 59.99;
  showingList = false;
  // isLoggedIn = false;
  isOpenHamburger = false;
  showingCart = false;
  loading = false;
  error = "error";
  searchInput = "";
  currentProduct = [];
  mostSellingProducts = [];
  newestProducts = [];
  setShowingList = () => {
    this.showingList = !this.showingList;
    // console.log(this.showingList);
  };
  setShowingCart = () => {
    this.showingCart = !this.showingCart;
    // console.log(this.showingCart);
  };
  setCurrentProduct = (product) => {
    this.currentProduct = product;
    // console.log(this.showingCart);
  };
  setMostSellingProduct = (products) => {
    this.mostSellingProducts = products;
    // console.log(this.showingCart);
  };
  setNewestProduct = (products) => {
    this.newestProducts = products;
    // console.log(this.showingCart);
  };
  findProduct = async (id) => {
    await this.getProducts();
    const product = this.products.find((obj) => {
      return obj.id === parseInt(id);
    });
    this.setCurrentProduct(product);
    // console.log(toJS(this.currentProduct));
  };

  getMostSellingProducts = async () => {
    await this.getProducts();

    const sortedData = [...this.products].sort(
      (a, b) => parseInt(b.units_sold) - parseInt(a.units_sold)
    );
    const mostSelling = sortedData.slice(0, 7);
    this.setMostSellingProduct(mostSelling);
    // console.log(this.mostSellingProducts);
  };
  getNewestProducts = async () => {
    await this.getProducts();
    const newest = this.products.slice(-7);
    this.setNewestProduct(newest);
    // console.log(this.newestProducts);
  };

  // REGISTER----------------------------------------------------------

  email = "";
  password = "";
  errorR = "";

  setEmail = (value) => {
    this.email = value;
  };
  setPassword = (value) => {
    this.password = value;
  };
  setErrorR = (value) => {
    this.errorR = value;
  };

  onChangeEmail = (e) => {
    this.setEmail(e.target.value);
    this.setErrorR("");
  };
  onChangePassword = (e) => {
    this.setPassword(e.target.value);
    this.setErrorR("");
  };

  validateAll = () => {
    if (this.email.length < 1 || this.password.length < 1) {
      this.setErrorR("Obavezno popuniti polja!");
      this.notifyCreateMake("obavezno popuniti polja");
      // console.log("invalid");
      return true;
    }
  };

  notifyCreateMake = (mess) => toast(<p>{mess}</p>);

  addUser = (e) => {
    e.preventDefault();
    if (!this.validateAll()) {
      this.createUser(this.email, this.password);
      this.setEmail("");
      this.setPassword("");
      this.setErrorR("");
    }
  };

  createUser = async (email, password) => {
    try {
      const response = await this.UserService.register({
        email: email,
        password: password,
      });

      if (response.status >= 200 && response.status < 301) {
        runInAction(() => {
          this.state = "success";
          this.notifyCreateMake("uspješno ste se registrirali");
        });
      }
    } catch (error) {
      runInAction(() => {
        this.state = "error";
        this.notifyCreateMake(
          "niste se uspješno registrirali, možda već postoji korisnik s ovim emailom"
        );
      });
    }
  };
  logUser = (e) => {
    e.preventDefault();
    if (!this.validateAll()) {
      this.loginUser(this.email, this.password);
      this.setEmail("");
      this.setPassword("");
      this.setErrorR("");
    }
  };

  loginUser = async (email, password) => {
    try {
      const response = await this.UserService.login({
        email: email,
        password: password,
      });

      if (response.status >= 200 && response.status < 301) {
        runInAction(() => {
          // this.isLoggedIn = this.UserService.getUser().data;
          // console.log(this.isLoggedIn);
          // console.log(this.UserService.getUser().status);
          this.getUser();

          this.state = "success";
          this.notifyCreateMake("uspješno ste se prijavili");
        });
      }
    } catch (error) {
      runInAction(() => {
        this.state = "error";
        this.notifyCreateMake(
          "niste se uspješno prijavili, pokušajte ponovno!"
        );
      });
    }
  };
  logoutUser = async () => {
    try {
      const response = await this.UserService.logout();

      if (response.status >= 200 && response.status < 301) {
        runInAction(() => {
          this.state = "success";
          this.notifyCreateMake("uspješno ste se odjavili");
          // this.isLoggedIn = this.UserService.getUser().status;
          // console.log(this.isLoggedIn);
          // console.log(this.UserService.getUser().status);
          this.getUser();
        });
      }
    } catch (error) {
      runInAction(() => {
        this.state = "error";
        this.notifyCreateMake("već ste odjavljeni!");
      });
    }
  };
  getUser = async () => {
    try {
      const response = await this.UserService.getUser();
      // console.log(response);
      if (response.status >= 200 && response.status < 301) {
        runInAction(() => {
          this.state = "success";
          this.isLoggedIn = true;
        });
      }
    } catch (error) {
      runInAction(() => {
        this.state = "error";
        this.isLoggedIn = false;
      });
    }
  };
}

export default RootStore;
