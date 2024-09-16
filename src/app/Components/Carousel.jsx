import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData } from "./data";
import HomeCard from "./HomeCard";
const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="hidden sm:inline-flex absolute top-1/2 left-0 transform -translate-y-1/2 z-[1] focus:outline-none  items-center px-6 py-6 border  backdrop-blur-md bg-lightOverlay rounded-full font-semibold text-white hover:text-black hover:bg-white"
      onClick={onClick}
    >
      <span className="absolute inset-y-0 left-4 flex items-center">&lt;</span>
    </button>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button
      className="hidden sm:inline-flex absolute top-1/2 right-0 transform -translate-y-1/2 z-[1] focus:outline-none items-center px-6 py-6 border backdrop-blur-md bg-lightOverlay rounded-full font-semibold text-white hover:text-black hover:bg-white"
      onClick={onClick}
    >
      <span className="absolute inset-y-0 right-5 flex items-center ">
        &gt;
      </span>
    </button>
  );
};
function LazyLoad() {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 3,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 8000,
    // cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    // fade:true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="w-full h-full">
        {carouselData.map((data) => (
          <HomeCard
            key={data.id}
            title={data.title}
            img={data.img}
            btn={data.button}
            color={data.color}
            link={data.href}
          />
        ))}
      </Slider>
    </div>
  );
}

export default LazyLoad;
