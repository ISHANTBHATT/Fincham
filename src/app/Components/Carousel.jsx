import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeContainer from "./HomeContainer";
import {carouselData} from "./data"
// import './carousel.css';
import HomeCard from "./HomeCard";
const PrevArrow = ({ onClick }) => {
    return (
  <button className="hidden sm:inline-flex absolute top-1/2 left-0 transform -translate-y-1/2 z-[1] focus:outline-none  items-center px-6 py-6 border  backdrop-blur-md bg-lightOverlay rounded-full font-semibold text-white hover:text-black hover:bg-white" onClick={onClick}>
    <span className="absolute inset-y-0 left-4 flex items-center">
      &lt;
    </span>
  </button>
    );
  };
  
  const NextArrow = ({ onClick }) => {
    return (
  
      <button className="hidden sm:inline-flex absolute top-1/2 right-0 transform -translate-y-1/2 z-[1] focus:outline-none items-center px-6 py-6 border backdrop-blur-md bg-lightOverlay rounded-full font-semibold text-white hover:text-black hover:bg-white" onClick={onClick}>
      <span className="absolute inset-y-0 right-5 flex items-center ">
        &gt;
      </span>
    </button>
    );
  }
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
    nextArrow: <NextArrow   />

  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="w-full h-full">
        {/* {carouselData.map((data)=>(
            <HomeContainer id={data.id} title={data.title} img={data.img} btn={data.button} color={data.color}/>
        ))} */}
         {carouselData.map((data)=>(
           <HomeCard key={data.id} title={data.title} img={data.img} btn={data.button} color={data.color}/>
       ))

        }
      </Slider>
    </div>
  );
}

export default LazyLoad;

// import React, { useState, useEffect, useRef } from "react";
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import HomeCard from "./HomeCard";
// import {carouselData} from "./data"
// import SmallCard from "./SmallCard";
// import './carousel.css';

// function AsNavFor() {
//   const [nav1, setNav1] = useState(null);
//   const [nav2, setNav2] = useState(null);
//   let sliderRef1 = useRef(null);
//   let sliderRef2 = useRef(null);

//   useEffect(() => {
//     setNav1(sliderRef1);
//     setNav2(sliderRef2);
//   }, []);
//   return (
//     <div className="slider-container ">
//       <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} className="">
//           {carouselData.map((data)=>(
//             <HomeCard id={data.id} title={data.title} img={data.img} btn={data.button} color={data.color}/>
//             ))}
//       </Slider>
//       <Slider
//         asNavFor={nav1}
//         ref={slider => (sliderRef2 = slider)}
//         slidesToShow={3}
//         swipeToSlide={true}
//         focusOnSelect={true}
//         className=" pl-[800px]"
//       >
//           {carouselData.map((data)=>(
//             <SmallCard img={data.img} />
//             ))}
//       </Slider>
//     </div>
//   );
// }

// export default AsNavFor;

// import React, { useState, useEffect, useRef } from "react";
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import HomeCard from "./HomeCard";
// import { carouselData } from "./data";
// import SmallCard from "./SmallCard";
// import './carousel.css'; 
// const PrevArrow = ({ onClick }) => {
//     return (
//   <button className="hidden  absolute top-1/2 left-0 transform -translate-y-1/2 z-[1] focus:outline-none  items-center px-6 py-6 border  backdrop-blur-md bg-lightOverlay rounded-full font-semibold text-white hover:text-black hover:bg-white" onClick={onClick}>
//     <span className="absolute inset-y-0 left-4 flex items-center">
//       &lt;
//     </span>
//   </button>
//     );
//   };
  
//   const NextArrow = ({ onClick }) => {
//     return (
  
//       <button className="hidden  absolute top-1/2 right-0 transform -translate-y-1/2 z-[1] focus:outline-none items-center px-6 py-6 border backdrop-blur-md bg-lightOverlay rounded-full font-semibold text-white hover:text-black hover:bg-white" onClick={onClick}>
//       <span className="absolute inset-y-0 right-5 flex items-center ">
//         &gt;
//       </span>
//     </button>
//     );
//   }
// function AsNavFor() {
//   const settings = {
//         infinite: true,
//     speed: 1000,
//         autoplay: true,
//     autoplaySpeed: 8000,
//             prevArrow: <PrevArrow />,
//             nextArrow: <NextArrow   />
//   }

//   const [nav1, setNav1] = useState(null);
//   const [nav2, setNav2] = useState(null);
//   let sliderRef1 = useRef(null);
//   let sliderRef2 = useRef(null);

//   useEffect(() => {
//     console.log(sliderRef1);
//     setNav1(sliderRef1);
//     setNav2(sliderRef2);
//   }, []);

//   return (
//     <div className="slider-container">
//       <div className="slider-wrapper">
//         <Slider {...settings} 
//         asNavFor={nav2} 
//         ref={slider => {(sliderRef1 = slider); console.log(slider)}} className="main-slider">
//           {carouselData.map((data) => (
//             <HomeCard key={data.id} id={data.id} title={data.title} img={data.img} btn={data.button} color={data.color} />
//           ))}
//         </Slider>
//         <Slider
//           {...settings}
//           asNavFor={nav1}
//           ref={slider => (sliderRef2 = slider)}
//           slidesToShow={1}
//           // initialSlide={2}
//           swipeToSlide={true}
//           focusOnSelect={true}
//           className="nav-slider "
//         >
//           {carouselData.map((data) => (
//             <SmallCard key={data.id} img={data.img} heading={data.heading} />
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default AsNavFor;
