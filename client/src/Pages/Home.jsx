import React, { useLayoutEffect } from "react";
import HomeBanner from "../Components/HomeBanner";
import { useStores } from "../Stores/StoresContex";
import { observer } from "mobx-react";
import SliderNewProducts from "../Components/SliderNewProducts";
import SliderBestSellingProducts from "../Components/SliderBestSellingProducts";
const Home = observer(() => {
  const rootStore = useStores();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <HomeBanner />
      <SliderNewProducts />
      <SliderBestSellingProducts />
    </div>
  );
});

export default Home;
