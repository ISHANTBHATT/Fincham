import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { members } from "./data";
import MemberCard from "./MemberCard";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="hidden sm:inline-flex absolute top-1/2 -left-6 transform -translate-y-1/2 z-[1] focus:outline-none  items-center px-6 py-6 border backdrop-blur-md bg-lightOverlay rounded-full font-semibold text-black"
      onClick={onClick}
    >
      <span className="absolute inset-y-0 left-4 flex items-center">&lt;</span>
    </button>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button
      className="hidden sm:inline-flex absolute top-1/2 right-0 transform -translate-y-1/2 z-[1] focus:outline-none items-center px-6 py-6 border backdrop-blur-md bg-lightOverlay rounded-full font-semibold text-black"
      onClick={onClick}
    >
      <span className="absolute inset-y-0 right-5 flex items-center ">
        &gt;
      </span>
    </button>
  );
};

function AutoPlayMethods() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="px-10 text-textcolor bg-[#f5f3f3] py-4 md:py-20">
      <div className="pb-4 md:pb-10 flex items-center justify-between">
        <h1 className="text-2xl md:text-4xl  font-bold relative before:absolute before:rounded-lg before:content before:w-32 sm:before:w-44 before:h-1 before:-bottom-2 before:left-1/5 before:bg-gradient-to-tr from-blue-400 to-blue-600 transition-all ease-in-out duration-100">
          Members
        </h1>
        <button className="">
          <a href="members" className="flex items-center gap-2">
            {" "}
            See more
            <span>
              <ArrowLongRightIcon className="h-4 w-4" />
            </span>{" "}
          </a>
        </button>
      </div>
      <Slider {...settings} className="my-10">
        {members.map((e) => (
          <MemberCard key={e.id} name={e.name} img={e.img} link={e.link} />
        ))}
      </Slider>
      {/* <MemberCard /> */}
    </div>
  );
}
export default AutoPlayMethods;
