import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "./imagesc/img1.png";
import image2 from "./imagesc/img2.png";
import image3 from "./imagesc/img3.png";
import image4 from "./imagesc/img4.png";
import image5 from "./imagesc/img5.png";
import image6 from "./imagesc/img6.png";
import image7 from "./imagesc/img7.png";
import image8 from "./imagesc/img8.png";
import image9 from "./imagesc/img9.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Swiper.css";

// import required modules
import { Pagination } from "swiper";

export default function Carswiper() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div><img src={image1} alt="google" /> Google</div></SwiperSlide>
        <SwiperSlide><div><img src={image2} alt="microsoft" /> Microsoft</div></SwiperSlide>
        <SwiperSlide><div><img src={image3} alt="kalvium" /> Kalvium</div></SwiperSlide>
        <SwiperSlide><div><img src={image4} alt="netflix" /> Netflix</div></SwiperSlide>
        <SwiperSlide><div><img src={image5} alt="facebook" /> Facebook</div></SwiperSlide>
        <SwiperSlide><div><img src={image6} alt="ola" /> Ola</div></SwiperSlide>
        <SwiperSlide><div><img src={image7} alt="phonepe" /> PhonePe</div></SwiperSlide>
        <SwiperSlide><div><img src={image8} alt="linkedin" /> LinkedIn</div></SwiperSlide>
        <SwiperSlide><div><img src={image9} alt="snap" /> Snapchat</div></SwiperSlide>
      </Swiper>
    </>
  );
}