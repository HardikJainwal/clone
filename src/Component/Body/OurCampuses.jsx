import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Shakarpur from "../../assets/Shakarpur.jpg";
import shakarpur2 from "../../assets/shakarpur2.jpg";
import MayurVihar from "../../assets/MayurVihar.jpg";
import VivekVihar from "../../assets/VivekVihar.jpg";

const images = [
  {
    src: Shakarpur,
    alt: "Card 1",
    text: "This is Shakarpur Campus",
  },
  {
    src: shakarpur2,
    alt: "Card 2",
    text: "This is Shakarpur 2 Campus",
  },
  {
    src: MayurVihar,
    alt: "Card 3",
    text: "This is Mayur Vihar Campus",
  },
  {
    src: VivekVihar,
    alt: "Card 4",
    text: "This is Vivek Vihar Campus",
  },
];

const CustomArrow = ({ onClick, direction }) => (
  <div
    className={`absolute top-1/2 transform -translate-y-1/2 ${direction === "prev" ? "left-4" : "right-4"} z-10 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer`}
    onClick={onClick}
  >
    {direction === "prev" ? "<" : ">"}
  </div>
);

const CarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    beforeChange: (_, next) => setActiveIndex(next),
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-8 mt-10 font-sans">
        Our Campuses
        <div className="mt-2 mx-auto w-20 h-1 bg-blue-600 rounded"></div>
      </h2>
      <div className="max-w-7xl mx-auto relative">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-6">
              <div
                className={`relative overflow-hidden shadow-lg transition-transform duration-500 ${
                  index === activeIndex
                    ? "transform scale-125 -translate-y-10 z-20 rounded-2xl"
                    : "transform scale-90 rounded-lg"
                }`}
              >
                <div className="relative">
                  {/* Image section with reduced height */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-[300px] object-cover transition-transform duration-500 hover:scale-105 hover:brightness-75 ${
                      index === activeIndex ? "rounded-2xl" : "rounded-lg"
                    }`}
                  />
                </div>
                {/* Text section with stronger white background */}
                <div
                  className={`absolute bottom-0 left-0 bg-white text-black text-sm px-3 py-2 rounded-b-lg transition-opacity duration-300 ${
                    index === activeIndex ? "opacity-100" : "opacity-75"
                  }`}
                  style={{
                    width: "100%",
                    backgroundColor: "rgba(255, 255, 255, 1)", // Strong white background
                  }}
                >
                  <p>{image.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CarouselSection;



    
