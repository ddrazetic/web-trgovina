import React, { useLayoutEffect, useEffect } from "react";
import { useStores } from "../Stores/StoresContex";
import { observer } from "mobx-react";
import Cart from "../Assets/shoppingcart1.svg";
import Laptop from "../Assets/laptop.svg";
import Noimage from "../Assets/noimage.png";
import AddtoCart from "../Assets/addtocart.svg";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const ProductsByCategory = observer(() => {
  const rootStore = useStores();
  const { id } = useParams();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    rootStore.setCurrentCategoryId(id);
  });
  useEffect(() => {
    rootStore.getProducts();
    rootStore.getProductsByCategory(id);
    console.log(id);
  }, [rootStore, id]);

  return (
    <div className="productsContainer">
      <h1 className="productsTitle">
        Kategorija: <strong>{rootStore.categoryName}</strong>{" "}
      </h1>
      <div className="blueLine"></div>
      <div className="products">
        {rootStore.productsByCategory &&
          rootStore.productsByCategory.map((store, index) => {
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
                {store.units_available < 1 && (
                  <p>
                    <strong>Trenutno nema u ponudi!</strong>
                  </p>
                )}
                <div className="priceButtonContainer">
                  <p className="sliderProductPrice">{store.price} kn</p>
                  <button
                    disabled={
                      !rootStore.isLoggedIn || store.units_available < 1
                    }
                    onClick={
                      (e) => rootStore.addToOrder(e, store)
                      // rootStore.addToOrder(e, store.id, store.name, store.price)
                    }
                    className={
                      "productSliderButton " +
                      (!rootStore.isLoggedIn ? "disabledButton" : "") +
                      (store.units_available < 1 ? "disabledButton" : "")
                    }
                  >
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

export default ProductsByCategory;
