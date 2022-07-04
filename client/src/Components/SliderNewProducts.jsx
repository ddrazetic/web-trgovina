import React, { useEffect } from "react";
import { useStores } from "../Stores/StoresContex";
import { observer } from "mobx-react";
import Slider from "react-slick";
import Laptop from "../Assets/laptop.svg";
import AddtoCart from "../Assets/addtocart.svg";
import { Link } from "react-router-dom";
import Noimage from "../Assets/noimage.png";

const SliderNewProducts = observer(() => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const rootStore = useStores();
  useEffect(() => {
    rootStore.getNewestProducts();
  }, [rootStore]);
  return (
    <div className="containerSlider">
      <div className="blueLine"></div>
      <h2 className="sliderTitle"> Najnoviji proizvodi </h2>
      <Slider {...settings}>
        {rootStore.newestProducts.map((store, index) => {
          return (
            <div className="sliderProductContainer" key={index}>
              <h3 className="sliderProductName">
                {store.name.substring(0, 20)}
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
              <div className="priceButtonContainer">
                <p className="sliderProductPrice">{store.price} kn</p>
                <button className="productSliderButton">
                  <img src={AddtoCart} alt="product" title="Add to cart" />
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
});

export default SliderNewProducts;
