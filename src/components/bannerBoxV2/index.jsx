import React from 'react'
import homeSliderimage3 from "../../assets/Adimage2.jpg"
import homeSliderimage4 from "../../assets/Adimage3.jpg"
import { Link } from 'react-router-dom'
const BannerBoxV2 = () => {
  return (
    <>
        <div className='overflow-hidden rounded-md w-full flex flex-col items-center justify-between gap-2'>
<div className='group overflow-hidden rounded-md relative'>
    <img className="w-full h-56 group-hover:scale-105" src={homeSliderimage4}></img>
<div className='info absolute right-5 top-0 mt-8 flex flex-col'>
<h2 className='text-[20px] font-[600]'>Buy Men's <br/> Footwear with <br/> low price</h2>
<span className='text-[#ff5252] text-[20px] font-[600] mt-4'>₹1500</span>
<Link to="/" className='link mt-2 underline'>SHOP NOW</Link>
</div>

</div>
<div className='group relative overflow-hidden rounded-md'>
    <img className="w-full h-56  group-hover:scale-105" src={homeSliderimage3}></img>
    <div className='info absolute left-6 top-0 mt-15 flex flex-col'>
<h2 className='text-[20px] font-[600]'>Buy Apple Iphone</h2>
<span className='text-[#ff5252] text-[20px] font-[600] mt-4'>₹1500</span>
<Link to="/" className='link mt-2 underline'>SHOP NOW</Link>
</div>
</div>
</div>
</>
  )
}

export default BannerBoxV2