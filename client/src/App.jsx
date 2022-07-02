import "./Styles/styles.css";

import { observer } from "mobx-react";
import { useStores } from "./Stores/StoresContex";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Pages/Home";
import Categories from "./Components/Categories";
import Category from "./Assets/category.svg";
import Footer from "./Components/Footer";
import Product from "./Pages/Product";
import Cart from "./Components/Cart";
import Login from "./Pages/Login";
import Registration from "./Pages/Restration";
import Products from "./Pages/Products";
const App = observer(() => {
  const rootStore = useStores();

  return (
    <div className="App">
      <Header />
      <Categories />
      <Cart />
      <div
        className={`body-overlay ${
          rootStore.showingList ? "body-overlay-active" : ""
        }`}
        onClick={rootStore.setShowingList}
      ></div>
      <div
        className={`body-overlay ${
          rootStore.showingCart ? "body-overlay-active" : ""
        }`}
        onClick={rootStore.setShowingCart}
      ></div>
      <div
        className="showCategoriesSlide"
        title="prikaži kategorije"
        onClick={rootStore.setShowingList}
      >
        <p>Prikaži kategorije</p> <img src={Category} alt="category" />
      </div>
      <div className="contentContainer">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
});

export default App;
