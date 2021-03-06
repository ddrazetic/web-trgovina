import React, { useEffect, useLayoutEffect } from "react";
import { useStores } from "../Stores/StoresContex";
import { useParams } from "react-router";
import Laptop from "../Assets/laptop.svg";
import { observer } from "mobx-react";
import AddtoCart from "../Assets/addtocart.svg";
import SliderNewProducts from "../Components/SliderNewProducts";
import Noimage from "../Assets/noimage.png";

const Product = observer(() => {
  const rootStore = useStores();
  const { id } = useParams();
  useEffect(() => {
    rootStore.findProduct(id);
  }, [id, rootStore]);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <div className="productContainer">
        <div className="productImage">
          <img
            src={
              rootStore.currentProduct.img_url
                ? rootStore.currentProduct.img_url
                : Noimage
            }
            alt="product"
          />
        </div>
        <div className="productText">
          <h1 className="productName">{rootStore.currentProduct.name}</h1>
          <h2 className="productPrice">
            Cijena: {rootStore.currentProduct.price} kn
          </h2>
          <p className="productDescription">
            <span>Opis:</span>
            {rootStore.currentProduct.description}
          </p>
          <p className="productCount">
            Dostupno:{" "}
            <strong>{rootStore.currentProduct.units_available}</strong>
          </p>

          <button
            disabled={
              !rootStore.isLoggedIn ||
              rootStore.currentProduct.units_available < 1
            }
            onClick={
              (e) => rootStore.addToOrder(e, rootStore.currentProduct)
              // rootStore.addToOrder(e, store.id, store.name, store.price)
            }
            className={
              "productSliderButton productSliderButtonBigger " +
              (!rootStore.isLoggedIn ? "disabledButton" : "") +
              (rootStore.currentProduct.units_available < 1
                ? "disabledButton"
                : "")
            }
          >
            <img src={AddtoCart} alt="product" title="Add to cart" />
          </button>
        </div>
      </div>
      {/* <h3 className="specs-title">Specifikacije:</h3> */}
      {/* <ul className="specs">
        {rootStore.currentProduct.specs &&
          rootStore.currentProduct.specs.map((store, index) => {
            return <li key={index}>{store}</li>;
          })}
      </ul> */}
      <SliderNewProducts />
    </div>
  );
});

export default Product;
