import React from 'react'
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from '../../components/AdsBannerSlider';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductsSlider from '../../components/ProductsSlider';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Navigation,Pagination,Autoplay } from "swiper/modules";
import BlogSlider from '../../components/BlogSlider';
import Footer from '../../components/Footer/index';
import HomeBannerV2 from '../../components/homeSliderV2';
import BannerBox from '../../components/BannerBox';
import BannerBoxV2 from '../../components/bannerBoxV2';


const Home = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <> 
    <div>
       <HomeSlider></HomeSlider>
       <HomeCatSlider></HomeCatSlider>
<section className='bg-white py-8'>
  <div className='container'>
<div className='flex items-center justify-between'>
<div className='leftSec'>
  <h2 className='text-[20px] uppercase font-[600]'>Popular Products</h2>
<p className='text-[14px] uppercase font-[400]'>Do not miss the current offers until the end of March.</p>

</div>

<div className='rightSec'>
<Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
       
      >
        <Tab label="Fashion" />
        <Tab label="Electronic" />
        <Tab label="Bags" />
        <Tab label="Footwear" />
        <Tab label="Groceries" />
        <Tab label="Beauty" />
           <Tab label="Wellness" />
              <Tab label="Jewellery" />
      </Tabs>
    </Box>
</div>
  </div>
   
  </div>
 <ProductsSlider items={5}></ProductsSlider>
</section>
 


<section className='py-16 bg-white mt-5'>
<div className=' w-full px-4'>
<div className='freeShipping w-full py-4 p-4 border border-[#5c3a07] flex items-center justify-between'>
  <div className='col1 flex items-center gap-5'>
<LiaShippingFastSolid className='text-5xl' />
<span className='text-[20px] font-[600]'>FREE SHIPPING</span>

  </div>
  <div className='col2'>
<p className='mb-0 font-[500]'>Free Delivery Now On Your First Order and over $200</p>
  </div>
  <div className='col3'>
<p className='font-bold text-[25px] '>-Only $200</p>
  </div>
</div>
   <AdsBannerSlider></AdsBannerSlider>


</div>


</section>



<section className='py-5'>

<div className='lastestProduct bg-white'>
  <h2 className='pt-5 pl-4 text-2xl font-[500]'>Lastest Product</h2>
   <ProductsSlider items={5}></ProductsSlider>
    <section className='py-6'>
    <div className="w-full flex items-center gap-2 px-4 overflow-hidden rounded-md">
      <div className="part1 w-[75%] overflow-hidden rounded-md ">
        <HomeBannerV2></HomeBannerV2>
      </div>
<div className='part2 w-[25%]'>
  <BannerBoxV2></BannerBoxV2>
</div>
    </div>
    </section>  
</div>
</section>


<section className='py-5'>

<div className='lastestProduct bg-white'>
  <h2 className='pt-5 pl-4 text-2xl font-[500]'>Featured Product</h2>
   <ProductsSlider items={5}></ProductsSlider>
   <AdsBannerSlider></AdsBannerSlider>
</div>
</section>


<section className='blogSection bg-white'>
   <h2 className='pt-5 pl-4 text-2xl font-[500]'>From the blog</h2>
  <div className='py-5'>
     <Swiper
      slidesPerView={4}
              spaceBetween={30}
              navigation={true}
               autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            
              modules={[Autoplay,Navigation]}
              className="blogSlider"
            >
  <SwiperSlide>
<BlogSlider></BlogSlider>
  </SwiperSlide>
    <SwiperSlide>
<BlogSlider></BlogSlider>
  </SwiperSlide>
    <SwiperSlide>
<BlogSlider></BlogSlider>
  </SwiperSlide>
    <SwiperSlide>
<BlogSlider></BlogSlider>
  </SwiperSlide>
  <SwiperSlide>
<BlogSlider></BlogSlider>
  </SwiperSlide>  <SwiperSlide>
<BlogSlider></BlogSlider>
  </SwiperSlide>

            </Swiper>

  </div>
</section>




    </div>
    </>
  )
}

export default Home;