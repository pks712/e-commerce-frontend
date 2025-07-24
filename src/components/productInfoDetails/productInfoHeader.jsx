import React from 'react'
import Rating from '@mui/material/Rating';
const ProductInfoHeader = () => {
  return (
  
<div className='flex flex-col'>
  <h2 className='text-2xl font-[600] text-gray-700 '>Men Layerr Regular Fit Spread Collar Cotton Shirt</h2>
<div className='flex items-center gap-4 mt-2'>
 <div className='flex items-center gap-2'>
    <span className='text-gray-500 font-[300] text-[15px]'>Brands :</span>
  <span className='text-gray-600 font-[500] text-[15px]'>RARE RABBIT</span>
    </div> 
    <div className="review flex items-center gap-2">
   <Rating name="half-rating" defaultValue={2.5} precision={0.5} className='!text-[18px]' readOnly/>
   <p className='text-gray-600 font-[500] text-[15px]' >
    Review
    <span className='text-blue-600 font-[500] text-[15px] ml-1'>
        (14)
    </span>
   </p>
    </div>
    
</div>

</div>
   
  )
}

export default ProductInfoHeader