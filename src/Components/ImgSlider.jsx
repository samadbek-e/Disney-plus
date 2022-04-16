import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{Autoplay,Navigation, Pagination} from 'swiper'
import styled from "styled-components";
import "swiper/swiper.scss";

SwiperCore.use([Autoplay,Navigation, Pagination])

function ImgSlider() {
  let swiperslidestyle = {
    boxShadow: "2px 8px 10px rgba(0,0,0, .8  )",
    height: "100%",
    transform: "translateX(10%)",
  };
  return (
    <div>
      <Swiper
      navigation
      pagination
      className="SwiperImageSlider"
      spaceBetween={20}
      slidesPerView={1.2}
        
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false 
      }}
      
        loop={true}
        scrollbar={{ draggable: true }}
        // onSlideChange={(id) => console.log("slides changes to : " + id.realIndex)}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide style={swiperslidestyle} key={`slide- ${1}`}>
          <CarouselBox BgImage="slider-badag.jpg"></CarouselBox>
        </SwiperSlide>
        <SwiperSlide style={swiperslidestyle}>
          <CarouselBox BgImage="slider-badging.jpg" key={`slide- ${2}`}></CarouselBox>
        </SwiperSlide>
        <SwiperSlide style={swiperslidestyle}>
          <CarouselBox BgImage="slider-scale.jpg" key={`slide- ${3}`}></CarouselBox>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

const CarouselBox = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(/images/${(props) => props.BgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  padding: 4px;
  border-radius: 4px;

  &:hover{
    padding: 0;
    outline: 4px solid rgba(255,255,255, .8);
    transition: 200ms;
    -moz-outline-radius: 4px;
    -webkit-outline-radius: 4px;
    -ms-outline-radius: 4px;
  }
`;
export default ImgSlider;
