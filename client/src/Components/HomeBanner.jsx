import { observer } from "mobx-react";
import React from "react";
import HomepageImage from "../Assets/homepageImage.jpg";
import { useStores } from "../Stores/StoresContex";

const HomeBanner = observer(() => {
  const rootStore = useStores();

  return (
    <div className="homeContainer">
      <div className="homeText">
        <h1>Sigurna i pouzdana kupovina</h1>
        <h3>Vaša Trgovina.net</h3>
        <div className="showCategories" onClick={rootStore.setShowingList}>
          Prikaži kategorije
        </div>
      </div>
      <div className="homeImageContainer">
        <img src={HomepageImage} alt="homepage" />
      </div>
    </div>
  );
});

export default HomeBanner;
