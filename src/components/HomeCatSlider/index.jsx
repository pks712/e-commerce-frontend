import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import FImage from "../../assets/fashion.png";
import EImage from "../../assets/electronic.png";
import BImage from "../../assets/bags.png";
import FoImage from "../../assets/footwaer.png";
import GImage from "../../assets/go.png";
import BuImage from "../../assets/butuy.png";
import WImage from "../../assets/wellness.png";
import JImage from "../../assets/J.png";

import 'swiper/css';
import "swiper/css/navigation";
import { Navigation,Autoplay } from "swiper/modules";
const HomeCatSlider = () => {
  return (
    <>
    <div className='py-8'>
<div className='w-full px-4  mx-auto'>

 <Swiper
        slidesPerView={6}
        spaceBetween={-150}
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
         
          navigation={true}
            modules={[Autoplay ,Navigation]}
        className="homeCatSlider"
      >
       <SwiperSlide>
  <div className="item cursor-pointer bg-white w-[150px] h-40 flex flex-col items-center justify-center">
    <img className=" mb-2 w-[80px] h-[80px]" src={FImage} />
    <h3 className="text-center font-medium">FASHION</h3>
  </div>
</SwiperSlide>

       <SwiperSlide>
                 <div className=" item cursor-pointer bg-white w-[150px] h-40 flex flex-col items-center justify-center">
                     <img className="mb-2 w-[80px] h-[80px]" src ={EImage}  />
                       <h3 className="text-center font-medium">ELECTRONICS</h3>
                 </div>
                 </SwiperSlide>
       <SwiperSlide>
                 <div className="item cursor-pointer bg-white w-[150px] h-40 flex flex-col items-center justify-center">
                    <img className="mb-2 w-[80px] h-[80px]" src ={BImage}  /> 
                      <h3 className="text-center font-medium">BAGS</h3>
                 </div>
                 </SwiperSlide>
<SwiperSlide>
          <div className="item cursor-pointer bg-white w-[150px] h-40 flex flex-col items-center justify-center">
               <img className="mb-2 w-[80px] h-[80px]" src ={FoImage}  />
                 <h3 className="text-center font-medium">FOOTWEAR</h3>
          </div>
          </SwiperSlide>
      <SwiperSlide>
                <div className="item cursor-pointer bg-white w-[150px] h-40 flex flex-col items-center justify-center">
                    <img  className="mb-2 w-[80px] h-[80px]" src ={GImage}  />
                      <h3 className="text-center font-medium">GROCERIES</h3>
                </div>
                </SwiperSlide>
<SwiperSlide>
          <div className="item cursor-pointer bg-white w-[150px] h-40 flex flex-col items-center justify-center">
            <img className="mb-2 w-[80px] h-[80px]" src ={BuImage}  />
              <h3 className="text-center font-medium">BEAUTY</h3>
          </div>
          </SwiperSlide>
      <SwiperSlide>
                <div className="item cursor-pointer bg-white w-[150px] h-40 flex flex-col items-center justify-center">
                   <img className="mb-2 w-[80px] h-[80px]" src ={WImage}  />
                     <h3 className="text-center font-medium">WELLNESS</h3>
                </div>
                </SwiperSlide>
       <SwiperSlide>
                 <div className="item cursor-pointer bg-white w-[150px] h-40 flex flex-col items-center justify-center">
                    <img className="mb-2 w-[80px] h-[80px]" src ={JImage}  />
                      <h3  className="text-center font-medium">JEWELIERY</h3>
                 </div>
                 </SwiperSlide>
      
      </Swiper>

</div>
    </div>
    </>
  )
}

export default HomeCatSlider