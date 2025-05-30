import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";

import slide2 from '../../img/thang_02_man_hinh_ld_pc.webp';
import slide1 from '../../img/1920x420_acer_t1_25_2048x2048.webp';
import slider3 from '../../img/thang_03_laptop_gamingld_pc.webp';
import slider4 from '../../img/banner_web_collection_1920x420_9acd98de5bfb4239a72ae368fd3f797f.webp';

const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="slider-container w-full m-auto relative rounded-b-lg ">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <SwiperSlide>
          <div className="p-3 border-0 border-solid border-gray-300 rounded-lg overflow-hidden aspect-ratio-container">
            <img src={slide1} alt="Slide 1" className="w-full h-64 object-cover rounded-lg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-3 border-0 border-solid border-gray-300 rounded-lg overflow-hidden aspect-ratio-container">
            <img src={slide2} alt="Slide 2" className="w-full h-64 object-cover rounded-lg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-3 border-0 border-solid border-gray-300 rounded-lg overflow-hidden aspect-ratio-container">
            <img src={slider3} alt="Slide 3" className="w-full h-64 object-contain rounded-lg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-3 border-0 border-solid border-gray-300 rounded-lg overflow-hidden aspect-ratio-container">
            <img src={slider4} alt="Slide 4" className="w-full h-64 object-contain rounded-lg" />
          </div>
        </SwiperSlide>
      </Swiper>
      
      {/* Navigation Buttons */}
      <button 
        ref={prevRef}
        className="absolute top-1/2 left-4 z-10 bg-white bg-opacity-70 rounded-full p-2 shadow-md transform -translate-y-1/2 hover:bg-opacity-100 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        ref={nextRef}
        className="absolute top-1/2 right-4 z-10 bg-white bg-opacity-70 rounded-full p-2 shadow-md transform -translate-y-1/2 hover:bg-opacity-100 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Slider;