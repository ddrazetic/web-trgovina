import React, { useLayoutEffect, useEffect } from "react";
import { useStores } from "../Stores/StoresContex";
import { observer } from "mobx-react";
import Cart from "../Assets/shoppingcart1.svg";
import Laptop from "../Assets/laptop.svg";
import Noimage from "../Assets/noimage.png";
import AddtoCart from "../Assets/addtocart.svg";
import { Link } from "react-router-dom";

const Products = observer(() => {
  const rootStore = useStores();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    rootStore.getProducts();
  }, [rootStore]);

  return (
    <div className="productsContainer">
      <h1 className="productsTitle">Proizvodi</h1>
      <div className="blueLine"></div>
      <div className="products">
        {rootStore.products.map((store, index) => {
          return (
            <div
              className="sliderProductContainer productContainermini"
              key={index}
            >
              <h3 className="sliderProductName">
                {store.name.substring(0, 28)}
              </h3>
              <Link to={`/product/${store.id}`} className="sliderImage">
                <img
                  src={store.img_url ? store.img_url : Noimage}
                  alt="product"
                />
              </Link>
              <p className="sliderProductDescription">
                {store.description.substring(0, 150) + "..."}
              </p>
              <div className="priceButtonContainer">
                <p className="sliderProductPrice">{store.price} kn</p>
                <button className="productSliderButton">
                  <img src={AddtoCart} alt="product" title="Add to cart" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Products;
