import React from 'react'
import ProductItem from '../ProductItem'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation,Autoplay } from "swiper/modules";
const RelatedProduct = () => {
  return (
    <div>
        <h2 className='text-[30px] mt-5 font-[500]'>Related Products</h2>
        <div className='productsSlider '>
          <Swiper
            slidesPerView={4}
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
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
          </Swiper>
        </div>
    </div>
  )
}

export default RelatedProduct
