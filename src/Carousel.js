import React from "react";
import styled from "styled-components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";

SwiperCore.use([Navigation, Pagination]);

const Carousel = () => {
  return (
    <S.Carousel>
      <Swiper
        spaceBetween={50}
        slidesPerView="auto"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
      >
        <SwiperSlide>
          <SlideBlock></SlideBlock>
        </SwiperSlide>

        <SwiperSlide>
          <SlideBlock></SlideBlock>
        </SwiperSlide>

        <SwiperSlide>
          <SlideBlock></SlideBlock>
        </SwiperSlide>

        <SwiperSlide>
          <SlideBlock></SlideBlock>
        </SwiperSlide>

        <SwiperSlide>
          <SlideBlock></SlideBlock>
        </SwiperSlide>

        <SwiperSlide>
          <SlideBlock></SlideBlock>
        </SwiperSlide>
      </Swiper>
    </S.Carousel>
  );
};

export default Carousel;

const SlideBlock = () => {
  return <S.SlideBlock>test</S.SlideBlock>;
};

const S = {};

S.Carousel = styled.div`
  width: 62%;
  margin: 0 auto;

  .swiper-slide {
    width: unset;
  }

  .swiper-container {
    border: 1px solid yellow;
  }

  .swiper-wrapper {
    border: 1px solid red;
    position: relative;
  }

  .swiper-button-next {
    width: 50px;
    height: 50px;
    background-color: red;
    position: absolute;
    right: 0;
    top: 50%;
    z-index: 10;
    transform: translateY(-50%);
  }

  .swiper-button-prev {
    width: 50px;
    height: 50px;
    background-color: green;
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 10;
    transform: translateY(-50%);
  }

  .swiper-button-disabled {
    visibility: hidden;
  }
`;

S.SlideBlock = styled.div`
  width: 384px;
  height: 192px;
  border: 1px solid green;
  background-color: lightskyblue;
`;
