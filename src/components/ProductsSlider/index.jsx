import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation,Autoplay } from "swiper/modules";
import ProductItem from '../ProductItem';







const ProductsSlider = (props) => {
  return (
<div className='productsSlider py-5'>

    <Swiper
            slidesPerView={props.items}
            spaceBetween={10}
            navigation ={true}
             autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
             
              
                modules={[Autoplay ,Navigation]}
            className="homeCatSlider"
          >
           <SwiperSlide>
      <ProductItem></ProductItem>
    </SwiperSlide>
              <SwiperSlide>
      <ProductItem></ProductItem>
    </SwiperSlide>
        <SwiperSlide>
      <ProductItem></ProductItem>
    </SwiperSlide>
        <SwiperSlide>
      <ProductItem></ProductItem>
    </SwiperSlide>
        <SwiperSlide>
      <ProductItem></ProductItem>
    </SwiperSlide>
        <SwiperSlide>
      <ProductItem></ProductItem>
    </SwiperSlide>

        <SwiperSlide>
      <ProductItem></ProductItem>
    </SwiperSlide>    <SwiperSlide>
      <ProductItem></ProductItem>
    </SwiperSlide>
        <SwiperSlide>
      <ProductItem></ProductItem>
    </SwiperSlide>
        <SwiperSlide>
      <ProductItem></ProductItem>
    </SwiperSlide>

        <SwiperSlide>
      <ProductItem></ProductItem>
    </SwiperSlide>
      
          
          </Swiper>
 
</div>

  )
}

export default ProductsSlider