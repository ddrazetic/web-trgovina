import { makeAutoObservable, toJS, runInAction } from "mobx";
import CategoryService from "../Services/CategoryService";
import ProductService from "../Services/ProductService";

// import { nanoid } from "nanoid";
// import { toast } from "react-toastify";

class RootStore {
  constructor() {
    this.CategoryService = new CategoryService();
    this.ProductService = new ProductService();
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
  isLoggedIn = false;
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
}

export default RootStore;
