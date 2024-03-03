import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">

        <div className="row">
        <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><h1>Slide 1</h1></SwiperSlide>
        <SwiperSlide><h1>Slide 2</h1></SwiperSlide>
        <SwiperSlide><h1>Slide 3</h1></SwiperSlide>
        <SwiperSlide><h1>Slide 4</h1></SwiperSlide>
        <SwiperSlide><h1>Slide 5</h1></SwiperSlide>
      </Swiper>
        </div>
      </div>
    </div>
  );
};
