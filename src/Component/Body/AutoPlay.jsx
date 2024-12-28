import React from "react";
import Slider from "react-slick";
import img1 from '../../assets/pic1.jpg'
import img2 from '../../assets/pic2.jpg'
import img3 from '../../assets/pic3.jpg'
import img4 from '../../assets/pic4.jpg'
import img5 from '../../assets/Pic5.jpg'
import img6 from '../../assets/Pic6.jpg'
function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className="h-80 w-[44rem]" src={img1} alt="pic1" />
        </div>
        <div>
          <img className="h-80 w-[44rem]" src={img2} alt="pic1" />
        </div>
        <div>
          <img className="h-80 w-[44rem]" src={img3} alt="pic1" />
        </div>
        <div>
          <img className="h-80 w-[44rem]" src={img4} alt="pic1" />
        </div>
        <div>
          <img className="h-80 w-[44rem]" src={img5} alt="pic1" />
        </div>
        <div>
          <img className="h-80 w-[44rem]" src={img6} alt="pic1" />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
