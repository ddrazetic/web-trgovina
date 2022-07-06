import { makeAutoObservable, toJS, runInAction } from "mobx";
import CategoryService from "../Services/CategoryService";
import ProductService from "../Services/ProductService";
import OrderService from "../Services/OrderService";
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
    this.OrderService = new OrderService();
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
  page = 0;
  rpp = 5;
  search = "";
  params = null;
  setPage = (value) => {
    this.page = value;
  };
  setSearch = (value) => {
    this.search = value;
  };
  onChangeSearch = (e) => {
    this.setSearch(e.target.value);
    // console.log(this.search);
  };
  setRpp = (e) => {
    e.preventDefault();
    this.rpp = e.target.value;
    this.getProductsFiltered();
  };
  setParams = (value) => {
    this.params = value;
  };
  sendSearch = (e) => {
    e.preventDefault();
    this.getProductsFiltered();
  };
  createParams = () => {
    const range1 = this.page * this.rpp;
    const range2 = range1 + this.rpp - 1;
    const params = new URLSearchParams({
      filter: `{ "name" : "${this.search}" }`,
      range: `[${range1}, ${range2}]`,
    });
    this.setParams(params);
  };
  products = [];
  productsFiltered = [];
  numberOfProducts = 0;
  numberOfProductsFiltered = 0;
  handlePageClick = async (data) => {
    let currentPage = data.selected;
    this.page = currentPage;
    this.getProductsFiltered();
  };
  getProductsFiltered = async () => {
    this.state = "pending";
    this.createParams();

    try {
      const data = await this.ProductService.get(this.params);
      // console.log(data);
      runInAction(() => {
        // console.log(data.data);
        this.productsFiltered = data.data;
        this.numberOfProductsFiltered = data.data.length;
        // console.log(this.numberOfCategories);
        this.state = "success";
      });
    } catch (error) {
      runInAction(() => {
        this.state = "error";
      });
    }
  };
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
  categoryName = "";
  productsByCategory = [];
  getProductsByCategory = async (id) => {
    this.state = "pending";
    try {
      const data = await this.CategoryService.getOne(id);
      // console.log(data);
      runInAction(() => {
        console.log(data.data.articles);
        this.categoryName = data.data.name;
        this.productsByCategory = data.data.articles;
        // this.numberOfProducts = data.data.length;
        // console.log(this.numberOfCategories);
        this.state = "success";
      });
    } catch (error) {
      runInAction(() => {
        this.state = "error";
      });
    }
  };

  updateProduct = async (id, units_sold, units_available) => {
    let article = this.products.find((item) => {
      if (item.id === id) return toJS(item);
    });
    // article = [
    //   ...article[0],
    //   { units_sold: units_sold, units_available: units_available },
    // ];
    article = toJS(article);
    article.units_sold = units_sold;
    article.units_available = units_available;
    console.log(toJS(article));
    try {
      const response = await this.ProductService.update(id, article);

      if (response.status === 200) {
        runInAction(() => {
          this.stateModel = "success";
          console.log("update");
        });
      }
    } catch (error) {
      runInAction(() => {
        this.stateModel = "error";
        console.log("error");
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
  address = "";
  firstName = "";
  lastName = "";

  setEmail = (value) => {
    this.email = value;
  };
  setPassword = (value) => {
    this.password = value;
  };
  setErrorR = (value) => {
    this.errorR = value;
  };
  setFirstName = (value) => {
    this.firstName = value;
  };
  setLastName = (value) => {
    this.lastName = value;
  };
  setAddress = (value) => {
    this.address = value;
  };

  onChangeEmail = (e) => {
    this.setEmail(e.target.value);
    this.setErrorR("");
  };
  onChangePassword = (e) => {
    this.setPassword(e.target.value);
    this.setErrorR("");
  };
  onChangeFirstName = (e) => {
    this.setFirstName(e.target.value);
    this.setErrorR("");
  };
  onChangeLastName = (e) => {
    this.setLastName(e.target.value);
    this.setErrorR("");
  };
  onChangeAddress = (e) => {
    this.setAddress(e.target.value);
    this.setErrorR("");
  };

  validateAll = () => {
    if (
      this.email.length < 1 ||
      this.password.length < 1 ||
      this.firstName.length < 1 ||
      this.lastName.length < 1 ||
      this.address.length < 1
    ) {
      this.setErrorR("Obavezno popuniti polja!");
      this.notifyCreateMake("obavezno popuniti polja");
      // console.log("invalid");
      return true;
    }
  };
  validateAllLogin = () => {
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
      this.createUser(
        this.email,
        this.password,
        this.firstName,
        this.lastName,
        this.address
      );
      this.setEmail("");
      this.setPassword("");
      this.setErrorR("");
      this.setAddress("");
      this.setLastName("");
      this.setFirstName("");
    }
  };

  createUser = async (email, password, firstName, lastName, address) => {
    try {
      const response = await this.UserService.register({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        address: address,
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
    if (!this.validateAllLogin()) {
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
          // console.log("user ");
          // const res = await this.UserService.getUser();
          // console.log(res);
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
          this.order = [];
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
  user = [];
  getUser = async () => {
    try {
      const response = await this.UserService.getUser();
      // console.log(response);
      // console.log("response");
      if (response.status >= 200 && response.status < 301) {
        runInAction(() => {
          this.state = "success";
          this.user = response.data;
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

  // order = [
  //   {
  //     id: 1,
  //     name: "Laptop",
  //     price: 45.55,
  //     quantity: 17,
  //   },
  //   {
  //     id: 2,
  //     name: "dkomp",
  //     price: 55.55,
  //     quantity: 4,
  //   },
  //   {
  //     id: 3,
  //     name: "usb",
  //     price: 25.55,
  //     quantity: 7,
  //   },
  // ];
  order = [];
  setOrder = (value) => {
    this.order = value;
  };
  currentCategoryId = "";
  setCurrentCategoryId = (value) => {
    this.currentCategoryId = value;
  };
  orderCost = 0;
  orderQuantity = 0;
  setOrderTotal = () => {
    this.orderCost = 0;
    this.orderQuantity = 0;
    if (this.order) {
      this.order.forEach((item) => {
        this.orderCost += item.quantity * item.price;
        this.orderQuantity += item.quantity;
      });
      this.orderCost = this.orderCost.toFixed(2);
    }
    console.log("cost: ", this.orderCost);
    console.log("q: ", this.orderQuantity);
  };
  addingNewProduct = true;
  addToOrder = (e, store) => {
    e.preventDefault();
    if (this.order) {
      this.order = this.order.map((item) => {
        if (item.id === store.id) {
          this.addingNewProduct = false;
          if (
            store.units_available === item.quantity ||
            store.units_available < 1
          ) {
            console.log(
              "store ",
              store.units_available,
              "item ",
              item.units_available
            );
            this.notifyCreateMake("Maximalan broj dostupnih proizvoda!", {
              toastId: 1,
            });
            return item;
          }
          this.notifyCreateMake("Dodali ste proizvod u košaricu!", {
            toastId: 2,
          });
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    }
    if (store.units_available < 1) {
      this.notifyCreateMake("Proizvod nije više dostupan!", {
        toastId: 1,
      });
    }
    if (this.addingNewProduct && store.units_available > 0) {
      let my_object = {};
      my_object = store;
      my_object.quantity = 1;
      this.order.push(my_object);
      this.notifyCreateMake("Dodali ste proizvod u košaricu!", {
        toastId: 2,
      });
    }
    this.setOrderTotal();
    this.addingNewProduct = true;
    console.log(toJS(this.order));
  };

  addOrder = (e) => {
    // e.preventDefault();
    // if (!this.validateAll()) {
    this.createOrder(this.order);
    // this.setOrder([]);
    // console.log(this.order);
    //   this.setPassword("");
    //   this.setErrorR("");
    // }
  };

  createOrder = async (order) => {
    try {
      const response = await this.OrderService.create({
        articles: order,
        totalSum: this.orderCost,
        totalQty: this.orderQuantity,
        address: this.user.address,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        status: 0,
      });

      if (response.status >= 200 && response.status < 301) {
        runInAction(() => {
          this.order.map((item) => {
            this.updateProduct(
              item.id,
              item.units_sold + item.quantity,
              item.units_available - item.quantity
            );
          });
          // this.updateProduct(17, 7, 7);
          this.state = "success";
          this.orderCost = 0;
          this.orderQuantity = 0;
          this.setOrder([]);

          this.notifyCreateMake("uspješno ste kreirali narudžbu");
        });
      }
    } catch (error) {
      runInAction(() => {
        this.state = "error";
        this.notifyCreateMake("niste uspješno kreirali narudzbu");
      });
    }
  };

  // ORDERS--------------------------------------------------------------
  orders = [];
  articlesInOrder = [];
  getOrders = async () => {
    this.state = "pending";

    try {
      const data = await this.OrderService.get();
      // console.log(data);
      runInAction(() => {
        console.log(data.data);
        this.orders = data.data;
        // this.articlesInOrder = data.data.articles;
        // console.log(this.numberOfCategories);
        this.state = "success";
      });
    } catch (error) {
      runInAction(() => {
        this.state = "error";
      });
    }
  };
}

export default RootStore;
