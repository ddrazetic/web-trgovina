import React, { useLayoutEffect } from "react";
import { useStores } from "../Stores/StoresContex";
import { observer } from "mobx-react";
import Cart from "../Assets/shoppingcart1.svg";
import { Link } from "react-router-dom";
import UserService from "../Services/UserService";
import { Navigate } from "react-router";
const Login = observer(() => {
  const rootStore = useStores();
  // const user = new UserService();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  if (rootStore.isLoggedIn) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="homeContainer loginContainer">
      <div className="homeText">
        <div className="container">
          <div className="form">
            <form
              onSubmit={rootStore.logUser}
              className="login-form"
              // method="post"
            >
              {/* <input type="text" name="username" placeholder="Korisničko ime" /> */}
              <input
                value={rootStore.email}
                onChange={rootStore.onChangeEmail}
                type="text"
                name="email"
                placeholder="Email"
              />
              <input
                value={rootStore.password}
                onChange={rootStore.onChangePassword}
                type="password"
                name="password"
                placeholder="Lozinka"
              />
              {/* <input type="text" name="adress" placeholder="Adresa" /> */}
              <p>{rootStore.errorR}</p>
              <button type="submit" className="btn">
                Prijavi se
              </button>
            </form>
            {/* <button onClick={rootStore.logoutUser} className="btn">
              odjavi se
            </button>
            <button onClick={rootStore.getUser} className="btn">
              getUser
            </button> */}
            <p className="message">
              Nemate račun? <Link to="/registration"> Registrirajte se!</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="homeImageContainer">
        <img src={Cart} alt="homepage" />
      </div>
    </div>
  );
});

export default Login;
