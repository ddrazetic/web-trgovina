import React from "react";
import { useStores } from "../Stores/StoresContex";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import Laptop from "../Assets/laptop.svg";

const Cart = observer(() => {
  const rootStore = useStores();

  return (
    <div className={rootStore.showingCart ? " cart show_cart" : "cart"}>
      <div className="closeCategories" onClick={rootStore.setShowingCart}>
        X
      </div>
      <h2 className="headerList">Košarica</h2>
      <div className="cartInfo">
        <h4 className="cartCount">
          Broj proizvoda: {rootStore.productCountCart}
        </h4>
        <h3 className="cartPrice">Ukupno: {rootStore.productPriceCart} kn</h3>
        <Link className="cartCheckout" to="/checkout">
          Nastavi
        </Link>
      </div>
      <h2 className="cartProductTitle">Proizvodi</h2>

      <ul>
        {rootStore.products.map((store, index) => {
          return (
            <li key={index}>
              <div className="sliderImage">
                <img src={Laptop} alt="product" />
              </div>
              <div className="cartProductInfo">
                <button>X</button>
                <h4 className="cartProductName">{store.name}</h4>
                <span>Količina: </span>
                <input type="number" />
                <p>Dostupno: 5</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Cart;
