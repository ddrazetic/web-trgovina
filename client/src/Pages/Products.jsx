import React, { useLayoutEffect, useEffect } from "react";
import { useStores } from "../Stores/StoresContex";
import { observer } from "mobx-react";
import Cart from "../Assets/shoppingcart1.svg";
import Laptop from "../Assets/laptop.svg";
import Noimage from "../Assets/noimage.png";
import AddtoCart from "../Assets/addtocart.svg";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Products = observer(() => {
  const rootStore = useStores();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    rootStore.getProductsFiltered();
  }, [rootStore, rootStore.rpp]);

  return (
    <div className="productsContainer">
      <h1 className="productsTitle">Proizvodi</h1>
      <div className="blueLine"></div>
      <div className="products">
        {rootStore.productsFiltered.map((store, index) => {
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
                  disabled={!rootStore.isLoggedIn || store.units_available < 1}
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
      <div className="paginationContainer">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={Math.ceil(
            rootStore.numberOfProducts / parseInt(rootStore.rpp)
          )}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={rootStore.handlePageClick}
          containerClassName={"pagination "}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"page-item-active"}
        />
        <select
          className="selectForm"
          value={rootStore.rpp}
          onChange={rootStore.setRpp}
          type="text"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </div>
    </div>
  );
});

export default Products;
