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
        <h4 className="cartCount">Broj proizvoda: {rootStore.orderQuantity}</h4>
        <h3 className="cartPrice">Ukupno: {rootStore.orderCost} kn</h3>
        <button className="cartCheckout" onClick={rootStore.addOrder}>
          Naruči
        </button>
      </div>
      <h2 className="cartProductTitle">Proizvodi</h2>

      <ul>
        {rootStore.order &&
          rootStore.order.map((store, index) => {
            return (
              <li key={index}>
                <div className="sliderImage">
                  <img src={Laptop} alt="product" />
                </div>
                <div className="cartProductInfo">
                  <button>X</button>
                  <h4 className="cartProductName">
                    {store.name.substring(0, 18)}
                  </h4>
                  <span>Količina: </span>
                  <input
                    type="number"
                    min={1}
                    max={store.units_available}
                    value={store.quantity}
                    onChange={(e) => {
                      store.quantity = e.target.value
                        ? Math.max(
                            1,
                            Math.min(
                              store.units_available,
                              parseInt(e.target.value)
                            )
                          )
                        : 1;
                      rootStore.setOrderTotal();
                    }}
                  />
                  <p>{store.quantity}</p>
                  <p>
                    Dostupno: <span>{store.units_available}</span>
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
});

export default Cart;
