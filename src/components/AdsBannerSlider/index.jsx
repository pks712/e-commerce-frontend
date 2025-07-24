import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Navigation,Pagination,Autoplay } from "swiper/modules";
import AdImage1 from "../../assets/banner1.jpg";
import AdImage2 from "../../assets/banner2.jpg";
import AdImage3 from "../../assets/banner3.jpg";
import AdImage4 from "../../assets/banner4.jpg";
import BannerBox from '../BannerBox';

const AdsBannerSlider = () => {
  return (
     <div className="w-full py-10 pb-0">
      <div className="">
        <Swiper
        slidesPerView={3}
          spaceBetween={10}
          navigation={true}
           autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
         pagination={{
          clickable: true,
        }}
          modules={[Autoplay  ,Pagination,Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
          
      <BannerBox img ={AdImage2} /> 
        
          </SwiperSlide>
             <SwiperSlide>
          
      <BannerBox img ={AdImage3} /> 
        
          </SwiperSlide>
             <SwiperSlide>
          <BannerBox img ={AdImage4} /> 
        
          </SwiperSlide>
             <SwiperSlide>
          
     <BannerBox img ={AdImage2} /> 
        
          </SwiperSlide>
            
             
        </Swiper>
      </div>
    </div>
  )
}

export default AdsBannerSlider