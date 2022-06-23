import React, { useLayoutEffect } from "react";
import { useStores } from "../Stores/StoresContex";
import { observer } from "mobx-react";
import Profile from "../Assets/registration.svg";
import { Link } from "react-router-dom";

const Registration = observer(() => {
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
              <input type="text" name="mail" placeholder="Email" />
              <input type="text" name="adress" placeholder="Adresa" />
              <button type="submit" className="btn">
                Registriraj se
              </button>
            </form>
            <p className="message">
              Imate račun? <Link to="/login"> Prijavite se!</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="homeImageContainer">
        <img src={Profile} alt="homepage" />
      </div>
    </div>
  );
});

export default Registration;
