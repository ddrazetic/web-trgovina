import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomepageImage from "../Assets/homepageImage.jpg";
import { useStores } from "../Stores/StoresContex";
import { useNavigate } from "react-router-dom";

const Profile = observer(() => {
  const rootStore = useStores();
  let navigate = useNavigate();
  useEffect(() => {
    rootStore.getOrders();
    if (!rootStore.isLoggedIn) {
      navigate("/login");
    }
  }, [rootStore]);

  return (
    <div>
      <div className="profileInfo">
        <p>
          Ime <strong>{rootStore.user.firstName}</strong>
        </p>
        <p>
          Prezime <strong>{rootStore.user.lastName}</strong>
        </p>
        <p>
          Adresa <strong>{rootStore.user.address}</strong>
        </p>
        <p>
          Mail <strong>{rootStore.user.email}</strong>
        </p>
      </div>
      <div className="profileOrders">
        <table className="table table-bordered">
          <caption className="productsTitle">Narudzbe</caption>
          <thead>
            <tr>
              <th>ID</th>
              <th>Ukupno</th>
              <th>Broj proizvoda</th>
              <th>Status</th>
              <th>Artikli</th>
            </tr>
          </thead>
          <tbody>
            {rootStore.orders.map((order, index) => (
              <tr key={index}>
                <td data-label="ID">{order.id}</td>
                <td data-label="Ukupno">{order.totalSum}</td>
                <td data-label="Broj proizvoda">{order.totalQty}</td>
                <td data-label="Status">
                  {order.status ? "Prihvacena" : "U tijeku"}
                </td>
                <td data-label="Artikli">
                  <p className="tableMarginBottom">proizvodi</p>
                  <ol>
                    {order.articles.map((article, index) => (
                      <li className="tableMarginBottom">
                        {article.name.substring(0, 20)}
                        <br></br>
                        {" cijena (" + article.price + " HRK)"} <br></br>{" "}
                        {" kolicina (" + article.quantity + ")"}
                      </li>
                    ))}
                  </ol>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default Profile;
