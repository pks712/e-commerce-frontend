import React, { useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import img1 from "../../assets/product11.jpg";
import img2 from "../../assets/products1.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

                    
const ProductZoom = () => {
  const [selectedImage, setSelectedImage] = useState(img1);

  return (
   

     
     <div className="flex gap-2 w-full max-w-[1000px] mx-auto  items-start">
  {/* Left: Swiper Thumbnails */}
  <div className="w-[18%] h-[500px] flex flex-col items-center relative ml-4 ">
    <Swiper
      direction="vertical"
      slidesPerView={4}
      spaceBetween={10}
    
    
      className="zoomProductThumb h-[400px] relative "
    >
     <div className='w-full '>
        <SwiperSlide >
          <div  className=" border cursor-pointer rounded-md  overflow-hidden group">
          <img
            src={img1}
           onClick={() => setSelectedImage(img1)}
           className='w-[90px] h-[85px] group-hover:scale-120'
          />
          </div>
        </SwiperSlide>
         <SwiperSlide >
          <div  className=" border cursor-pointer rounded-md  overflow-hidden group ">
          <img
            src={img2}
           onClick={() => setSelectedImage(img2)}
           className='w-[85px] h-[85px]  group-hover:scale-120 '
          />
          </div>
        </SwiperSlide>
         <SwiperSlide >
          <div  className=" border cursor-pointer rounded-md  overflow-hidden group ">
          <img
            src={img2}
           onClick={() => setSelectedImage(img2)}
           className='w-[85px] h-[85px]  group-hover:scale-120 '
          />
          </div>
        </SwiperSlide>
         <SwiperSlide >
          <div  className=" border cursor-pointer rounded-md  overflow-hidden group">
          <img
            src={img2}
           onClick={() => setSelectedImage(img2)}
           className='w-[85px] h-[85px]  group-hover:scale-120 '
          />
          </div>
        </SwiperSlide>
         <SwiperSlide >
          <div  className=" border cursor-pointer rounded-md  overflow-hidden group">
          <img
            src={img2}
           onClick={() => setSelectedImage(img2)}
           className='w-[85px] h-[85px]  group-hover:scale-120 '
          />
          </div>
        </SwiperSlide>
        
       
        
       
        </div>
        
    </Swiper>
  </div>

  {/* Right: Zoomed Image */}
  <div className="w-[82%] h-[420px]  border rounded-md overflow-hidden flex items-center justify-center">
     <Swiper
 
      slidesPerView={1}
      spaceBetween={0}
      navigation={false}
>
<SwiperSlide>
    <InnerImageZoom
      src={selectedImage}

      
      zoomScale={1.5}
      zoomType="hover"
      zoomPreload={true}
      className="w-full h-full object-cover"
    />
</SwiperSlide>
     </Swiper>
  </div>
 
</div>

  );
};

export default ProductZoom;
