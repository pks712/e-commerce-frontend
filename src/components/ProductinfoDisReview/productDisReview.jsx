import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse';
import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
const ProductDisReview = () => {
    const [activeTab, setActiveTab] = useState('description');

  return (
    
    <div className=' flex items-center justify-center mx-4'>
    <div className='w-full bg-gray-300 rounded-lg p-4'>
        <div className='flex items-center  '>
 <Button className={`!bg-[#ff5252] !w-[135px] !h-10 !rounded-full !text-white font-[500] hover:!bg-[#61828a] ${activeTab === 'description' ? '!bg-gray-600' : ''}`} onClick={() => setActiveTab('description')}>
Description
 </Button>
 <Button className={`!bg-[#ff5252] !w-[135px] !h-10 !rounded-full !text-white font-[500] !ml-5 ${activeTab === 'review' ? '!bg-gray-600' : ''} hover:!bg-[#61828a]`}  onClick={() => setActiveTab('review')}>
Review
 </Button>

        </div>
<div className='mt-4 p-4 '>
        <Collapse in={activeTab === 'description'}>
          <div className='text-gray-700 text-[18px] font-[400]'>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
        </Collapse>

        <Collapse in={activeTab === 'review'}>
          <div className='flex flex-col'>
            <h2 className='text-[20px] font-[500] text-gray-700'>Add a review</h2>
         <textarea className='border-2 border-gray-500 p-2 rounded-md mt-4 mb-2 w-[700px] focus:border-[#ff5252] outline-none shadow-lg shadow-gray-400 bg-gray-200' rows={4} placeholder='Write your review...'></textarea>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} className='!text-[30px] mt-4'/>
            <Button className='!bg-[#ff5252] !mt-5 !rounded-full !text-white font-[500] hover:!bg-[#61828a] !w-[135px] !h-10'>Submit Review</Button>

          </div>
        </Collapse>
</div>
    </div>
    </div>
  )
}

export default ProductDisReview