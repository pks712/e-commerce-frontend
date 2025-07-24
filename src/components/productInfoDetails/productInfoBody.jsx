import React from 'react'

const ProductInfoBody = () => {
  return (
    <div className='flex flex-col gap-4 mt-4'>
        <div className='mt-2'>
    <p className='text-gray-600 font-[500] flex items-center gap-4 '>
        <span className='text-gray-600 font-[600] text-[18px] line-through'>
              ₹2199
        </span>
        
        <span className='text-[#ff5252] font-[600] text-2xl'>
            ₹1650
        </span>
        </p>
    </div>
<span className='flex items-center justify-center text-green-600 font-[600] text-[11px] w-[65px] h-6 rounded-2xl bg-green-100'>
    IN STOCK
</span>
<p className='text-gray-600 font-[400] text-[15px]'>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p>


    </div>
  )
}

export default ProductInfoBody