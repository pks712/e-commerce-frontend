import React, { useState } from 'react'
import { IoMdHeartEmpty } from 'react-icons/io';

const ProductInfoFooter = () => {

    const [count, setCount] = useState(1);

    const decrease  =()=>{
        setCount(prevCount => { 
            if (prevCount > 1) {
                return prevCount - 1;
            }
            return prevCount; 
        });
    }

    const increase = () => {
        setCount(prevCount => prevCount + 1);
    }

  return (
    <div className='flex flex-col gap-4 mt-4'>
<div className='flex items-center mt-5 text-gray-600 font-[600] text-[15px]'>
    <h2>Size :</h2>
    <div className='flex items-center gap-2 ml-2'>
    <span className='border border-gray-300 rounded-md px-2 py-1 text-gray-600 font-[500] text-[14px] hover:bg-gray-300 '>
        S
    </span>
    <span className='border border-gray-300 rounded-md px-2 py-1 text-gray-600 font-[500] text-[14px] hover:bg-gray-300'>
        M
    </span>
    <span className='border border-gray-300 rounded-md px-2 py-1 text-gray-600 font-[500] text-[14px] hover:bg-gray-300'>
        L
    </span>
    <span className='border border-gray-300 rounded-md px-2 py-1 text-gray-600 font-[500] text-[14px] hover:bg-gray-300'>
        XL
    </span>
    </div>
</div>
<div className='flex items-center gap-4 mt-4'>
    <div className='flex items-center gap-2'>
         <button className='flex items-center justify-center bg-gray-200  hover:bg-gray-400 w-[35px] h-9 rounded-full border border-gray-300 mr-2 cursor-pointer' onClick={decrease}>
         <span > -</span>
        </button>
        <span className='text-[16px] font-[600] text-gray-600 ' > {count} </span>
        <button className='flex items-center justify-center bg-gray-200  hover:bg-gray-400 w-[35px] h-9 rounded-full border border-gray-300 ml-2 cursor-pointer'  onClick={increase}>
            <span>+</span>
        </button>

    </div>
       <div className=' flex items-center justify-center gap-2'>

<button className='flex items-center justify-center bg-[#ff5252] hover:shadow-lg hover:shadow-[#cc6969] text-white w-[250px] h-12 rounded-full  ml-2 cursor-pointer'>
    <span className='text-[16px] font-[600]'>Add to Cart</span>
</button>


 <div className="flex items-center justify-center text-2xl rounded-full w-8 h-8 hover:bg-gray-400 cursor-pointer relative group ml-4 border border-gray-300 bg-gray-200">
                    <IoMdHeartEmpty />
                      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all">
                 Add to Wishlist
                  </span>
                  </div>
                    

       </div>

        
       
    </div>

    </div>
  )
}

export default ProductInfoFooter