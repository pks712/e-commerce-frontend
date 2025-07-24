import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Navigation,Pagination,Autoplay } from "swiper/modules";
import Image1 from "../../assets/1stimage.jpg";
import Image2 from "../../assets/2ndimage.jpg";
import Image3 from "../../assets/3rdimage.jpg";
import Image4 from "../../assets/4thimage.jpg";
import Image5 from "../../assets/5thimage.jpg";

const HomeSlider = () => {
  return (
    <div className="HomeSlider py-4">
      <div className="container">
        <Swiper
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
          className="sliderHome"
        >
          <SwiperSlide>
          <div className="rounded-[20px] overflow-hidden">
              <img src={Image1} />
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="rounded-[20px] overflow-hidden">  <img src={Image2} /></div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="rounded-[20px] overflow-hidden">  <img src={Image3} /></div>
          </SwiperSlide>
          <SwiperSlide>
         <div className="rounded-[20px] overflow-hidden">   <img src={Image4} /></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-[20px] overflow-hidden"><img src={Image5} /></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
