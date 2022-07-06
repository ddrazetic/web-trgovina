import { observer } from "mobx-react";
import React from "react";
import { useStores } from "../Stores/StoresContex";
import Search from "../Assets/search.svg";
import Login from "../Assets/login.svg";
import Logout from "../Assets/logout.svg";
import Registration from "../Assets/registration.svg";
import ShoppingCart1 from "../Assets/shoppingcart1.svg";
import Profile from "../Assets/profile.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = observer(() => {
  const rootStore = useStores();
  let navigate = useNavigate();

  return (
    <nav>
      <div className="widthConteiner">
        <div className="titleMenu">
          <Link to="/" className="navTitle">
            Trgovina.net
          </Link>
          <div className="menu" onClick={rootStore.toggleHamburger}>
            <div
              className={`bar  ${rootStore.isOpenHamburger ? "animate" : ""}`}
            ></div>
          </div>
        </div>
        <>
          <form
            className={`navSearch  ${
              rootStore.isOpenHamburger ? "navSearchActive" : ""
            }`}
          >
            <input
              type="text"
              className="navSearchInput"
              placeholder="Naziv proizvoda"
            ></input>
            <button className="navSearchButton">
              <img src={Search} className="navSearchImage" alt="search" />
            </button>
          </form>
          {rootStore.isLoggedIn ? (
            <div
              className={`navFloatRight  ${
                rootStore.isOpenHamburger ? "navFloatRightActive" : ""
              }`}
            >
              <p className="productcountcart"> {rootStore.orderQuantity}</p>
              <button
                onClick={rootStore.setShowingCart}
                className="navCart navSearchButton"
              >
                <img
                  src={ShoppingCart1}
                  title="Vaša košarica"
                  className="navSearchImage"
                  alt="search"
                />
              </button>
              <button
                type="button"
                className="navProfile navSearchButton"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/profile");
                }}
              >
                <img
                  src={Profile}
                  title="Vaš profil"
                  className="navSearchImage"
                  alt="search"
                />
              </button>

              <button
                onClick={rootStore.logoutUser}
                className="navLogOut  navSearchButton"
              >
                <img
                  src={Logout}
                  title="Odjavi se"
                  className="navSearchImage"
                  alt="search"
                />
              </button>
            </div>
          ) : (
            <div
              className={`navFloatRight  ${
                rootStore.isOpenHamburger ? "navFloatRightActive" : ""
              }`}
            >
              {" "}
              <div className="navSearchButton navLogIn">
                <Link to="/login" className="navLogIn navSearchButton">
                  <img
                    src={Login}
                    title="Prijavi se"
                    className="navSearchImage"
                    alt="search"
                  />
                </Link>
              </div>
            </div>
          )}
        </>
        {/* <form className="navSearch">
          <input
            type="text"
            className="navSearchInput"
            placeholder="Naziv proizvoda"
          ></input>
          <button className="navSearchButton">
            <img src={Search} className="navSearchImage" alt="search" />
          </button>
        </form>

        {rootStore.isLoggedIn ? (
          <div className="navFloatRight">
            <button className="navCart navSearchButton">
              <img
                src={ShoppingCart1}
                className="navSearchImage"
                alt="search"
              />
            </button>
            <button className="navLogOut navSearchButton">
              <img src={Logout} className="navSearchImage" alt="search" />
            </button>
          </div>
        ) : (
          <div className="navFloatRight">
            <button className="navLogIn navSearchButton">
              {" "}
              <img src={Login} className="navSearchImage" alt="search" />
            </button>
            <button className="navRegister navSearchButton">
              {" "}
              <img src={Registration} className="navSearchImage" alt="search" />
            </button>
          </div>
        )} */}
      </div>
    </nav>
  );
});

export default Header;
