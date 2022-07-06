import React, { useLayoutEffect } from "react";
import { useStores } from "../Stores/StoresContex";
import { observer } from "mobx-react";
import Profile from "../Assets/registration.svg";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";

const Registration = observer(() => {
  const rootStore = useStores();
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
              onSubmit={rootStore.addUser}
              className="login-form"
              // method="post"
            >
              {/* <input type="text" name="username" placeholder="Korisničko ime" /> */}
              <input
                value={rootStore.firstName}
                onChange={rootStore.onChangeFirstName}
                type="text"
                name="firstname"
                placeholder="Ime"
              />
              <input
                value={rootStore.lastName}
                onChange={rootStore.onChangeLastName}
                type="text"
                name="lastname"
                placeholder="Prezime"
              />
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

              <input
                value={rootStore.address}
                onChange={rootStore.onChangeAddress}
                type="text"
                name="address"
                placeholder="Adresa"
              />

              {/* <input type="text" name="adress" placeholder="Adresa" /> */}
              <p>{rootStore.errorR}</p>
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
