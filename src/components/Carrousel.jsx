import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 500,
    cssEase: "linear"
  };

  return (
    <div style={{width: "100%"}}>
      <Slider {...settings}>
        <div>
            <img src={"https://kurogami.com/min/img/anuncios/banner-destacados-jump_21.webp"} style={{height:500, width:"100%", objectFit:"cover"}} alt={"Sin imagen"}/> 
        </div>
        <div>
        <img src={"https://kurogami.com/min/img/anuncios/naruto-mascaras-20-aniversario-banner-web.webp"} style={{height:500, width:"100%", objectFit:"cover"}} alt={"Sin imagen"}/>
        </div>
        <div>
        <img src={"https://kurogami.com/min/img/anuncios/dia-del-padre-2023-banner-web.webp"} style={{height:500, width:"100%", objectFit:"cover"}} alt={"Sin imagen"}/>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
