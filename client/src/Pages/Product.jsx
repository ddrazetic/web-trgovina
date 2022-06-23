import React, { useEffect, useLayoutEffect } from "react";
import { useStores } from "../Stores/StoresContex";
import { useParams } from "react-router";
import Laptop from "../Assets/laptop.svg";
import { observer } from "mobx-react";
import AddtoCart from "../Assets/addtocart.svg";
import SliderNewProducts from "../Components/SliderNewProducts";

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
          <img src={Laptop} alt="product" />
        </div>
        <div className="productText">
          <h1 className="productName">{rootStore.currentProduct.name}</h1>
          <h2 className="productPrice">
            Cijena: {rootStore.currentProduct.lat} kn
          </h2>
          <p className="productDescription">
            <span>Opis:</span>
            {rootStore.currentProduct.category}
          </p>
          <p className="productCount">
            Dostupno: <strong>{rootStore.currentProduct.lng}</strong>
          </p>
          <button className="productSliderButton productSliderButtonBigger">
            <img src={AddtoCart} alt="product" title="Add to cart" />
          </button>
        </div>
      </div>
      <SliderNewProducts />
    </div>
  );
});

export default Product;
