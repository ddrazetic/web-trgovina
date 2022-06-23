import React, { useLayoutEffect } from "react";
import { useStores } from "../Stores/StoresContex";
import { observer } from "mobx-react";
import Cart from "../Assets/shoppingcart1.svg";
import { Link } from "react-router-dom";

const Login = observer(() => {
  const rootStore = useStores();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="homeContainer loginContainer">
      <div className="homeText">
        <div className="container">
          <div className="form">
            <form className="login-form">
              <input type="text" name="username" placeholder="Korisničko ime" />
              <input type="text" name="password" placeholder="Lozinka" />
              <button type="submit" className="btn">
                Prijavi se
              </button>
            </form>
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
