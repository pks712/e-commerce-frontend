import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation,Autoplay ,Pagination } from 'swiper/modules';

import homsliderimage1 from "../../assets/homsliderv21.jpg"

import homesliderimage2 from "../../assets/homesliderv22.jpg"
import Button from '@mui/material/Button';


const HomeBannerV2 = () => {
  return (
      <>
      <Swiper
     
        spaceBetween={30}
    
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
          autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation,Autoplay, Pagination]}
        className="homeSliderv2"
      >
        <SwiperSlide>
         <div className="relative">
  <img src={homsliderimage1} />
  <div className="info absolute top-3 -right-[100%] w-[50%] z-50 p-8 flex items-center justify-center flex-col duration-800 transition-all">
    <h4 className='text-[18px] font-[400] w-full mb-1 relative -right-[100%] opacity-0 transition-all '>Big Saving days sale</h4>
    <h1 className='text-[35px] font-[700] relative -right-[100%] opacity-0 transition-all '> Buy New Trend Women Black Cotton <br /> Blend Top | top for <br/> women | women top...</h1>
    <h3 className='text-[18px] font-[400] flex items-center gap-3 w-full mt-2 mb-3 relative -right-[100%] opacity-0 transition-all '>Starting At Only<span className='text-[#ff5252] text-[30px] font-[700]'>$59.00</span> </h3>
<div className='w-full relative  -right-[100%] opacity-0 transition-all shop-button'>
     <Button className='!bg-[#ff5252] !text-white'>
    SHOP NOW
 </Button>
</div>
  </div>
</div>

        </SwiperSlide>
             <SwiperSlide>
                <div className="relative">
          <img src={homesliderimage2 }/>
           <div className="info absolute top-18 -right-[100%] w-[50%] z-50 p-8 flex items-center justify-center flex-col  duration-800 transition-all">
    <h4 className='text-[18px] font-[400] w-full mb-1 relative -right-[100%] opacity-0 transition-all'>Big Saving days sale</h4>
    <h1 className='text-[35px] font-[700] relative -right-[100%] opacity-0 transition-all'> Apple iPhone 13 128 GB, Pink</h1>
    <h3 className='text-[18px] font-[400] flex items-center gap-3 w-full mt-2 mb-3 relative -right-[100%] opacity-0 transition-all'>Starting At Only<span className='text-[#ff5252] text-[30px] font-[700]'>$59.00</span> </h3>
<div className='w-full relative -right-[100%] opacity-0 transition-all shop-button'>
     <Button className='!bg-[#ff5252] !text-white'>
    SHOP NOW
 </Button>
</div>
  </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  )
}

export default HomeBannerV2;